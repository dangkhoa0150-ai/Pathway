/**
 * ======================================
 * EDUCATIONAL PATHWAYS COMPREHENSIVE GUIDE
 * Vietnam's Complete Education System
 * ======================================
 */

const educationalPathways = {
  // TRADITIONAL UNIVERSITY PATH
  university: {
    name: 'University (4-5 years)',
    description: 'Traditional academic degree from accredited institution',
    duration: '4-5 years',
    cost: { min: 30, max: 200, currency: 'million VND' },
    jobPlacement: '85%',
    salary: { entry: 15, mid: 35, senior: 70 },
    pros: [
      'Comprehensive theoretical knowledge',
      'Wide network of alumni',
      'Generally recognized globally',
      'Internship opportunities',
      'Scholarship availability',
      'Research opportunities',
      'Campus life and social network',
      'Career services support',
    ],
    cons: [
      'Expensive and time-consuming',
      'May lack practical skills',
      'High competition',
      'Limited real-world experience',
      'Outdated curriculum in some areas',
      'Large class sizes',
      'Graduation debt',
      'Doesn\'t guarantee employment',
    ],
    timeline: [
      { year: 1, focus: 'Foundation & General Knowledge' },
      { year: 2, focus: 'Specialized Courses Begin' },
      { year: 3, focus: 'Advanced Technical Skills' },
      { year: 4, focus: 'Capstone Project or Internship' },
      { year: 5, focus: 'Optional Honors or Specialization' },
    ],
    subjects: [
      'General Education (1st year)',
      'Major-specific courses (years 2-3)',
      'Electives & Specializations (years 3-4)',
      'Capstone/Thesis Project (final year)',
    ],
    topUniversities: [
      'Bach Khoa Hanoi',
      'Bach Khoa HCMC',
      'National Economics University',
      'FPT University',
      'Foreign Trade University',
      'RMIT Vietnam',
      'International University (HCMIU)',
      'Hanoi University of Science & Technology',
    ],
    skills: [
      'Critical thinking',
      'Research',
      'Communication',
      'Project management',
      'Subject expertise',
      'Problem-solving',
      'Teamwork',
    ],
  },

  // BOOTCAMP PATH
  bootcamp: {
    name: 'Bootcamp (3-6 months)',
    description: 'Intensive, practical training program focused on job-ready skills',
    duration: '3-6 months',
    cost: { min: 20, max: 50, currency: 'million VND' },
    jobPlacement: '90%',
    salary: { entry: 18, mid: 35, senior: 60 },
    pros: [
      'Very fast training (3-6 months)',
      'Highly practical and job-focused',
      'High job placement rates',
      'Affordable compared to university',
      'Flexible schedules (part-time/full-time)',
      'Mentor-led instruction',
      'Real-world projects',
      'Industry-recognized certificates',
      'Career counseling included',
      'Strong alumni networks',
    ],
    cons: [
      'Fast-paced and intense',
      'May lack theoretical depth',
      'Not all employers recognize bootcamps',
      'No degree credential',
      'Limited financial aid',
      'High failure rate if not committed',
      'Newer credential (less proven)',
      'Requires strong foundational knowledge',
    ],
    timeline: [
      { week: '1-2', focus: 'Fundamentals' },
      { week: '3-6', focus: 'Core Technical Skills' },
      { week: '7-10', focus: 'Advanced Topics & Projects' },
      { week: '11-12', focus: 'Capstone Project & Interview Prep' },
      { week: '13-16', focus: 'Job Search & Placement (if extended)' },
    ],
    subjects: [
      'Programming Languages (3-4 languages)',
      'Web/App Development Framework',
      'Database & API Design',
      'DevOps & Deployment',
      'Software Best Practices',
      'Interview Preparation',
      'Career Development',
    ],
    topBootcamps: [
      'FPT Coding (3 months, ~30M)',
      'TechKids (4 months, ~35M)',
      'Code2Startup (3 months, ~25M)',
      'Vertex Academy (4 months, ~40M)',
      'Hyper Island (12 weeks, ~45M)',
      'TechHTML5 (3 months, ~20M)',
      'CODESTAR (4 months, ~38M)',
      'BrainStation (12 weeks, ~50M)',
    ],
    skills: [
      'Practical coding',
      'Quick learning',
      'Problem-solving',
      'Framework expertise',
      'Project delivery',
      'Team collaboration',
      'Interview skills',
    ],
  },

  // ONLINE LEARNING PATH
  online: {
    name: 'Online Courses (1-12 months)',
    description: 'Self-paced or structured online learning programs',
    duration: '1-12 months (flexible)',
    cost: { min: 5, max: 30, currency: 'million VND' },
    jobPlacement: '70%',
    salary: { entry: 15, mid: 30, senior: 55 },
    pros: [
      'Very affordable',
      'Flexible scheduling',
      'Learn at your own pace',
      'Wide variety of subjects',
      'No geographical limitations',
      'Can study part-time while working',
      'Many free options available',
      'Lifetime access to content',
      'Self-directed learning',
      'Build portfolio while learning',
    ],
    cons: [
      'Requires self-discipline',
      'No direct mentor support',
      'Credential quality varies greatly',
      'Employers may not recognize some courses',
      'No campus experience',
      'Limited networking',
      'Easy to abandon',
      'May lack hands-on guidance',
      'Self-funded entirely',
      'Quality inconsistency',
    ],
    timeline: [
      { month: 1, focus: 'Choose Platform & Course' },
      { month: '2-6', focus: 'Complete Core Content' },
      { month: '7-10', focus: 'Build Portfolio Projects' },
      { month: '11-12', focus: 'Interview Prep & Job Search' },
    ],
    subjects: [
      'Programming (Python, JavaScript, etc)',
      'Web Development (Full Stack)',
      'Data Science & Analytics',
      'Mobile App Development',
      'Cloud Technologies',
      'AI & Machine Learning',
      'Design & Creative Skills',
      'Business & Soft Skills',
    ],
    topPlatforms: [
      'Coursera (~0.5-1M/month, certificates)',
      'Udemy (~0.2-1M course, lifetime access)',
      'edX (~0.5-2M/course, university-backed)',
      'Udacity (5-20M, nanodegrees)',
      'Codecademy (~0.2M/month, interactive)',
      'DataCamp (~0.2M/month, data science)',
      'LinkedIn Learning (~1.5M/month)',
      'Treehouse (~0.3M/month)',
      'Pluralsight (~0.6M/month)',
      'FreeCodeCamp (FREE, donations)',
    ],
    skills: [
      'Self-discipline',
      'Time management',
      'Independent learning',
      'Online communication',
      'Technical skills',
      'Portfolio creation',
      'Self-motivation',
    ],
  },

  // VOCATIONAL/TECHNICAL SCHOOL
  vocational: {
    name: 'Vocational/Technical School (2-3 years)',
    description: 'Practical training in trades and technical skills',
    duration: '2-3 years',
    cost: { min: 15, max: 100, currency: 'million VND' },
    jobPlacement: '92%',
    salary: { entry: 12, mid: 25, senior: 50 },
    pros: [
      'Strong practical skills',
      'High job placement rates',
      'Hands-on training',
      'Shorter than university',
      'Career-focused curriculum',
      'Good earning potential',
      'Union support (some trades)',
      'Apprenticeship opportunities',
      'Industry partnerships',
      'Less expensive than university',
    ],
    cons: [
      'Limited career advancement options',
      'May require physical ability',
      'Not all trades have stability',
      'Perception/social status concerns',
      'Requires commitment to trade',
      'May not satisfy university requirements',
      'Physical working conditions',
      'Limited salary growth long-term',
    ],
    timeline: [
      { year: 1, focus: 'Foundation Skills & Safety' },
      { year: 2, focus: 'Technical Specialization' },
      { year: 3, focus: 'Advanced Techniques & Licensing' },
    ],
    subjects: [
      'Technical theory (30%)',
      'Practical skills (50%)',
      'Safety & regulations (10%)',
      'Professional standards (10%)',
    ],
    trades: [
      'Automotive Technician',
      'HVAC Technician',
      'Electrician',
      'Plumber',
      'Carpenter',
      'Welder',
      'Heavy Equipment Operator',
      'Culinary Arts',
      'Cosmetology',
      'Construction Management',
    ],
    skills: [
      'Technical expertise',
      'Problem-solving',
      'Precision',
      'Tool proficiency',
      'Safety awareness',
      'Customer service',
      'Reliability',
    ],
  },

  // APPRENTICESHIP PATH
  apprenticeship: {
    name: 'Apprenticeship (2-4 years)',
    description: 'Learn while working with experienced professionals',
    duration: '2-4 years',
    cost: { min: 0, max: 20, currency: 'million VND' },
    jobPlacement: '95%',
    salary: { entry: 8, mid: 20, senior: 45 },
    pros: [
      'Earn while learning',
      'Mentorship from experts',
      'Job guaranteed after completion',
      'Practical, real-world experience',
      'Low or no education cost',
      'Build professional network',
      'Potential to advance quickly',
      'Recognized credentials',
      'Hands-on training',
      'Employment security',
    ],
    cons: [
      'Lower pay during apprenticeship',
      'Long commitment (2-4 years)',
      'Limited schedule flexibility',
      'Physical demands',
      'May require relocation',
      'Competition for positions',
      'Not suitable for all fields',
      'Depends on finding mentor',
    ],
    timeline: [
      { year: 1, focus: 'Observation & Basic Tasks' },
      { year: 2, focus: 'Increasing Responsibility' },
      { year: 3, focus: 'Near-Professional Level' },
      { year: 4, focus: 'Mastery & Certification (if needed)' },
    ],
    fields: [
      'Skilled Trades',
      'Engineering',
      'Hospitality',
      'Healthcare',
      'Technology',
      'Construction',
      'Agriculture',
      'Retail Management',
    ],
    skills: [
      'Practical expertise',
      'Industry knowledge',
      'Mentoring relationships',
      'Work ethic',
      'Professional behavior',
      'Technical proficiency',
      'Reliability',
    ],
  },

  // COMBINED PATH
  combined: {
    name: 'Combined Path (University + Bootcamp)',
    description: 'Degree plus intensive technical training for competitive edge',
    duration: '4-5 years university + 3-6 months bootcamp',
    cost: { min: 100, max: 250, currency: 'million VND' },
    jobPlacement: '95%',
    salary: { entry: 25, mid: 45, senior: 80 },
    pros: [
      'Best of both worlds',
      'Comprehensive knowledge + practical skills',
      'Very attractive to employers',
      'Higher salary potential',
      'Strong network from university',
      'Practical job readiness from bootcamp',
      'Career flexibility',
      'Competitive advantage',
      'Multiple credential types',
      'Fast-track to senior roles',
    ],
    cons: [
      'Very expensive',
      'Time-consuming (5+ years total)',
      'Demanding workload',
      'Requires focus and dedication',
      'Higher total cost investment',
      'May delay job entry',
    ],
    timeline: [
      { phase: 'Year 1', description: 'University Foundation' },
      { phase: 'Year 2-3', description: 'Major Courses' },
      { phase: 'Year 4-5', description: 'Advanced University + Specialized Electives' },
      { phase: 'Summer/After', description: '3-6 Month Intensive Bootcamp' },
    ],
    combination: [
      'CS Degree + Full Stack Bootcamp',
      'Business Degree + Product Management Bootcamp',
      'Any Degree + Data Science Bootcamp',
      'Engineering + Cloud Architecture Bootcamp',
      'Any Field + Leadership/MBA Program',
    ],
    skills: [
      'Theoretical knowledge',
      'Practical expertise',
      'Industry-ready skills',
      'Leadership capability',
      'Advanced problem-solving',
      'Professional network',
    ],
  },
};

