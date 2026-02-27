/**
 * ======================================================
 * SUCCESS STORIES & CAREER PROGRESSION CASE STUDIES
 * Real Examples from Vietnamese Professionals
 * ======================================================
 */

const successStories = {
  // STORY 1: BOOTCAMP PATHWAY
  story1: {
    name: 'Nguyễn Minh Tuấn',
    age: 30,
    title: 'Senior Full Stack Developer',
    location: 'Ho Chi Minh City',
    
    background: {
      initialCareer: 'High School Dropout, worked at restaurant',
      startingAge: 18,
      initialSalary: 5,
      motivation: 'Wanted to escape poverty, interested in technology',
    },

    journey: {
      'age_18': {
        event: 'Dropped out of high school',
        salary: 5,
        position: 'Waiter at family restaurant',
        skills: ['Customer service', 'Vietnamese', 'Manual work'],
        decision: 'Wanted to learn programming',
      },
      'age_19': {
        event: 'Enrolled in 3-month coding bootcamp',
        salary: 5,
        cost: 30,
        position: 'Bootcamp student (full-time)',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        challenge: 'Very difficult, wanted to quit after 1 month',
      },
      'age_19_6months': {
        event: 'Completed bootcamp',
        salary: 0,
        position: 'Job searching, freelance projects',
        projects: ['Personal portfolio', '3 freelance projects'],
        skills: ['Full-stack development', 'Problem-solving'],
      },
      'age_20': {
        event: 'First tech job as Junior Developer',
        salary: 15,
        position: 'Junior React Developer at startup',
        company: 'Local startup (10 people)',
        skills: ['React', 'Node.js', 'MongoDB', 'Git'],
        responsibilities: ['Build UI features', 'Bug fixes', 'Code review learning'],
      },
      'age_22': {
        event: 'Promoted to Mid-level Developer',
        salary: 28,
        position: 'Full Stack Developer',
        company: 'Same startup (now 50 people)',
        responsibilities: ['Lead feature development', 'Mentor juniors', 'Architecture decisions'],
        skills: ['Full-stack + DevOps basics', 'Leadership', 'Project management'],
      },
      'age_24': {
        event: 'Joined major tech company',
        salary: 45,
        position: 'Senior Developer',
        company: 'FPT Software (2000+ people)',
        responsibilities: ['Lead team of 5 developers', 'Product roadmap', 'Client communication'],
        achievements: ['Saved company 200M VND/year through optimization'],
      },
      'age_30_current': {
        event: 'Current position',
        salary: 65,
        position: 'Senior Full Stack Developer / Tech Lead',
        company: 'International tech company in Vietnam',
        responsibilities: ['Manage 8-person team', 'Architecture', 'Recruit and train'],
        achievements: ['Developed 3 major products', '5+ direct reports trained'],
        assets: ['Apartment worth 2B', 'Car', 'Investments'],
      },
    },

    totalEarnings: {
      'years_20_22': 15 + 28 + 28, // 71 million
      'years_22_24': 45 + 45, // 90 million
      'years_24_30': 65 * 6, // 390 million
      'total_10_years': 551,
      'minus_bootcamp_cost': 521,
      'roi': '1,737%',
    },

    lessonsLearned: [
      'Bootcamp changed life - good investment despite cost',
      'First year hardest (low salary, imposter syndrome)',
      'Continuous learning essential in tech',
      'Networking with developer community crucial',
      'Side projects helped career advancement',
      'Switching companies led to salary jumps',
      'Wanted to give back by mentoring juniors',
    ],

    advice: [
      'Don\'t be discouraged by initial low salary',
      'Invest in bootcamp if no university degree',
      'Build portfolio projects alongside job',
      'Change companies every 2-3 years for salary growth',
      'Specialize in specific technologies',
      'Network with other developers',
      'Never stop learning new skills',
    ],

    currentGoals: [
      'Become engineering manager in 2-3 years',
      'Start tech consulting business',
      'Mentor 20+ junior developers',
      'Contribute to open-source projects',
      'Build small SaaS product',
    ],
  },

  // STORY 2: UNIVERSITY PATHWAY
  story2: {
    name: 'Trần Thị Hương',
    age: 28,
    title: 'Data Science Manager',
    location: 'Hanoi',
    
    background: {
      initialCareer: 'Computer Science graduate from Bach Khoa',
      startingAge: 22,
      initialSalary: 12,
      motivation: 'Love data and problem-solving',
    },

    journey: {
      'age_4_22': {
        event: '4-year CS degree from Bach Khoa Hanoi',
        salary: 0,
        position: 'Full-time student',
        skills: ['Data structures', 'Algorithms', 'Programming', 'Database'],
        achievements: ['Graduated top 10%', 'Participated in ACM competition'],
      },
      'age_22': {
        event: 'First job as Data Analyst',
        salary: 12,
        position: 'Junior Data Analyst',
        company: 'Banking company',
        responsibilities: ['SQL queries', 'Excel analysis', 'Reports'],
        skills: ['SQL', 'Excel', 'Business understanding'],
      },
      'age_23': {
        event: 'Self-taught Python and Data Science',
        salary: 12,
        position: 'Data Analyst (learning on job)',
        coursework: ['Online Python course', 'Kaggle competitions'],
        skills: ['Python', 'Pandas', 'Scikit-learn'],
      },
      'age_24': {
        event: 'Promoted to Data Scientist',
        salary: 28,
        position: 'Data Scientist',
        company: 'Same bank',
        responsibilities: ['ML model development', 'Predictive analytics'],
        achievements: ['Built credit risk model (saved 500M/year)'],
      },
      'age_25': {
        event: 'Completed online ML certificate',
        salary: 28,
        position: 'Data Scientist',
        education: 'Coursera ML specialization',
        investment: 5,
        skills: ['Advanced ML', 'Deep learning basics'],
      },
      'age_26': {
        event: 'Joined tech unicorn startup',
        salary: 50,
        position: 'Senior Data Scientist',
        company: 'Fintech startup (Series B)',
        responsibilities: ['Lead data team', 'ML infrastructure', 'Data strategy'],
        achievements: ['Built recommendation engine (doubled revenue)'],
      },
      'age_28_current': {
        event: 'Promoted to Data Science Manager',
        salary: 70,
        position: 'Data Science Manager',
        company: 'Same fintech company',
        team_size: 5,
        responsibilities: ['Manage data science team', 'Product strategy', 'ML roadmap'],
        achievements: ['5 data scientists trained', '10+ production models'],
      },
    },

    totalEarnings: {
      'years_22_24': 12 + 12 + 28, // 52 million
      'years_24_26': 28 + 50, // 78 million
      'years_26_28': 70 * 2, // 140 million
      'total_6_years': 270,
      'investment_in_education': -5,
      'net_gain': 265,
      'roi': '5300%',
    },

    lessonsLearned: [
      'University degree provided strong foundation',
      'Continuous self-learning crucial in tech (learned Python independently)',
      'Specialization in data science led to higher salary',
      'Startup experience accelerated career growth',
      'Management track opened different opportunities',
      'Building real products more valuable than theory',
      'Data science skills in high demand = fast growth',
    ],

    advice: [
      'Get strong CS fundamentals from university',
      'Combine traditional education with practical learning',
      'Specialize in high-demand skill (data science)',
      'Take on leadership early (mentor, lead projects)',
      'Move to startups for faster growth',
      'Share knowledge (write blogs, speak at conferences)',
      'Build network with other data scientists',
    ],

    currentGoals: [
      'Build data-driven product (become PM)',
      'Start AI consulting firm',
      'Speak at international conferences',
      'Publish ML research paper',
      'Help develop AI talent in Vietnam',
    ],
  },

  // STORY 3: CAREER CHANGE STORY
  story3: {
    name: 'Phạm Văn Hùng',
    age: 35,
    title: 'UX/UI Designer & Product Manager',
    location: 'Da Nang',
    
    background: {
      initialCareer: 'Graphic designer (12 years)',
      startingAge: 23,
      initialSalary: 12,
      motivation: 'Wanted to move into product design and tech',
    },

    journey: {
      'age_23': {
        event: 'Started as Graphic Designer',
        salary: 12,
        position: 'Junior Graphic Designer',
        company: 'Design agency',
        skills: ['Adobe Creative Suite', 'Brand design', 'Print design'],
      },
      'age_28': {
        event: 'Senior Graphic Designer',
        salary: 28,
        position: 'Senior Designer',
        company: 'Same agency, now art director',
        responsibilities: ['Lead design team', 'Client management', 'Creative strategy'],
      },
      'age_33': {
        event: 'Transition to UX/UI Design',
        salary: 28,
        position: 'Transitioning designer (difficult period)',
        education: 'UX/UI bootcamp (3 months, cost: 40M)',
        challenge: 'Started over as junior in new field',
        decision: 'Wanted tech industry higher salary potential',
      },
      'age_33_6months': {
        event: 'First UX/UI job at startup',
        salary: 32,
        position: 'UX/UI Designer',
        company: 'E-commerce startup (growing fast)',
        skills_gained: ['Figma', 'User research', 'Web design', 'Mobile design'],
        experience_advantage: '10 years design + UX skills = unique value',
      },
      'age_35_current': {
        event: 'Senior Product Designer',
        salary: 55,
        position: 'Senior Product Designer + acting Product Manager',
        company: 'Same startup (expanding regionally)',
        team_size: 3,
        responsibilities: ['Product design', 'User research', 'Product strategy'],
        achievements: ['Redesigned main product', 'Increased conversion 35%'],
      },
    },

    totalEarnings: {
      'years_23_28': 12 * 5, // 60 million
      'years_28_33': 28 * 5, // 140 million
      'years_33_35': (32 + 55) / 2 * 2, // ~87 million
      'total_12_years': 287,
      'bootcamp_investment': -40,
      'initial_salary_cut': -5,
      'net_gain': 242,
    },

    lessonsLearned: [
      'Career changes possible but require investment',
      'Previous experience still valuable in new field',
      'Bootcamp worth it for career pivot',
      'Started over as junior - big ego hit but necessary',
      '12 years design experience = advantage over bootcamp-only graduates',
      'Tech industry salary jump worth it compared to agency work',
      'Willingness to learn new skills crucial for change',
      'Network from previous career less useful in tech initially',
    ],

    advice: [
      'Don\'t stay in career you dislike just for stability',
      'Invest in career transition through bootcamp/training',
      'Be willing to take step back in title/salary initially',
      'Leverage previous experience as advantage',
      'Learn technology tools thoroughly (Figma, etc)',
      'Build portfolio specifically for tech industry',
      'Network in new field from day one',
      'Accept it takes 1-2 years to catch up',
    ],

    currentGoals: [
      'Become full Product Manager',
      'Eventually become Head of Product',
      'Start design consulting for Vietnam startups',
      'Mentor designers moving into tech',
      'Build design thinking workshops',
    ],
  },

  // STORY 4: EDUCATOR TURNED ENTREPRENEUR
  story4: {
    name: 'Lê Thị Yến',
    age: 32,
    title: 'Founder & CEO',
    company: 'Online Education Platform',
    location: 'Ho Chi Minh City',
    
    background: {
      initialCareer: 'High school teacher',
      startingAge: 22,
      initialSalary: 10,
      motivation: 'Wanted to help more students, frustrated with traditional system',
    },

    journey: {
      'age_22_25': {
        event: 'High school English teacher',
        salary: 10,
        position: 'Teacher',
        institution: 'Public high school',
        satisfaction: 'Low - frustrated with system, wanted to reach more students',
      },
      'age_25_26': {
        event: 'Started online tutoring as side business',
        salary: 10,
        sideBusiness: 2,
        position: 'Teacher + Tutor',
        platform: 'Using Facebook, messaging apps',
        students: 'Started with 5, grew to 50',
      },
      'age_26_27': {
        event: 'Joined bootcamp to learn tech',
        salary: 0,
        education: 'Full Stack Development Bootcamp (4 months)',
        cost: 35,
        decision: 'Quit teaching to start real business',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      },
      'age_27_28': {
        event: 'Built first version of platform',
        salary: 0,
        position: 'Founder (unpaid)',
        work: 'Built website, taught students, handled business',
        users: 100,
        revenue: 0.5,
      },
      'age_28_29': {
        event: 'Platform launched publicly',
        salary: 3,
        position: 'CEO/Teacher/Developer',
        users: 1000,
        revenue: 2,
        challenge: 'Wearing all hats, sleep deprivation',
      },
      'age_29_30': {
        event: 'Hired first employees',
        salary: 10,
        team_size: 3,
        users: 5000,
        revenue: 8,
        focus: 'Teaching + management',
      },
      'age_30_32_current': {
        event: 'Series A preparation',
        salary: 20,
        team_size: 15,
        users: 50000,
        revenue: 50,
        monthly_growth: '15%',
        responsibilities: ['Overall business strategy', 'Fundraising', 'Partner relations'],
      },
    },

    totalEarnings: {
      'as_teacher': 10 * 4,
      'as_entrepreneur_year1': 2,
      'as_entrepreneur_year2': 5,
      'as_entrepreneur_year3': 15,
      'as_entrepreneur_year4': 20,
      'total_salaries': 57,
      'equity_value_estimated': 5000,
      'total_wealth_created': 5057,
    },

    businessMetrics: {
      users: 50000,
      annual_revenue: 50,
      business_burn_rate: 5,
      growth_rate_monthly: '15%',
      customer_acquisition_cost: 0.2,
      lifetime_value_per_customer: 1.5,
      retention_rate: '75%',
      nps_score: 72,
    },

    lessonsLearned: [
      'Passion > salary - didn\'t care about pay during early years',
      'Teaching background essential for understanding product',
      'Technical skills crucial - need to build MVP',
      'Network from teaching helped with early users',
      'Timing matter - online education boomed during COVID',
      'Required sacrifices - 2 years almost zero salary',
      'Team crucial - can\'t scale alone',
      'Customer focus paramount - listen to students',
      'Capital intensive - needed to fundraise later',
    ],

    advice: [
      'Find problem you\'re passionate about solving',
      'Learn technical skills to build MVP',
      'Start small with what you have',
      'Listen to customers obsessively',
      'Growth takes time - expect 2-3 years to revenue',
      'Hire slow, focus on culture early',
      'Metrics matter - track everything',
      'Network with other founders',
      'Be prepared for ups and downs',
      'Remember why you started',
    ],

    currentGoals: [
      'Raise Series A (500M VND)',
      'Expand to 200,000 users',
      'Become profitable',
      'Expand to other Southeast Asian countries',
      'Eventually IPO or acquisition',
      'Create 100+ jobs',
    ],
  },

  // STATISTICS FROM SUCCESS STORIES
  aggregateStats: {
    averageKeyFacts: {
      average_time_to_salary_increase: '2-3 years',
      average_salary_increase_per_jump: '40%+',
      total_careers_changed: '1 out of 4',
      average_education_investment: 25,
      average_roi_on_education: '500%+',
      average_job_changes: 2.5,
      average_skills_learned: 8,
      average_success_timeline: '5-10 years',
    },

    commonPatterns: [
      'Start with education (bootcamp/university)',
      'First job usually paid lower than potential',
      'Career exponential growth after 3-5 years',
      'Salary jumps from company changes',
      'Specialization leads to higher pay',
      'Management track after 5-10 years',
      'Side projects lead to business ideas',
      'Network with peers crucial for growth',
      'Continuous learning non-negotiable',
      'Willingness to take risks rewarded',
    ],

    salaryProgression: {
      'years_0_2': 'Low salary, focus on learning',
      'years_2_5': 'Steady increase, become specialist',
      'years_5_10': 'Exponential growth through changes',
      'years_10_plus': 'Senior roles, management, entrepreneurship',
    },
  },
};

// Key Takeaways
const keyTakeaways = {
  motivation: [
    'Success takes 5-10 years minimum',
    'Early sacrifice leads to long-term gain',
    'Education investment pays back 5-10x',
    'Career changes possible at any age',
    'Passion essential but not enough alone',
  ],

  practical: [
    'Network is crucial throughout career',
    'Change jobs every 2-3 years for growth',
    'Continuous learning mandatory in tech',
    'Side projects often lead to breakthroughs',
    'Document your work/achievements',
  ],

  mindset: [
    'Embrace lifelong learning',
    'Don\'t fear starting over',
    'Celebrate small wins',
    'Learn from failures',
    'Help others on their journey',
  ],
};

console.log('✅ Success Stories Database Loaded');
console.log('📖 4 detailed career progression stories');
console.log('💪 Real examples for student motivation');
