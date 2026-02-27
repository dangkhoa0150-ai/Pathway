/**
 * ================================================
 * IMPLEMENTATION GUIDE & API SETUP
 * Complete Setup Instructions
 * ================================================
 */

const implementationGuide = {
  // SECTION 1: PROJECT STRUCTURE
  projectStructure: {
    description: 'Complete file organization',
    files: {
      'index.html': 'Main HTML file with website structure (740 lines)',
      'styles.css': 'Modern dark theme styling (1430 lines)',
      'script.js': 'JavaScript interactivity and navigation (406 lines)',
      'career-database.js': 'Basic career data (491 lines)',
      'careers-complete-database.js': 'Comprehensive career profiles (NEW)',
      'educational-pathways-extended.js': 'All learning path options (NEW)',
      'extended-guide.js': 'Career assessment frameworks (457 lines)',
      'market-analysis.js': 'Vietnam job market data (NEW)',
      'career-profiles-extended.js': 'Detailed career progression (optional)',
      'success-stories.js': 'Real career stories (optional)',
      'advanced-components.css': 'Component library (699 lines)',
      'README.md': 'Project documentation',
    },
  },

  // SECTION 2: OPENAI API SETUP
  openaiApiSetup: {
    title: 'OpenAI API Integration Guide',
    
    step1_getApiKey: {
      title: 'Step 1: Get OpenAI API Key',
      instructions: [
        '1. Go to https://platform.openai.com/signup',
        '2. Create account with email',
        '3. Verify email address',
        '4. Go to https://platform.openai.com/account/api-keys',
        '5. Click "Create new secret key"',
        '6. Copy and save the key (shown only once)',
        '7. Add billing payment method (required for usage)',
        '8. Set usage limits to prevent overspending',
      ],
      warning: 'NEVER share your API key publicly or commit to Git!',
      costEstimate: '0.002 USD per 1K tokens (~0.05 million VND per 100 requests)',
    },

    step2_setupEnvironment: {
      title: 'Step 2: Setup Environment Variables',
      
      forLocalDevelopment: {
        method: 'Create .env file',
        content: `
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_TEMPERATURE=0.7
OPENAI_MAX_TOKENS=200
        `,
        note: 'Add .env to .gitignore',
      },

      forProduction: {
        method: 'Use environment variables',
        instructions: [
          'Set environment variable in hosting platform',
          'Examples: Vercel, Netlify, AWS, Heroku',
          'Each platform has different method',
        ],
      },
    },

    step3_installLibrary: {
      title: 'Step 3: Install OpenAI Library',
      
      usingNpm: {
        command: 'npm install openai',
        version: 'v4.0.0+',
      },

      usingPython: {
        command: 'pip install openai',
        version: 'v1.0.0+',
      },

      usingBrowser: {
        note: 'Can be used directly in browser with CORS limitations',
        library: 'openai-js (community library)',
      },
    },

    step4_basicImplementation: {
      title: 'Step 4: Implement Chat Function',
      
      javascript: {
        example: `
// Initialize OpenAI client (backend only)
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Career Guidance Chat Function
async function getCareerguidance(userMessage) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: \`You are a career guidance counselor for Vietnamese high school students. 
        Provide practical career advice considering Vietnamese education system and job market. 
        Focus on: career options, education pathways, salary expectations, job market trends.\`
      },
      {
        role: 'user',
        content: userMessage
      }
    ],
    temperature: 0.7,
    max_tokens: 200,
  });

  return completion.choices[0].message.content;
}

// Usage in chatbot
async function handleChatMessage(message) {
  const response = await getCareerguidance(message);
  displayBotMessage(response);
}
        `,
      },

      python: {
        example: `
from openai import OpenAI

# Initialize client
client = OpenAI(api_key="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx")

def get_career_guidance(user_message):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a career counselor for Vietnamese high school students..."
            },
            {
                "role": "user",
                "content": user_message
            }
        ],
        temperature=0.7,
        max_tokens=200
    )
    
    return response.choices[0].message.content

# Usage
response = get_career_guidance("Which career is best for me?")
print(response)
        `,
      },
    },

    step5_systemPrompt: {
      title: 'Step 5: Optimize System Prompt',
      
      recommendedPrompt: `You are "CareerGuide AI", a professional career counselor specializing in Vietnamese education and job market.

Your role:
- Provide honest, practical career guidance for THPT (high school) students
- Consider Vietnamese education system (university, bootcamp, vocational, online)
- Reference real market data about job demand, salary, and growth
- Suggest specific universities, bootcamps, and learning paths
- Discuss advantages and challenges of each path
- Answer questions about specific careers and education options

Context about user:
- Vietnamese high school student (age 15-18)
- Exploring career options
- May have limited work experience
- May need motivation and guidance

Guidelines:
- Be encouraging but realistic
- Use specific salary ranges (in million VND)
- Mention job market demand (in percentages)
- Reference Vietnamese institutions when applicable
- Explain education pathways clearly
- Discuss both traditional and modern learning methods
- Consider student's interests, abilities, and values

Always include:
- 2-3 specific career recommendations
- Education pathway for recommended careers
- Expected salary range (starting to 10+ years)
- Job market outlook for next 5-10 years
- Specific next steps (university exams, bootcamp enrollment, skill building)`,
    },

    step6_errorHandling: {
      title: 'Step 6: Implement Error Handling',
      
      commonErrors: {
        'invalid_api_key': 'Check API key is correct and not expired',
        'rate_limit_exceeded': 'Wait 60 seconds before next request',
        'context_length_exceeded': 'Reduce message history or use shorter prompts',
        'network_error': 'Check internet connection and API endpoint',
      },

      implementationExample: `
async function getCareerguidance(message) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [/* ... */],
    });
    return response.choices[0].message.content;
  } catch (error) {
    if (error.message.includes('401')) {
      return 'API key is invalid. Please check settings.';
    } else if (error.message.includes('429')) {
      return 'Too many requests. Please wait a moment.';
    } else if (error.message.includes('timeout')) {
      return 'Request took too long. Please try again.';
    } else {
      console.error('API Error:', error);
      return 'Sorry, I encountered an error. Please try again later.';
    }
  }
}
      `,
    },

    step7_costManagement: {
      title: 'Step 7: Manage API Costs',
      
      costOptimization: [
        'Use gpt-3.5-turbo (cheaper than gpt-4)',
        'Limit max_tokens to necessary length (200 is good)',
        'Implement prompt caching for repeated questions',
        'Track usage on OpenAI dashboard',
        'Set monthly budget limits',
        'Use free tier first to test',
      ],

      estimatedMonthly: {
        '100_conversations_per_day': {
          tokens_per_message: 200,
          daily_tokens: 20000,
          monthly_tokens: 600000,
          estimated_cost: '1.20 million VND',
        },

        '1000_conversations_per_day': {
          tokens_per_message: 200,
          daily_tokens: 200000,
          monthly_tokens: 6000000,
          estimated_cost: '12 million VND',
        },
      },
    },
  },

  // SECTION 3: HOSTING & DEPLOYMENT
  hosting: {
    title: 'Hosting & Deployment Options',
    
    staticHosting: {
      name: 'Static Hosting (HTML/CSS/JS only)',
      options: [
        'Netlify (free tier available)',
        'Vercel (free tier available)',
        'GitHub Pages (free)',
        'Cloudflare Pages (free)',
      ],
      steps: [
        '1. Create account on chosen platform',
        '2. Connect Git repository',
        '3. Deploy automatically on push',
      ],
      cost: 'Free to $20/month',
    },

    serverlessFunctions: {
      name: 'Serverless Functions (for API calls)',
      options: [
        'Vercel Functions',
        'Netlify Functions',
        'AWS Lambda',
        'Firebase Functions',
      ],
      steps: [
        '1. Create function file (api/career-guidance.js)',
        '2. Set environment variables',
        '3. Deploy with hosting platform',
      ],
      cost: 'Free to $50/month depending on traffic',
    },

    traditionalVps: {
      name: 'Traditional VPS (Full Control)',
      options: [
        'DigitalOcean',
        'Linode',
        'AWS EC2',
        'Heroku',
      ],
      steps: [
        '1. Rent server instance',
        '2. Install Node.js/Python',
        '3. Deploy application',
        '4. Setup domain',
      ],
      cost: '$5-100+/month',
    },
  },

  // SECTION 4: DATABASE SETUP (Optional)
  databaseSetup: {
    title: 'Database Setup for User Profiles (Optional)',
    
    sqlite: {
      name: 'SQLite (Development)',
      setup: 'npm install sqlite3',
      useCase: 'Local testing and small projects',
      cost: 'Free',
    },

    mongodb: {
      name: 'MongoDB (Cloud)',
      setup: [
        '1. Create account at mongodb.com',
        '2. Create free cluster (Free tier: 512MB storage)',
        '3. Get connection string',
        '4. Install: npm install mongoose',
      ],
      useCase: 'Store user profiles, chat history, preferences',
      cost: 'Free to $57+/month',
    },

    postgresql: {
      name: 'PostgreSQL (Relational)',
      setup: [
        '1. Install locally or use cloud service',
        '2. Create database and tables',
        '3. Install: npm install pg',
      ],
      useCase: 'Complex data with relationships',
      cost: 'Free to $50+/month',
    },

    firestore: {
      name: 'Google Firestore',
      setup: [
        '1. Create Firebase project',
        '2. Enable Firestore database',
        '3. Install: npm install firebase',
      ],
      useCase: 'Real-time data, scalable',
      cost: 'Free tier included',
    },
  },

  // SECTION 5: SECURITY CONSIDERATIONS
  security: {
    title: 'Security Best Practices',
    
    apiKeySecurity: [
      'Never commit API keys to Git',
      'Use environment variables',
      'Rotate keys regularly',
      'Use separate keys for development and production',
      'Monitor API key usage on OpenAI dashboard',
      'Revoke compromised keys immediately',
    ],

    dataProtection: [
      'Use HTTPS only',
      'Implement rate limiting (prevent abuse)',
      'Validate all user inputs',
      'Sanitize data before storing',
      'Encrypt sensitive information',
      'Implement CORS properly',
    ],

    chatbotSafety: [
      'Filter inappropriate content',
      'Limit conversation length',
      'Implement user authentication (optional)',
      'Log conversations for moderation',
      'Provide content guidelines to users',
    ],

    implementationExample: `
// Rate limiting middleware
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.post('/api/chat', limiter, async (req, res) => {
  // Handle chat request
});
    `,
  },

  // SECTION 6: MONITORING & ANALYTICS
  monitoring: {
    title: 'Monitor Performance & Usage',
    
    tools: [
      'OpenAI Dashboard (API usage and costs)',
      'Google Analytics (user behavior)',
      'error tracking (Sentry, LogRocket)',
      'Performance monitoring (New Relic, DataDog)',
      'Uptime monitoring (UptimeRobot, Pingdom)',
    ],

    metricsToTrack: {
      api_metrics: [
        'Daily API calls',
        'Average response time',
        'Error rate',
        'Cost per request',
        'Token usage',
      ],
      user_metrics: [
        'Total users',
        'Active users',
        'Conversation length',
        'Most asked questions',
        'User satisfaction',
      ],
    },
  },

  // SECTION 7: OPTIMIZATION TIPS
  optimization: {
    title: 'Performance Optimization',
    
    frontendOptimization: [
      'Lazy load career databases (don\'t load all at startup)',
      'Cache API responses',
      'Minify CSS and JavaScript',
      'Compress images',
      'Use CDN for static files',
      'Implement pagination for career lists',
    ],

    backendOptimization: [
      'Cache OpenAI responses for common questions',
      'Use shorter max_tokens (200-300)',
      'Implement response streaming',
      'Queue long-running requests',
      'Use lower temperature (0.5-0.7) for consistent results',
    ],

    databaseOptimization: [
      'Index frequently queried fields',
      'Use connection pooling',
      'Implement caching layer (Redis)',
      'Archive old conversations',
      'Regular database maintenance',
    ],
  },

  // SECTION 8: TESTING GUIDELINES
  testing: {
    title: 'Testing & Quality Assurance',
    
    unitTests: {
      example: `
describe('Career Guidance API', () => {
  it('should return career recommendations', async () => {
    const response = await getCareerguidance('I like coding');
    expect(response).toBeDefined();
    expect(response.length).toBeGreaterThan(0);
  });

  it('should handle errors gracefully', async () => {
    const response = await getCareerguidance(''); // Empty message
    expect(response).toContain('please provide');
  });
});
      `,
    },

    testCases: [
      'Valid career guidance requests',
      'Empty or null messages',
      'Extremely long messages',
      'Non-relevant questions',
      'Rapid-fire requests',
      'API downtime scenarios',
    ],
  },

  // SECTION 9: SCALING FOR PRODUCTION
  scaling: {
    title: 'Scaling for Production',
    
    earlyStage: {
      users: '0-1,000',
      infrastructure: 'Single server or serverless',
      database: 'SQLite or small MongoDB',
      cost: '$0-50/month',
    },

    growth: {
      users: '1,000-100,000',
      infrastructure: 'Multiple servers with load balancing',
      database: 'Managed database service',
      cost: '$100-500/month',
    },

    scale: {
      users: '100,000+',
      infrastructure: 'Distributed system with microservices',
      database: 'Multiple database replicas',
      cost: '$500-5,000+/month',
    },
  },

  // SECTION 10: MAINTENANCE & UPDATES
  maintenance: {
    title: 'Regular Maintenance Schedule',
    
    daily: [
      'Monitor API uptime',
      'Check error logs',
      'Review API costs',
    ],

    weekly: [
      'Update security patches',
      'Analyze user questions (improve system prompt)',
      'Review career data for accuracy',
      'Check performance metrics',
    ],

    monthly: [
      'Update career database',
      'Review and update salary information',
      'Analyze user engagement',
      'Optimize based on metrics',
      'Review and plan improvements',
    ],

    quarterly: [
      'Major feature updates',
      'Security audit',
      'Scalability review',
      'User feedback analysis',
      'Strategic planning',
    ],
  },
};

// Quick Reference Checklist
const deploymentChecklist = {
  preDeployment: [
    '✓ All API keys in environment variables',
    '✓ HTTPS enabled',
    '✓ Error handling implemented',
    '✓ Rate limiting configured',
    '✓ Security headers set',
    '✓ Database backups configured',
    '✓ Monitoring tools setup',
    '✓ Analytics tracking enabled',
  ],

  deployment: [
    '✓ Code pushed to Git',
    '✓ Environment variables set on hosting',
    '✓ Database migrations complete',
    '✓ Build successful',
    '✓ All tests passing',
    '✓ Manual testing completed',
  ],

  postDeployment: [
    '✓ Monitor error logs',
    '✓ Check API response times',
    '✓ Verify all features working',
    '✓ Monitor costs',
    '✓ Gather initial user feedback',
  ],
};

console.log('✅ Implementation Guide Loaded');
console.log('📋 Complete setup instructions available');
console.log('🚀 Ready for development and deployment');
