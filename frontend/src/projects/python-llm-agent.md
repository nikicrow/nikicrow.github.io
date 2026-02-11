---
id: "python-llm-agent"
title: "Python Code Assistant Chatbot"
description: "An LLM-powered chatbot for generating Python code snippets using GPT-3.5 Turbo."
status: production
category: AI
completedDate: "2024-05-10"
featured: false
draft: false
tech:
  - Python
  - Streamlit
  - OpenAI API
  - GPT-3.5 Turbo
links:
  demo: "https://nikicrow-python-llm-agent-app-tu6ut6.streamlit.app/"
  github: "https://github.com/nikicrow/python-llm-agent"
---

## Overview

A Python chatbot built using OpenAI's GPT-3.5 Turbo with a custom prompt designed to help generate small Python scripts. This project was created back when Claude was prohibitively expensive, so I opted for OpenAI's more accessible API.

[Try the live demo](https://nikicrow-python-llm-agent-app-tu6ut6.streamlit.app/)

## The Problem

Writing small utility scripts often requires:

- Remembering syntax for common operations
- Looking up library documentation
- Debugging simple errors

I wanted a quick way to generate working Python snippets without constantly searching Stack Overflow.

## The Solution

I built a Streamlit-based chatbot with a custom system prompt tailored for Python code generation. The bot specializes in:

- Generating concise, working Python scripts
- Explaining code when asked
- Suggesting improvements to provided code

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Streamlit |
| **LLM** | OpenAI GPT-3.5 Turbo |
| **Language** | Python |
| **Hosting** | Streamlit Cloud |

## Key Features

- **Conversational interface**: Natural language requests for code
- **Custom prompt engineering**: Optimized for Python code generation
- **Live deployment**: Accessible via Streamlit Cloud
- **Quick iterations**: Fast response times with GPT-3.5 Turbo

## Reflections

This was an early exploration into LLM-powered developer tools. Looking back, it's interesting how much the landscape has changed - models have become more capable and more affordable. This project served as a great learning experience for prompt engineering and deploying AI applications.
