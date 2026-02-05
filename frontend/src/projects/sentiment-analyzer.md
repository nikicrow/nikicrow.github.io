---
id: "sentiment-analyzer"
title: "Real-time Sentiment Analysis API"
description: "Production API serving 10M+ requests/month for financial news sentiment analysis."
status: production
category: ML
completedDate: "2024-06-15"
featured: true
draft: false
tech:
  - Python
  - PyTorch
  - FastAPI
  - Docker
  - AWS Lambda
  - DynamoDB
metrics:
  - label: "Requests/Month"
    value: "10M+"
  - label: "P95 Latency"
    value: "< 100ms"
  - label: "Uptime"
    value: "99.9%"
links:
  demo: "#"
  github: "#"
relatedProjects:
  - "nlp-data-extraction"
  - "anomaly-detection"
---

Built a high-throughput sentiment analysis system using fine-tuned BERT models for financial text. Deployed on AWS with auto-scaling, achieving 99.9% uptime and sub-100ms p95 latency.

## The Challenge

Financial news moves fast. Traditional sentiment analysis tools couldn't keep up with the volume and speed required for real-time trading decisions. We needed a system that could:

- Process thousands of articles per minute
- Understand financial-specific language and context
- Deliver results with minimal latency
- Scale automatically during market events

## The Solution

I built a distributed sentiment analysis pipeline that processes news, tweets, and SEC filings in real-time.

### Model Architecture

The core of the system is a fine-tuned BERT model optimized for financial text:

```python
from transformers import AutoModelForSequenceClassification, AutoTokenizer

model = AutoModelForSequenceClassification.from_pretrained(
    "ProsusAI/finbert",
    num_labels=3  # positive, negative, neutral
)
tokenizer = AutoTokenizer.from_pretrained("ProsusAI/finbert")
```

### Infrastructure

The system is deployed on AWS with the following architecture:

- **API Gateway** for request handling and rate limiting
- **Lambda functions** for stateless inference
- **DynamoDB** for caching and result storage
- **SQS** for async processing during high load

## Results

The system now processes over 10 million requests per month with:

- **99.9% uptime** over the past year
- **< 100ms P95 latency** for real-time queries
- **60% cost reduction** compared to always-on EC2 instances
- **Auto-scaling** during market events and earnings season

## Lessons Learned

1. **Model optimization matters**: Quantization reduced inference time by 40%
2. **Caching is essential**: 30% of queries are duplicate news items
3. **Financial context is crucial**: Generic sentiment models miss domain-specific nuances