// Career Transition Strategies
const careerTransitionStrategies = {
  completeCareersChange: {
    title: 'Complete Career Change',
    example: 'From Agriculture to Software Engineering',
    steps: [
      'Assess new career requirements (skills, education)',
      'Choose learning path (bootcamp, online, or combination)',
      'Build foundation skills (3-6 months)',
      'Create portfolio projects (2-3 months)',
      'Strengthen soft skills (1-2 months)',
      'Conduct job search (1-3 months)',
      'Transition to new role (usually with salary cut initially)',
    ],
    timeline: '6-12 months',
    cost: '20-50 million VND',
    risk: 'High (income disruption)',
    recommendation: 'Best for motivated individuals with savings',
  },

  lateralMove: {
    title: 'Lateral Career Move',
    example: 'From Backend to Frontend Development',
    steps: [
      'Identify transferable skills',
      'Fill knowledge gaps (online courses)',
      'Build side projects in new area',
      'Take on small projects in new role',
      'Gradually transition responsibilities',
      'After 1-2 years, officially change role',
    ],
    timeline: '3-12 months',
    cost: '5-15 million VND',
    risk: 'Low (still employed, income stable)',
    recommendation: 'Best for employed professionals',
  },

  upwardProgression: {
    title: 'Upward Progression',
    example: 'Junior Developer → Senior → Tech Lead → Manager',
    steps: [
      'Develop deeper expertise in current field',
      'Take on leadership responsibilities gradually',
      'Complete management/leadership training',
      'Build team management experience',
      'Pursue advanced certifications',
      'Transition to management role',
    ],
    timeline: '5-10 years',
    cost: '5-20 million VND (training)',
    risk: 'Low (internal progression)',
    recommendation: 'Best for established professionals',
  },

  specialization: {
    title: 'Specialization Path',
    example: 'From General Developer to AI/ML Specialist',
    steps: [
      'Take advanced certifications',
      'Complete specialized bootcamp',
      'Build portfolio in new specialty',
      'Gain 1-2 years specific experience',
      'Pursue advanced degree (optional)',
      'Become specialist/expert',
    ],
    timeline: '1-3 years',
    cost: '20-50 million VND',
    risk: 'Medium (market dependent)',
    recommendation: 'Best for in-demand specializations',
  },
};

