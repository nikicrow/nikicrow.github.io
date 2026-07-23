---
id: "baby-data-app"
title: "Baby Data App"
description: "A full-stack app for tracking baby data with AI-powered insights, backed by its own dbt data modelling layer."
status: development
category: AI
completedDate: "2025-12-01"
featured: true
draft: false
tech:
  - React
  - Vite
  - Python
  - Pydantic
  - PostgreSQL
  - dbt
  - uv
links:
  demo: "https://drive.google.com/file/d/1Zn6tmwO2j5m4HODhpte6v0-Wm9L2SvON/view?usp=drive_link"
  github: "https://github.com/nikicrow/baby-data-app-2025"
relatedProjects:
  - landy
---

## Overview

A full-stack application for tracking and analysing baby data - feeds, sleeps, diapers, growth, health, and more. The goal is to use AI to surface insights and predictions that help parents understand their baby's patterns, all built on top of a dedicated dbt data modelling layer.

[Watch the demo video](https://drive.google.com/file/d/1Zn6tmwO2j5m4HODhpte6v0-Wm9L2SvON/view?usp=drive_link) | [App on GitHub](https://github.com/nikicrow/baby-data-app-2025) | [dbt layer on GitHub](https://github.com/nikicrow/dbt-baby-data)

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

## Data Modelling Layer (dbt)

The app's Python backend handles capture and storage; a dedicated dbt project ([dbt-baby-data on GitHub](https://github.com/nikicrow/dbt-baby-data)) models on top of the PostgreSQL database, turning the raw feeds, sleeps, diapers, growth and health tables into clean, analysis-ready models - the data backend the AI insights are built on.

- **Staging models** that clean and standardise the raw Postgres tables written by the app
- **Mart-level models** organised per data domain - feeds, sleeps, diapers, growth, health
- Built with **uv** for fast, reproducible Python tooling alongside dbt

Keeping the modelling in its own dbt layer means the data engineering can evolve independently - new staging models, new marts, new tests - without touching the application code. It's the unglamorous but essential work that gives the AI features something solid to stand on.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Vite, React |
| **Backend** | Python, Pydantic |
| **Database** | PostgreSQL |
| **Data Modelling** | dbt, uv |
| **AI** | Coming soon |

## What's Next

The core tracking functionality and the dbt modelling layer are in place. Next steps:

1. **AI insights**: Give the LLM structured data and prompts to help predict and analyse baby patterns - when will they likely be hungry? Are they sleeping enough for their age?
2. **Wire it together**: Connect the modelled dbt tables up to the AI insights layer
3. **Expand the marts** to support the predictions (sleep and feed timing) the app is aiming for, adding tests and documentation as the model layer grows

## Work in Progress

This project is actively under development. Stay tuned for updates as the AI features come online.
