---
title: "Principals that scale Part 6: Setting up good processes"
slug: "principals-that-scale-good-processes"
date: 2026-01-18
category: Work
excerpt: "How to create processes that make sense, are easy to follow, and evolve over time"
published: true
tags:
  - tech
  - work-culture
---

_This is Part 6 of a 6-part series on principals that scale well. Read [Part 1: Introduction](/blog/principals-that-scale-intro) first._

---

# Principal 5: Setting up good processes

Processes need to make sense and be easy to follow, be there for a good reason, and be well communicated, documented and maintained.

Much like a good code base, its not a one and done. They should always evolve over time as people and requirements change.

---

## 5.1 KISS - Keep it simple stupid

This is a classic software engineering principle that I think applies beautifully to processes.

The more complex a process is, the more likely people are to:

- Not follow it correctly
- Skip steps because they don't understand why they're there
- Avoid using it altogether and do their own thing

**Simple processes get followed. Complex processes get ignored.**

I've seen teams create elaborate 47-step deployment checklists that nobody reads past step 5. I've also seen a simple "run this script, check the dashboard, ping the channel" process that everyone follows religiously.

### What does simple look like?

A simple process doesn't have to be short, but it must be clear and intuitive. Ask yourself:

- Can a new starter follow this on their first day?
- Is there a single source of truth for this process?
- Do I have enough screenshots?
- Are there steps that exist "just in case" but have never actually been needed?

If the answer to any of these is no, it might be time to simplify.

---

## 5.2 Give people a dev environment

This one is close to my heart as a data person. The number of times I've seen dead production pipelines because we don't have a safe place to experiment is a bit ridiculous.

A dev environment (or sandbox, or playground, whatever you want to call it) is a place where people can break things without consequence. It's where they can try out that weird idea, test that risky change, or just poke around and learn.

THIS DOESN'T JUST APPLY TO CODE. You need to give people a safe place to fail when they are learning ANYTHING new. For example, lead a small POC project rather than leading a business critical high profile project when they haven't ever lead a project before.

### Why this matters for processes

If you want people to improve in general, they need somewhere to test and fail safely. If every change has to go straight to production, people will be too scared to change how they approach things or challenge the status quo.

This applies to:

- **Code**: Obviously, have a dev/staging environment
- **Data pipelines**: Have a sandbox schema or database where people can run experimental queries and models
- **Documentation**: Use draft modes or branching so people can suggest changes without fear
- **Even meetings**: Have a "retrospective" or "process review" meeting where it's safe to critique how things are done

The key insight here is that **processes are like code - they need to be iterated on**, and iteration requires a safe space to experiment (and fail sometimes).

## 5.3 YAGNI - You aren't going to need it

Another classic from software engineering. YAGNI stands for "You Aren't Gonna Need It" and it's about not building things until you actually need them.

Applied to processes, this means: **don't create a process for a problem you don't have yet**.

I've seen teams spend weeks designing elaborate parent class structures, complex unit tests for edge cases that are probably impossble, and intricate notification systems for scenarios that have never happened and probably never will. This is all mental overhead, adding complexity to a codebase and time that is disappearing instead of going somewhere impactful and productive.

### The premature process problem

It's tempting to think ahead and plan for every eventuality. "What if we need to handle X?" "What if Y happens?" But every process you create is a process someone has to follow, maintain, and remember exists.

**Every unnecessary process is extra load.**

Start with the minimum viable process. When it breaks (and it will), then you add complexity to handle that specific case. This way you end up with processes that solve real problems, not imaginary ones.

### How to know if you need a process

Ask yourself:

1. Has this problem actually happened more than once?
2. Did the lack of process cause real pain?
3. Will the process actually prevent the problem, or just add steps/work to our day?

If you can't answer yes to all three, you probably don't need that process yet. If you have great thoughts for a process that doesn't need to exist yet, write it down (principal 2 - the written word) and come back to it later.

---

## 5.4 Document the why, not just the what

This is a bonus one because I think it's crucial for processes that scale.

When you document a process, don't just list the steps. Explain why each step exists.

When people understand _why_ they're doing something, they:

- Are more likely to actually do it
- Can make intelligent decisions when edge cases arise
- Know when the process might be outdated (if the "why" no longer applies)

---

## Wrapping up the series

And that's a wrap on this 6-part series on principals that scale!

To recap, we've covered:

1. **Separation of Concerns** - Divide work so experts can focus on what they're good at
2. **The written word** - Documentation and async communication scale infinitely
3. **Balancing teaching vs independence** - Find the right balance for each person
4. **Focus on what not how** - Give ownership over methods, be clear on outcomes
5. **Setting up good processes** - Keep them simple, give people space to improve them, and don't over-engineer

The common thread through all of these? **Trust people, invest in clarity, and don't try to do everything yourself.**

Whether you're scaling a codebase, a team, or your own influence - these principles have served me well. I hope they serve you too.
