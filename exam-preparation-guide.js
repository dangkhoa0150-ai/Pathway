/**
 * ============================================================
 * EXAM PREPARATION & TEST STRATEGY GUIDE
 * Vietnamese National Exam & International Test Preparation
 * ============================================================
 */

const examPreparationGuide = {
  // SECTION 1: VIETNAMESE NATIONAL EXAM (THPT)
  vietnameseNationalExam: {
    name: 'Kỳ thi Trung bình Trung học Phổ thông',
    type: 'National High School Graduation Exam',
    description: 'Decides university admission + scholarship eligibility',
    
    schedule: {
      'year': 'Grade 12 (Final year of high school)',
      'timing': 'June/July each year',
      'duration': '3 days (3 subjects)',
      'subjects': ['Exam subjects chosen by student'],
    },

    testFormat: {
      literature: {
        duration: '120 minutes',
        questions: 5,
        types: ['Comprehension', 'Analysis', 'Writing essay (60 min)'],
        score: '/10',
        averageScore: 6.5,
      },

      english: {
        duration: '60 minutes',
        questions: 50,
        types: ['Multiple choice', 'Listening', 'Reading comprehension'],
        score: '/10',
        averageScore: 4.5,
        difficulty: 'Equivalent to B1-B2 level',
      },

      math: {
        duration: '120 minutes',
        questions: '10 short answer + 5 extended',
        topics: ['Algebra', 'Calculus', 'Geometry', 'Probability'],
        score: '/10',
        averageScore: 5.2,
      },

      physics: {
        duration: '90 minutes',
        questions: 8,
        topics: ['Mechanics', 'Heat', 'Waves', 'Electricity', 'Modern Physics'],
        score: '/10',
        averageScore: 5.0,
      },

      chemistry: {
        duration: '90 minutes',
        questions: 8,
        topics: ['Organic chemistry', 'Inorganic chemistry', 'Chemical bonding'],
        score: '/10',
        averageScore: 5.3,
      },

      biology: {
        duration: '90 minutes',
        questions: 8,
        topics: ['Cell biology', 'Genetics', 'Evolution', 'Ecology'],
        score: '/10',
        averageScore: 5.8,
      },

      history: {
        duration: '90 minutes',
        questions: 8,
        topics: ['Vietnamese history', 'World history', 'Political systems'],
        score: '/10',
        averageScore: 6.2,
      },

      geography: {
        duration: '90 minutes',
        questions: 8,
        topics: ['Physical geography', 'Human geography', 'Vietnam geography'],
        score: '/10',
        averageScore: 6.0,
      },
    },

    admissionUse: {
      description: 'National Exam score + grade 12 GPA determine university admission',
      scoring: 'National exam score: 30%, Grade 12 score: 70%',
      cutoff: {
        'Bach Khoa Hanoi': 27,
        'Bachelor Khoa HCMC': 26,
        'National Economics': 25,
        'RMIT': 22,
        'FPT University': 18,
      },
    },

    preparationStrategy: {
      timeline: {
        'grade_10': [
          'Build strong foundation in all subjects',
          'Focus on understanding concepts',
          'Practice problem-solving regularly',
          'Average 2 hours study/day',
        ],
        'grade_11': [
          'Deepen knowledge in strong subjects',
          'Identify weak areas early',
          'Start practice tests',
          'Increase to 3 hours study/day',
          'Join tutoring for weak subjects',
        ],
        'grade_12_first_semester': [
          'Complete all curriculum coverage',
          'Do 2-3 practice tests/month',
          'Focus on weak subjects',
          'Study 4-5 hours/day',
          'Take mock exams monthly',
        ],
        'grade_12_second_semester': [
          'Intensive practice tests (weekly)',
          'Focus on exam technique',
          'Master time management',
          'Study 5-7 hours/weekdays, 10+ hours weekends',
          'Practice full exams under timed conditions',
          'Review mistakes thoroughly',
        ],
        'final_month': [
          'Intensive review of weak topics',
          'Daily practice tests',
          'Master test-taking strategy',
          '8+ hours study daily',
          'Ensure adequate sleep & nutrition',
        ],
      },

      studyMethods: {
        passiveLearning: [
          'Read textbook chapters',
          'Watch educational videos (Khan Academy, YouTube)',
          'Attend class lectures',
          'Take notes in class',
        ],

        activeLearning: [
          'Practice problems daily',
          'Do past exam papers (at least 10 per subject)',
          'Participate in study groups',
          'Teach material to others',
          'Create summary notes/mind maps',
        ],

        testSpecific: [
          'Practice under timed conditions',
          'Simulate full exam day (3 subjects back-to-back)',
          'Review mistakes within 24 hours',
          'Analyze patterns in wrong answers',
          'Master time allocation per question',
        ],
      },

      resourcesRecommended: {
        books: [
          'Official past exam papers (5+ years)',
          'Subject-specific preparation books',
          'Formula/concept summary books',
          'Full-length practice test compilations',
        ],

        online: [
          'Khan Academy Vietnam (free)',
          'Tuyensinh.vn (test database)',
          'Moonmath.com.vn (math practice)',
          'Various YouTube channels with exam prep',
        ],

        tutoring: {
          cost: '0.2-1 million/hour',
          recommendations: [
            'Focus tutoring on 1-2 weakest subjects',
            'Use tutors for 3-6 months before exam',
            'Group tutoring cheaper than 1-on-1',
          ],
        },
      },

      examTakingStrategy: {
        beforeExam: [
          'Get 8 hours sleep night before',
          'Eat nutritious breakfast',
          'Arrive 30 minutes early',
          'Do light review (not cramming)',
          'Calm breathing exercises',
        ],

        duringExam: [
          'Read ALL instructions before starting',
          'Allocate time per question (calculate pace)',
          'Do easy questions first (build confidence)',
          'Leave challenging questions for end',
          'Check answers (read to verify not recalculate)',
          'Never leave blanks (partial credit possible)',
        ],

        literatureEssay: [
          'Outline essay structure (5-10 min)',
          'Introduction: thesis statement clear',
          'Body: 3-5 supporting paragraphs with examples',
          'Conclusion: restate thesis + broader implication',
          'Proofread carefully (spelling/grammar crucial)',
        ],

        mathExam: [
          'Show all work (partial credit if answer wrong)',
          'Box final answers clearly',
          'Use significant figures appropriately',
          'Check answer reasonableness',
          'Don\'t get stuck (move on, return if time)',
        ],

        englishListening: [
          'Preview questions before listening',
          'Take notes during first listen',
          'Understand question type (main idea, detail, inference)',
          'Listen for keywords',
          'Some sections play twice',
        ],
      },

      psychologicalPreparation: [
        'Manage exam anxiety (meditation, exercise)',
        'Build confidence through practice',
        'Maintain growth mindset',
        'Focus on effort not just results',
        'Visualize successful exam performance',
        'Remember: exams test knowledge, not worth',
      ],
    },

    failureRecovery: {
      if_score_below_target: [
        'Option 1: Retake exam next year (allowed in Vietnam)',
        'Option 2: Apply to less competitive university (FPT, Phenikaa)',
        'Option 3: Pursue bootcamp/vocational path',
        'Option 4: Study abroad (IELTS/SAT instead)',
      ],

      improvement_strategy: [
        'Analyze which subjects below target',
        'Focus tutoring on weak subjects',
        'Study 10+ hours daily for retry',
        'Learn from previous mistakes',
        'Maintain confidence (many improve on 2nd try)',
      ],
    },
  },

  // SECTION 2: INTERNATIONAL EXAMS
  internationalExams: {
    // IELTS Exam
    ielts: {
      name: 'IELTS (International English Language Testing System)',
      use: 'English proficiency for universities, immigration, work',
      score: '/9.0',
      validity: '2 years',
      cost: 7,
      
      testFormat: {
        listeningSection: {
          duration: '30 minutes + 10 minute transfer',
          questions: 40,
          content: 'Conversations, lectures, announcements',
          difficulty: 'Graduated (A2 to C1)',
          sections: [
            'Section 1: Casual conversation (2 speakers)',
            'Section 2: Monologue (e.g., public service announcement)',
            'Section 3: Academic discussion (4 speakers)',
            'Section 4: University lecture',
          ],
        },

        readingSection: {
          duration: '60 minutes',
          questions: 40,
          types: ['Multiple choice', 'True/False/Not Given', 'Matching', 'Diagram labeling'],
          passages: '3 passages (increasing difficulty)',
          wordCount: '2000-2750 total words',
        },

        writingSection: {
          duration: '60 minutes',
          tasks: [
            'Task 1 (20 min): Describe graph/table/diagram (150+ words)',
            'Task 2 (40 min): Essay response to question (250+ words)',
          ],
          grammarFocus: 'Vocabulary, grammar, coherence',
        },

        speakingSection: {
          duration: '11-14 minutes total',
          format: 'Face-to-face conversation with examiner',
          parts: [
            'Part 1 (4-5 min): Personal interview',
            'Part 2 (3-4 min): Topic card (speak 2 min, prepare 1 min)',
            'Part 3 (4-5 min): Follow-up discussion on topic',
          ],
        },
      },

      scoreInterpreted: {
        '9.0': 'Expert user - mastery of English',
        '8.0-8.5': 'Very good user - minor inaccuracies',
        '7.0-7.5': 'Good user - operational command',
        '6.0-6.5': 'Competent user - satisfactory despite some mistakes',
        '5.0-5.5': 'Modest user - manages most situations',
        '4.0-4.5': 'Limited user - frequent problems',
        '3.0-3.5': 'Extremely limited user - breaks down frequently',
      },

      requiredScores: {
        'Top UK universities': 7.5,
        'Tier 2 universities': 7.0,
        'Australia universities': 6.5,
        'Canada universities': 6.0,
        'Vietnam bootcamps': '5.5-6.0',
      },

      preparationPath: {
        timeline: {
          'initial_assessment': 'Take practice test (diagnostic)',
          'weeks_1_4': 'Learn test format & strategies (2 hours/day)',
          'weeks_5_8': 'Focus on weak areas (3 hours/day)',
          'weeks_9_12': 'Full practice tests weekly (4-5 hours/day)',
          'final_week': 'Light review & rest',
        },

        studyResources: [
          'Official IELTS practice material (Cambridge 1-18)',
          'Online practice (IELTSLiz.com - free lessons)',
          'Speaking practice partners (language exchange)',
          'Mock tests (2-3 before actual test)',
        ],

        weakArea_listening: {
          challenge: 'Different accents, fast speech, short time',
          strategies: [
            'Watch English movies/series with subtitles',
            'Train ear to different accents',
            'Practice predicting answers before listening',
            'Note-taking while listening (practice)',
          ],
        },

        weakArea_reading: {
          challenge: 'Time pressure, complex passages, detail questions',
          strategies: [
            'Skim first (understand main idea)',
            'Scan for specific information',
            'Understand question types well',
            'Time management: 20 min per

 passage',
          ],
        },

        weakArea_writing: {
          challenge: 'Task 1 description, Task 2 essay structure, band score precision',
          strategies: [
            'Learn model essay structures',
            'Expand vocabulary in writing',
            'Practice over 20 full writing test',
            'Get feedback from native speakers',
          ],
        },

        weakArea_speaking: {
          challenge: 'Anxiety, fluency, lack of practice',
          strategies: [
            'Do mock speaking tests with timer',
            'Find conversation partners online',
            'Record yourself speaking (listen for mistakes)',
            'Practice Part 2 topic (this is common weakness)',
          ],
        },
      },

      costConsiderations: {
        exam_fee: 7,
        preparation_course: '2-10',
        private_tutoring: '0.2-1 per hour',
        practice_materials: '0.5-2',
        total_budget: '10-20',
      },

      targetScore_strategy: {
        forBand7: {
          estimated_hours: '400-500',
          timeline: '3-4 months',
          requires: 'Strong English foundation required',
        },

        forBand6: {
          estimated_hours: '250-350',
          timeline: '2-3 months',
          requires: 'Intermediate English (high school graduate level)',
        },

        forBand5: {
          estimated_hours: '150-250',
          timeline: '4-12 weeks',
          requires: 'Basic English knowledge',
        },
      },
    },

    // SAT/ACT
    satAct: {
      name: 'SAT / ACT (US standardized tests)',
      use: 'US/Canada/international university admission',
      availability: 'Multiple times per year',
      cost: '50-60',

      satFormat: {
        duration: '3 hours (without essay)',
        sections: [
          'Evidence-Based Reading & Writing (154)',
          'Math (200)',
        ],
        scoreRange: '400-1600',
        contentFocus: 'College readiness skills',
      },

      actFormat: {
        duration: '3 hours (without writing)',
        sections: [
          'English (75 min, 75 questions)',
          'Math (60 min, 60 questions)',
          'Reading (35 min, 40 questions)',
          'Science (35 min, 40 questions)',
          'Optional Writing (40 min)',
        ],
        scoreRange: '1-36',
        contentFocus: 'General knowledge',
      },

      vietnamContext: {
        availability: 'Limited test centers (Ho Chi Minh, Hanoi, Da Nang)',
        preparation: 'Mostly self-study (fewer classes than IELTS)',
        costImplications: 'Higher than IELTS due to international exam',
        useCases: 'Mainly for US/top universities',
      },
    },

    // GRE & GMAT
    graduateExams: {
      gre: {
        name: 'GRE (Graduate Record Examination)',
        use: 'Graduate school admission (Masters/PhD)',
        scoreRange: '260-340',
        validity: '5 years',
        cost: 15,

        sections: [
          {
            name: 'Verbal Reasoning',
            duration: '2 sections, 20 min each',
            questions: 'Reading comprehension, text completion, sentence equivalence',
          },
          {
            name: 'Quantitative Reasoning',
            duration: '2 sections, 35 min each',
            questions: 'Algebra, geometry, data analysis',
          },
          {
            name: 'Analytical Writing',
            duration: '2 essays, 30 min each',
            focus: 'Essay writing & argument analysis',
          },
        ],

        targetScores: {
          'Top US programs (MIT, Stanford)': 320,
          'Good US programs': 310,
          'Average': 300,
        },

        preparationTime: '3-6 months',
      },

      gmat: {
        name: 'GMAT (Graduate Management Admission Test)',
        use: 'MBA program admission',
        scoreRange: '200-800',
        validity: '5 years',
        cost: 16,

        sections: [
          'Analytical Writing (1 essay, 30 min)',
          'Integrated Reasoning (12 questions, 30 min)',
          'Quantitative (31 questions, 62 min)',
          'Verbal (36 questions, 65 min)',
        ],

        targetScores: {
          'Top MBA programs': 700,
          'Good MBA programs': 650,
          'Average': 600,
        },
      },
    },
  },

  // SECTION 3: EXAM ANXIETY MANAGEMENT
  examAnxietyManagement: {
    symptoms: [
      'Excessive worry about exams',
      'Physical symptoms (headache, stomach pain, sleep issues)',
      'Difficulty concentrating',
      'Blank mind during test (despite knowing material)',
      'Procrastination and avoidance',
      'Sleep disruption',
    ],

    solutions: {
      cognitiveStrategies: [
        'Challenge negative thoughts ("I will fail" → "I can pass with effort")',
        'Set realistic goals (not perfection)',
        'Focus on what you can control (effort)',
        'Practice positive self-talk',
        'Visualize successful exam performance',
      ],

      stressReduction: [
        'Regular exercise (30 min, 5x/week)',
        'Meditation/mindfulness (10-15 min daily)',
        'Deep breathing exercises (especially day before)',
        'Adequate sleep (8 hours minimum)',
        'Balanced diet (avoid excessive caffeine/sugar)',
      ],

      technicalPreparation: [
        'Over-prepare (know material thoroughly)',
        'Practice full tests under timed conditions',
        'Review past exams (understand patterns)',
        'Arrive early on exam day (reduce anxiety)',
        'Get familiar with test center/location',
      ],

      supportSystems: [
        'Study group (peer support)',
        'Mentor/teacher guidance',
        'Counselor or therapist (if severe)',
        'Family support & understanding',
        'Online communities (exam preparation forums)',
      ],
    },

    dayOfExamTips: [
      '8+ hours sleep night before',
      'Breakfast with protein/complex carbs',
      'Light coffee if needed (not excessive)',
      'Arrive 30 minutes early',
      'Do light stretching/breathing exercises',
      'Avoid cramming last minute',
      'Positive affirmations',
      'Remember: you've prepared well',
    ],
  },

  // SECTION 4: POST-EXAM STRATEGIES
  postExamPlanning: {
    afterReceivingScores: {
      analysis: [
        'Analyze which sections were weak',
        'Identify parity patterns in wrong answers',
        'Assess if score matches preparation level',
        'Decide: accept score or retake?',
      ],

      decisionRetake: {
        considerRetaking: [
          'Score significantly below target',
          'Specific sections pulling you down',
          'Performance below practice tests',
          'Time pressure was issue',
        ],

        considerNotRetaking: [
          'Score meets target',
          'Limited improvement from retake likely',
          'Cost not worth marginal gain',
          'Time better spent on other priorities',
        ],

        timing: 'Usually wait 1-2 months before retaking (incorporate feedback)',
      },
    },

    scoreSendingStrategy: {
      timing: 'Send scores strategically (most exams allow free sends)',
      priority: 'Send to safety schools first, then reach schools',
      deadlines: 'Check application deadlines before sending',
      backup: 'Have backup schools in case scores lower than expected',
    },
  },
};

