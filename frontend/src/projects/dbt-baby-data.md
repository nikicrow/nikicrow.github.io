---
id: "dbt-baby-data"
title: "DBT Baby Data"
description: "A dedicated dbt project that transforms the raw tracking data from my Baby Data App into clean, analysis-ready tables."
status: development
category: Data
completedDate: "2025-12-01"
featured: true
draft: false
tech:
  - dbt
  - Python
  - PostgreSQL
  - uv
links:
  github: "https://github.com/nikicrow/dbt-baby-data"
relatedProjects:
  - baby-data-app
  - landy
---

## Overview

A standalone dbt project that takes the raw feeds, sleeps, diapers, growth and health data captured by my [Baby Data App](/portfolio/baby-data-app) and turns it into clean, modelled tables - the data backend the app's AI insights will eventually be built on.

[View on GitHub](https://github.com/nikicrow/dbt-baby-data)

## Why a Separate Project?

The Baby Data App's Python backend handles capture and storage; this project handles modelling. Splitting them means the data layer can evolve independently - new staging models, new marts, new tests - without touching the application code.

This is a different project from my old Jaffle Shop dbt sandbox, which was a fictional-data playground for experimenting with LLM-powered QA and entity resolution. This one models real data that actually matters to our family.

## What It Does

- **Staging models** that clean and standardise the raw Postgres tables written by the app
- **Mart-level models** organised per data domain - feeds, sleeps, diapers, growth, health
- Built with **uv** for fast, reproducible Python tooling alongside dbt

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Data modelling** | dbt |
| **Database** | PostgreSQL |
| **Language** | Python |
| **Tooling** | uv |

## What's Next

- Wire the modelled tables up to the AI insights layer in the Baby Data App
- Add tests and documentation as the model layer grows
- Expand marts to support the predictions (sleep and feed timing) the app is aiming for

## Reflections

It's a lot more motivating modelling data that's actually ours than fictional jaffle and sandwich shop orders. This is where the unglamorous but essential data engineering work happens, so the AI features in the Baby Data App have something solid to stand on.
