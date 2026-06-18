---
id: "landy"
title: "Landy"
description: "An AI agent that sends twice-daily, personalised learning activities for my toddler - built to take the mental load off while I'm on leave with a newborn."
status: development
category: AI
completedDate: "2026-05-01"
featured: true
draft: false
tech:
  - Hermes
  - Codex
  - Telegram
  - Obsidian
links:
  github: "https://github.com/nikicrow/early-learning-lab"
  blog: "/blog/landy-part-1"
relatedProjects:
  - dbt-baby-data
  - baby-data-app
---

## Overview

Landy (**L**earning **and** **D**evelopment) is an AI agent my husband and I built to take the mental load off planning toddler activities while I'm on parental leave with a newborn and a two-and-a-half-year-old who's just come out of daycare. Every day it messages me on Telegram with activity suggestions tailored to exactly where my daughter is at developmentally - no prep-heavy googling, no decision fatigue, just "here's what to do today."

[Read the backstory on the blog](/blog/landy-part-1)

## Why I Built This

My toddler came out of daycare the same week her little sister was born, so she's been home with me full-time ever since. I didn't want her development to stall just because daycare structure disappeared overnight - but I also had zero spare capacity to plan activities from scratch with a newborn attached to me most of the day.

So instead of me doing the planning, Landy does it. It knows her current goals and just tells me what to do, calibrated to however much time and attention I actually have that day.

## How It Works

### The agent

Landy runs as a **Hermes** agent connected to **Codex**, using my existing Codex subscription rather than paying for yet another AI service on top.

### The daily loop, via Telegram

Landy talks to me through **Telegram** so it reaches me wherever I am - no app to open, no dashboard to check:

- **Morning message** - a morning activity and an afternoon activity, picked based on her current goals and whatever's realistic that day.
- **Evening message (~7pm)** - a review of how today's activities went. I give quick feedback, and Landy uses it to plan tomorrow's activities.

This loop runs every day, so the plan is always adjusting to reality instead of an idealised schedule I'd never stick to.

### What it's actually working on

We ran through an extensive questionnaire about her current learning and development goals to set Landy up, covering things like:

- **Letters and early literacy**
- **Manners and emotional regulation**
- **Socialisation**
- **Physical and self-care skills** - putting on her own socks and shoes, getting dressed by herself

Landy tracks all of this over time rather than suggesting random, disconnected activities.

### Memory: the Obsidian vault

Landy's memory lives in an **Obsidian vault**, anchored by a `Soul.md` file plus a handful of other Obsidian-specific notes that track goals, activity history, and what's worked. This is what lets Landy pick up the thread every day instead of starting from zero - it remembers we're close on a goal, that a particular activity was a hit, or that yesterday was a write-off because the baby wouldn't settle.

To keep token costs sane, Landy only pulls the genuinely important snippets into context and searches the rest of the vault on demand rather than loading the whole thing every conversation.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Agent runtime** | Hermes |
| **Model / compute** | Codex |
| **Messaging** | Telegram |
| **Memory** | Obsidian vault |

## What's Next

This is very much a living project:

- **CLI-connected printer** - so Landy can print activity sheets and prompts directly
- **3D printer integration** - we just got one, and I want Landy to be able to design and print things tied to whatever we're working on that day
- **More background agents** - additional agents running alongside the core Landy loop to expand what it can do autonomously
- **A proper frontend** - to track goals over time, log activities, and visualise progress against milestones, instead of living entirely in a chat thread

## Reflections

Landy started as a survival-mode hack and has turned into the most genuinely useful AI thing I've built - not because the tech is exotic, but because it's solving a real, daily problem: keeping a toddler's brain engaged when the parent running the show is sleep-deprived and stretched thin.

[More on how it came about →](/blog/landy-part-1)
