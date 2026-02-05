---
id: "ab-testing-platform"
title: "A/B Testing Analytics Platform"
description: "Statistical testing platform with Bayesian and frequentist analysis."
status: production
category: Data
completedDate: "2022-12-01"
featured: false
draft: false
tech:
  - Python
  - React
  - PostgreSQL
  - TypeScript
  - Plotly
metrics:
  - label: "Active Experiments"
    value: "50+"
  - label: "Teams Using"
    value: "8"
  - label: "Decisions Informed"
    value: "200+"
links:
  demo: "#"
relatedProjects:
  - "recommendation-engine"
  - "time-series-forecaster"
---

Created a comprehensive A/B testing platform with sequential testing, multiple comparison corrections, and Bayesian credible intervals. Includes power analysis, sample size calculators, and automated reporting.

## The Challenge

Running A/B tests correctly is harder than it looks:

- **Peeking problem**: Checking results early inflates false positives
- **Multiple comparisons**: Testing many variants without correction
- **Underpowered tests**: Not collecting enough data for reliable conclusions
- **Metric selection**: Choosing the right primary and guardrail metrics

## The Solution

I built a platform that handles statistical rigor automatically.

### Sequential Testing

Allows early stopping while controlling false positive rate:

```python
import numpy as np
from scipy import stats

class SequentialTest:
    """Group Sequential Testing with O'Brien-Fleming bounds."""

    def __init__(self, alpha: float = 0.05, n_looks: int = 5):
        self.alpha = alpha
        self.n_looks = n_looks
        self.boundaries = self._compute_boundaries()

    def _compute_boundaries(self) -> list[float]:
        """O'Brien-Fleming spending function."""
        t = np.linspace(1/self.n_looks, 1, self.n_looks)
        return [2 * (1 - stats.norm.cdf(
            stats.norm.ppf(1 - self.alpha/2) / np.sqrt(ti)
        )) for ti in t]

    def check_significance(self, look: int, p_value: float) -> bool:
        """Check if result is significant at this interim look."""
        return p_value < self.boundaries[look - 1]
```

### Bayesian Analysis

Provides intuitive probability statements:

```python
import pymc as pm

def bayesian_ab_test(control_conversions, control_total,
                     treatment_conversions, treatment_total):
    """Bayesian A/B test with Beta-Binomial model."""

    with pm.Model() as model:
        # Priors (weakly informative)
        p_control = pm.Beta('p_control', alpha=1, beta=1)
        p_treatment = pm.Beta('p_treatment', alpha=1, beta=1)

        # Likelihoods
        pm.Binomial('control_obs', n=control_total,
                    p=p_control, observed=control_conversions)
        pm.Binomial('treatment_obs', n=treatment_total,
                    p=p_treatment, observed=treatment_conversions)

        # Derived quantities
        lift = pm.Deterministic('lift',
                               (p_treatment - p_control) / p_control)
        prob_better = pm.Deterministic('prob_better',
                                       pm.math.gt(p_treatment, p_control))

        trace = pm.sample(2000, return_inferencedata=True)

    return {
        'prob_treatment_better': trace.posterior['prob_better'].mean().item(),
        'expected_lift': trace.posterior['lift'].mean().item(),
        'lift_95_ci': np.percentile(trace.posterior['lift'], [2.5, 97.5])
    }
```

### Sample Size Calculator

```python
def calculate_sample_size(baseline_rate: float,
                          minimum_detectable_effect: float,
                          alpha: float = 0.05,
                          power: float = 0.8) -> int:
    """Calculate required sample size per variant."""

    p1 = baseline_rate
    p2 = baseline_rate * (1 + minimum_detectable_effect)

    pooled_var = p1 * (1 - p1) + p2 * (1 - p2)

    z_alpha = stats.norm.ppf(1 - alpha/2)
    z_beta = stats.norm.ppf(power)

    n = ((z_alpha + z_beta) ** 2 * pooled_var) / (p2 - p1) ** 2

    return int(np.ceil(n))
```

## Platform Features

| Feature | Description |
|---------|-------------|
| **Experiment Setup** | Guided workflow for metric selection and power analysis |
| **Real-time Dashboard** | Live results with proper statistical guardrails |
| **Sequential Testing** | Early stopping with controlled error rates |
| **Multiple Comparisons** | Automatic Bonferroni/Holm corrections |
| **Bayesian Analysis** | Probability of being best, expected lift |
| **Automated Reports** | Weekly summary with recommendations |

## Results

- **50+ active experiments** running at any time
- **8 teams** across the organization using the platform
- **200+ data-driven decisions** made from experiments
- **30% reduction** in time to statistical significance (via sequential testing)

## Key Learnings

1. **Guardrail metrics are essential**: Prevent winning variants that hurt other metrics
2. **Sequential testing saves time**: But requires discipline in stopping rules
3. **Bayesian results communicate better**: "90% probability of being better" > "p < 0.05"
