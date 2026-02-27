/**
 * CAREER GUIDANCE SYSTEM - EXTENDED DOCUMENTATION
 * Comprehensive guide for students and educators
 * 
 * Tài liệu hướng dẫn chọn ngành nghề cho học sinh THPT và THCS
 * 50+ categories of detailed information about careers, education, and development
 */

/**
 * SECTION 1: CAREER ASSESSMENT FRAMEWORK
 * ========================================
 * 
 * This section provides a comprehensive framework for assessing career suitability
 * based on multiple factors including skills, interests, values, and personality traits.
 */

// 1.1 INTEREST INVENTORY
const interestCategories = {
  realistic: {
    name: 'Thực Tế (Realistic)',
    description: 'Yêu thích làm việc với các vật thể, máy móc, công cụ',
    careers: ['Kỹ sư', 'Thợ cơ khí', 'Xây dựng', 'Nông nghiệp'],
    activities: ['Sửa chữa', 'Xây dựng', 'Thiết kế kỹ thuật'],
  },
  investigative: {
    name: 'Khám Phá (Investigative)',
    description: 'Yêu thích khám phá, nghiên cứu, tìm hiểu sâu',
    careers: ['Nhà khoa học', 'Nhà toán học', 'Bác sĩ', 'Kỹ sư'],
    activities: ['Nghiên cứu', 'Phân tích', 'Giải quyết vấn đề'],
  },
  artistic: {
    name: 'Sáng Tạo (Artistic)',
    description: 'Yêu thích sáng tạo, biểu hiện bản thân',
    careers: ['Thiết kế', 'Mỹ thuật', 'Âm nhạc', 'Viết văn'],
    activities: ['Vẽ', 'Nhạc', 'Sáng tác', 'Thiết kế'],
  },
  social: {
    name: 'Xã Hội (Social)',
    description: 'Yêu thích giúp đỡ con người',
    careers: ['Giáo viên', 'Tư vấn hướng dẫn', 'Công tác xã hội', 'Điều dưỡng'],
    activities: ['Giảng dạy', 'Giúp đỡ', 'Giao tiếp'],
  },
  enterprising: {
    name: 'Kinh Doanh (Enterprising)',
    description: 'Yêu thích lãnh đạo, quản lý',
    careers: ['Quản lý', 'Kinh doanh', 'Marketing', 'Bán hàng'],
    activities: ['Lãnh đạo', 'Thuyết trình', 'Kinh doanh'],
  },
  conventional: {
    name: 'Quy Ước (Conventional)',
    description: 'Yêu thích trật tự, quy trình',
    careers: ['Kế toán', 'Thư ký', 'Quản trị hành chính', 'Tư pháp'],
    activities: ['Sắp xếp', 'Tổ chức', 'Quản lý thông tin'],
  },
};

// 1.2 SKILLS ASSESSMENT
const skillsFramework = {
  technical: {
    category: 'Kỹ Năng Kỹ Thuật',
    items: ['Lập trình', 'Thiết kế', 'Máy tính', 'Kỹ thuật'],
    importance: 'Cao',
  },
  communication: {
    category: 'Kỹ Năng Giao Tiếp',
    items: ['Thuyết trình', 'Viết lách', 'Lắng nghe', 'Thương lượng'],
    importance: 'Rất Cao',
  },
  analytical: {
    category: 'Kỹ Năng Phân Tích',
    items: ['Giải quyết vấn đề', 'Tư duy phê phán', 'Lập kế hoạch', 'Quyết định'],
    importance: 'Rất Cao',
  },
  leadership: {
    category: 'Kỹ Năng Lãnh Đạo',
    items: ['Làm việc nhóm', 'Tư duy lãnh đạo', 'Động lực', 'Ảnh hưởng'],
    importance: 'Cao',
  },
  creative: {
    category: 'Kỹ Năng Sáng Tạo',
    items: ['Tư duy sáng tạo', 'Đổi mới', 'Tuyên truyền', 'Giải pháp'],
    importance: 'Cao',
  },
};

// 1.3 VALUES ASSESSMENT
const valuesFramework = {
  achievement: {
    value: 'Thành Tích',
    description: 'Muốn đạt được sự thành công',
    relatedCareers: ['Quản lý', 'Kinh doanh', 'Khoa học'],
  },
  autonomy: {
    value: 'Tự Do',
    description: 'Muốn làm việc độc lập',
    relatedCareers: ['Freelancer', 'Khởi nghiệp', 'Tư vấn'],
  },
  helping: {
    value: 'Giúp Đỡ',
    description: 'Muốn giúp đỡ mọi người',
    relatedCareers: ['Y tế', 'Giáo dục', 'Xã hội'],
  },
  security: {
    value: 'An Toàn',
    description: 'Muốn công việc ổn định',
    relatedCareers: ['Công ty nhà nước', 'Công chức', 'Ngân hàng'],
  },
  recognition: {
    value: 'Công Nhân',
    description: 'Muốn được kỳ vọng',
    relatedCareers: ['Giáo dục', 'Truyền thông', 'Sáng tạo'],
  },
};

