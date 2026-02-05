---
id: "options-pricing-tool"
title: "Options Pricing Dashboard"
description: "Interactive options pricing and Greeks visualization tool."
status: production
category: Trading
completedDate: "2023-08-15"
featured: false
draft: false
tech:
  - TypeScript
  - React
  - D3.js
  - Python
  - FastAPI
metrics:
  - label: "Monthly Users"
    value: "5,000+"
  - label: "Calculations/Day"
    value: "100k+"
links:
  demo: "#"
  github: "#"
relatedProjects:
  - "quant-trading-backtest"
  - "ab-testing-platform"
---

Created a web-based options pricing tool with real-time Black-Scholes calculations, Greeks visualization, and implied volatility surface plotting. Used by traders for quick pricing and risk analysis.

## The Challenge

Options traders need quick access to:

- Real-time pricing calculations
- Greeks visualization for risk management
- Implied volatility surface analysis
- What-if scenario modeling

Existing tools were either too expensive, too slow, or lacked interactivity.

## The Solution

I built an interactive web dashboard with real-time calculations and visualizations.

### Black-Scholes Implementation

```typescript
interface OptionParams {
  spot: number;
  strike: number;
  timeToExpiry: number;  // in years
  riskFreeRate: number;
  volatility: number;
  optionType: 'call' | 'put';
}

function blackScholes(params: OptionParams): number {
  const { spot, strike, timeToExpiry, riskFreeRate, volatility, optionType } = params;

  const d1 = (Math.log(spot / strike) + (riskFreeRate + 0.5 * volatility ** 2) * timeToExpiry)
             / (volatility * Math.sqrt(timeToExpiry));
  const d2 = d1 - volatility * Math.sqrt(timeToExpiry);

  if (optionType === 'call') {
    return spot * normalCDF(d1) - strike * Math.exp(-riskFreeRate * timeToExpiry) * normalCDF(d2);
  } else {
    return strike * Math.exp(-riskFreeRate * timeToExpiry) * normalCDF(-d2) - spot * normalCDF(-d1);
  }
}
```

### Key Features

1. **Real-time Greeks calculation**: Delta, Gamma, Theta, Vega, Rho
2. **Interactive visualizations**: 3D volatility surface, payoff diagrams
3. **Scenario analysis**: What-if modeling for price and volatility changes
4. **Position builder**: Multi-leg strategy construction and analysis

### Visualization with D3.js

The implied volatility surface is rendered as an interactive 3D visualization:

- X-axis: Strike prices
- Y-axis: Time to expiration
- Z-axis: Implied volatility
- Color gradient for IV levels

## Architecture

```
┌─────────────────┐     ┌─────────────────┐
│   React UI      │────▶│   FastAPI       │
│   + D3.js       │◀────│   Backend       │
└─────────────────┘     └────────┬────────┘
                                 │
                        ┌────────▼────────┐
                        │   Market Data   │
                        │   (Yahoo/IEX)   │
                        └─────────────────┘
```

## Results

- **5,000+ monthly active users**
- **100k+ calculations** processed daily
- **Featured** in options trading communities
- **Sub-100ms** response time for all calculations

## Future Enhancements

- Monte Carlo simulation for exotic options
- Real-time market data integration
- Strategy optimization suggestions