// Cost Comparison by Education Type
const costComparison = {
  university: {
    publicUniversity: { per_year: 10, total_4years: 40 },
    privateUniversity: { per_year: 50, total_4years: 200 },
    internationalUniversity: { per_year: 100, total_4years: 400 },
  },
  
  bootcamp: {
    shortBootcamp: { duration: '3 months', cost: 25 },
    standardBootcamp: { duration: '4-5 months', cost: 35 },
    extensiveBootcamp: { duration: '6 months+', cost: 50 },
  },
  
  online: {
    freeCourses: { cost: 0, platforms: ['FreeCodeCamp', 'YouTube'] },
    affordableCourses: { cost: '1-2 per course', platforms: ['Udemy', 'Coursera'] },
    premiumPlatforms: { cost: '5-20 per month', platforms: ['Udacity', 'Pluralsight'] },
  },
  
  vocational: {
    publicVocational: { duration: '2 years', cost: '15-30' },
    privateVocational: { duration: '2 years', cost: '50-100' },
  },
};

// ROI (Return on Investment) Analysis
const roiAnalysis = {
  university: {
    totalCost: 100,
    avgSalary5Years: '35-45 avg per month = 2.1-2.7B',
    netGain: '2B+',
    timeToBreakeven: '8-10 years',
    lifetimeEarnings: '50B+',
    roi: '50x',
  },
  
  bootcamp: {
    totalCost: 30,
    avgSalary5Years: '30-35 avg per month = 1.8-2.1B',
    netGain: '1.5B+',
    timeToBreakeven: '2-3 years',
    lifetimeEarnings: '40B+',
    roi: '133x',
  },
  
  online: {
    totalCost: 10,
    avgSalary5Years: '25-30 avg per month = 1.5-1.8B',
    netGain: '1.5B+',
    timeToBreakeven: '6-12 months',
    lifetimeEarnings: '35B+',
    roi: '350x',
  },
};

// Employer Preferences by Education Type
const employerPreferences = {
  techCompanies: {
    '1stChoice': 'University degree + Practical experience',
    '2ndChoice': 'Bootcamp graduates with strong portfolio',
    '3rdChoice': 'Online course completers with projects',
    consideration: 'Skills > credentials (test-based evaluation)',
  },
  
  traditionalCorporations: {
    '1stChoice': 'University degree (requirement)',
    '2ndChoice': 'Higher education with certifications',
    '3rdChoice': 'Bootcamp with experience',
    consideration: 'Degree required for many positions',
  },
  
  themselvesStartup: {
    '1stChoice': 'Bootcamp with portfolio + passion',
    '2ndChoice': 'University with entrepreneurial mindset',
    '3rdChoice': 'Online course learners',
    consideration: 'Skills and initiative > credentials',
  },
};

console.log('✅ Educational Pathways Guide Loaded');
console.log('📚 6 major learning paths documented');
console.log('💰 Cost analysis and ROI calculations available');
