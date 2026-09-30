---
title: "Part 2: Can Jev predict when my baby will sleep?"
slug: "baby-sleep-prediction-jev"
date: 2026-09-29
category: AI
excerpt: "I sent my baby sleep data to TypeSafe AI's Jev to see whether it can compete with traditional ML models."
published: true
tags:
  - parenting
  - baby-data
  - machine-learning
  - jev
  - typesafe-ai
---

In [part one](/blog/predicting-baby-sleep-with-tree-models), I turned years of logging my daughters' feeds, nappies and sleeps into a question: **will my baby fall asleep within the next 30 minutes, or within the next 60?** I made a prediction point every ten minutes while Ember or Imogen was awake, built the features in dbt, and trained XGBoost, LightGBM and random forest as my baselines.

The reason I finally got around to doing all that work was [Jev](https://docs.typesafe.ai/introduction), a new model from TypeSafe AI. I wanted to know whether it could compete with traditional ML on data I know very well. And, I obviously wanted an excuse to tinker with a strange new kind of model.

## "We're building prod, not God"

That is the closing line of [TypeSafe AI's manifesto](https://typesafe.ai/manifesto), and I find it kind of amusing. Their argument, as I read it, is that we have spent a lot of time making AI good at talking to humans, while ordinary software needs something it can call for a decision. Jev is their first "System One" model: you send it a state and some typed questions, and it sends back structured answers. It doesn't write you a charming paragraph that you then have to parse and hope is valid JSON.

The output I thought was interesting was a **Noul**. This is TypeSafe's name for the answer to a yes/no question: a number between 0 and 1 representing the model's probability that the answer is yes. If the question is "Will this baby start a sleep in the next 30 minutes?", a Noul gives me the same _kind_ of output as a propensity model. It is a number I can rank, plot and score against what actually happened. TypeSafe [documents Noul here](https://docs.typesafe.ai/primitives/noul).

TypeSafe also [pitches Jev as fast and inexpensive](https://typesafe.ai/blog/introducing-system-one-models-and-jev). The API felt pleasantly lightweight to use: one state, two questions, two numbers back. I wanted to see what that felt like in a real experiment, including the latency, rather than just admire a demo. I got off the early-access wait list quickly and was given free credits, so I put them to work asking Jev about my validation and test rows.

## What I sent to Jev

A tree model can read a row of numerical features. Jev needs a **state**: a description of what was true at the prediction time. My code turned each awake moment into a JSON object with named facts about the baby's age, the time of day, how far she was through her usual wake window and what had happened so far that day. I then sent two Noul questions, one for sleep starting within 30 minutes and one for 60 minutes, with definitions of what counted as yes and no.

Here is one awake moment, in the narrative layout, exactly as it was sent to Jev:

```json
{
  "baby": "21 weeks old (5.0 months)",
  "time_now": "13:10 (afternoon)",
  "current_wake_window": "Awake for 1 h 1 min, since waking from a nap that lasted 1 h 26 min. Her typical wake window over the last two weeks is 1 h 57 min, so she is 52% of the way through a typical wake window.",
  "recent_wake_windows": "Her last three wake windows averaged 2 h 14 min.",
  "today_so_far": "Up for the day for 4 h 55 min; 1 nap so far today totalling 1 h 26 min.",
  "last_night": "Slept 10 h 33 min in total, longest stretch 7 h 33 min, woke once.",
  "sleep_last_24h": "14 h 12 min across 4 sleeps, about her usual daily amount.",
  "feeding": "Last feed started 54 min ago (a 12 min breastfeed). 7 feeds in the last 24 hours, about every 3 h 35 min."
}
```

Admittedly, there was a bit of cheating (or enhancement?) here. I had already looked at which features mattered most to the tree models using shapley values, then used that knowledge to decide what Jev should see. In particular, age, clock time and wake-window progress looked useful. So Jev was _zero-shot_ in the sense that I never trained its weights on my babies' labelled data. The input design, however, benefited from my first experiment with the traditional ML models.

I also did the arithmetic before sending the state. "She is 80% of the way through her typical wake window" is more useful than making Jev work that out from two durations. The docs say that Jev stinks at arithmetic, and that you should process that prior to sending it to Jev. The [state layouts and the questions](https://github.com/nikicrow/dbt-baby-data/tree/main/ml/baby_ml) are in the repo if you want to see exactly what went over the API.

## First comparison: surprisingly close

The first run used short, sentence-like facts. I scored Jev's answers on the **same validation rows** and with the **same metrics** as the three tree models. That made this a comparison of predictions, rather than a few hand-picked examples that looked impressive.

![Validation precision-recall, ROC and cumulative-recall curves for Jev and the three tree models, for sleep starting within 30 or 60 minutes.](/blog/baby_data_jev_model_comparison.png)

_The first Jev comparison on the validation days. Jev is the pink line; the other lines are LightGBM, XGBoost and random forest._

My reaction was: not bad. Really not bad for a model that had never been fitted to Ember or Imogen. The trees did better on the 30-minute question, while Jev was much closer on the 60-minute one. The result was interesting enough that I immediately wanted to know whether I could improve it by changing _how I described the same moment_.

## Four different Jev inputs

I tried four input layouts, each with a different hypothesis:

- **Narrative:** short English sentences, with durations and comparisons already worked out.
- **Numeric:** the same broad facts as raw numbers with units in the field names.
- **Minimal:** just age, time of day, wake-window progress and the day so far.
- **Qualitative:** descriptions such as "near the end of her usual wake window", without the precise measurements.

![Validation precision-recall, ROC and cumulative-recall curves comparing four Jev input layouts with the tree models for both sleep horizons.](/blog/baby_data_jev_diff_input_comparison.png)

_The four Jev input layouts are dashed lines; the tree models are solid lines. The numeric layout loses the most ground, while the minimal layout holds up well._

The difference was bigger than I expected. Giving Jev a long collection of raw numbers was substantially worse than doing the arithmetic first and writing the useful facts down plainly. Going completely qualitative lost some of the precision in the wake-window signal. The minimal version, with only four groups of facts, was at least as good as the longer narrative on validation and used fewer tokens.

That is very interesting. The inputs are not just formatting. They are part of the model. Choosing a representation is an experiment in its own right, much like choosing features or tuning a tree. And because I chose the best layout after looking at validation results, I needed the untouched **test days** for the final comparison.

## Recent data changed the tree comparison

There was another lesson hiding in the test results. A baby's schedule changes quickly. What a baby did as a newborn says rather little about the clock time of her next nap months later. Imogen's wake windows are changing as she grows. For this problem, the newest labelled days can be much more useful than a much larger pile of older days.

I scored the original XGBoost model on the test set, then refitted the same model using both the original training days and the more recent validation days. The test days stayed untouched. XGBoost improved dramatically. It had learnt something important about the babies' _current_ routines that the older training period could not tell it.

![Precision-recall, ROC and cumulative recall curves on the test split for sleep within 30 minutes, comparing XGBoost refitted on training plus validation days with Jev minimal. XGBoost leads clearly, with PR-AUC 0.771 versus 0.509 and ROC-AUC 0.928 versus 0.830.](/blog/baby_data_jev_xgboost_val.png)

![Precision-recall, ROC and cumulative recall curves on the test split for sleep within 60 minutes, comparing XGBoost refitted on training plus validation days with Jev minimal. XGBoost leads again, with PR-AUC 0.906 versus 0.747 and ROC-AUC 0.941 versus 0.843.](/blog/baby_data_jev_xgboost_val_60mins.png)

Against the original XGBoost, zero-shot Jev was remarkably competitive. Against XGBoost refitted with recent data, the tree won clearly. Both statements are true, and I think the second one is especially useful if I ever want to put a prediction in the app: I would need to keep retraining it as the girls grow.

**WINNER: Probably still XGBoost for now**

Is it weird that I am a little relieved that the models I know and love can still win against the latest and greatest AI?

## The familiar problem in unfamiliar clothes

After all this, the lesson feels surprisingly familiar. The algorithm changed, but I still had to make a good dataset, define the label carefully, prevent future information leaking into the features, understand what matters in the data, and keep an honest baseline. With Jev, I also had to decide how to _say_ those features. Feed it everything without thinking and it does worse. Give it the relevant facts in a form it can use and it gets much closer.

That is feature engineering, even if some of the features are now sentences.

I think Jev is an early glimpse of a big shift for data science. A zero-shot model getting this close to models trained on about 20,000 labelled examples of my own babies is wild. I don't think that means we can stop knowing our data. If anything, it makes knowing the data more valuable: someone still has to ask the right question, choose the right information, and check the answer against reality.

I am excited to keep trying models like this on real datasets and real decisions. And I think I know what model I will experiment with next... stay tuned.
