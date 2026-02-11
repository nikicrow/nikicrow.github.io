---
id: "pauls-email-assistant"
title: "Paul's Email Assistant"
description: "An AI-powered email assistant to help write, summarise, and manage emails."
status: production
category: AI
completedDate: "2024-04-01"
featured: false
draft: false
tech:
  - Python
  - Streamlit
  - OpenAI API
  - GPT-3.5 Turbo
links:
  demo: "https://pauls-email-assistant-1.streamlit.app/"
  github: "https://github.com/nikicrow/pauls-email-generator"
---

## Overview

An AI-powered email assistant built for my dad, who finds writing and reading emails cumbersome. The app helps compose professional emails, summarise lengthy messages, and provides a general-purpose chatbot for drafting documents.

[Try the live demo](https://pauls-email-assistant-1.streamlit.app/)

## The Problem

Email can be a chore for many people:

- Crafting professional-sounding emails takes time
- Long emails are tedious to read through
- Finding the right tone and wording can be frustrating

My dad needed a simple tool to make email communication easier and less time-consuming.

## The Solution

I built a Streamlit app with three core capabilities:

- **Email Writer**: Generate professional emails from simple prompts
- **Email Summariser**: Condense long emails into key points
- **General Assistant**: Help with drafting documents and other writing tasks

The app is powered by custom prompts that capture:

- **His professional role**: Context about his position and responsibilities
- **Communication style**: The tone and manner he uses in emails
- **Industry expertise**: Best practices specific to his area of work

This personalisation means the generated emails sound like him, not a generic AI.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Streamlit |
| **LLM** | OpenAI GPT-3.5 Turbo |
| **Language** | Python |
| **Hosting** | Streamlit Cloud |

## Key Features

- **Simple interface**: Designed for ease of use
- **Email composition**: Natural language to professional email
- **Summarisation**: Extract key points from lengthy emails
- **Multi-purpose chatbot**: Flexible assistant for various writing needs

## Reflections

This was a rewarding project because it solved a real problem for someone I know. My dad used it regularly for his emails after I built it for him. It reinforced how AI tools can be most impactful when they address specific, everyday pain points rather than trying to do everything.
