---
id: "recommendation-engine"
title: "Content Recommendation Engine"
description: "Collaborative filtering + content-based hybrid recommender system."
status: production
category: ML
completedDate: "2023-11-05"
featured: false
draft: false
tech:
  - Python
  - PyTorch
  - Redis
  - Airflow
  - Spark
metrics:
  - label: "Daily Users"
    value: "1M+"
  - label: "Engagement Increase"
    value: "+40%"
  - label: "Session Duration"
    value: "+25%"
links:
  blog: "#"
relatedProjects:
  - "sentiment-analyzer"
  - "ab-testing-platform"
---

Built a recommendation system combining collaborative filtering, content embeddings, and contextual bandits. Increased user engagement by 40% and session duration by 25%. Processes 1M+ users daily.

## The Challenge

The existing recommendation system had several limitations:

- **Cold start problem**: New users and items had poor recommendations
- **Filter bubbles**: Users were shown increasingly narrow content
- **Stale recommendations**: Batch updates meant missing trending content

## The Solution

I designed a hybrid recommendation system with three components:

### 1. Collaborative Filtering

Matrix factorization for learning user and item embeddings:

```python
import torch
import torch.nn as nn

class MatrixFactorization(nn.Module):
    def __init__(self, n_users, n_items, n_factors=50):
        super().__init__()
        self.user_factors = nn.Embedding(n_users, n_factors)
        self.item_factors = nn.Embedding(n_items, n_factors)
        self.user_biases = nn.Embedding(n_users, 1)
        self.item_biases = nn.Embedding(n_items, 1)

    def forward(self, user, item):
        pred = (self.user_factors(user) * self.item_factors(item)).sum(1)
        pred += self.user_biases(user).squeeze() + self.item_biases(item).squeeze()
        return pred
```

### 2. Content-Based Filtering

Using transformer embeddings for content similarity:

- Article text embeddings via sentence-transformers
- Image embeddings via CLIP
- Combined multimodal representation

### 3. Contextual Bandits

Thompson Sampling for exploration vs exploitation:

- Learns user preferences in real-time
- Prevents filter bubbles through strategic exploration
- Adapts to trending content quickly

## Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   User      │    │   Content   │    │  Context    │
│   History   │    │   Features  │    │  (time,     │
│             │    │             │    │   device)   │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                  │                  │
       ▼                  ▼                  ▼
┌─────────────────────────────────────────────────┐
│            Feature Fusion Layer                  │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│         Ranking Model (LightGBM)                │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
              Top-K Recommendations
```

## Results

- **40% increase** in user engagement
- **25% longer** session duration
- **15% improvement** in click-through rate
- **Serving 1M+ users** daily with < 50ms latency

## Lessons Learned

1. **Hybrid beats single approach**: Each method covers different weaknesses
2. **Real-time updates matter**: Stale recommendations hurt engagement
3. **Diversity is important**: Exploration prevents filter bubbles
