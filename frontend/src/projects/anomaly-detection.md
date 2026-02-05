---
id: "anomaly-detection"
title: "Anomaly Detection System"
description: "ML-powered anomaly detection for manufacturing quality control."
status: production
category: ML
completedDate: "2024-01-10"
featured: false
draft: false
tech:
  - Python
  - scikit-learn
  - TensorFlow
  - ONNX
  - MLflow
metrics:
  - label: "False Positive Reduction"
    value: "60%"
  - label: "Detection Rate"
    value: "95%+"
  - label: "Factories Deployed"
    value: "12"
relatedProjects:
  - "sentiment-analyzer"
  - "time-series-forecaster"
---

Implemented an ensemble approach combining isolation forests, autoencoders, and statistical methods. Reduced false positives by 60% while catching 95%+ of true anomalies. Deployed on edge devices in factory settings.

## The Challenge

Manufacturing quality control traditionally relies on rule-based systems that either:

- Miss subtle defects (high false negatives)
- Flag too many false alarms, leading to operator fatigue
- Can't adapt to new product variations without manual reconfiguration

## The Solution

I developed an ensemble anomaly detection system that combines multiple techniques:

### Ensemble Architecture

```python
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler
import tensorflow as tf

class AnomalyEnsemble:
    def __init__(self):
        self.isolation_forest = IsolationForest(contamination=0.01)
        self.autoencoder = self._build_autoencoder()
        self.scaler = StandardScaler()

    def _build_autoencoder(self):
        encoder = tf.keras.Sequential([
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(32, activation='relu'),
            tf.keras.layers.Dense(16, activation='relu'),
        ])
        decoder = tf.keras.Sequential([
            tf.keras.layers.Dense(32, activation='relu'),
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(128, activation='sigmoid'),
        ])
        return encoder, decoder
```

### Edge Deployment

Models are optimized using ONNX for edge deployment:

- **Model size**: Reduced from 50MB to 5MB
- **Inference time**: < 10ms on edge devices
- **Offline capable**: No cloud dependency required

## Results

- **60% reduction** in false positives
- **95%+ detection rate** for true anomalies
- **12 factories** deployed across 3 countries
- **$2M+ savings** from prevented defective shipments

## Technical Details

The system uses a voting mechanism where anomalies must be flagged by at least 2 of 3 methods:

1. **Isolation Forest**: Fast, good for global outliers
2. **Autoencoder**: Captures complex patterns
3. **Statistical bounds**: Domain-specific thresholds

This approach balances sensitivity and specificity for optimal production use.
