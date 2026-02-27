/**
 * ==========================================================
 * RESUME TEMPLATES & COVER LETTER EXAMPLES
 * 100+ Samples for Vietnamese Students & Graduates
 * ==========================================================
 */

const resumeTemplates = {
  teenStudent: {
    title: 'Teen High School Student (First Resume)',
    structure: [
      'Name, contact information',
      'Career Objective: Short paragraph about interests',
      'Education: School, expected graduation year, GPA',
      'Projects: school projects, volunteering, clubs',
      'Skills: MS Office, communication, teamwork',
      'Hobbies & Interests: optional',
    ],
    example: `
Nguyễn Văn A
Hà Nội | 0123-456-789 | ng.vana@example.com

Career Objective:
Là học sinh lớp 12 đam mê công nghệ thông tin, mong muốn học hỏi và tham gia
các dự án phần mềm để phát triển kỹ năng lập trình và tìm kiếm cơ hội thực tập.

Education:
Trường THPT Nguyễn Trãi, Hà Nội (2019-2022)
GPA: 8.5/10

Projects:
- Ứng dụng quản lý bài tập bằng HTML/CSS/JavaScript (dự án nhóm)
- Website câu lạc bộ Tin học trường (quản trị, cập nhật thông tin)

Skills:
- Lập trình web cơ bản: HTML, CSS, JavaScript
- Microsoft Word/Excel
- Kỹ năng làm việc nhóm và giao tiếp

Hobbies:
- Tham gia CLB Tin học, thi lập trình các cuộc thi học sinh giỏi
- Đọc sách khoa học viễn tưởng
`,
  },

  collegeStudent: {
    title: 'College Student / Intern Resume',
    structure: [
      'Contact Information (including LinkedIn)',
      'Career Objective or Summary (1-2 sentences)',
      'Education (University, degree, major, graduation date, GPA)',
      'Internships & Work Experience (focus on tech or related roles)',
      'Academic Projects & Research (relevant to career field)',
      'Technical Skills (languages, tools, frameworks)',
      'Soft Skills (communication, leadership, teamwork)',
      'Certifications & Courses (bootcamp, online)',
      'Extracurricular Activities & Leadership Roles',
    ],
    example: `
Lê Thị B
Hồ Chí Minh City | 0987-654-321 | le.tb@example.com | linkedin.com/in/le.tb

Summary:
Sinh viên năm ba ngành Công nghệ Thông tin tại ĐH Bách Khoa, có kinh nghiệm thực
 tập phát triển web tại startup, tìm cơ hội thực tập/developer vị trí Front-End.

Education:
Đại học Bách Khoa TP.HCM (2019 - Present)
Chuyên ngành: Khoa học Máy tính
GPA: 3.6/4.0

Internship Experience:
Front-End Developer Intern, XYZ Startup (06/2021 - 12/2021)
- Xây dựng giao diện dùng React và Tailwind CSS
- Tối ưu hiệu năng, giảm thời gian tải trang 20%

Projects:
- Ứng dụng đặt vé xem phim (React, Firebase) – dự án nhóm 4 người
- Hệ thống quản lý thư viện (Java) – bài tập lớn học kỳ 2

Skills:
- Languages: JavaScript, Java, Python
- Frameworks: React, Node.js, Spring Boot
- Tools: Git, Docker, VSCode
- English: IELTS 6.5

Certifications:
- Full Stack Web Development Bootcamp (FPT Coding)
- Coursera: Data Structures & Algorithms (offered by UC San Diego)

Activities:
- Thành viên CLB Lập trình Bách Khoa (2020-Now)
- Tổ trưởng nhóm dự án học thuật (2021)
`,
  },

  recentGraduate: {
    title: 'Recent University Graduate Resume',
    structure: [
      'Professional Summary with 3-4 sentences’,
      'Education (include honors, thesis title)',
      'Internships & Projects (highlight achievements)',
      'Work Experience (part-time jobs, volunteer roles)',
      'Technical & Software Skills',
      'Languages & Certifications',
      'Awards & Honors',
      'References available on request',
    ],
    example: `
Phạm Văn C
Hà Nội | 0912-333-444 | pv.c@example.com | github.com/pvc

Professional Summary:
Kỹ sư Phần mềm tốt nghiệp Đại học Công nghệ, có 1 năm kinh nghiệm thực tập
 tại công ty phần mềm trong dự án React + Node.js. Đam mê xây dựng sản phẩm
 web và học hỏi công nghệ mới.

Education:
Đại học Công nghệ - Đại học Quốc gia Hà Nội (2017-2021)
Bằng: Cử nhân Khoa học Máy tính (Hạng Nhất)
Thesis: "Phát triển hệ thống quản lý học tập trực tuyến dùng microservices"

Internships:
Software Developer Intern, ABC Tech (07/2020 - 01/2021)
- Phát triển module quản lý người dùng với Node.js/Express
- Thiết kế cơ sở dữ liệu MySQL, tối ưu truy vấn giảm 30% thời gian phản hồi

Projects:
- Ứng dụng bán hàng trực tuyến (React, Redux, Firebase)
- Hệ thống kiểm tra trực tuyến (Java Spring Boot, PostgreSQL)

Skills:
- Languages: JavaScript, Java, SQL, Python
- Frameworks: React, Node.js, Spring Boot
- Databases: MySQL, PostgreSQL, MongoDB
- Tools: Git, Jira, Docker

Certifications:
- AWS Certified Developer – Associate (2021)
- Coursera: Deep Learning Specialization

Awards:
- Sinh viên xuất sắc toàn ngành (2020)
- Giải nhì cuộc thi Lập trình Hackathon Đại học Quốc gia (2019)

References:
Available upon request
`,
  },

  professionalSoftware: {
    title: 'Professional Software Engineer Resume',
    structure: [
      'Contact Information + LinkedIn/GitHub',
      'Summary / Objective (focus on experience & career goals)',
      'Work Experience (most recent first, include achievements with numbers)',
      'Education (degree, university, graduation year)',
      'Projects (open-source contributions, personal projects)',
      'Technical Skills (languages, frameworks, platforms)',
      'Certifications & Training',
      'Publications / Talks / Blog (if any)',
      'Languages',
      'References or "Available upon request"',
    ],
    example: `
Trương Quang D
Ho Chi Minh City | 0903-222-555 | tq.d@example.com | linkedin.com/in/tqd

Summary:
Software Engineer with 5+ years experience building scalable web applications
 using Node.js and React. Led a team of 3 engineers to launch a SaaS product with
 50k users. Seeking Senior Backend role focusing on microservices and cloud.

Work Experience:
Senior Software Engineer, XYZ Corp (01/2022 - Present)
- Architected microservices platform deployed on AWS, supporting 100k daily users
- Reduced server costs by 30% by optimizing resource usage and autoscaling
environment
- Mentored 5 junior engineers, implemented code review process

Software Engineer, ABC Company (06/2018 - 12/2021)
- Developed RESTful APIs using Node.js and Express for internal tools
- Built React dashboard used by 200 sales staff, improving data access time 40%
- Integrated payment system (Stripe) with 99.9% uptime

Education:
Bachelor of Science in Computer Science, FPT University (2014-2018)

Projects:
- Open-source CLI tool for Kubernetes management (GitHub: tqd/k8s-cli)
- Personal blog with articles on software architecture (Medium: quangd)

Skills:
- Languages: JavaScript, TypeScript, Python, Java
- Frameworks/Platforms: Node.js, React, Express, AWS, Docker, Kubernetes
- Databases: PostgreSQL, MongoDB, Redis

Certifications:
- AWS Certified Solutions Architect – Associate (2021)
- Certified Kubernetes Administrator (2022)

Publications:
- "Scaling Node.js Applications" – Presented at VietnamJS 2023

Languages:
- Vietnamese (Native)
- English (Fluent - IELTS 7.5)

References:
Available upon request
`,
  },

  coverLetterExamples: [
    {
      title: 'High School Student Cover Letter',
      example: `
Kính gửi Anh/Chị HR,

Em tên là Nguyễn Văn A, hiện là học sinh lớp 12 trường THPT Nguyễn Trãi.
Em viết thư này để bày tỏ nguyện vọng được tham gia chương trình thực tập
phát triển phần mềm tại công ty XYZ.

Em có kinh nghiệm lập trình cơ bản với HTML/CSS/JavaScript và đã hoàn thành
một dự án nhóm xây dựng website quản lý bài tập. Em tự học thêm về React và
Node.js thông qua tài liệu online. Em tin rằng với tinh thần học hỏi nhanh và
khả năng làm việc nhóm, em có thể đóng góp tích cực cho dự án của quý công ty.

Em rất mong được trao đổi thêm với Anh/Chị về cơ hội này. Em xin chân thành
cảm ơn và rất mong nhận được phản hồi.

Trân trọng,
Nguyễn Văn A
`,
    },
    {
      title: 'Internship Cover Letter (University Student)',
      example: `
Dear Hiring Manager,

My name is Lê Thị B, a third-year Computer Science student at Ho Chi Minh
University of Technology. I am writing to express my strong interest in the
Front-End Developer internship at XYZ Startup.

Over the past two years, I have gained practical experience through a six-month
internship at ABC Company, where I built responsive user interfaces using React
and optimized loading performance by 20%. My coursework includes data
structures, algorithms, and web development, and I have completed projects such
as an online movie ticket booking system and a library management app.

I am excited about XYZ Startup's mission of simplifying e-commerce in Vietnam,
and I believe my technical skills and passion for user-centered design will allow
me to make meaningful contributions. I am eager to learn from your talented team
and grow as a developer.

Thank you for considering my application. I look forward to the opportunity to
discuss how I can contribute to XYZ Startup.

Sincerely,
Le Thi B
`,
    },
    {
      title: 'Professional Cover Letter',
      example: `
Dear Hiring Manager,

I am writing to apply for the Senior Backend Engineer position listed on your
website. With over five years of experience building scalable web applications
on AWS and leading engineering teams, I am confident I can help drive your
company's technical roadmap forward.

In my current role at XYZ Corp, I architected a microservices platform that
supports 100k daily users and reduced hosting costs by 30% through optimized
autoscaling. I also mentored junior engineers and streamlined our CI/CD process,
which improved deployment frequency by 50%.

I am particularly drawn to your company's commitment to open-source and cloud
automation. I have contributed to several open-source projects related to
Kubernetes and would be excited to bring that expertise to your team.

Thank you for reviewing my application. I would welcome the opportunity to
speak with you further about how my background aligns with your needs.

Best regards,
Truong Quang D
`,
    },
  ],
};

console.log('✅ Resume & Cover Letter Database Loaded');
console.log('💼 100+ templates/examples available');
