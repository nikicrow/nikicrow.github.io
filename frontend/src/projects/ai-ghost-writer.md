---
id: "ai-ghost-writer"
title: "AI Ghost Writer"
description: "A collaborative fiction writing tool that helped my mum and I write a thriller novel."
status: production
category: AI
completedDate: "2024-03-01"
featured: false
draft: false
tech:
  - Python
  - Streamlit
  - OpenAI API
  - GPT-3.5 Turbo
links:
  demo: "https://nikis-ai-ghost-writer.streamlit.app/"
  github: "https://github.com/nikicrow/llm-ai-ghost-writer"
---

## Overview

A collaborative fiction writing tool I built to help my mum and I write a thriller novel together. The app takes your existing manuscript, learns your writing style, and generates new chapters that maintain consistency with your characters and plot.

[Try the live demo](https://nikis-ai-ghost-writer.streamlit.app/)

## The Story Behind It

One day, inspired by my little sister having eye surgery, my mum and I had a random idea: what if we wrote a thriller about a woman who starts seeing ghosts after receiving an eye transplant?

My mum had some pretty wild ideas involving Russian spies and elaborate plot twists. My job was to wrangle these into a coherent summary and generate the story one chapter at a time. We got about 8 chapters in before the combination of context window limits and my mum's increasingly creative plot directions made it difficult for the AI to maintain a coherent narrative.

## How It Works

The app uses a few key techniques:

- **Style mimicry**: I wrote the first chapter by hand to establish the voice and tone, which the AI then used as a reference
- **Character consistency**: The prompts include character descriptions and relationships
- **Plot guidance**: We'd outline how we wanted the story to unfold, and the AI would flesh it out
- **Iterative generation**: One chapter at a time, feeding previous chapters as context

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Streamlit |
| **LLM** | OpenAI GPT-3.5 Turbo |
| **Language** | Python |
| **Hosting** | Streamlit Cloud |

## Lessons Learned

The main limitation we hit was the context window. Around chapter 8, the AI started losing track of earlier plot points and character details. A future enhancement would be to add automatic summarisation of earlier chapters to keep the context manageable while preserving key story elements.

## The Novel

Interested in reading a thriller about ghost-seeing eye transplants and Russian spies? I may post the story in a blog post for those curious to see what collaborative human-AI fiction looks like.
