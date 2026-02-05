---
id: "time-series-forecaster"
title: "Time Series Forecasting Service"
description: "Multi-model forecasting service for business metrics and KPIs."
status: production
category: Data
completedDate: "2023-02-10"
featured: false
draft: false
tech:
  - Python
  - Prophet
  - statsmodels
  - PyTorch
  - FastAPI
metrics:
  - label: "Forecasts/Day"
    value: "10k+"
  - label: "MAPE"
    value: "< 8%"
  - label: "Business Units"
    value: "15"
links:
  blog: "#"
relatedProjects:
  - "anomaly-detection"
  - "ab-testing-platform"
---

Developed an automated forecasting service that selects the best model (ARIMA, Prophet, LSTM) based on time series characteristics. Provides uncertainty quantification and anomaly detection. Used for revenue forecasting and capacity planning.

## The Challenge

Different business metrics require different forecasting approaches:

- **Seasonal patterns**: Monthly sales cycles
- **Trend changes**: Product launches, market shifts
- **External factors**: Holidays, events, economic indicators
- **Multiple granularities**: Daily, weekly, monthly forecasts

A one-size-fits-all approach doesn't work.

## The Solution

I built an automated forecasting service that selects and ensembles models based on time series characteristics.

### Model Selection

```python
from enum import Enum
import numpy as np
from statsmodels.tsa.stattools import adfuller, kpss

class TimeSeriesCharacteristics(Enum):
    STATIONARY = "stationary"
    TRENDING = "trending"
    SEASONAL = "seasonal"
    COMPLEX = "complex"

def analyze_series(data: np.ndarray) -> TimeSeriesCharacteristics:
    """Analyze time series characteristics for model selection."""

    # Test for stationarity
    adf_pvalue = adfuller(data)[1]
    kpss_pvalue = kpss(data)[1]

    # Detect seasonality
    has_seasonality = detect_seasonality(data)

    # Detect trend
    has_trend = detect_trend(data)

    if has_seasonality and has_trend:
        return TimeSeriesCharacteristics.COMPLEX
    elif has_seasonality:
        return TimeSeriesCharacteristics.SEASONAL
    elif has_trend:
        return TimeSeriesCharacteristics.TRENDING
    else:
        return TimeSeriesCharacteristics.STATIONARY
```

### Model Ensemble

Different models for different characteristics:

| Characteristic | Primary Model | Secondary Model |
|---------------|---------------|-----------------|
| Stationary | ARIMA | Exponential Smoothing |
| Trending | Prophet | Linear Regression |
| Seasonal | Prophet | SARIMA |
| Complex | LSTM | Prophet + XGBoost |

### Uncertainty Quantification

All forecasts include prediction intervals:

```python
def forecast_with_uncertainty(model, data, horizon):
    """Generate forecasts with prediction intervals."""
    point_forecast = model.predict(horizon)

    # Bootstrap for uncertainty
    bootstrap_forecasts = []
    for _ in range(1000):
        boot_sample = resample_with_replacement(data)
        boot_model = model.fit(boot_sample)
        bootstrap_forecasts.append(boot_model.predict(horizon))

    lower_bound = np.percentile(bootstrap_forecasts, 5, axis=0)
    upper_bound = np.percentile(bootstrap_forecasts, 95, axis=0)

    return {
        "forecast": point_forecast,
        "lower_90": lower_bound,
        "upper_90": upper_bound
    }
```

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Data Source   │───▶│   Feature       │───▶│   Model         │
│   (API/DB)      │    │   Engineering   │    │   Selection     │
└─────────────────┘    └─────────────────┘    └────────┬────────┘
                                                       │
                       ┌───────────────────────────────┘
                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Model         │───▶│   Ensemble &    │───▶│   API           │
│   Training      │    │   Uncertainty   │    │   Response      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Results

- **10k+ forecasts** generated daily
- **< 8% MAPE** average across all metrics
- **15 business units** using the service
- **Automated alerts** when actuals deviate from forecasts

## Use Cases

1. **Revenue Forecasting**: Monthly and quarterly projections
2. **Capacity Planning**: Server and infrastructure scaling
3. **Inventory Management**: Stock level predictions
4. **Demand Forecasting**: Product demand by region
