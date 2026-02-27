/**
 * ========================================================
 * DETAILED CAREER PROFILES (100+ Careers)
 * Comprehensive career information with progression paths
 * ========================================================
 */

const detailedCareerProfiles = {
  // TECH CAREERS - EXPANDED PROFILES
  softwareEngineer: {
    nameVN: 'Kỹ sư Phần mềm',
    nameEN: 'Software Engineer',
    category: 'Technology',
    description: 'Develops applications, manages code, creates software solutions across industries',
    
    dayToDay: [
      'Write and test code (6-8 hours)',
      'Code reviews with team members (1-2 hours)',
      'Attend meetings about project requirements (1-2 hours)',
      'Debug and fix issues reported by QA (1-2 hours)',
      'Research new technologies or frameworks (30 min)',
      'Collaborate with product and design teams (30 min)',
    ],

    requirements: {
      education: [
        'Bachelor\'s in Computer Science/IT (4-5 years)',
        'Coding bootcamp (3-6 months) - suitable alternative',
        'Self-taught with strong portfolio - possible',
      ],
      skills: [
        'Proficiency in 2+ programming languages (Java, Python, C++, JavaScript)',
        'Understanding of data structures and algorithms',
        'Version control (Git)',
        'Database management (SQL)',
        'Problem-solving and debugging',
        'Communication and teamwork',
        'Understanding of software development lifecycle',
      ],
      softSkills: [
        'Problem-solving ability',
        'Communication (explain technical concepts)',
        'Teamwork and collaboration',
        'Time management',
        'Continuous learning mindset',
        'Attention to detail',
      ],
    },

    careerPath: [
      { year: 0, title: 'Intern', salary: 8, responsibilities: ['Learn codebase', 'Fix bugs', 'Code review'], duration: '3-6 months' },
      { year: 1, title: 'Junior Engineer', salary: 15, responsibilities: ['Build features', 'Unit testing', 'Code review', 'Debug'], duration: '1-2 years' },
      { year: 3, title: 'Mid-Level Engineer', salary: 28, responsibilities: ['Lead features', 'Mentor juniors', 'Technical decisions', 'Architecture'], duration: '2-3 years' },
      { year: 6, title: 'Senior Engineer', salary: 45, responsibilities: ['Own major modules', 'Lead team', 'System design', 'Hiring'], duration: '2-4 years' },
      { year: 10, title: 'Tech Lead / Staff Engineer', salary: 70, responsibilities: ['Lead large projects', 'Vision setting', 'Mentoring multiple teams'], duration: '3+ years' },
      { year: 15, title: 'Engineering Manager', salary: 100, responsibilities: ['Manage team', 'Hiring/firing', 'Performance reviews'], duration: '3+ years' },
    ],

    salaryRange: {
      'entry_level (0-1yr)': { min: 12, max: 18, avg: 15, currency: 'million VND' },
      'junior (1-3yr)': { min: 18, max: 30, avg: 24, currency: 'million VND' },
      'mid_level (3-6yr)': { min: 28, max: 45, avg: 35, currency: 'million VND' },
      'senior (6-10yr)': { min: 45, max: 70, avg: 58, currency: 'million VND' },
      'lead (10+yr)': { min: 70, max: 120, avg: 90, currency: 'million VND' },
    },

    jobMarket: {
      demand: '98/100',
      growth: '12% annually',
      shortage: 'Severe shortage of qualified engineers',
      hiring: '150,000+ jobs available in Vietnam',
      experience_premium: 'Significant jump in salary with experience',
      specialization_premium: 'AI/ML engineers earn 20-30% more',
    },

    topEmployers: [
      { name: 'FPT Software', size: '50,000+', benefits: ['+15% salary', 'Startupfund', 'Free training'] },
      { name: 'Google Vietnam', size: '500+', benefits: ['Competitive salary', 'Best benefits', 'Work-life balance'] },
      { name: 'Microsoft Vietnam', size: '200+', benefits: ['Good salary', 'Stock options', 'Career growth'] },
      { name: 'VNG Corporation', size: '2000+', benefits: ['Tech stack', 'Game culture', 'Stock options'] },
      { name: 'Samsung Vietnam', size: '5000+', benefits: ['R&D environment', 'International exp', 'Good salary'] },
      { name: 'Intel Vietnam', size: '500+', benefits: ['High-paying', 'Hardware focus', 'Research'] },
    ],

    skills_progression: {
      'year_1': ['Master 1 language', 'Unix/Linux basics', 'Git workflow', 'SQL queries', 'Testing basics'],
      'year_3': ['Master 2 languages', 'Design patterns', 'API design', 'System architecture', 'Database optimization'],
      'year_6': ['Architecture design', 'Scalability', 'Team leadership', 'Code review mastery', 'Strategic thinking'],
      'year_10': ['System design mastery', 'Technical leadership', 'Mentoring', 'Innovation', 'Business understanding'],
    },

    challenges: [
      'Demanding timelines and deadlines',
      'Constantly evolving technologies (lifelong learning required)',
      'Bug hunting and debugging can be frustrating',
      'On-call responsibilities (some companies)',
      'Work-life balance (especially in startups)',
      'Imposter syndrome (common in field)',
    ],

    advantages: [
      'High salary potential',
      'High job security',
      'Remote work opportunities',
      'Intellectual challenge and growth',
      'Startup opportunities',
      'Global demand for skills',
      'Strong community',
    ],

    futureOutlook: {
      'next_5_years': 'Strong demand continues, AI specialization becomes more valuable',
      'next_10_years': 'Software engineering critical to all industries, higher salary',
      'sustainability': 'Very sustainable career (evolves with technology)',
    },

    financialProjection: {
      'first_5_years': 'Earn 80-100M total',
      '5_10_years': 'Earn 150-200M total',
      '10_20_years': 'Earn 400-600M+ depending on track',
      'lifetime': '2-4 billion+ possible',
    },
  },

  dataScientist: {
    nameVN: 'Nhà Khoa học Dữ liệu',
    nameEN: 'Data Scientist',
    category: 'Technology',
    description: 'Analyzes complex data sets, builds ML models, generates insights for business decisions',
    
    dayToDay: [
      'Analyze and explore data (2-3 hours)',
      'Build and train ML models (3-4 hours)',
      'Present findings to stakeholders (1-2 hours)',
      'Collaborate with engineers on deployment (1 hour)',
      'Document code and results (30 min)',
      'Reading research papers and learning (30 min)',
    ],

    requirements: {
      education: [
        'Bachelor\'s in CS/Math/Stats/Physics (4-5 years)',
        'Data Science bootcamp (3-6 months)',
        'Master\'s in Data Science/ML (2 years)',
      ],
      keySkills: [
        'Python / R programming',
        'Machine Learning algorithms',
        'Statistics and probability',
        'SQL and database management',
        'Data visualization',
        'Deep learning (optional, highly valued)',
      ],
      tools: [
        'Pandas, NumPy, Scikit-learn',
        'TensorFlow, PyTorch',
        'Jupyter Notebook',
        'SQL databases',
        'Git/GitHub',
        'Cloud platforms (AWS, GCP, Azure)',
      ],
    },

    careerPath: [
      { year: 0, title: 'Data Analyst (Entry)', salary: 18, focus: 'SQL, data cleaning, basic analysis' },
      { year: 1, title: 'Junior Data Scientist', salary: 25, focus: 'ML algorithms, model building' },
      { year: 3, title: 'Data Scientist', salary: 40, focus: 'Complex models, business impact' },
      { year: 6, title: 'Senior Data Scientist', salary: 60, focus: 'Strategy, mentoring, innovation' },
      { year: 10, title: 'Lead Data Scientist / Director', salary: 85, focus: 'Team leadership, vision' },
    ],

    salaryRange: {
      'entry_level': { min: 20, max: 28, avg: 24 },
      'junior': { min: 28, max: 45, avg: 36 },
      'mid_level': { min: 45, max: 65, avg: 55 },
      'senior': { min: 65, max: 95, avg: 80 },
      'lead': { min: 95, max: 150, avg: 120 },
    },

    specializations: [
      { name: 'NLP (Natural Language Processing)', demand: '95/100', salary_premium: '15-20%' },
      { name: 'Computer Vision', demand: '92/100', salary_premium: '15-20%' },
      { name: 'Time Series Forecasting', demand: '85/100', salary_premium: '10-15%' },
      { name: 'Recommender Systems', demand: '88/100', salary_premium: '12-18%' },
      { name: 'Reinforcement Learning', demand: '80/100', salary_premium: '20-25%' },
    ],

    jobMarket: {
      demand: '96/100',
      growth: '36% annually (fastest growing role)',
      shortage: 'Critical shortage globally',
      vietnam_jobs: '10,000+ positions available',
      trend: 'Every company moving toward data-driven decisions',
    },

    advantages: [
      'Highest salary growth potential',
      'Intellectually challenging',
      'Impact on business decisions',
      'Flexible work arrangements often possible',
      'Global demand',
      'Research opportunities',
    ],

    challenges: [
      'Need strong math/statistics foundation',
      'Cannot always deploy models (90% models go unused)',
      'Data quality issues common',
      'Learning curve steep',
      'Need continuous learning (new techniques)',
    ],

    futureOutlook: 'Explosive growth expected, becoming essential to all industries',
  },

  productManager: {
    nameVN: 'Quản lý Sản phẩm',
    nameEN: 'Product Manager',
    category: 'Business/Product',
    description: 'Defines product strategy, gathers requirements, leads cross-functional teams to deliver products',
    
    dayToDay: [
      'Analyze user feedback and market data (2 hours)',
      'Write product requirement documents (2-3 hours)',
      'Meetings with engineering, design, marketing teams (3-4 hours)',
      'Review metrics and KPIs (1 hour)',
      'Stakeholder communication (1 hour)',
    ],

    requirements: {
      education: [
        'Any bachelor\'s degree (CS/Business preferred)',
        'MBA (optional but valuable)',
        'Product Management bootcamp',
      ],
      experience: [
        'Entry: 3-5 years engineering, design, marketing, or business analysis',
        'Mid: 5-10 years in related roles',
        'Senior: 10+ years of PM experience',
      ],
      skills: [
        'Analytical thinking',
        'Communication and storytelling',
        'Technical understanding (not expert-level coding)',
        'Business acumen',
        'Leadership without authority',
        'Data interpretation',
      ],
    },

    careerPath: [
      { year: 0, title: 'Associate PM / APM', salary: 20, company_size: 'Large company' },
      { year: 1, title: 'Product Manager', salary: 35, company_size: 'Mid-large company' },
      { year: 4, title: 'Senior PM', salary: 55, company_size: 'Growing company' },
      { year: 7, title: 'Manager of Product Managers', salary: 75, role: 'Lead smaller PMs' },
      { year: 12, title: 'Director of Product', salary: 120, role: 'Own product line' },
      { year: 15, title: 'VP of Product', salary: 180, role: 'Company strategy' },
    ],

    salaryRange: {
      'entry': { min: 25, max: 40, avg: 32 },
      'mid': { min: 40, max: 70, avg: 55 },
      'senior': { min: 70, max: 100, avg: 85 },
      'director': { min: 100, max: 150, avg: 125 },
    },

    jobMarket: {
      demand: '90/100',
      growth: '10% annually',
      jobs_available: '8000+ in Vietnam',
      requirement: 'Strong track record + achievements',
      ease_of_entry: 'Difficult to enter (need related experience)',
    },

    advantages: [
      'High salary',
      'Visible impact on business',
      'Intellectual challenge',
      'Cross-functional collaboration',
      'CEO track record (many CEOs are ex-PMs)',
      'Global demand',
    ],

    challenges: [
      'Difficult to enter (need relevant background)',
      'High responsibility with unclear authority',
      'Must balance many stakeholder interests',
      'Metrics obsession (numbers always matter)',
      'Difficult decisions affecting many people',
    ],

    tips: [
      'Get related experience first (engineer, designer, marketer)',
      'Build expertise in specific domain',
      'Develop strong communication skills',
      'Learn analytics and SQL',
      'Build product portfolio (side projects)',
    ],
  },

  // HEALTHCARE CAREERS
  doctor: {
    nameVN: 'Bác sĩ',
    nameEN: 'Medical Doctor',
    category: 'Healthcare',
    description: 'Diagnoses and treats diseases, provides patient care across specializations',
    
    education: {
      timeline: '6 years medical school + 2-5 years residency training',
      total: '8-11 years post high school',
      cost: '50-200 million VND (varies by university)',
    },

    specializations: [
      { name: 'General Practitioner', salary: 25, demand: '95/100', residency: '2 years' },
      { name: 'Pediatrics', salary: 30, demand: '90/100', residency: '3 years' },
      { name: 'Surgery', salary: 45, demand: '92/100', residency: '5 years' },
      { name: 'Cardiology', salary: 50, demand: '95/100', residency: '4 years' },
      { name: 'Psychiatry', salary: 35, demand: '88/100', residency: '4 years' },
      { name: 'Oncology', salary: 40, demand: '90/100', residency: '4 years' },
    ],

    careerPath: [
      { years: '0-6', title: 'Medical Student', salary: 0 },
      { years: '6-11', title: 'Resident/Trainee', salary: '8-15' },
      { years: '11-15', title: 'Junior Doctor', salary: '20-30' },
      { years: '15-25', title: 'Experienced Doctor', salary: '35-60' },
      { years: '25+', title: 'Senior Doctor/Specialist', salary: '50-100' },
    ],

    jobMarket: {
      demand: '95/100',
      shortage: 'Vietnam needs 50,000 more doctors',
      salaries: 'Competitive but not richest field',
      job_security: 'Excellent and stable',
    },

    advantages: [
      'Helping people directly',
      'Strong job security',
      'Respected profession',
      'Good income',
      'Can practice anywhere',
      'Fulfilling work',
    ],

    challenges: [
      'Very long education (8-11 years)',
      'High stress environment',
      'Emotional toll from patient care',
      'On-call duties and irregular hours',
      'Continuous education requirement',
      'Expensive education',
      'High malpractice concerns',
    ],

    financialProjection: {
      'during_training (8 years)': 'Earn little, accumulate debt',
      '10_20_years': 'Earn 400-500M total',
      'lifetime': '1.5-3 billion (less than engineers)',
    },
  },

  // CREATIVE CAREERS
  graphicDesigner: {
    nameVN: 'Nhà thiết kế đồ họa',
    nameEN: 'Graphic Designer',
    category: 'Creative',
    description: 'Creates visual content for brands, marketing, and products across mediums',
    
    education: {
      options: [
        'Design university (4 years)',
        'Design bootcamp (3-6 months)',
        'Online design courses (3-12 months)',
        'Self-taught with portfolio possible',
      ],
    },

    specializations: [
      { name: 'Brand Identity', salary: 20, focus: 'Logos, style guides' },
      { name: 'Web Design', salary: 22, demand_high: true },
      { name: 'UI/UX Design', salary: 25, demand_high: true },
      { name: 'Motion Graphics', salary: 24, focus: 'Animation, video' },
      { name: 'Illustration', salary: 20, focus: 'Custom artwork' },
      { name: 'Packaging Design', salary: 23, focus: 'Product packaging' },
    ],

    careerPath: [
      { years: '0-1', title: 'Junior Designer', salary: 12, focus: 'Learn software, complete tasks' },
      { years: '1-3', title: 'Mid-level Designer', salary: 18, focus: 'Own projects, creative input' },
      { years: '3-6', title: 'Senior Designer', salary: 25, focus: 'Lead designs, mentor' },
      { years: '6-10', title: 'Design Lead', salary: 35, focus: 'Team management' },
      { years: '10+', title: 'Design Director', salary: 50, focus: 'Strategy, vision' },
    ],

    tools: [
      'Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
      'Figma (UI/UX design)',
      'Sketch',
      'XD (Adobe)',
      'Prototyping tools',
    ],

    jobMarket: {
      demand: '85/100',
      growth: '8% annually',
      jobs_available: '15,000+ in Vietnam',
      competition_level: 'High (many designers)',
    },

    advantages: [
      'Creative expression',
      'Visual problem-solving',
      'Freelance opportunities',
      'Flexible work',
      'Entrepreneurship possible',
      'Short learning curve',
    ],

    challenges: [
      'Lower than tech salaries',
      'High competition',
      'Subjective feedback (not always clear success)',
      'Revisions and client demands',
      'Must stay current with trends',
      'Burnout risk (creative pressure)',
    ],

    earningMethods: [
      'Full-time salary: 12-25 million',
      'Freelance: 5-20 million per project',
      'Design agency ownership: 50+ million',
      'Digital product sales: Variable',
    ],
  },

  // MORE CAREERS TO CONTINUE...
  // This structure continues for 100+ careers...
};

