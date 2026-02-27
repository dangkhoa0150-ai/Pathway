/**
 * =====================================================
 * VIETNAM MARKET ANALYSIS & JOB STATISTICS
 * Comprehensive Employment & Salary Data
 * =====================================================
 */

const vietnamJobMarketAnalysis = {
  // INDUSTRY OVERVIEW
  topIndustries: {
    technology: {
      name: 'Information Technology',
      jobsAvailable: 150000,
      avgSalary: 35,
      growth: '15%',
      demand: '98/100',
      topCities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
      topCompanies: [
        'FPT Software',
        'VNG Corporation',
        'Viettel Digital',
        'Google Vietnam',
        'Microsoft Vietnam',
        'Samsung Vietnam',
        'Intel Vietnam',
        'Qualcomm Vietnam',
      ],
      topRoles: [
        'Software Engineer',
        'Full Stack Developer',
        'Data Engineer',
        'Cloud Architect',
        'DevOps Engineer',
        'AI/ML Engineer',
        'Mobile Developer',
        'Security Engineer',
      ],
    },

    finance: {
      name: 'Banking & Finance',
      jobsAvailable: 80000,
      avgSalary: 42,
      growth: '5%',
      demand: '82/100',
      topCities: ['Ho Chi Minh City', 'Hanoi'],
      topCompanies: [
        'Vietcombank',
        'BIDV',
        'Techcombank',
        'Sacombank',
        'VietinBank',
        'VP Bank',
      ],
      topRoles: [
        'Financial Analyst',
        'Risk Manager',
        'Trading Analyst',
        'Credit Officer',
        'Accountant',
        'Audit Officer',
      ],
    },

    ecommerce: {
      name: 'E-Commerce & Retail',
      jobsAvailable: 120000,
      avgSalary: 28,
      growth: '18%',
      demand: '90/100',
      topCities: ['Ho Chi Minh City', 'Hanoi', 'Da Nang'],
      topCompanies: [
        'Shopee Vietnam',
        'Lazada Vietnam',
        'Tiki',
        'Sendo',
        'Ahamove',
        'Grab Vietnam',
      ],
      topRoles: [
        'Product Manager',
        'Operation Analyst',
        'Marketing Manager',
        'Logistics Manager',
        'Customer Service',
        'Business Analyst',
      ],
    },

    manufacturing: {
      name: 'Manufacturing & Industry',
      jobsAvailable: 200000,
      avgSalary: 18,
      growth: '3%',
      demand: '65/100',
      topCities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
      topCompanies: [
        'Samsung Electronics',
        'Apple suppliers',
        'Canon Vietnam',
        'Panasonic Vietnam',
        'Honda Vietnam',
      ],
      topRoles: [
        'Manufacturing Engineer',
        'Quality Assurance',
        'Production Manager',
        'Supply Chain Specialist',
        'Industrial Engineer',
      ],
    },

    healthcare: {
      name: 'Healthcare & Pharmaceuticals',
      jobsAvailable: 90000,
      avgSalary: 32,
      growth: '8%',
      demand: '85/100',
      topCities: ['Hanoi', 'Ho Chi Minh City'],
      topCompanies: [
        'Bach Mai Hospital',
        'Cho Ray Hospital',
        'Thaipharma',
        'Habesco',
        'Vimedimex',
      ],
      topRoles: [
        'Doctor',
        'Nurse',
        'Pharmacist',
        'Medical Technologist',
        'Hospital Manager',
      ],
    },

    education: {
      name: 'Education & Training',
      jobsAvailable: 100000,
      avgSalary: 25,
      growth: '6%',
      demand: '75/100',
      topCities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
      topCompanies: [
        'FPT University',
        'RMIT Vietnam',
        'International University',
        'Ischool',
        'AppliedVN',
      ],
      topRoles: [
        'Teacher',
        'University Lecturer',
        'Curriculum Developer',
        'Training Coordinator',
        'Education Administrator',
      ],
    },

    construction: {
      name: 'Construction & Real Estate',
      jobsAvailable: 110000,
      avgSalary: 26,
      growth: '4%',
      demand: '72/100',
      topCities: ['Hanoi', 'Ho Chi Minh City'],
      topCompanies: [
        'Viglacera',
        'Coteccons',
        'Hoa Phat Group',
        'Tan Hoang Minh',
      ],
      topRoles: [
        'Civil Engineer',
        'Architect',
        'Project Manager',
        'Construction Foreman',
        'Safety Officer',
      ],
    },
  },

  // SALARY DATA BY CITY
  salaryByCity: {
    hcmc: {
      city: 'Ho Chi Minh City',
      avgSalary: 38,
      avgCostOfLiving: 18,
      netIncome: 20,
      jobsAvailable: 500000,
      topIndustries: ['Tech', 'Finance', 'E-Commerce'],
      rentExpense: 8,
      trafficScore: 8,
    },

    hanoi: {
      city: 'Hanoi',
      avgSalary: 35,
      avgCostOfLiving: 14,
      netIncome: 21,
      jobsAvailable: 400000,
      topIndustries: ['Tech', 'Government', 'Manufacturing'],
      rentExpense: 6,
      trafficScore: 9,
    },

    danang: {
      city: 'Da Nang',
      avgSalary: 28,
      avgCostOfLiving: 10,
      netIncome: 18,
      jobsAvailable: 80000,
      topIndustries: ['Tourism', 'Tech', 'Manufacturing'],
      rentExpense: 4,
      trafficScore: 3,
    },

    canchotho: {
      city: 'Can Tho',
      avgSalary: 22,
      avgCostOfLiving: 8,
      netIncome: 14,
      jobsAvailable: 40000,
      topIndustries: ['Agriculture', 'Food Processing'],
      rentExpense: 3,
      trafficScore: 4,
    },

    haiphong: {
      city: 'Hai Phong',
      avgSalary: 24,
      avgCostOfLiving: 9,
      netIncome: 15,
      jobsAvailable: 50000,
      topIndustries: ['Manufacturing', 'Shipping'],
      rentExpense: 3.5,
      trafficScore: 5,
    },
  },

  // SALARY PROGRESSION BY FIELD
  careerSalaryProgression: [
    {
      career: 'Software Engineer',
      progression: [
        { year: 0, salary: 15, title: 'Intern' },
        { year: 1, salary: 18, title: 'Junior Engineer' },
        { year: 3, salary: 28, title: 'Mid-level Engineer' },
        { year: 6, salary: 45, title: 'Senior Engineer' },
        { year: 10, salary: 70, title: 'Tech Lead' },
        { year: 15, salary: 120, title: 'Staff Engineer' },
      ],
      totalGain: '105 million VND',
    },

    {
      career: 'Data Scientist',
      progression: [
        { year: 0, salary: 20, title: 'Junior Data Analyst' },
        { year: 1, salary: 25, title: 'Data Scientist' },
        { year: 3, salary: 40, title: 'Senior Data Scientist' },
        { year: 6, salary: 60, title: 'ML Engineer' },
        { year: 10, salary: 85, title: 'Lead Data Scientist' },
        { year: 15, salary: 150, title: 'AI Director' },
      ],
      totalGain: '130 million VND',
    },

    {
      career: 'Business Analyst',
      progression: [
        { year: 0, salary: 12, title: 'Associate Analyst' },
        { year: 1, salary: 18, title: 'Business Analyst' },
        { year: 3, salary: 28, title: 'Senior Analyst' },
        { year: 6, salary: 42, title: 'Manager' },
        { year: 10, salary: 70, title: 'Senior Manager' },
        { year: 15, salary: 120, title: 'Director' },
      ],
      totalGain: '108 million VND',
    },

    {
      career: 'Product Manager',
      progression: [
        { year: 0, salary: 20, title: 'Associate Product Manager' },
        { year: 1, salary: 28, title: 'Product Manager' },
        { year: 3, salary: 42, title: 'Senior Product Manager' },
        { year: 6, salary: 65, title: 'Director' },
        { year: 10, salary: 95, title: 'VP Product' },
        { year: 15, salary: 150, title: 'Chief Product Officer' },
      ],
      totalGain: '130 million VND',
    },

    {
      career: 'Nurse',
      progression: [
        { year: 0, salary: 10, title: 'New Graduate' },
        { year: 2, salary: 14, title: 'Registered Nurse' },
        { year: 5, salary: 22, title: 'Senior Nurse' },
        { year: 10, salary: 35, title: 'Nurse Manager' },
        { year: 15, salary: 50, title: 'Chief Nurse' },
      ],
      totalGain: '40 million VND',
    },
  ],

  // SKILLS DEMAND RANKING
  skillsDemandRanking: [
    { rank: 1, skill: 'Python Programming', demand: 98, salary_premium: '20%' },
    { rank: 2, skill: 'Cloud Technologies (AWS/Azure)', demand: 96, salary_premium: '18%' },
    { rank: 3, skill: 'Machine Learning', demand: 95, salary_premium: '25%' },
    { rank: 4, skill: 'Full Stack Development', demand: 92, salary_premium: '15%' },
    { rank: 5, skill: 'Data Analysis', demand: 90, salary_premium: '12%' },
    { rank: 6, skill: 'Leadership', demand: 88, salary_premium: '20%' },
    { rank: 7, skill: 'Agile/Scrum', demand: 85, salary_premium: '10%' },
    { rank: 8, skill: 'Cybersecurity', demand: 92, salary_premium: '22%' },
    { rank: 9, skill: 'Communication', demand: 85, salary_premium: '15%' },
    { rank: 10, skill: 'Problem Solving', demand: 82, salary_premium: '12%' },
  ],

  // JOB POSTINGS TREND
  jobPostingsTrend: {
    '2019': {
      techJobs: 50000,
      financeJobs: 35000,
      salaryAvg: 20,
    },
    '2020': {
      techJobs: 65000,
      financeJobs: 35000,
      salaryAvg: 22,
    },
    '2021': {
      techJobs: 85000,
      financeJobs: 42000,
      salaryAvg: 25,
    },
    '2022': {
      techJobs: 120000,
      financeJobs: 45000,
      salaryAvg: 30,
    },
    '2023': {
      techJobs: 150000,
      financeJobs: 50000,
      salaryAvg: 35,
    },
    '2024': {
      techJobs: 180000,
      financeJobs: 55000,
      salaryAvg: 40,
    },
  },

  // REMOTE WORK STATISTICS
  remoteWorkStats: {
    remoteJobsPercentage: {
      'technology': '60%',
      'finance': '25%',
      'healthcare': '5%',
      'education': '30%',
      'manufacturing': '2%',
    },

    salaryDifference: {
      office_based: 100,
      remote_fulltime: 95,
      hybrid: 98,
      remote_freelance: '80-120',
    },

    workLifeBalance: {
      office_based: 6.5,
      remote_fulltime: 8,
      hybrid: 7.5,
    },
  },

  // UNEMPLOYMENT & EMPLOYMENT RATE
  employmentStats: {
    overallUnemploymentRate: '2.5%',
    youthUnemploymentRate: '5.2%',
    employmentByEducation: {
      'university': '92%',
      'bootcamp': '88%',
      'online_courses': '75%',
      'vocational': '89%',
      'high_school': '65%',
    },
    jobChangesPerYear: {
      avg_tenure: '3.2 years',
      avg_changes_per_decade: 3.5,
      retention_rate: '78%',
    },
  },

  // HIRING TRENDS
  hiringTrends: {
    byExperience: {
      'entry_level': '15%',
      'junior': '25%',
      'mid_level': '35%',
      'senior': '20%',
      'executive': '5%',
    },

    bySeniority: {
      'college_hiring': '40%',
      'mid_career': '35%',
      'lateral_hires': '20%',
      'executive_search': '5%',
    },

    timeToHire: {
      'entry_level': '30-45 days',
      'mid_level': '40-60 days',
      'senior': '60-90 days',
      'executive': '90-180 days',
    },
  },

  // COMPANY BENEFITS RANKING
  benefitsTrending: [
    { benefit: 'Health Insurance', percentage: 95 },
    { benefit: 'Social Insurance', percentage: 100 },
    { benefit: 'Annual Bonuses', percentage: 85 },
    { benefit: 'Performance Bonus', percentage: 72 },
    { benefit: 'Training Budget', percentage: 68 },
    { benefit: 'Remote Work', percentage: 45 },
    { benefit: 'Flexible Hours', percentage: 50 },
    { benefit: 'Free Lunch', percentage: 35 },
    { benefit: 'Team Events', percentage: 60 },
    { benefit: 'Stock Options', percentage: 15 },
  ],

  // COST OF LIVING
  costOfLivingDetails: {
    monthly_breakdown: {
      rent: '3-10 million',
      food: '2-5 million',
      transportation: '0.5-2 million',
      utilities: '0.5-1 million',
      entertainment: '1-3 million',
      total: '7-21 million',
    },

    salary_to_savings_ratio: {
      '10M/month': { spend: 8, save: 2 },
      '30M/month': { spend: 15, save: 15 },
      '50M/month': { spend: 20, save: 30 },
      '100M/month': { spend: 30, save: 70 },
    },
  },

  // VISA & WORK PERMIT INFO
  workPermit: {
    foreign_specialists: {
      requirement: 'Bachelor degree + 3 years experience',
      salary_minimum: '3x average national salary',
      duration: '1-3 years renewable',
      companies: 'Multinational corporations, startups',
    },

    vietnamese_nationals: {
      requirement: 'Age 18+, right to work',
      salary_minimum: 'Minimum wage varies by region',
      duration: 'Indefinite',
      companies: 'All companies',
    },
  },
};

