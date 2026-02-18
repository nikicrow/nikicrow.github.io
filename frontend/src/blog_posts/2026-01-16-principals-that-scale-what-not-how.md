---
title: "Principals that scale Part 5: Focus on what not how"
slug: "principals-that-scale-what-not-how"
date: 2026-01-16
category: Work
excerpt: "Why focusing on outcomes rather than methods helps you scale"
published: true
tags:
  - tech
  - work-culture
---

_This is Part 5 of a 6-part series on principals that scale well. Read [Part 1: Introduction](/blog/principals-that-scale-intro) first._

# Principal 4: Focus on what not how

When you focus on the outcome and not the method, you are investing your time into making the task more clear to the 'do-er' so they can do what they need to do without as much of your time.

You are also giving them freedom to do things their way and learn from doing it themselves.

Being very prescriptive about how something should be done is going down the route of micro management. This is both annoying for your do-er and also a time drain for you.

---

## Finding the balance

I am sometimes more skilled in an area of work I have delegated to someone else, and if I see a big gap in their knowledge and have time to teach them better, I will try to do so.

But, it's important to give people ownership to do things their way. It makes them feel more invested in the success of the thing they delivered. And the more invested they are, the less invested you need to be.

It also may mean they have to learn the hard way why their way was not going to work. If you have time to help them learn that, then let them. They will hopefully learn the lesson much more efficiently that way.

**The caveat: don't compromise on what they must deliver.** By focusing on the what, you can give feedback on misinterpretations of the task itself, which is not really their fault, its yours for being unclear. This makes them trust you more to respect their work and helps you not be a micromanager (which by the way is not v scalable).

---

## Example: The Feature Store

Let me demonstrate this principal with an example of where I think this worked: the feature store built by the MLOps pod at the time which I lead.

**The problem:** I wanted a series of tables built in a clear and repeatable pattern to build machine learning features for several different ML models we have in production.

**My non-negotiables:**

We needed at least 36 months history for these 200 or so features structured in these tables.

- They must be quick and reliable to build
- They must be idempotent, ideally incremental
- The pattern must be easy to understand, to teach, and quick to implement

I was on vacation for a week or so, so I gave my pod this list of requirements and said come up with a pattern and show me an example when I get back.

### The outcome

When I came back they had experimented with a few different patterns and basically narrowed it down to two options of which I checked and helped them choose one.

The requirements were clear and well defined and made the decision easier for the pod. I could trust that they were heading the right direction as long as they understood the requirements of the task correctly.

In the end we got a great solution (the incremental merge strategy - what a beaut dbt), and I learnt from how they did it!

Next up we have the final principal (until I think of more) - [Part 6: Setting Up Good Processes](/blog/principals-that-scale-good-processes)
