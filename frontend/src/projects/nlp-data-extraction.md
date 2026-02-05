---
id: "nlp-data-extraction"
title: "Document Intelligence Platform"
description: "NLP pipeline for extracting structured data from financial documents."
status: production
category: ML
completedDate: "2023-05-20"
featured: false
draft: false
tech:
  - Python
  - spaCy
  - Transformers
  - PostgreSQL
  - Docker
metrics:
  - label: "Documents Processed"
    value: "100k+"
  - label: "Extraction Accuracy"
    value: "92%"
  - label: "Processing Time"
    value: "< 2s/doc"
relatedProjects:
  - "sentiment-analyzer"
  - "time-series-forecaster"
---

Built an end-to-end system for extracting entities, relationships, and metrics from earnings calls, 10-Ks, and analyst reports. Uses named entity recognition, relation extraction, and custom rule-based post-processing.

## The Challenge

Financial analysts spend hours manually extracting information from:

- Quarterly earnings call transcripts
- SEC 10-K and 10-Q filings
- Analyst research reports
- Press releases and news articles

This manual process is slow, error-prone, and doesn't scale.

## The Solution

I developed an automated document intelligence platform with multiple extraction layers.

### Named Entity Recognition

Custom NER model trained on financial documents:

```python
import spacy
from spacy.tokens import Span

# Custom entity types for financial documents
FINANCIAL_ENTITIES = [
    "COMPANY",
    "TICKER",
    "METRIC",
    "MONEY",
    "PERCENT",
    "DATE",
    "EXECUTIVE",
    "PRODUCT"
]

# Fine-tuned spaCy model
nlp = spacy.load("financial_ner_model")

def extract_entities(text: str) -> list[dict]:
    doc = nlp(text)
    return [
        {"text": ent.text, "label": ent.label_, "start": ent.start_char}
        for ent in doc.ents
    ]
```

### Relation Extraction

Extracting relationships between entities:

- Company → Metric → Value
- Executive → Statement → Guidance
- Product → Revenue → Growth

### Metric Normalization

Standardizing extracted values:

```python
def normalize_metric(value: str, metric_type: str) -> float:
    """Convert various formats to standard numeric values."""
    # Handle billions, millions, etc.
    multipliers = {
        'B': 1e9, 'billion': 1e9,
        'M': 1e6, 'million': 1e6,
        'K': 1e3, 'thousand': 1e3,
    }

    # Handle percentages
    if '%' in value or metric_type == 'PERCENT':
        return float(value.replace('%', '')) / 100

    # Apply multipliers
    for suffix, mult in multipliers.items():
        if suffix in value:
            return float(value.replace(suffix, '').replace('$', '').strip()) * mult

    return float(value.replace('$', '').replace(',', ''))
```

## Pipeline Architecture

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Document   │───▶│     OCR      │───▶│   Text       │
│   Input      │    │   (if PDF)   │    │   Cleaning   │
└──────────────┘    └──────────────┘    └──────┬───────┘
                                               │
       ┌───────────────────────────────────────┘
       ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│     NER      │───▶│   Relation   │───▶│   Metric     │
│  Extraction  │    │  Extraction  │    │ Normalization│
└──────────────┘    └──────────────┘    └──────┬───────┘
                                               │
                                               ▼
                                    ┌──────────────────┐
                                    │  Structured JSON │
                                    │  + Database      │
                                    └──────────────────┘
```

## Results

- **100k+ documents** processed
- **92% extraction accuracy** on key metrics
- **< 2 seconds** per document processing time
- **80% reduction** in analyst manual work

## Sample Output

```json
{
  "document_id": "AAPL_Q4_2024_earnings",
  "entities": [
    {"type": "METRIC", "name": "revenue", "value": 89.5e9, "period": "Q4 2024"},
    {"type": "METRIC", "name": "eps", "value": 1.46, "period": "Q4 2024"},
    {"type": "GUIDANCE", "metric": "revenue", "range": [88e9, 92e9], "period": "Q1 2025"}
  ],
  "sentiment": "positive",
  "key_topics": ["iPhone sales", "services growth", "China market"]
}
```
