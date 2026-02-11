---
id: "jaffle-shop-dbt"
title: "Jaffle Shop dbt Experiments"
description: "A dbt sandbox for experimenting with LLM-powered data QA and entity resolution."
status: development
category: Data
completedDate: "2025-11-15"
featured: true
draft: false
tech:
  - dbt
  - Amazon Bedrock
  - Redshift
  - Splink
  - Python
  - SQL
links:
  github: "https://github.com/nikicrow/jaffle-shop-niki"
---

## Overview

A dbt project built as a sandbox for experimenting with techniques I'm exploring for work. No fancy frontend here - just pure data engineering and some interesting integrations with LLMs and entity resolution tools.

[View on GitHub](https://github.com/nikicrow/jaffle-shop-niki)

## Why Jaffle Shop?

The classic dbt Jaffle Shop example is perfect for experimentation - it's simple enough to understand quickly but realistic enough to test real-world patterns. I extended it with a fictional "Sandwich Shop" to create scenarios for entity resolution.

## Experiments

### LLM-Powered Data QA

At work, we're going through a massive data transformation project. I wanted to explore using LLMs to help with quality assurance:

- **Amazon Bedrock** for LLM access
- **Redshift Data API** for querying tables
- Have the LLM validate business logic across tables
- Generate automated QA reports
- Ensure data quality as we progress through the transformation

The idea is to catch data issues early by having an AI review the data against expected business rules.

### Entity Resolution with Splink

The second experiment uses **Splink** to create a single view of customer across multiple data sources:

- Jaffle Shop customers
- Sandwich Shop customers (imaginary, of course)
- Fuzzy matching on names, addresses, and other attributes
- Probabilistic record linkage

This mimics real-world scenarios where customer data is fragmented across systems.

I also really wanted to experiment with dbt-python models, but this is a bit tricky because I am hosting my data in postgresql which doesn't support it (and I am too cheap to continue to pay AWS $4.50 per month for redshift serverless elastic ipv4).

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Data Modeling** | dbt |
| **Cloud LLM** | Amazon Bedrock |
| **Data Warehouse** | Redshift |
| **Entity Resolution** | Splink |
| **Languages** | SQL, Python |

## Learnings

This project is helping me prototype ideas before bringing them to production at work. It's much easier to experiment on imaginary jaffle and sandwich shops than on real customer data!
