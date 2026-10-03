---
title: "Part 3: Can Kumo Tabular predict when my baby will sleep?"
slug: "baby-sleep-prediction-kumo"
date: 2026-10-02
category: AI
excerpt: "NVIDIA's Kumo Tabular gets surprisingly close to XGBoost on my baby sleep data, but it also takes 5 mins per label on my basic CPU laptop."
published: false
tags:
  - parenting
  - baby-data
  - machine-learning
  - kumo
  - nvidia
---

In [part one](/blog/predicting-baby-sleep-with-tree-models), I turned my daughters' feeds, nappies and sleeps into a dataset and trained XGBoost, LightGBM and random forest to answer two questions: **will my baby start a sleep within the next 30 minutes, or within the next 60?** In [part two](/blog/baby-sleep-prediction-jev), I asked TypeSafe AI's Jev the same questions to see whether a zero-shot model could compete.

A new wave of tabular LLMs are emerging, and this, I think, is where it gets super cool for ML people like me.

This time we test [Kumo Tabular](https://huggingface.co/nvidia/Kumo-Tabular), NVIDIA's new tabular foundation model on Hugging Face. And it gets very close to XGBoost! Provided I give it recent examples. But it is also a bit much for my computer.

## What does Kumo actually do?

Kumo takes labelled rows as **context**, plus new rows whose answers are unknown, and returns predictions. For classification, those are class probabilities. Its weights are already pretrained; I don't train them on my baby data before asking for predictions. The [model card has a short example](https://huggingface.co/nvidia/Kumo-Tabular).

That makes it interesting for propensity modelling: estimating how likely someone is to buy, churn or do something else. Here we are trying to use my manually logged data to predict whether my baby will nap in the next 30 mins and 60 mins. The output is a probability I can rank and check against what happened.

The in-context part matters. Jev's zero-shot experiment used descriptions of the current situation. Kumo gets examples of situations **and their labelled outcomes**. It can use my own data without fitting a new set of weights for this task.

### How does a table become tokens?

Kumo is a transformer designed for tables. Groups of cells become tokens: numerical and categorical values are encoded using learned sine and cosine features, with special handling for missing values. Attention looks down columns to understand their distributions and across rows to capture feature interactions. Each row is compressed into a representation; a final transformer relates new rows to the labelled context and produces predictions. This is structured table tokenization, rather than writing every row as a sentence in a chat prompt. NVIDIA explains the architecture in its [launch article](https://huggingface.co/blog/nvidia/kumo-tabular).

The context is a bit like a collection of worked examples. It helps with the current predictions; it doesn't permanently teach the model about sleeping babies. NVIDIA's [API documentation](https://nvidia.github.io/structured-data-models/api/generated/sdm.models.KumoTabular.html) describes how the row and column encoder feeds the in-context transformer.

## Recent examples make all the difference

I tried context drawn from historical training data, and context that included the more recent labelled validation rows. The rows being scored remained held out. Using validation labels as context makes them part of the information available to the model, just as refitting XGBoost on training plus validation does.

The historical examples were much less useful. When the context contained recent rows, Kumo did considerably better.

This is very familiar from the XGBoost experiment. Babies change quickly. A wake window that made sense a few months ago can be completely irrelevant now. More data is great, but if the data mostly describes a routine my baby has already grown out of, it doesn't answer today's question very well.

So the interesting result here is partly about Kumo and partly about **which examples I give it**. In-context learning doesn't remove the need to understand the data. Choosing the context is another modelling decision.

## So, how close did it get?

![Validation precision-recall, ROC and cumulative-recall curves comparing Kumo small, the four Jev input layouts and the three tree models for sleep starting within 30 or 60 minutes. Kumo small scores PR-AUC 0.537 and ROC-AUC 0.823 at 30 minutes, and PR-AUC 0.718 and ROC-AUC 0.818 at 60 minutes, behind XGBoost and LightGBM on both horizons.](/blog/baby_data_kumo_comparison.png)

<!-- Replace the placeholder with the final recent-context comparison chart. The existing baby_data_kumo_comparison.png shows validation results and is not the chart for the scores in this table. -->

For the 30-minute question, Kumo using only historical training context was around **0.43**, compared with about **0.48** for the original XGBoost model. Zero-shot Jev was around **0.51**. Jev didn't use labelled training or validation rows as context, although I had selected its input layout using validation performance, as I explained in part two.

That makes Jev competitive with the older-data versions of the other models. Once recent labelled data is available, XGBoost and Kumo both pull ahead.

Kumo comes remarkably close to the refitted XGBoost on the 30-minute question, and does well on the 60-minute question too. It doesn't outperform XGBoost in this comparison. LightGBM and random forest are still useful baselines from part one, but the refitted XGBoost is the recent-data benchmark here; I wouldn't treat their earlier validation scores as interchangeable with these held-out results.

I find this quite interesting. A pretrained model can use examples of my babies and get close to a model specifically fitted to them. But the tree based models still win (with basically no feature modifications).

## The probabilities are a bit too enthusiastic

The weak spot was calibration. Kumo's average predicted probability was substantially higher than the observed rate of sleep starting, with a larger gap than the other models in my runs.

The actual base rate comes from the labels; the model doesn't change it. What it changes is the probability it assigns. Mine was rather optimistic about how much sleeping was about to happen.

There is a difference between ranking the most likely nap moments well and giving me probabilities I can take literally. A model can do the first while being poor at the second. If I eventually put this in the app, I want “80% likely” to mean something useful, especially if I am organising my own day around it.

For propensity models at work, this matters too. Sorting customers by score and estimating how many will convert are different uses of the same output. A good PR AUC doesn't settle the calibration question.

## My laptop sharted though

My very lightweight laptop has **16 GB of RAM and runs this on CPU**. In this setup, Kumo took roughly **three to five minutes per label prediction**, with about **4,000 labels in the test set** to score.

That is a lot of waiting to find out whether a baby will sleep in the next 30 minutes. Obviously I won't be able to run the model on my laptop and serve that to the app...

With a much beefier computer and a suitable GPU, I would be interested in trying it again. It's possible that my ec2s from work will be able to run this more efficiently. What I have measured is enough to say that this version of the experiment isn't practical on my current machine.

## What about really imbalanced data?

This is the bit I keep thinking about for work. A lot of my modelling problems are very imbalanced: there are many, many negatives for every positive.

If I can only afford to put a limited number of examples in context, how many useful positives will a random sample contain? At a positive rate of 0.1%, a random context of 1,000 rows has only one positive on average. That doesn't give the model many examples of the thing I actually care about.

I don't think that proves Kumo can't handle imbalanced data. It means context selection becomes important. Sampling extra positives might provide more examples, but it also changes the class balance the model sees, which gives me another reason to check calibration against the real population.

The context isn't necessarily tiny: NVIDIA reports a final pretraining stage extending to 60,000 rows. But a larger context still has to fit and run on the hardware available. I haven't tested extreme imbalance here, so this is a question for another experiment, rather than a conclusion from the baby data.

## Am I replacing XGBoost?

**WINNER: Still XGBoost for now.**

Kumo Tabular is a very interesting alternative. The recent-context results are strong, and being able to give a pretrained model labelled examples without retraining its weights is compelling. I can see why that could be useful when trying a new propensity question.

But for this dataset, on this computer, it hasn't given me a reason to replace the trees. XGBoost performs better in the recent-data comparison, and Kumo's runtime and calibration both need more attention than I can ignore.

I am still excited about zero-shot and in-context approaches to tabular prediction. I just wouldn't go crazy replacing existing models yet, particularly for the huge, complex, very imbalanced datasets that turn up in my work.

The most useful lesson from this series so far is: the problem is ultimately still feature engineering and giving your model the most relevant data to the problem. Which was always the problem.
