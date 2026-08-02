---
title: "Two Sisters, One Database"
slug: "two-sisters-one-database"
date: 2026-07-21
category: Parenting
excerpt: "A full-stack app I built on parental leave to compare a year of one daughter's data against the whole life of the other — and what it's been like to actually look at it."
published: true
tags:
  - full-stack
  - dbt
  - fastapi
  - pydantic
  - react
  - supabase
  - vercel
  - parental-leave
---

I've spent a good chunk of the last month on a project that has nothing to do with my job and everything to do with the skills I use there. **[App name]** is a full-stack app I built to track and compare the data I've collected on my two daughters — Ember's first year, and Imogen's life so far — and after a lot of nap-times and evenings, it's roughly ninety percent of the way to being a real, deployed application.

## Why build it

Every parent of two has said some version of it to me: *my second was such a better sleeper*, or *my first was on the boob for hours every night*. And every time, the data person in me wants to ask — how do you actually know that? Is that a feeling, or do you have the numbers to back it up?

Because for me, those are two completely different stories pulled from the same night. How I *feel* a night went and what the data says about that night compared to the ones before it often don't line up at all. A rough-feeling night can be objectively better than last week; a night I'd call a win can be flat when I look at the trend. I didn't want my feelings getting in the way of an honest judgment about how a night actually went, or whether naps are really improving. As a data person, I wanted it grounded in data.

When Ember was born I recorded almost everything: nappies, sleep, feeds, day after day, for a whole year. This time around I'm doing the same for Imogen. I had all this data sitting there and no good way to actually *look* at it — let alone put the two girls side by side. So I built the thing I wished existed: an app, custom-made for exactly one family, that turns years of half-asleep logging into something I can explore.

To me, this data is gold. We treasure photos of our babies, and rightly so — but I have another kind of record that's just as precious: the ability to relive it moment to moment, every feed, every nappy change, every nap, across two whole childhoods, and to hold the two of them up against each other. I poured time into logging it every single day, and I wanted to do something big with it — something worthy of how much it means to me.

And here's where I show my hand: deep down, I'm a SQL girl. To a frontend or software developer, bolting a full database onto an app like this probably looks excessive. For me it was non-negotiable. I want to be able to SQL my way around my own data and dig for insights in a way I simply can't in any other language — and then surface what I find through Python visualisations. The database isn't overkill; it's the whole point.

The heart of it is a comparison page. I can line up the two of them at the same age and look at time awake at night, how many times we had to feed overnight, feeds per day, and how long each feed actually took. It has been, in about equal measure, encouraging and disheartening. Seeing our night wakings shrink and feeds get more efficient is a genuine lift on a hard morning. Seeing a stretch where it got *worse* is a bit of a gut-punch. But it's honest, and it's ours.

My favourite thing to watch is feed efficiency. Imogen feeds noticeably faster than Ember did at the same age <!-- drop in the real figure here, e.g. "X minutes vs Y" -->, and being able to see that pattern hold across weeks — rather than just half-remembering it — is exactly the kind of thing I built this for.

<!-- screenshot: comparison page -->

## Why now (and not in 2023)

I first started this project back in 2023, pregnant with Ember. Back then I hand-coded a full-stack Django app for it — every single line, following tutorials, an enormous amount of effort — and it stayed pretty basic. I didn't get anywhere near as far as I have this time.

The difference is AI, and it's a big part of why I picked the project back up. Beyond keeping my dbt and data skills sharp, I wanted to properly test the new AI tooling — much of this has been built with Claude Code, leaning on connectors, skills, and all the pieces I need to stay on top of to stay relevant in this industry. It's been both a motivation and a multiplier.

And what a multiplier. Going from an idea to working, deployed code is so fast now that hand-coding every line in 2023 feels like a different era. I've been seriously unlocked: I can move quicker, deploy sooner, and iterate on something real instead of grinding through boilerplate. With data this precious sitting there, there's no excuse not to build something cool with it. That's what AI has handed me on mat leave — and I intend to keep building cool things, simply because now I can.

## The stack

This started as a data problem and grew into a proper full-stack app, so the architecture reflects that journey. I also gave myself one hard rule up front: **free tiers only**. This is a learning project, not something I expect to grow into a big application other people use — it exists so the data I've poured myself into logging becomes something insightful I can look back on. Staying inside free tiers kept it honest, and it made every architectural choice a real constraint to design around rather than a problem I could throw money at.

The source of truth is a **Supabase** (Postgres) database. On top of it, I use **dbt** to build all the transformations — turning raw logged events into the clean, modelled tables the app actually reads from. The part I'm proudest of is the **CI pipeline** running against the Supabase data: dbt tests and builds run automatically, so I'm not shipping broken models into something my sleep-deprived self relies on at 3am. Getting a real CI workflow running on a personal project, on my own schedule, has been one of the most satisfying pieces of the whole thing.

The backend is **Python with FastAPI**, and every data model is wrapped in a **Pydantic** class. That means the shapes flowing between the database, the API, and the frontend are validated and typed end to end, which has saved me from a lot of silly mistakes and made the API genuinely pleasant to extend.

The frontend is **Vite and React**, and I'm in the middle of deploying both the frontend and backend to **Vercel**, pointing at Supabase. Tabs are coming together, and I've built an ingestion pipeline to move Imogen's new data in as I keep logging it — so the app stays live rather than being a one-off snapshot.

## Where it's at

I'd put it at about ninety percent. The remaining work is mostly finishing the Vercel deploy of the front and back ends, getting the last of the tabs wired up, and hardening the ingestion pipeline so new data flows in cleanly. Not glamorous, but it's the difference between a demo and something I'll actually open every week.

## Why it's mattered

Being on leave with two small people doesn't leave much room for the kind of work I love. This project has been a way to keep my hands in it — dbt, a real CI pipeline, FastAPI, Pydantic, a React frontend, a proper deployment story — while building something that means something to me personally rather than just to a business. It's the first time I've taken a project all the way from a messy pile of data to a deployed full-stack app entirely on my own terms.

It's also been the perfect learning ground for my still-newish role as a machine learning engineer. Wiring up CI/CD properly, building a database from scratch, and learning the full-stack pieces hands-on — these are exactly the skills I want to be sharpening, and doing it on data I care this much about has made every hour of it stick.

Mostly, though, it's just lovely to be able to look at my two girls in data and see both of them growing. More once it's fully deployed.