/**
 * SECTION 2: CAREER EXPLORATION PATHWAYS
 * =======================================
 */

const careerPathways = {
  // Pathway 1: Technology & IT
  technologyPathway: {
    name: 'Con Đường Công Nghệ Thông Tin',
    description: 'Từ lập trình viên đến CTO',
    stages: [
      {
        stage: 'Năm 1-2: Xây dựng nền tảng',
        activities: ['Học lập trình cơ bản', 'Xây dựng portfolio', 'Đóng góp open-source'],
        skills: ['Python/JavaScript', 'Git', 'Cơ bản web'],
      },
      {
        stage: 'Năm 3-5: Chuyên sâu',
        activities: ['Làm dự án thực tế', 'Học framework nâng cao', 'Leadership cơ bản'],
        skills: ['Framework nâng cao', 'Architecture', 'Mentoring'],
      },
      {
        stage: 'Năm 6-10: Lãnh đạo',
        activities: ['Quản lý dự án', 'Xây dựng đội', 'Chiến lược'],
        skills: ['Project Management', 'Team Building', 'Strategy'],
      },
      {
        stage: 'Năm 10+: Lãnh đạo cao cấp',
        activities: ['CTO/VP role', 'Chiến lược công ty', 'Khởi công ty'],
        skills: ['Strategic Thinking', 'Legacy Building', 'Vision'],
      },
    ],
  },

  // Pathway 2: Business & Management
  businessPathway: {
    name: 'Con Đường Kinh Doanh & Quản Lý',
    description: 'Từ analyst đến CEO',
    stages: [
      {
        stage: 'Năm 1-2: Học tập nền tảng',
        activities: ['Phân tích dữ liệu', 'Báo cáo', 'Hỗ trợ quản lý'],
        skills: ['Excel', 'Phân tích', 'Giao tiếp'],
      },
      {
        stage: 'Năm 3-5: Chuyên gia',
        activities: ['Quản lý dự án', 'Phát triển chiến lược', 'Lãnh đạo nhóm'],
        skills: ['PM', 'Strategy', 'Leadership'],
      },
      {
        stage: 'Năm 6-10: Quản lý',
        activities: ['Giám sát bộ phận', 'Cơ cấu lại', 'Phát triển tài năng'],
        skills: ['People Management', 'P&L', 'Vision'],
      },
      {
        stage: 'Năm 10+: CXO Level',
        activities: ['CEO/COO', 'Ma trận chiến lược', 'M&A'],
        skills: ['Strategic', 'Legacy', 'Governance'],
      },
    ],
  },

  // Pathway 3: Healthcare
  healthcarePathway: {
    name: 'Con Đường Y Tế & Sức Khỏe',
    description: 'Từ thực tập sinh đến chuyên gia tư nhân',
    stages: [
      {
        stage: 'Năm học & Thực tập (5-6 năm)',
        activities: ['Học lý thuyết', 'Thực tập lâm sàng', 'Thi cấp bằng'],
        skills: ['Medical Knowledge', 'Clinical Skills'],
      },
      {
        stage: 'Năm 1-3: Bác sĩ/Y sĩ mới',
        activities: ['Khám bệnh', 'Điều trị', 'Học chuyên khoa'],
        skills: ['Patient Care', 'Diagnosis', 'Communication'],
      },
      {
        stage: 'Năm 4-10: Chuyên gia',
        activities: ['Chuyên khoa sâu', 'Dạy học', 'Nghiên cứu'],
        skills: ['Specialty', 'Research', 'Teaching'],
      },
      {
        stage: 'Năm 10+: Chuyên gia cao cấp',
        activities: ['Giáo sư', 'Tư vấn tư nhân', 'Lãnh đạo khoa'],
        skills: ['Expert', 'P&L', 'Leadership'],
      },
    ],
  },

  // Pathway 4: Creative Industries
  creativePathway: {
    name: 'Con Đường Các Ngành Sáng Tạo',
    description: 'Từ freelancer đến creative director',
    stages: [
      {
        stage: 'Năm 1-2: Xây dựng portfolio',
        activities: ['Học design/content', 'Freelance', 'Xây dựng hồ sơ'],
        skills: ['Design Tools', 'Creativity', 'Self-promotion'],
      },
      {
        stage: 'Năm 3-5: Chuyên gia',
        activities: ['Công ty agency', 'Dự án lớn', 'Chuyên môn sâu'],
        skills: ['Advanced Design', 'Project Management', 'Client Management'],
      },
      {
        stage: 'Năm 6-10: Lãnh đạo',
        activities: ['Creative Lead', 'Quản lý dự án', 'Strategy'],
        skills: ['Leadership', 'Strategy', 'Vision'],
      },
      {
        stage: 'Năm 10+: Lãnh đạo cao cấp',
        activities: ['Creative Director', 'Khởi công ty', 'Mentoring'],
        skills: ['Strategic', 'Legacy', 'Innovation'],
      },
    ],
  },
};

