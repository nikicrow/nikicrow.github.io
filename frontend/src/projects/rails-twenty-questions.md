---
id: "rails-twenty-questions"
title: "Twenty Questions AI Bot"
description: "A Ruby on Rails app where kids can play 20 questions against an AI."
status: production
category: AI
completedDate: "2024-04-01"
featured: false
draft: false
tech:
  - Ruby on Rails
  - OpenAI API
  - Authentication
links:
  github: "https://github.com/CrowBe/rails_twenty_questions_ai_bot"
---

## Overview

A collaborative project with my husband - a full-stack Rails app where users can play the classic game of 20 questions against an AI opponent. We built it for my nephews to have a fun way to play the game anytime.

[View on GitHub](https://github.com/CrowBe/rails_twenty_questions_ai_bot)

## The Story

My husband is a full-stack software engineer who's particularly fond of Ruby on Rails. He wanted to show me how quickly you can spin up a real, production-ready app with Rails. So we decided to build something fun together - a twenty questions game powered by an LLM.

The app includes proper authentication so each of my nephews can have their own account and play against the AI bot.

## How It Works

The classic 20 questions format:
- Think of something (person, place, or thing)
- The AI asks yes/no questions to try to guess what you're thinking of
- It has 20 questions to figure it out

The OpenAI LLM powers the AI's questioning strategy, making it surprisingly good at narrowing down the possibilities.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Backend** | Ruby on Rails |
| **LLM** | OpenAI API |
| **Auth** | Rails authentication |
| **Language** | Ruby |

## What I Learned

This project was a great introduction to Rails development:

- Rails really does make it fast to build authenticated web apps
- Working with my husband on a shared codebase was a fun experience
- Integrating LLMs into traditional web frameworks is straightforward
- Building something for family members to actually use adds extra motivation