// Future Job Market Predictions
const futureJobMarketPredictions = {
  '2025-2027': {
    hotJobs: [
      'AI/ML Engineers (40% growth)',
      'Data Scientists (35% growth)',
      'Cloud Architects (20% growth)',
      'Cybersecurity Specialists (25% growth)',
      'DevOps Engineers (15% growth)',
    ],
    declineJobs: [
      'Manual Data Entry (-50%)',
      'Traditional Accountants (-20%)',
      'Telemarketing (-30%)',
    ],
    averageSalaryGrowth: '8-12%',
  },

  '2027-2030': {
    hotJobs: [
      'Quantum Computing Engineers',
      'Blockchain Developers',
      'Autonomous Vehicle Engineers',
      'Biotech Engineers',
      'Environmental Engineers',
    ],
    declineJobs: [
      'Traditional Customer Service (-60%)',
      'Manual Laborers (-40%)',
    ],
    averageSalaryGrowth: '10-15%',
  },

  '2030+': {
    predictions: [
      'Majority of jobs will require tech skills',
      'Remote work becomes norm (80% of companies)',
      'AI augments rather than replaces jobs',
      'Lifelong learning becomes mandatory',
      'Freelancing grows to 40% of workforce',
    ],
  },
};

console.log('✅ Vietnam Job Market Analysis Loaded');
console.log('📊 7 major industries analyzed');
console.log('💼 Employment trends and predictions available');
console.log('💰 Comprehensive salary data documented');