/**
 * SECTION 3: EDUCATION PATHWAYS & OPTIONS
 * ======================================
 */

const educationPathways = {
  universityPath: {
    name: 'Con Đường Đại Học Truyền Thống',
    duration: '4 năm',
    cost: '0-150 triệu VND',
    advantages: ['Bằng chính thức', 'Kết nối', 'Hoàn thành kiến thức'],
    disadvantages: ['Thời gian dài', 'Chi phí cao', 'Lý thuyết nhiều'],
    suitableFor: ['Các ngành Y, Luật, Kỹ thuật', 'Tìm việc công ty lớn'],
    topUniversities: [
      'ĐH Bách Khoa HN',
      'ĐH Công Nghệ (ĐUQG HN)',
      'ĐH Ngoại Thương',
      'FPT University',
      'RMIT Vietnam',
    ],
  },

  bootcampPath: {
    name: 'Con Đường Bootcamp',
    duration: '3-6 tháng',
    cost: '25-50 triệu VND',
    advantages: ['Nhanh', 'Thực tế', 'Job guarantee cao'],
    disadvantages: ['Sâu kém', 'Chi phí', 'Chỉ một ngành'],
    suitableFor: ['Lập trình', 'Design', 'Thay đổi sự nghiệp nhanh'],
    topBootcamps: [
      'FPT Coding',
      'TechKids',
      'Code2Startup',
      'RisingCamp',
      'Taloha',
    ],
  },

  onlinePath: {
    name: 'Con Đường Học Online',
    duration: '1-12 tháng',
    cost: '5-30 triệu VND',
    advantages: ['Linh hoạt', 'Rẻ', 'Tự do học'],
    disadvantages: ['Kém động lực', 'Chứng chỉ yếu', 'Không hỗ trợ việc làm'],
    suitableFor: ['Kỹ năng bổ sung', 'Nâng cao kiến thức'],
    topPlatforms: [
      'Udemy',
      'Coursera',
      'Linkedin Learning',
      'Codecademy',
      'DataCamp',
    ],
  },

  vocationalPath: {
    name: 'Con Đường Trường Cao Đẳng',
    duration: '2-3 năm',
    cost: '0-50 triệu VND',
    advantages: ['Thực tế', 'Chi phí vừa phải', 'Sắp vào việc'],
    disadvantages: ['Tương lai giới hạn', 'Nâng học vất', 'Lương thấp'],
    suitableFor: ['Kỹ thuật, Công nhân kỹ thuật'],
    topSchools: ['HVKTQS', 'CTIM', 'Trường CĐ Cơ Khí'],
  },

  apprenticeshipPath: {
    name: 'Con Đường Học Từng',
    duration: '2-4 năm',
    cost: '0-10 triệu VND',
    advantages: ['Kiếm tiền', 'Thực tế', 'Tuyển dụng trực tiếp'],
    disadvantages: ['Không bằng', 'Hạn chế nâng cao'],
    suitableFor: ['Thủ công, Kỹ spécialité'],
  },

  combinedPath: {
    name: 'Con Đường Kết Hợp',
    duration: '3-7 năm',
    cost: '30-100 triệu VND',
    advantages: ['Toàn diện', 'Linh hoạt', 'Chứng chỉ đa dạng'],
    disadvantages: ['Khó khăn', 'Chi phí cao'],
    suitableFor: ['Những ai muốn chắc chắn nhất'],
    example: 'Đại học + Bootcamp + Chứng chỉ chuyên biệt',
  },
};

/**
 * SECTION 4: KEY STATISTICS & MARKET TRENDS
 * ==========================================
 */

const marketStatistics = {
  jobGrowth: {
    'IT/Software': '12% per year',
    'Data Science': '36% per year',
    'Healthcare': '15% per year',
    'Finance': '5% per year',
    'Marketing': '8% per year',
  },

  averageSalaries: {
    'Data Scientist': '30-50 triệu VND',
    'Software Engineer': '20-40 triệu VND',
    'Product Manager': '35-60 triệu VND',
    'UX Designer': '15-30 triệu VND',
    'Marketing Manager': '25-45 triệu VND',
  },

  skillsInDemand: [
    'Python Programming',
    'Cloud Computing (AWS, Azure, GCP)',
    'Data Analysis & ML',
    'Project Management',
    'Communication Skills',
    'Problem Solving',
    'Agile Methodology',
    'Cybersecurity',
  ],

  companiesHiring: [
    { name: 'FPT', industries: ['IT', 'Software', 'Services'] },
    { name: 'Viettel', industries: ['Telecom', 'IT', 'Construction'] },
    { name: 'VNG', industries: ['IT', 'Entertainment', 'E-commerce'] },
    { name: 'Google Vietnam', industries: ['IT', 'Marketing', 'Sales'] },
    { name: 'Microsoft Vietnam', industries: ['IT', 'Cloud', 'Support'] },
  ],
};

