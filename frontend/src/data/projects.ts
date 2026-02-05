export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: 'production' | 'beta' | 'archived';
  category: 'ML' | 'Trading' | 'Web App' | 'Data';
  metrics?: {
    label: string;
    value: string;
  }[];
  links?: {
    demo?: string;
    github?: string;
    blog?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'sentiment-analyzer',
    title: 'Real-time Sentiment Analysis API',
    description: 'Production API serving 10M+ requests/month for financial news sentiment analysis.',
    longDescription: 'Built a high-throughput sentiment analysis system using fine-tuned BERT models for financial text. Deployed on AWS with auto-scaling, achieving 99.9% uptime and sub-100ms p95 latency. Processes news, tweets, and SEC filings in real-time.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'AWS Lambda', 'DynamoDB'],
    status: 'production',
    category: 'ML',
    metrics: [
      { label: 'Requests/Month', value: '10M+' },
      { label: 'P95 Latency', value: '< 100ms' },
      { label: 'Uptime', value: '99.9%' }
    ],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 'quant-trading-backtest',
    title: 'Quantitative Trading Backtester',
    description: 'High-performance backtesting framework for equity and options strategies.',
    longDescription: 'Developed a vectorized backtesting engine that processes 10+ years of tick data in minutes. Includes transaction cost modeling, slippage simulation, and risk analytics. Used by several prop trading firms.',
    tech: ['Python', 'NumPy', 'Pandas', 'Numba', 'PostgreSQL'],
    status: 'production',
    category: 'Trading',
    metrics: [
      { label: 'Strategies Tested', value: '500+' },
      { label: 'Performance', value: '10yr data in 3min' },
      { label: 'Users', value: '50+ traders' }
    ],
    links: {
      github: '#',
      blog: '#'
    }
  },
  {
    id: 'anomaly-detection',
    title: 'Anomaly Detection System',
    description: 'ML-powered anomaly detection for manufacturing quality control.',
    longDescription: 'Implemented an ensemble approach combining isolation forests, autoencoders, and statistical methods. Reduced false positives by 60% while catching 95%+ of true anomalies. Deployed on edge devices in factory settings.',
    tech: ['Python', 'scikit-learn', 'TensorFlow', 'ONNX', 'MLflow'],
    status: 'production',
    category: 'ML',
    metrics: [
      { label: 'False Positive Reduction', value: '60%' },
      { label: 'Detection Rate', value: '95%+' },
      { label: 'Factories Deployed', value: '12' }
    ]
  },
  {
    id: 'recommendation-engine',
    title: 'Content Recommendation Engine',
    description: 'Collaborative filtering + content-based hybrid recommender system.',
    longDescription: 'Built a recommendation system combining collaborative filtering, content embeddings, and contextual bandits. Increased user engagement by 40% and session duration by 25%. Processes 1M+ users daily.',
    tech: ['Python', 'PyTorch', 'Redis', 'Airflow', 'Spark'],
    status: 'production',
    category: 'ML',
    metrics: [
      { label: 'Daily Users', value: '1M+' },
      { label: 'Engagement Increase', value: '+40%' },
      { label: 'Session Duration', value: '+25%' }
    ],
    links: {
      blog: '#'
    }
  },
  {
    id: 'options-pricing-tool',
    title: 'Options Pricing Dashboard',
    description: 'Interactive options pricing and Greeks visualization tool.',
    longDescription: 'Created a web-based options pricing tool with real-time Black-Scholes calculations, Greeks visualization, and implied volatility surface plotting. Used by traders for quick pricing and risk analysis.',
    tech: ['TypeScript', 'React', 'D3.js', 'Python', 'FastAPI'],
    status: 'production',
    category: 'Trading',
    metrics: [
      { label: 'Monthly Users', value: '5,000+' },
      { label: 'Calculations/Day', value: '100k+' }
    ],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 'nlp-data-extraction',
    title: 'Document Intelligence Platform',
    description: 'NLP pipeline for extracting structured data from financial documents.',
    longDescription: 'Built an end-to-end system for extracting entities, relationships, and metrics from earnings calls, 10-Ks, and analyst reports. Uses named entity recognition, relation extraction, and custom rule-based post-processing.',
    tech: ['Python', 'spaCy', 'Transformers', 'PostgreSQL', 'Docker'],
    status: 'production',
    category: 'ML',
    metrics: [
      { label: 'Documents Processed', value: '100k+' },
      { label: 'Extraction Accuracy', value: '92%' },
      { label: 'Processing Time', value: '< 2s/doc' }
    ]
  },
  {
    id: 'time-series-forecaster',
    title: 'Time Series Forecasting Service',
    description: 'Multi-model forecasting service for business metrics and KPIs.',
    longDescription: 'Developed an automated forecasting service that selects the best model (ARIMA, Prophet, LSTM) based on time series characteristics. Provides uncertainty quantification and anomaly detection. Used for revenue forecasting and capacity planning.',
    tech: ['Python', 'Prophet', 'statsmodels', 'PyTorch', 'FastAPI'],
    status: 'production',
    category: 'Data',
    metrics: [
      { label: 'Forecasts/Day', value: '10k+' },
      { label: 'MAPE', value: '< 8%' },
      { label: 'Business Units', value: '15' }
    ],
    links: {
      blog: '#'
    }
  },
  {
    id: 'ab-testing-platform',
    title: 'A/B Testing Analytics Platform',
    description: 'Statistical testing platform with Bayesian and frequentist analysis.',
    longDescription: 'Created a comprehensive A/B testing platform with sequential testing, multiple comparison corrections, and Bayesian credible intervals. Includes power analysis, sample size calculators, and automated reporting.',
    tech: ['Python', 'React', 'PostgreSQL', 'TypeScript', 'Plotly'],
    status: 'production',
    category: 'Data',
    metrics: [
      { label: 'Active Experiments', value: '50+' },
      { label: 'Teams Using', value: '8' },
      { label: 'Decisions Informed', value: '200+' }
    ],
    links: {
      demo: '#'
    }
  }
];