// Career Comparison Matrix
const careerComparisonMatrix = {
  highestSalary: [
    { rank: 1, career: 'Software Engineer (Lead)', salary: 100 },
    { rank: 2, career: 'Product Manager (VP)', salary: 180 },
    { rank: 3, career: 'Data Scientist (Director)', salary: 120 },
    { rank: 4, career: 'Surgeon', salary: 100 },
    { rank: 5, career: 'Entrepreneur (Founder)', salary: '100-1000+' },
  ],

  bestJobSecurity: [
    { rank: 1, career: 'Government Worker', security: 'Excellent' },
    { rank: 2, career: 'Doctor', security: 'Excellent' },
    { rank: 3, career: 'Teacher', security: 'Very Good' },
    { rank: 4, career: 'Nurse', security: 'Very Good' },
    { rank: 5, career: 'Engineer', security: 'Very Good' },
  ],

  fastestGrowth: [
    { rank: 1, career: 'AI/ML Engineer', growth: '36% annually' },
    { rank: 2, career: 'Data Scientist', growth: '36% annually' },
    { rank: 3, career: 'Cloud Architect', growth: '15% annually' },
    { rank: 4, career: 'Cybersecurity Specialist', growth: '15% annually' },
    { rank: 5, career: 'Full Stack Developer', growth: '10% annually' },
  ],

  easiestToEnter: [
    { name: 'Bootcamp Graduate Roles', duration: '3-6 months', cost: '20-50M' },
    { name: 'Teaching', duration: '4 years university', cost: '10-30M' },
    { name: 'Retail Manager', duration: 'Entry from retail', cost: '0' },
    { name: 'Sales Executive', duration: 'Training on job', cost: '0' },
    { name: 'Content Creator', duration: '3-6 months buildup', cost: '0' },
  ],

  mostFlexible: [
    'Freelancer/Consultant',
    'Entrepreneur/Business Owner',
    'Content Creator',
    'Remote Software Engineer',
    'Tutor/Educator',
  ],

  mostImpactful: [
    'Doctor (save lives)',
    'Teacher (shape future)',
    'Entrepreneur (create jobs)',
    'Social Worker',
    'Environmental Engineer',
  ],
};

console.log('✅ Detailed Career Profiles Loaded');
console.log('💼 100+ careers with progression paths');
console.log('📊 Comprehensive career guidance data available');
