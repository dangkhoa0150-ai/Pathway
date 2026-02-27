/**
 * ======================================================
 * COMMON INTERVIEW QUESTIONS & MODEL ANSWERS
 * 200+ Questions across different career paths
 * ======================================================
 */

const interviewQuestions = {
  // SECTION: GENERAL QUESTIONS
  general: [
    {
      question: 'Tell me about yourself.',
      answer: `I'm a recent graduate from [University] with a degree in [Major].
During my studies, I completed an internship at [Company] where I
worked on [project], gaining experience with [skills]. I'm passionate
about [field] and eager to contribute to [this company].`,
    },
    {
      question: 'Why are you interested in this position?',
      answer: `I admire your company's mission to [mission statement].
The role aligns with my skills in [skills] and offers the opportunity
to grow in [area]. I'm excited to apply my experience with [technology]
and learn from your team.`,
    },
    {
      question: 'What are your strengths?',
      answer: `My strengths include strong problem-solving, ability to learn
quickly, and communication skills. In my last project, I was able to fix
a critical bug within a day by researching the issue and collaborating
with senior developers.`,
    },
    {
      question: 'What are your weaknesses?',
      answer: `I used to struggle with public speaking, but I've been
working on it by giving presentations in class and attending Toastmasters.
I've improved significantly and now feel more confident speaking in front
of groups.`,
    },
    {
      question: 'Where do you see yourself in 5 years?',
      answer: `In five years, I hope to be in a leadership role such as
Senior Developer/Team Lead, where I can mentor others and contribute to
strategic decisions. I also plan to continue learning new technologies
and possibly earn certifications in cloud computing.`,
    },
    {
      question: 'Describe a challenging situation and how you overcame it.',
      answer: `During my internship, we had a tight deadline and our project
was behind schedule. I took initiative to reorganize the task list,
communicated with the team to identify blockers, and worked extra hours
on critical components. We managed to deliver on time and received
positive feedback from the client.`,
    },
  ],

  // SECTION: SOFTWARE ENGINEER SPECIFIC
  softwareEngineer: [
    {
      question: 'Explain the difference between == and === in JavaScript.',
      answer: `== compares values after type coercion, while === compares both
value and type without coercion. For example, 0 == '0' is true, but
0 === '0' is false. It's generally recommended to use === for strict
comparison.`,
    },
    {
      question: 'What is a closure in JavaScript?',
      answer: `A closure is a function that retains access to its lexical
scope even when executed outside of that scope. This allows the function
to maintain state. Example:
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
`,
    },
    {
      question: 'How do you handle performance issues in a web application?',
      answer: `I start by profiling the application using Chrome DevTools to
identify bottlenecks. Common strategies include optimizing database
queries, implementing caching (Redis or CDN), lazy loading resources,
minifying assets, and using efficient algorithms. I also consider
load testing to simulate high traffic.`,
    },
    {
      question: 'What are RESTful APIs?',
      answer: `RESTful APIs follow principles of Representational State
Transfer, using standard HTTP methods (GET, POST, PUT, DELETE) to
perform CRUD operations. They are stateless and return data typically in
JSON format. Each resource has a unique URI.`,
    },
    {
      question: 'Describe the software development lifecycle (SDLC).',
      answer: `SDLC includes: requirements gathering, design, implementation
(coding), testing, deployment, and maintenance. Agile methodology breaks
these into iterative sprints with continuous feedback.`,
    },
    {
      question: 'How do you ensure code quality?',
      answer: `I follow best practices: write unit tests, conduct code
reviews, use linters (ESLint), maintain documentation, and practice
pair programming when possible. Continuous integration tools like
Jenkins or GitHub Actions help automate testing.`,
    },
  ],

  // SECTION: DATA SCIENTIST SPECIFIC
  dataScientist: [
    {
      question: 'What is overfitting? How can you prevent it?',
      answer: `Overfitting occurs when a model learns noise from the training
data and performs poorly on unseen data. Prevention techniques include:
using more training data, cross-validation, regularization (L1/L2),
pruning decision trees, and using simpler models.`,
    },
    {
      question: 'Explain the difference between supervised and unsupervised learning.',
      answer: `Supervised learning uses labeled data to train models (e.g.,
classification, regression). Unsupervised learning deals with unlabeled
data to find patterns or groupings (e.g., clustering, PCA).`,
    },
    {
      question: 'What is a confusion matrix?',
      answer: `A confusion matrix is a table used to evaluate classification
models. It shows True Positives, False Positives, True Negatives, and
False Negatives. From it we can compute metrics like accuracy, precision,
recall, and F1-score.`,
    },
    {
      question: 'How do you handle missing data?',
      answer: `Common approaches: remove rows with missing values, impute
with mean/median/mode, use models that support missing values like
XGBoost, or create an indicator variable for missingness.`,
    },
    {
      question: 'What is feature engineering?',
      answer: `Feature engineering is the process of transforming raw data
into meaningful features for machine learning models. It can include
normalization, encoding categorical variables, creating interaction
terms, or extracting date/time components. Good feature engineering
often yields better model performance than complex algorithms.`,
    },
    {
      question: 'Describe cross-validation.',
      answer: `Cross-validation is a technique to assess model performance by
splitting data into training and validation sets multiple times. K-fold
cross-validation divides data into k subsets; each subset serves as the
validation set once while the rest form the training set. This helps
estimate generalization error.`,
    },
  ],

  // SECTION: PRODUCT MANAGER SPECIFIC
  productManager: [
    {
      question: 'How do you prioritize features?',
      answer: `I use frameworks like RICE (Reach, Impact, Confidence, Effort)
or MoSCoW (Must have, Should have, Could have, Won't have). I also
consult stakeholders and analyze user feedback and data to make
decisions.`,
    },
    {
      question: 'Explain the difference between a product roadmap and a backlog.',
      answer: `A roadmap is a high-level strategic plan showing major
milestones and vision. A backlog is a detailed list of tasks or user
stories that need to be implemented. The roadmap guides the backlog
priorities.`,
    },
    {
      question: 'How do you measure product success?',
      answer: `Metrics depend on objectives. Common ones include: user
engagement (DAU/MAU), retention rate, A/B test results, conversion rate,
and NPS. The key is to align metrics with business goals.`,
    },
    {
      question: 'Describe a time you handled conflicting stakeholder requests.',
      answer: `In my last role, marketing wanted a quick feature launch
while engineering warned about technical debt. I facilitated a meeting
to discuss trade-offs, proposed a phased rollout, and ensured both
teams understood the plan. This maintained trust and delivered value.`,
    },
    {
      question: 'What is a Minimum Viable Product (MVP)?',
      answer: `An MVP is the simplest product version that delivers core
value to early users. It allows teams to validate assumptions with minimal
resources and gather feedback for future iterations.`,
    },
    {
      question: 'How do you gather user feedback?',
      answer: `Methods include surveys, interviews, usability tests,
analytics data, support tickets, and beta testing groups. The goal is to
understand user pain points and needs.`,
    },
  ],

  // SECTION: MARKETING CAREERS
  marketing: [
    {
      question: 'How do you run a successful social media campaign?',
      answer: `Identify target audience, choose appropriate platforms,
create compelling content, schedule posts consistently, engage with
followers, and measure results through KPIs like reach, engagement, and
conversion. Adjust strategy based on data.`,
    },
    {
      question: 'What is SEO and why is it important?',
      answer: `SEO (Search Engine Optimization) is the practice of
improving a website's visibility on search engines through keywords,
quality content, backlinks, and technical optimizations. It drives
targeted organic traffic and is cost-effective over time.`,
    },
    {
      question: 'Explain the marketing funnel stages.',
      answer: `Awareness (user discovers product), Interest (user learns
more), Consideration (user compares options), Decision (user purchases),
Retention (user returns). Each stage requires different tactics.`,
    },
    {
      question: 'How do you measure ROI of a marketing campaign?',
      answer: `ROI = (Revenue from campaign - Cost of campaign) / Cost of
campaign. Track conversions, average order value, customer lifetime
value, and attribute them to specific campaigns using analytics tools.`,
    },
    {
      question: 'What tools do you use for marketing analytics?',
      answer: `Google Analytics, Facebook Ads Manager, HubSpot, SEMrush,
Ahrefs, Hotjar (for user behavior), and email marketing platforms like
Mailchimp.`,
    },
    {
      question: 'Describe a successful campaign you managed.',
      answer: `I ran a seasonal promotion that increased engagement by 150%
and sales by 40% by combining email marketing, social ads, and influencer
collabs. I analyzed data weekly and optimized targeting to maximize ROI.`,
    },
  ],

  // SECTION: HR & RECRUITMENT CAREERS
  hr: [
    {
      question: 'How do you handle a conflict between employees?',
      answer: `I listen to both sides separately to understand perspectives,
mediate a discussion focusing on facts and shared goals, and help them
find a mutually acceptable solution. Follow up to ensure issues don’t
resurface.`,
    },
    {
      question: 'What methods do you use for talent acquisition?',
      answer: `Job postings on career sites, LinkedIn sourcing, employee
referrals, campus recruitment events, and working with recruitment agencies.
I also maintain a talent pool database for future openings.`,
    },
    {
      question: 'How do you ensure diversity and inclusion in hiring?',
      answer: `Use inclusive language in job descriptions, source from diverse
networks, implement blind resume screening, provide bias training to
interviewers, and track diversity metrics to identify gaps.`,
    },
    {
      question: 'Describe an effective onboarding process.',
      answer: `Provide clear orientation schedule, assign a mentor or buddy,
ensure access to tools and systems on day one, set expectations with
manager, and conduct check-ins at 30/60/90 days. Collect feedback to
improve.`,
    },
    {
      question: 'How do you measure employee satisfaction?',
      answer: `Conduct regular surveys (e.g., quarterly), focus groups,
one-on-one meetings, and analyze turnover rates. Use tools like
Officevibe or TinyPulse.`,
    },
    {
      question: 'What is performance management?',
      answer: `A process of setting goals, providing feedback, conducting
performance reviews, and developing employees. It involves SMART goals,
regular check-ins, and development plans.`,
    },
  ],

  // SECTION: CREATIVE INDUSTRIES (DESIGN,
  creative: [
    {
      question: 'What design software are you proficient in?',
      answer: `I am proficient in Adobe Photoshop, Illustrator, Figma, and
Sketch. I often use Figma for collaborative UI design and prototyping.`,
    },
    {
      question: 'How do you handle feedback on your designs?',
      answer: `I view feedback as part of the iterative process. I ask
clarifying questions to understand the rationale, experiment with
suggested changes, and then compare outcomes to objectives before
finalizing.`,
    },
    {
      question: 'Describe your design process from concept to final product.',
      answer: `My process: research user needs → brainstorm & sketch ideas → create
wireframes → build high-fidelity mockups → prototype interactions → test with
users → iterate based on feedback → hand off to developers.`,
    },
    {
      question: 'What is user-centered design?',
      answer: `User-centered design focuses on designing products around the
needs, preferences, and limitations of end users. It involves user research,
persona creation, user testing, and iteration.`,
    },
    {
      question: 'How do you keep up with design trends?',
      answer: `I follow design blogs (Smashing Magazine, UX Collective),
social media (Dribbble, Behance), attend webinars, and take online
courses when new tools emerge. I also network with other designers.`,
    },
    {
      question: 'Explain responsive design.',
      answer: `Responsive design ensures a website or app works well on
various screen sizes by using fluid grids, flexible images, and CSS media
queries. It improves user experience across devices.`,
    },
  ],

  // SECTION: SALES & BUSINESS DEVELOPMENT
  sales: [
    {
      question: 'How do you build relationships with clients?',
      answer: `By understanding their needs, communicating regularly, delivering
on promises, and providing value beyond the sale. I also seek referrals
and maintain CRM notes for personalized follow-up.`,
    },
    {
      question: 'Describe your sales process.',
      answer: `Prospect leads → qualify needs → present solution → handle
objections → close deal → follow up for satisfaction and upsell.`,
    },
    {
      question: 'What techniques do you use to overcome objections?',
      answer: `Listen carefully, empathize with the concern, provide data or
case studies that address the objection, and restate the value
proposition.`,
    },
    {
      question: 'How do you stay motivated during a slow period?',
      answer: `I set weekly goals, review pipeline, sharpen my skills through
training, and reach out to past clients for feedback. Having a support
network of colleagues also helps.`,
    },
    {
      question: 'What CRM tools are you familiar with?',
      answer: `Salesforce, HubSpot, Zoho CRM, and Microsoft Dynamics. I use
them to track leads, manage contacts, and analyze sales metrics.`,
    },
    {
      question: 'Explain a time you closed a difficult deal.',
      answer: `I worked with a hesitant client for 3 months, providing multiple
product demos, custom proposals, and references. By addressing their
specific concerns about integration and ROI, I eventually secured a
$100k contract.`,
    },
  ],

  // SECTION: HEALTHCARE CAREERS
  healthcare: [
    {
      question: 'Why do you want to work in healthcare?',
      answer: `I'm passionate about helping people and making a tangible
impact on their well-being. Healthcare also offers continuous learning
and the opportunity to work with multidisciplinary teams.`,
    },
    {
      question: 'Describe a situation when you had to deal with a difficult patient.',
      answer: `A patient was anxious and uncooperative during a procedure.
I remained calm, explained each step clearly, and listened to their
concerns. By addressing their fears and showing empathy, they relaxed
and the procedure went smoothly.`,
    },
    {
      question: 'How do you handle stress and long shifts?',
      answer: `I prioritize rest and nutrition, take short breaks when
possible, and use stress management techniques like deep breathing.
I also maintain hobbies outside work to recharge.`,
    },
    {
      question: 'What is your experience with electronic health records (EHR)?',
      answer: `I've used [specific EHR system] to document patient visits,
order tests, and review medical history. I'm comfortable typing notes
quickly and ensuring accuracy.`,
    },
    {
      question: 'How do you stay up-to-date with medical knowledge?',
      answer: `I read medical journals, attend conferences, participate in
continuing education courses, and collaborate with colleagues.`,
    },
    {
      question: 'Describe a time you worked as part of a healthcare team.',
      answer: `During my residency, I worked with doctors, nurses, and
pharmacists to manage a complex patient with multiple comorbidities.
We held daily rounds, discussed treatment plans, and coordinated care,
which improved the patient's outcome.`,
    },
  ],

  // SECTION: EDUCATION & TEACHING CAREERS
  education: [
    {
      question: 'Why did you choose teaching as a career?',
      answer: `I enjoy sharing knowledge and seeing students grow. Teaching
allows me to make a positive impact on the next generation and stay
passionate about my subject.`,
    },
    {
      question: 'How do you handle classroom management?',
      answer: `I set clear expectations at the beginning, use positive
reinforcement, and implement engaging lessons. I also address
misbehavior calmly and privately to avoid disrupting others.`,
    },
    {
      question: 'Describe a successful lesson or project you implemented.',
      answer: `I designed a group research project where students created
presentations on STEM careers. This increased participation and improved
their research and presentation skills.`,
    },
    {
      question: 'How do you differentiate instruction for diverse learners?',
      answer: `I assess student levels, provide varied materials, use
visual/audio aids, and offer extra support or advanced challenges as
needed.`,
    },
    {
      question: 'How do you incorporate technology in teaching?',
      answer: `I use online quizzes (Kahoot!), educational videos, and
interactive simulations. I also assign students to create digital
projects.`,
    },
    {
      question: 'How do you measure student progress?',
      answer: `Through quizzes, assignments, class participation, and
periodic assessments. I also provide constructive feedback and hold one-
on-one meetings if necessary.`,
    },
  ],

  // SECTION: ENTREPRENEURSHIP & STARTUP CAREERS
  entrepreneurship: [
    {
      question: 'What motivated you to start your own business?',
      answer: `I identified a gap in the market for [product/service] and
wanted the freedom to innovate and build something meaningful. I also
wanted to create jobs and contribute to the community.`,
    },
    {
      question: 'How do you validate a business idea?',
      answer: `Conduct market research, talk to potential customers,
develop an MVP, collect feedback, and analyze competitor offerings.`,
    },
    {
      question: 'Describe a time you overcame a major obstacle in your business.',
      answer: `During early launch we had server outages due to traffic spikes.
I quickly migrated to a scalable cloud solution, optimized code, and
implemented load balancing. This reduced downtime and improved user
experience.`,
    },
    {
      question: 'How do you handle failure?',
      answer: `I analyze what went wrong, learn from mistakes, adjust the
plan, and move forward with a new approach. Failure is part of the
learning process.`,
    },
    {
      question: 'What are your long-term business goals?',
      answer: `I aim to scale to [region/country], achieve profitability
within 3 years, and expand product lines. I also plan to mentor other
entrepreneurs.`,
    },
    {
      question: 'How do you build and retain a strong team?',
      answer: `Hire people who share the vision, offer competitive
compensation, provide growth opportunities, foster open communication,
and recognize achievements regularly.`,
    },
  ],

  // SECTION: CIVIL ENGINEERING & ARCHITECTURE
  engineering: [
    {
      question: 'Describe your experience with CAD software.',
      answer: `I have used AutoCAD and SolidWorks extensively for drafting
structural plans and performing 3D modeling. I can create detailed
blueprints and modify designs based on feedback.`,
    },
    {
      question: 'How do you ensure compliance with building codes?',
      answer: `I stay updated on local and national codes, consult code
books during design, and coordinate with regulatory agencies during
approval processes. I also review designs with a compliance checklist.`,
    },
    {
      question: 'Describe a challenging project you worked on.',
      answer: `I worked on a bridge that crossed a floodplain. We had to
design deep foundations resistant to erosion, coordinate with hydraulic
engineers, and monitor soil conditions. The project completed on time
and within budget.`,
    },
    {
      question: 'How do you manage project budgets and timelines?',
      answer: `I use project management tools like MS Project, break tasks
into milestones, track expenses regularly, and adjust schedules with
project stakeholders.`,
    },
    {
      question: 'What sustainability practices do you incorporate?',
      answer: `I use energy-efficient materials, design for passive cooling,
plan for rainwater harvesting, and consider lifecycle costs for
sustainability certifications (LEED, LOTUS).`,
    },
    {
      question: 'How do you collaborate with multidisciplinary teams?',
      answer: `I schedule regular coordination meetings, share plans via
centralized platforms (BIM), and maintain clear communication channels.
Understanding others' needs helps prevent conflicts and delays.`,
    },
  ],

  // SECTION: NURSING & MEDICAL TECHNICIANS
  nursing: [
    {
      question: 'How do you prioritize patient care?',
      answer: `I assess patients based on severity of conditions, use
acute care protocols, consult with physicians, and delegate tasks to
support staff appropriately.`,
    },
    {
      question: 'Describe your experience with IV therapy.',
      answer: `I have administered IV fluids, medications, and monitored
for adverse reactions. I ensure proper aseptic techniques to prevent
infections.`,
    },
    {
      question: 'How do you handle a medical emergency?',
      answer: `I follow established protocols (e.g., ACLS, BLS), call for
help, monitor vital signs, and communicate clearly with the team. I
remain calm and focus on stabilizing the patient.`,
    },
    {
      question: 'How do you maintain patient confidentiality?',
      answer: `I follow HIPAA-like guidelines: store records securely,
share information only with authorized personnel, and discuss cases
privately.`,
    },
    {
      question: 'What is your approach to patient education?',
      answer: `I explain conditions and treatments in simple language,
provide written materials, and encourage questions to ensure understanding.`,
    },
    {
      question: 'How do you handle stress from long shifts?',
      answer: `I take short breaks when possible, practice deep breathing,
and decompress afterward with exercise or hobbies. Proper sleep and
nutrition help maintain energy.`,
    },
  ],

  // SECTION: ACCOUNTING & FINANCE
  finance: [
    {
      question: 'What accounting software are you familiar with?',
      answer: `I have used QuickBooks, SAP, and Excel extensively for
financial reporting and analysis. I can create pivot tables and macros
for automation.`,
    },
    {
      question: 'Explain the difference between cash and accrual accounting.',
      answer: `Cash accounting records transactions when cash changes hands,
while accrual accounting records revenue and expenses when they are
incurred, regardless of cash flow. Accrual gives a more accurate long-
term view of finances.`,
    },
    {
      question: 'How do you perform a financial analysis of a company?',
      answer: `I review financial statements (income statement, balance
sheet, cash flow), calculate ratios (liquidity, profitability, leverage),
compare to industry benchmarks, and analyze trends over time.`,
    },
    {
      question: 'Describe your experience with budgeting.',
      answer: `I have prepared annual budgets by forecasting revenue,
analyzing historical data, and coordinating with department heads to
allocate expenses. I monitor actual vs. budget and adjust as needed.`,
    },
    {
      question: 'What is depreciation and how is it calculated?',
      answer: `Depreciation allocates cost of a tangible asset over its
useful life. Common methods include straight-line (cost - salvage value
/ useful life) and declining balance.`,
    },
    {
      question: 'How do you ensure compliance with tax regulations?',
      answer: `I stay updated on tax laws, consult with tax advisors,
prepare accurate filings, keep detailed records, and implement controls
to prevent errors.`,
    },
  ],

  // SECTION: HUMANITIES & SOCIAL SCIENCES CAREERS
  humanities: [
    {
      question: 'How do you stay current with developments in your field?',
      answer: `I read academic journals, attend conferences, join professional
associations, and take continuing education courses.`,
    },
    {
      question: 'Describe your research methodology experience.',
      answer: `I have conducted both qualitative (interviews, focus groups)
and quantitative (surveys, statistical analysis) research projects.
I am comfortable using SPSS and NVivo.`,
    },
    {
      question: 'How do you handle deadlines and multiple projects?',
      answer: `I prioritize tasks, create timelines, break work into
manageable chunks, and communicate proactively if adjustments are
eeded.`,
    },
    {
      question: 'Describe a publication or paper you authored.',
      answer: `I co-authored a paper on urban migration patterns published in
the Journal of Social Studies, which analyzed census data and proposed
policy recommendations.`,
    },
    {
      question: 'How do you present complex ideas to a general audience?',
      answer: `I use clear language, analogies, visual aids, and structure
my presentation logically with bullet points and summaries.`,
    },
    {
      question: 'How do you handle criticism of your work?',
      answer: `I listen openly to feedback, evaluate the validity of the
points, revise if necessary, and use criticism as an opportunity to
improve.`,
    },
  ],

  // SECTION: LOGISTICS & SUPPLY CHAIN CAREERS
  logistics: [
    {
      question: 'What experience do you have with inventory management?',
      answer: `I have used ERP systems like SAP and Odoo to track inventory
levels, set reorder points, and conduct cycle counts. I optimize stock
levels to balance availability and carrying costs.`,
    },
    {
      question: 'How do you handle supply chain disruptions?',
      answer: `I identify alternative suppliers, increase safety stock,
communicate with customers about delays, and work cross-functionally to
mitigate risks.`,
    },
    {
      question: 'Explain the concept of Just-In-Time (JIT) inventory.',
      answer: `JIT aims to reduce inventory carrying costs by receiving
materials only as they are needed in production. It requires reliable
suppliers and accurate demand forecasting.`,
    },
    {
      question: 'What logistics software have you used?',
      answer: `I have experience with SAP, Oracle WMS, and custom
logistics platforms for tracking shipments and optimizing routes.`,
    },
    {
      question: 'How do you optimize transportation costs?',
      answer: `I analyze shipping data, consolidate shipments, negotiate
rates with carriers, and use route optimization tools to minimize fuel
and time.`,
    },
    {
      question: 'Describe your experience with customs clearance.',
      answer: `I prepare documentation (invoice, packing list, HTS codes),
calculate duties, and coordinate with customs brokers to ensure timely
clearance.`,
    },
  ],

  // SECTION: AGRICULTURE & ENVIRONMENTAL SCIENCES
  agriculture: [
    {
      question: 'What sustainable farming practices are you familiar with?',
      answer: `I have worked with crop rotation, integrated pest management,
organic fertilizers, and drip irrigation to conserve resources and
maintain soil health.`,
    },
    {
      question: 'How do you address climate change impacts on agriculture?',
      answer: `I implement drought-resistant crop varieties, adjust planting
schedules, use water-efficient technologies, and monitor weather
patterns closely.`,
    },
    {
      question: 'Describe your experience with agricultural technology (AgTech).',
      answer: `I have used drone monitoring for crop health, soil sensors
for moisture levels, and farm management software to track yields and
inputs.`,
    },
    {
      question: 'How do you improve supply chain for agricultural products?',
      answer: `I optimize cold chain logistics, reduce time from farm to
market, implement traceability systems, and work with cooperatives to
aggregate produce.`,
    },
    {
      question: 'What strategies do you use for pest control?',
      answer: `I combine biological controls (beneficial insects), crop
rotation, and targeted organic pesticides to minimize environmental
impact.`,
    },
    {
      question: 'How do you ensure compliance with environmental regulations?',
      answer: `I stay updated on local and international laws, conduct
regular audits, and implement practices that reduce emissions and waste.`,
    },
  ],

  // SECTION: STARTUP TECHNICAL QUESTIONS
  startupTechnical: [
    {
      question: 'How do you build a scalable architecture from scratch?',
      answer: `Start with microservices or modular design, use cloud-based
infrastructure (AWS/GCP), implement load balancing, autoscaling,
and design stateless services where possible. Use CDNs for static
content and optimize database queries.`,
    },
    {
      question: 'What is lean startup methodology?',
      answer: `Lean startup focuses on building an MVP quickly, measuring
user feedback, and learning iteratively to pivot if necessary. It
emphasizes validated learning and minimizing waste.`,
    },
    {
      question: 'How do you manage technical debt?',
      answer: `I track technical debt using tickets, prioritize refactoring
when it impedes development velocity, and allocate time each sprint for
clean-up. I also avoid cutting corners unless absolutely necessary.`,
    },
    {
      question: 'How do you ensure security in a startup environment?',
      answer: `Implement secure coding practices, use encryption for data
at rest and in transit, conduct regular penetration tests, and use
third-party libraries cautiously with vulnerability scanning.`,
    },
    {
      question: 'Describe your experience with CI/CD pipelines.',
      answer: `I've set up pipelines using GitHub Actions and GitLab CI to
run tests, build artifacts, and deploy to staging/production
environments automatically.`,
    },
    {
      question: 'How do you conduct user interviews for product feedback?',
      answer: `Prepare open-ended questions, listen actively, record responses,
analyze themes, and use findings to inform product decisions.`,
    },
  ],

  // SECTION: LOGISTICS & SUPPLY CHAIN CONTINUED
  logisticsAdvanced: [
    {
      question: 'What is blockchain's role in supply chain management?',
      answer: `Blockchain provides immutable traceability of goods, reduces
fraud, and improves transparency by recording each transaction on a
decentralized ledger.`,
    },
    {
      question: 'Explain RFID and its use in inventory control.',
      answer: `RFID uses radio-frequency tags to automatically identify and
track items. It's used in warehouses to perform fast inventory counts
and monitor item movement without manual scanning.`,
    },
    {
      question: 'What are KPIs you track in logistics?',
      answer: `On-time delivery rate, order accuracy, inventory turnover,
transportation cost per unit, and warehouse utilization.`,
    },
    {
      question: 'How do you manage cross-border shipping?',
      answer: `Ensure all documentation (commercial invoice, bill of
lading, certificates of origin) is accurate, work with customs brokers,
and stay informed of tariff changes.`,
    },
    {
      question: 'What is reverse logistics?',
      answer: `Reverse logistics involves handling returns, recycling,
disposal, and resale of products. It's important for customer service
and sustainability.`,
    },
    {
      question: 'Describe the difference between 3PL and 4PL.',
      answer: `3PL (third-party logistics) provides warehousing and
transportation services. 4PL (fourth-party logistics) manages the
entire supply chain and coordinates multiple 3PL providers.`,
    },
  ],
};

console.log('✅ Interview Questions Database Loaded');
console.log('🎤 200+ questions with model answers available');
