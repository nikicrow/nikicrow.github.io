---
id: "bible-rag"
title: "Bible RAG Chatbot"
description: "A RAG chatbot for exploring the Bible, with experiments in open source alternatives."
status: production
category: AI
completedDate: "2024-02-15"
featured: false
draft: false
tech:
  - Python
  - Streamlit
  - Pinecone
  - FAISS
  - Ollama
  - OpenAI API
  - RAG
links:
  demo: "https://nikicrow-bible-rag-app-yvwkxd.streamlit.app/"
  github: "https://github.com/nikicrow/bible-rag"
---

## Overview

A RAG-powered chatbot for querying the Bible, built as a follow-up to my Sherlock Holmes RAG project. This time I also experimented with open source alternatives to understand the trade-offs between different vector databases and LLM providers.

[Try the live demo](https://nikicrow-bible-rag-app-yvwkxd.streamlit.app/)

## Why the Bible?

The Bible is a beast of a document - it's massive, well-structured, and extensively documented. This makes it ideal for RAG experimentation because I can easily fact-check what the chatbot returns against established references. If it says something is in Matthew 5, I can verify that quickly.

## Experimentation

Building on the Pinecone-based approach from my Sherlock Holmes project, I wanted to explore open source alternatives:

- **Pinecone**: The managed vector database I used originally - easy to set up, free tier available
- **FAISS**: Facebook's open source vector similarity search library - runs locally, no API costs
- **Ollama**: Local LLM inference - tested as an alternative to OpenAI's API

Comparing these helped me understand when you'd want a managed service versus self-hosted solutions.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Streamlit |
| **Vector DB** | Pinecone / FAISS |
| **LLM** | OpenAI API / Ollama |
| **Language** | Python |
| **Hosting** | Streamlit Cloud |

## What I Learned

This project deepened my understanding of the RAG ecosystem:

- **FAISS** is great for local development and prototyping without API costs
- **Ollama** makes it easy to run open source LLMs locally
- **Pinecone** shines for production deployments where you don't want to manage infrastructure
- The Bible's chapter/verse structure made retrieval quality easy to evaluate
