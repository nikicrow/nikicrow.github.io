---
title: "From Trading Floor to ML Pipelines: Lessons Learned"
slug: "from-trading-floor-to-ml-pipelines"
date: 2025-10-10
category: Career
excerpt: "What trading at Goldman Sachs taught me about building robust machine learning systems."
published: true
tags:
  - career
  - machine-learning
  - finance
  - trading
---

Moving from a trading desk at Goldman Sachs to building ML systems was a bigger transition than I expected, but the lessons from trading have proven invaluable.

## Risk Management Translates Directly

On the trading floor, risk management isn't optional—it's the difference between a career and a cautionary tale. The same applies to ML systems:

- **Know your exposure**: Just as traders track Greeks and VaR, ML engineers need to monitor model drift, feature importance, and prediction confidence
- **Fail gracefully**: Trading systems have circuit breakers; ML systems need fallbacks and monitoring
- **Quantify uncertainty**: Probability isn't just for options pricing—it's essential for production ML

## The Importance of Latency

In high-frequency trading, microseconds matter. While ML systems rarely need microsecond latency, the discipline of thinking about performance, profiling bottlenecks, and optimizing critical paths is essential.

I've seen too many ML projects that work beautifully in a notebook but fall apart in production because no one thought about inference time or memory constraints.

## Production is Everything

Trading systems don't get partial credit for "working in backtesting." They either make money in live markets or they don't. Similarly, ML models that perform well in development but fail in production are worthless.

This mindset shift—from research to engineering, from accuracy on a test set to business impact in production—is crucial.

## Data Quality is Non-Negotiable

Bad data in trading leads to bad trades. Bad data in ML leads to bad models. The discipline of data validation, cleaning, and monitoring that's second nature in finance serves ML engineering extremely well.

## Final Thoughts

The transition from finance to ML wasn't about forgetting what I learned—it was about applying those lessons in a new domain. Both fields require rigor, attention to detail, and a healthy respect for what can go wrong in production.