// Study Schedule Template
const studyScheduleTemplate = {
  dailyRoutine: {
    morning: {
      time: '6:00-7:00 AM',
      activity: 'Physical exercise (helps mental clarity)',
    },
    focusSession1: {
      time: '7:30-10:00 AM',
      activity: 'Deep study (2.5 hours)',
      task: 'New material or challenging concepts',
    },
    break1: {
      time: '10:00-10:30 AM',
      activity: 'Break (move, eat, hydrate)',
    },
    focusSession2: {
      time: '10:30-1:00 PM',
      activity: 'Practice problems (2.5 hours)',
      task: 'Apply concepts learned',
    },
    lunch: {
      time: '1:00-2:30 PM',
      activity: 'Lunch & rest',
    },
    focusSession3: {
      time: '2:30-5:00 PM',
      activity: 'Review & consolidation (2.5 hours)',
      task: 'Revisit weak areas',
    },
    break2: {
      time: '5:00-6:00 PM',
      activity: 'Break (physical activity recommended)',
    },
    evening: {
      time: '6:00-8:00 PM',
      activity: 'Light review or second subject',
      intensity: 'Lower than day sessions',
    },
    night: {
      time: '8:00+ PM',
      activity: 'Rest, dinner, relaxation',
      sleep: 'Aim for 8 hours sleep',
    },
  },

  weekly_structure: {
    monday_wednesday_friday: 'Heavy study days (8-10 hours)',
    tuesday_thursday: 'Moderate study (5-6 hours)',
    saturday: 'Full practice test day (mimic exam conditions)',
    sunday: 'Rest, review weak areas, light prep for week',
  },

  monthlyCheckpoints: [
    'Week 1: Assess strength/weakness',
    'Week 2: Focus on weaker areas',
    'Week 3: Full practice test',
    'Week 4: Review, adjust strategy, celebrate progress',
  ],
};

console.log('✅ Exam Preparation Guide Loaded');
console.log('📝 Vietnamese & International exams covered');
console.log('🎯 Complete preparation strategies available');
