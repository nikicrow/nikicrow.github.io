---
title: "Can I predict when my baby will fall asleep?"
slug: "predicting-baby-sleep-with-tree-models"
date: 2026-09-21
category: Parenting
excerpt: "I turned two babies' feeds, nappies and sleeps into 28,000 awake moments to see whether a model can tell me when the next nap is coming."
published: true
tags:
  - parenting
  - baby-data
  - machine-learning
  - dbt
  - sleep
---

When Ember was born, my husband Ben and I were so sleep deprived that we couldn't remember when she had last fed. So I made a spreadsheet, which became an app, which is now deployed on our home server in our tailnet.

I wrote about [how the data collection started](/blog/baby-data-analysis), then shared some of my first charts on [breastfeeding](/blog/baby-data-records-breasfeeding) and [sleep](/blog/baby-data-records-sleeping). Back then, I was mostly interested in seeing what had happened and looking at pretty charts. But it was always the plan to make a predictive model once I had more data and time.

The TLDR is that I now have a lot of baby data. I recorded Ember's data for a year, and I've recorded everything for Imogen, who is coming up to six and a half months old. Every feed, nappy and sleep has been entered MANUALLY into an app. This is precious data to me, even if a large portion of it is about poop.

The [Baby Data app](https://github.com/nikicrow/baby-data-app-2025) is in one repo, and its [dbt backend](https://github.com/nikicrow/dbt-baby-data) is in another. The data lives in PostgreSQL on our server laptop: an always plugged in machine with 24 GB of RAM and a broken O key, courtesy of our dog stepping on it. Ben and I can use the app from our phones and laptops through our five-device Tailscale network (that's all the free tier allows). I wrote more about [how we ended up with a private family cloud](/blog/baby-tracker-tailnet) in an earlier post.

## So what can we predict with this data?

Of all the things a parent could predict, sleep is the most compelling. As a parent, "Will my baby fall asleep soon?" is paramount. I decided to make two models: one for whether a sleep will start within the next **30 minutes**, and another for whether it will start within **60 minutes**.

I already use the data to make this sort of prediction in my head. If Imogen is near the end of her usual wake window, I think she might be ready for a nap. Sometimes I act on that and try to settle her; sometimes she just conks out. That makes this an interesting modelling problem, but also a slightly self-fulfilling one. The data reflects both what my baby does and the decisions I make after looking at it.

In my [earlier sleep article](/blog/baby-data-records-sleeping), I looked at how Ember's wake windows changed as she grew. This is the next step: can a model use her recent history, and Imogen's, to estimate whether a nap is imminent?

## Turning baby logs into a training set

A sleep log gives me a few thousand events. A prediction model needs examples of moments when I _could_ ask the question. So the dbt ML layer takes a snapshot every ten minutes while each baby is awake. At each snapshot, it asks: **when did the next sleep start?**

If that start is within 30 minutes, the 30-minute label is 1. If it is within 60 minutes, the 60-minute label is 1. Otherwise the relevant label is 0. The distinction matters: I'm predicting the _start_ of a sleep, rather than whether the baby happens to be asleep at the end of the window. A short nap that starts five minutes from now should count as a yes.

Those ten-minute snapshots expand the data to about **28,000 prediction points** across Ember and Imogen. The [label and prediction point definitions](https://github.com/nikicrow/dbt-baby-data/tree/main/baby_data/models/ml) are open source if you want to see exactly how they work. The pipeline keeps awake moments with enough history to build features and enough future data to know the answer. It also removes long gaps that are more likely to mean missing tracking than a baby staying awake for six hours.

The features are built in dbt too. They describe what was knowable _at that moment_: how long the baby has been awake, how much she slept in the previous 24 hours, how long since her last feed or nappy change, and how many feeds she has had recently, among other things.

I also split the data by **whole days**, because snapshots ten minutes apart are almost duplicates. Putting one in training and the next in validation would give me a very flattering, very misleading result. My main split moves forward in time for each baby: earlier days for training, then later days for validation and testing. That is closer to the real use case, where I want to predict tomorrow using what I know today.

## First up: the tree models

I started with three familiar models: **XGBoost, LightGBM and random forest**. These are models I know from work, and they give me a useful baseline.

![Bar charts comparing LightGBM, XGBoost and random forest precision-recall AUC on validation days for sleep starting within 30 and 60 minutes. All three exceed the respective base rates.](/blog/baby_data_traditional_model_outputs.png)

_Validation performance for the three tree models. The dashed lines show the base rate for each question. Higher precision-recall AUC is better._

Here are the full validation metrics. Each model was evaluated on the same **4,390 awake moments**. Lower Brier scores are better; the base-rate Brier score shows what we would get by assigning the same probability to every moment.

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table style="border-collapse: collapse; min-width: 900px; width: 100%; font-size: 0.85rem; font-variant-numeric: tabular-nums;">
<thead><tr><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Sleep starts within</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Model</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Split</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Rows</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Base rate</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">PR AUC</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">ROC AUC</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Brier</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Brier at base rate</th><th scope="col" style="border-bottom: 2px solid #7c6f64; padding: 0.55rem 0.45rem; text-align: left; white-space: nowrap;">Mean predicted</th></tr></thead>
<tbody>
<tr><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">30 minutes</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">LightGBM</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">val</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">4,390</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.222</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.567</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.850</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.138</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.173</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.311</td></tr>
<tr><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">30 minutes</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">XGBoost</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">val</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">4,390</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.222</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.582</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.853</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.136</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.173</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.301</td></tr>
<tr><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">30 minutes</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">Random forest</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">val</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">4,390</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.222</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.520</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.838</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.139</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.173</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.310</td></tr>
<tr><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">60 minutes</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">LightGBM</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">val</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">4,390</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.426</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.774</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.865</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.162</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.245</td><td style="border-top: 2px solid #a69b90; border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.545</td></tr>
<tr><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">60 minutes</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">XGBoost</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">val</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">4,390</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.426</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.773</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.865</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.163</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.245</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.548</td></tr>
<tr><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">60 minutes</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">Random forest</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">val</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">4,390</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.426</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.761</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.859</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.165</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.245</td><td style="border-bottom: 1px solid #d8d0c8; padding: 0.5rem 0.45rem; white-space: nowrap;">0.534</td></tr>
</tbody>
</table>
</div>

I was hoping they would do reasonably well, because the data feels predictive when I use it as a parent. And they do! On the validation days, the 30-minute models have precision-recall area under the curve scores of about **0.52–0.58**, compared with a positive rate of **0.22**. For the 60-minute question, they score about **0.76–0.77**, compared with a positive rate of **0.43**. The 60-minute question is easier, which makes intuitive sense: it gives the baby more time to fall asleep.

These results tell me there is a useful signal here. They don't tell me that an app should announce, with great confidence, that Imogen will be asleep in precisely 27 minutes. Babies are still babies, and I'm still one of the people influencing when nap time happens. But the models are doing considerably more than guessing from the overall rate of sleep.

## What's next?

The reason I finally built this training set is that I want to experiment with [Jev, a model from TypeSafe AI](https://docs.typesafe.ai/introduction). Could it be used for this kind of problem? Could this type of LLM transform the types of models I use in my work?

That comparison is for the next article...
