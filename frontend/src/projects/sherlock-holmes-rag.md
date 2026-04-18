---
id: "sherlock-holmes-rag"
title: "Sherlock Holmes RAG Chatbot"
description: "A RAG-powered chatbot for exploring the complete Sherlock Holmes collection."
status: production
category: AI
completedDate: "2024-06-01"
featured: false
draft: false
tech:
  - Python
  - Streamlit
  - Pinecone
  - OpenAI API
  - RAG
links:
  demo: "https://nikicrow-sherlock-holmes-rag-app-ybxqcz.streamlit.app/"
  github: "https://github.com/nikicrow/sherlock-holmes-rag"
---

## Overview

A chatbot built to explore Retrieval Augmented Generation (RAG) using the complete Sherlock Holmes collection as the knowledge base. Ask it anything about the stories, characters, or obscure details from Sir Arthur Conan Doyle's classic detective series.

[Try the live demo](https://nikicrow-sherlock-holmes-rag-app-ybxqcz.streamlit.app/)

## Why Sherlock Holmes?

I'm a massive fan of the original Sir Arthur Conan Doyle series. Since the stories are over 100 years old, they're in the public domain and freely available online. This made them perfect as a corpus for experimenting with RAG - no licensing issues, plenty of rich content, and I actually enjoyed chatting with it about random Sherlock facts.

## How It Works

The app uses RAG to ground the chatbot's responses in the actual text of the stories:

1. **Corpus**: The complete Sherlock Holmes collection, chunked into searchable segments
2. **Vector Database**: Embeddings stored in Pinecone's free tier
3. **Retrieval**: When you ask a question, relevant passages are fetched from the vector store
4. **Generation**: The LLM uses the retrieved context to generate accurate answers

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Streamlit |
| **Vector DB** | Pinecone (free tier) |
| **LLM** | OpenAI API |
| **Language** | Python |
| **Hosting** | Streamlit Cloud |

## What I Learned

This project helped me understand the core mechanics of RAG:

- How to chunk documents effectively for retrieval
- Creating and querying vector embeddings
- The importance of retrieval quality for response accuracy
- Trade-offs between chunk size and context relevance

It's one thing to read about RAG, but building a working system made the concepts click. Plus, I got to nerd out about Sherlock Holmes in the process.
