---
title: "Principals that scale Part 2: Separation of Concerns"
slug: "principals-that-scale-separation-of-concerns"
date: 2026-01-11
category: Work
excerpt: "How dividing work into distinct sections helps you scale"
published: true
tags:
  - tech
  - work-culture
---

_This is Part 2 of a 6-part series on principals that scale well. Read [Part 1: Introduction](/blog/principals-that-scale-intro) first._

# Principal 1: Separation of Concerns

This is an interesting one that I have borrowed (at least conceptually) from a software design strategy.

Google AI explains it as:

> A software design strategy that involves dividing a system into distinct sections, with each section handling a specific, separate functionality. This makes code more organized, easier to read and maintain, and more adaptable to change by isolating different types of work and reducing complexity.

So what does this have to do with scaling?

## The Cooking Analogy

First, for the non coders, let me demonstrate how this works and the pros and cons with a slightly weird example that I came up with when making dinner the other day.

Let's say you are making satay chicken wraps (which is what I was actually making). There are a few ways to make wraps, even if you have four ingredients as I did; satay chicken (marinated by yours truly), carrots, zucchini and onion.

You can choose to chuck them all in a wok or frypan and cook it all together. This is fast, delicious, and you only have 1 pan to clean up and can easily house leftovers in 1 container.

Now let's say now you have a few fussier members of the family, and you don't want to risk them deciding arbitrarily that they don't like carrots and therefore won't touch any of the meal, or they don't like the satay sauce and it's covered everything. Let's say also, you want to efficiently make shephards pie for dinner and can reuse left over cooked carrot, zucchini and onion but only if its not satay flavoured.

Now there is a good argument for separating each of our ingredients and cooking them seperately, or cooking the ones that are most similar by cooking time e.g. carrot and onion by cooking them together, but everything else individually.

### The trade-offs

This has pros and cons. Cooking things seperately is more work for one cook like me. It is also more washing up - more pans and containers e.t.c.

But now let's say I am a chef in an industrial restaurant and want to as efficiently as possible cook many dishes at great quantities. I am in a large team of chefs. Now this starts to make sense to have a zucchini specialist, carrot specialist, chicken satay specialist and so on. Each chef improves in cooking their own special thing. There are coordinators that combine cooked ingredients to create the final dishes.

Now we are cooking with gas! This is the beauty of scale that separation of concerns unlocks for us.

---

## A More Tangible Example: Sub-agents in AI

AI workflows are increasingly moving toward using multiple AI agents that each have a separate role to play when handling a complex task.

For example, you ask Claude to write some code to create a lovely new website for you. Claude under the hood is activating a technical writer to create a document to describe what kind of website we are aiming toward. Claude then engages another sub-agent that is a project manager that splits this up into small AI friendly tasks. Claude then engages yet another sub-agent to pick up the first task and start actually coding. Once we finish coding, a code review agent looks at the code and decides whether we have done what we set out to do, then sets tasks for the coding agent or passes it back to the project manager agents... and so on.

Why make it so complicated and split one job between so many sub-agents?

### Why this scales

For one task, having 5 people involved feels a bit overkill, but when we want to SCALE it becomes a very good idea.

Each sub-agent becomes an expert at their own little jobs. The project managers 'concern' ends when the project management is finished and they have handed things off to someone else who is an expert at what they do.

Does this feel like a very functional team of efficient and specialised people rather than a single person who only experiences 24 hours a day being a jack of all trades?

**This is a principle that scales well!** Rather than telling one person to do a task, it is better to have a team of specialised experts in their own fields.

Next up - [Part 3: The Written Word](/blog/principals-that-scale-written-word)
