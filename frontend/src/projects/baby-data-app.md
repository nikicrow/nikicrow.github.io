---
id: "baby-data-app"
title: "Baby Data App"
description: "A full-stack app for tracking baby data with AI-powered insights, self-hosted on a private family tailnet."
status: production
category: DATA
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
  - Tailscale
links:
  demo: "https://drive.google.com/file/d/1Zn6tmwO2j5m4HODhpte6v0-Wm9L2SvON/view?usp=drive_link"
  github: "https://github.com/nikicrow/baby-data-app-2025"
relatedProjects:
  - landy
---

## Overview

A full-stack application for tracking and analysing baby data - feeds, sleeps, diapers, growth, health, and more. The goal is to use AI to surface insights and predictions that help parents understand their baby's patterns, all built on top of a dedicated dbt data modelling layer. It now runs as an installed PWA on our phones, self-hosted on an old laptop and reachable only from devices on our private Tailscale tailnet.

[Watch the demo video](https://drive.google.com/file/d/1Zn6tmwO2j5m4HODhpte6v0-Wm9L2SvON/view?usp=drive_link) | [App on GitHub](https://github.com/nikicrow/baby-data-app-2025) | [dbt layer on GitHub](https://github.com/nikicrow/dbt-baby-data) | [Read the deployment write-up](/blog/baby-tracker-tailnet)

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
- Runs on the same self-hosted server as the app - no managed cloud database

## Infrastructure: A Private Family Tailnet, Not a SaaS Product

The app started out with a conventional cloud deployment - Supabase for Postgres, Vercel for hosting, a CI pipeline talking to a separate Supabase schema. It all worked, but it meant treating the app like a public, multi-tenant product: authentication, authorisation, and all the "which user can see which baby's records" logic that comes with it. For an app with two users, that was infrastructure for a problem I didn't have.

It's now self-hosted instead, deployed to a [Tailscale](https://tailscale.com/) tailnet - a private network (built on WireGuard) connecting only our approved devices:

- an old Fedora laptop (mildly battered, missing an O key, 24GB of RAM) acting as the server, running both the app and its PostgreSQL database
- our phones and laptops, each authorised onto the tailnet

Instead of asking "which authenticated user has permission to access which baby's records?", the app can mostly ask "is this device allowed onto our tailnet?" - which collapses most of the auth surface area away. It's installed as a PWA on our phones, with its own icon, so it behaves like a normal app rather than something that only lives in localhost.

Read the full story: [I Deployed My Baby Tracker to a Tailnet](/blog/baby-tracker-tailnet)

## Data Modelling Layer (dbt)

The app's Python backend handles capture and storage; a dedicated dbt project ([dbt-baby-data on GitHub](https://github.com/nikicrow/dbt-baby-data)) models on top of the PostgreSQL database, turning the raw feeds, sleeps, diapers, growth and health tables into clean, analysis-ready models - the data backend the AI insights are built on.

- **Staging models** that clean and standardise the raw Postgres tables written by the app
- **Mart-level models** organised per data domain - feeds, sleeps, diapers, growth, health
- Built with **uv** for fast, reproducible Python tooling alongside dbt

Keeping the modelling in its own dbt layer means the data engineering can evolve independently - new staging models, new marts, new tests - without touching the application code. It's the unglamorous but essential work that gives the AI features something solid to stand on.

## Tech Stack

| Component          | Technology                  |
| ------------------ | ---------------------------- |
| **Frontend**       | Vite, React (installed as a PWA) |
| **Backend**        | Python, Pydantic             |
| **Database**       | PostgreSQL (self-hosted)     |
| **Data Modelling** | dbt, uv                      |
| **Infrastructure** | Tailscale tailnet, self-hosted on a Fedora laptop |
| **AI**             | Coming soon                  |

## What's Next

The core tracking functionality, the dbt modelling layer, and the self-hosted tailnet deployment are all in place. Next steps:

1. **AI insights**: Give the LLM structured data and prompts to help predict and analyse baby patterns - when will they likely be hungry? Are they sleeping enough for their age?
2. **Wire it together**: Connect the modelled dbt tables up to the AI insights layer
3. **Expand the marts** to support the predictions (sleep and feed timing) the app is aiming for, adding tests and documentation as the model layer grows
4. **Build trust in the data**: still running alongside the old baby tracker app in parallel and cross-checking records before fully switching over

## Work in Progress

The app is deployed and in daily use by our family now, but it's still evolving - AI insights are the next big piece, and there's a backup strategy to sort out before this becomes the single source of truth for the girls' data.