/**
 * SECTION 5: PRACTICAL TIPS & STRATEGIES
 * ====================================
 */

const practicalStrategies = {
  resumeBuilding: {
    title: 'Xây Dựng CV Hiệu Quả',
    steps: [
      'Sử dụng format chuyên nghiệp',
      'Focus vào thành tích, không nhiệm vụ',
      'Customize cho từng job',
      'Sử dụng từ khóa công ty tìm kiếm',
      'Kiểm tra lại kỹ lưỡng',
    ],
  },

  interviewPrep: {
    title: 'Chuẩn Bị Phỏng Vấn',
    steps: [
      'Nghiên cứu công ty',
      'Chuẩn bị câu hỏi phổ biến',
      'Thực hành STAR method',
      'Chuẩn bị câu hỏi để hỏi nhà tuyển dụng',
      'Thực hành với bạn bè',
    ],
  },

  networkingTips: {
    title: 'Xây Dựng Mạng Lưới',
    strategies: [
      'Tham gia sự kiện ngành',
      'Kết nối trên LinkedIn',
      'Tham gia cộng đồng chuyên ngành',
      'Tìm mentor trong ngành',
      'Giữ liên lạc với cấu đạo',
    ],
  },

  skillDevelopment: {
    title: 'Phát Triển Kỹ Năng',
    approach: [
      'Xác định kỹ năng cần thiết',
      'Tìm nguồn học tập (online/offline)',
      'Thực hành thường xuyên',
      'Xây dựng portfolio/project',
      'Yêu cầu feedback từ chuyên gia',
    ],
  },
};

/**
 * SECTION 6: COMMON MISTAKES TO AVOID
 * ===================================
 */

const commonMistakes = [
  {
    mistake: 'Chọn ngành vì lương cao mà không yêu thích',
    consequence: 'Burnout, không hạnh phúc',
    solution: 'Cân bằng lương với passion',
  },
  {
    mistake: 'Không chuẩn bị từ sớm',
    consequence: 'Lộn xộn, chọn sai',
    solution: 'Bắt đầu khám phá từ lớp 9, 10',
  },
  {
    mistake: 'Chỉ học lý thuyết, không thực tập',
    consequence: 'Không có kinh nghiệm thực tế',
    solution: 'Tìm thực tập, project, freelance',
  },
  {
    mistake: 'Không phát triển kỹ năng mềm',
    consequence: 'Không nâng cao được',
    solution: 'Tập giao tiếp, lãnh đạo, v.v.',
  },
  {
    mistake: 'Bỏ cuộc khi gặp khó khăn',
    consequence: 'Không hoàn thành mục tiêu',
    solution: 'Kiên trì, tìm hỗ trợ',
  },
];

/**
 * SECTION 7: FINAL RECOMMENDATIONS
 * ===============================
 */

const finalRecommendations = {
  forHighSchoolStudents: [
    'Bắt đầu khám phá ngành từ lớp 9-10',
    'Thăm các trường đại học',
    'Nói chuyện với người làm ngành',
    'Làm các bài test tương thích',
    'Tham gia lớp bồi dưỡng',
    'Xây dựng kỹ năng mềm',
  ],

  beforeApplying: [
    'Xác định 3-5 ngành yêu thích',
    'Nghiên cứu yêu cầu tuyển sinh',
    'Chuẩn bị hồ sơ từ sớm',
    'Ôn tập kiên trì',
    'Chuẩn bị tâm lý cho kỳ thi',
    'Có kế hoạch dự phòng',
  ],

  duringUniversity: [
    'Học tốt kiến thức cơ bản',
    'Tham gia hoạt động ngoài khóa',
    'Tìm thực tập tại công ty',
    'Xây dựng portfolio/project',
    'Phát triển kỹ năng bổ sung',
    'Xây dựng mạng lưới chuyên gia',
  ],

  afterGraduation: [
    'Chuẩn bị CV và phỏng vấn kỹ',
    'Ứng tuyển rộng rãi',
    'Tham gia sự kiện ngành',
    'Tiếp xúc với nhà tuyển dụng',
    'Liên tục học tập',
    'Xây dựng brand cá nhân',
  ],
};

/**
 * END OF EXTENDED DOCUMENTATION
 * This file demonstrates extensive documentation structure
 * and can be expanded further with more specific information
 */
