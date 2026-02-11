---
id: "baby-data-app"
title: "Baby Data App"
description: "A full-stack app for tracking baby data with AI-powered insights and predictions."
status: development
category: AI
completedDate: "2025-10-15"
featured: true
draft: false
tech:
  - React
  - Vite
  - Python
  - Pydantic
  - PostgreSQL
  - dbt
links:
  demo: "https://drive.google.com/file/d/1Zn6tmwO2j5m4HODhpte6v0-Wm9L2SvON/view?usp=drive_link"
  github: "https://github.com/nikicrow/baby-data-app-2025"
---

## Overview

A full-stack application for tracking and analysing baby data - feeds, sleeps, diapers, growth, health, and more. The goal is to use AI to surface insights and predictions that help parents understand their baby's patterns.

[Watch the demo video](https://drive.google.com/file/d/1Zn6tmwO2j5m4HODhpte6v0-Wm9L2SvON/view?usp=drive_link) | [View on GitHub](https://github.com/nikicrow/baby-data-app-2025)

## Why I Built This

Two reasons:

1. **Learning Claude Code**: I wanted a substantial project to really get my hands dirty with Claude Code and understand its capabilities for larger codebases
2. **Solving a real problem**: When I have my next baby, I want to be prepared with proper tooling for tracking data and getting actionable insights

## Architecture

### Frontend
- **Vite + React** for a fast, modern development experience
- Clean UI for quick data entry (essential when you're sleep-deprived with a newborn)

### Backend
- **Python** with **Pydantic** models for type-safe data handling
- Separate models for each data type:
  - Feeds (breast and bottle)
  - Sleeps
  - Diapers
  - Growth measurements
  - Health records

### Database
- **PostgreSQL** for reliable, structured data storage
- Currently running locally - all working smoothly

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Vite, React |
| **Backend** | Python, Pydantic |
| **Database** | PostgreSQL |
| **Data Modeling** | dbt (in progress) |
| **AI** | Coming soon |

## What's Next

The core tracking functionality is complete. Next steps:

1. **dbt integration**: Wrap the PostgreSQL database in dbt for proper data modeling (I've done this in a few smaller projects already)
2. **Data modeling**: Structure the data for AI consumption
3. **AI insights**: Give the LLM structured data and prompts to help predict and analyse baby patterns - when will they likely be hungry? Are they sleeping enough for their age?

## Work in Progress

This project is actively under development. Stay tuned for updates as the AI features come online.
