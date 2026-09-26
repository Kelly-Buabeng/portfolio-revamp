export const profile = {
  name: 'Kelly Buabeng',
  initials: 'KB',
  roles: ['Backend Engineer', 'Data Science & ML', 'Cybersecurity'],
  location: 'Accra, Ghana',
  email: 'buabengkelly@gmail.com',
  studentEmail: 'kbbuabeng002@st.ug.edu.gh',
  github: 'https://github.com/Kelly-Buabeng',
  linkedin: 'https://www.linkedin.com/in/kellybuabeng/',
  cv: '/kelly@cv.pdf',
  availability: 'Open to graduate & junior roles · hybrid or remote',
  headline:
    'I build secure, data-driven backends — and the models that sit behind them.',
  summary:
    "Final-year Computer Science with Statistics student at the University of Ghana. I've shipped REST APIs and tuned SQL at Xavs Labs, kept enterprise systems running at TotalEnergies and the Ghana Civil Aviation Authority, and led the ML work that put my team in Ghana's Top 2 at NASA Space Apps 2025.",
  languages: ['English', 'Twi', 'Fante'],
}

export const highlights = [
  { value: 'Top 2', label: 'NASA Space Apps 2025, Ghana' },
  { value: '4', label: 'Engineering & IT internships' },
  { value: '~30%', label: 'Faster SQL queries at Xavs Labs' },
  { value: '>99%', label: 'Uptime on aviation IT systems' },
]

export type Experience = {
  company: string
  role: string
  start: string
  end: string
  location: string
  points: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    company: 'Xavs Labs',
    role: 'Backend Developer Intern',
    start: 'Aug 2025',
    end: 'Jan 2026',
    location: 'Accra, Ghana',
    points: [
      'Built and maintained production backend services in Python for web applications.',
      'Designed RESTful APIs and optimised SQL queries, cutting average query time by ~30%.',
      'Worked in Agile sprints with code reviews and technical documentation.',
      'Paired with senior developers to troubleshoot critical backend issues and shorten bug-resolution time.',
    ],
    tags: ['Python', 'REST APIs', 'SQL', 'Agile'],
  },
  {
    company: 'Ghana Civil Aviation Authority',
    role: 'IT & Cybersecurity Intern',
    start: 'Nov 2025',
    end: 'Dec 2025',
    location: 'Accra, Ghana',
    points: [
      'Supported enterprise IT infrastructure behind mission-critical aviation systems at >99% uptime.',
      'Helped implement security protocols and cybersecurity monitoring for sensitive national data.',
      'Ran vulnerability assessments and contributed to risk reports flagging high-priority gaps.',
      'Wrote IT documentation and technical reports for audit readiness.',
    ],
    tags: ['Vulnerability Assessment', 'Risk Analysis', 'Security Protocols'],
  },
  {
    company: 'TotalEnergies Marketing Ghana PLC',
    role: 'System Administrator / IT Technician Intern',
    start: 'Mar 2024',
    end: 'Jun 2024',
    location: 'Accra, Ghana',
    points: [
      'Managed IT systems for a multinational energy company across Windows and Linux.',
      'Installed and configured software environments and supported 50+ end users.',
      'Applied security best practices and contributed backend tasks to core IT infrastructure.',
    ],
    tags: ['System Administration', 'Linux', 'Networking'],
  },
  {
    company: 'Zormor',
    role: 'Software Developer / Research Analyst Intern',
    start: 'Nov 2023',
    end: 'Mar 2024',
    location: 'Accra, Ghana',
    points: [
      'Developed software with a focus on performance improvements and security hardening.',
      'Researched emerging technologies and analysed datasets to inform the product roadmap.',
    ],
    tags: ['Software Development', 'Research', 'Data Analysis'],
  },
]

export type Category =
  | 'ML & Vision'
  | 'Backend'
  | 'Intelligent Agents'
  | 'Networks & Data'
  | 'Product & UX'

export type Project = {
  slug: string
  name: string
  blurb: string
  details: string[]
  stack: string[]
  categories: Category[]
  year: string
  status?: 'In progress' | 'Award'
  badge?: string
  repo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'pothole-detection',
    name: 'Pothole Detection & Road Heatmap',
    blurb:
      'Final-year project: a YOLOv8 road-hazard detection API that stores every detection geospatially and serves heatmaps so road authorities can prioritise repairs.',
    details: [
      'FastAPI service with /detect and /heatmap endpoints, typed with Pydantic.',
      'YOLOv8 fine-tuned on a 569-image Roboflow pothole dataset.',
      'Supabase storage for geotagged detections; health check refuses to serve untrained weights.',
      'Pytest suite and deploy configs for Railway and Render.',
    ],
    stack: ['Python', 'YOLOv8', 'FastAPI', 'Supabase', 'OpenCV', 'Pytest'],
    categories: ['ML & Vision', 'Backend'],
    year: '2026',
    status: 'In progress',
    badge: 'Final year project',
    repo: 'https://github.com/Kelly-Buabeng/FYP-26-POTHOLE-DETECTION',
    featured: true,
  },
  {
    slug: 'exoplanet-classifier',
    name: 'Exoplanet Classification',
    blurb:
      "ML pipeline on NASA's Kepler dataset that identifies and classifies exoplanets. Ranked Top 2 in Ghana at the 2025 NASA International Space Apps Challenge.",
    details: [
      'Led the ML work: feature engineering, model selection and tuning.',
      'Served predictions through a FastAPI backend.',
      'Awarded the Galactic Problem Solver distinction by NASA.',
    ],
    stack: ['Python', 'scikit-learn', 'Pandas', 'FastAPI', 'Jupyter'],
    categories: ['ML & Vision'],
    year: '2025',
    status: 'Award',
    badge: 'NASA Space Apps · Top 2 Ghana',
    featured: true,
  },
  {
    slug: 'wildfire-agents',
    name: 'Wildfire Multi-Agent System',
    blurb:
      'Decentralised agents that detect, assess and suppress wildfires — sensor agents raise alerts, an FSM escalates response, and responders negotiate aerial and ground resources over XMPP.',
    details: [
      'Built on SPADE agents talking over a Prosody XMPP server.',
      'Finite-state-machine escalation driven by wind and fire behaviour.',
      'Dockerised environment across four lab stages.',
    ],
    stack: ['Python', 'SPADE', 'XMPP', 'Docker'],
    categories: ['Intelligent Agents'],
    year: '2026',
    repo: 'https://github.com/Kelly-Buabeng/Intelligent-Agents',
    featured: true,
  },
  {
    slug: 'dns-latency',
    name: 'DNS Latency & Page Load',
    blurb:
      'Measures DNS lookup, TCP handshake and transfer time across public, ISP and campus resolvers, then models them with an M/M/1 queue and a discrete-event simulation.',
    details: [
      'Collects per-trial DNS, TCP and HTTP timings to CSV.',
      'Statistical analysis with KS tests for exponential, normal and log-normal fits.',
      'Queueing model compared against simulation.',
    ],
    stack: ['Python', 'Pandas', 'Statistics', 'Queueing theory'],
    categories: ['Networks & Data'],
    year: '2026',
    repo: 'https://github.com/Kelly-Buabeng/DNS-Latency-Project',
    featured: true,
  },
  {
    slug: 'dumsor-agent',
    name: 'Dumsor Management Agent',
    blurb:
      "An autonomous agent for Ghana's load-shedding crisis: it perceives outages, surges and ECG schedules, then switches between grid, battery and generator.",
    details: [
      'Designed with the Prometheus methodology across five phases.',
      'Perceive–decide–act loop simulated over five scenarios, from voltage surges to generator failure.',
      'Zero-dependency Node.js implementation.',
    ],
    stack: ['Node.js', 'Agent design', 'Prometheus'],
    categories: ['Intelligent Agents'],
    year: '2026',
    repo: 'https://github.com/Kelly-Buabeng/403-SemesterProject',
    featured: true,
  },
  {
    slug: 'galamsey-expert-system',
    name: 'Illegal Mining Expert System',
    blurb:
      'Rule-based expert system that scores the pollution risk of illegal mining (galamsey) for a community, with explainable Prolog reasoning behind a web API.',
    details: [
      'Prolog knowledge base for deterministic, explainable decisions.',
      'Flask REST API bridges the inference engine to a React front end.',
    ],
    stack: ['Prolog', 'Flask', 'React'],
    categories: ['Intelligent Agents', 'Backend'],
    year: '2025',
    repo: 'https://github.com/Kelly-Buabeng/expert-system--illegal-mining-',
  },
  {
    slug: 'lead-scoring',
    name: 'Lead Cleaning & Scoring Pipeline',
    blurb:
      'Python pipeline that cleans messy CRM exports, de-duplicates by completeness, validates emails and scores each lead Hot, Warm or Cold.',
    details: [
      'Normalises names and strips junk and placeholder rows.',
      'Keeps the most complete record when emails collide.',
      'Role-keyword scoring with invalid emails forced to Cold.',
    ],
    stack: ['Python', 'Pandas'],
    categories: ['Networks & Data'],
    year: '2026',
    repo: 'https://github.com/Kelly-Buabeng/JnAI-Auto-Assessment',
  },
  {
    slug: 'product-z',
    name: 'Product Z',
    blurb:
      'An AI business assistant for African SMEs — data-driven decisions, inventory and customer engagement in one place.',
    details: ['Ongoing. Details on request.'],
    stack: ['AI', 'Backend'],
    categories: ['ML & Vision', 'Backend'],
    year: '2026',
    status: 'In progress',
  },
  {
    slug: 'chatbot',
    name: 'Real-time Chat App',
    blurb:
      'Full-stack messaging service with a Node.js WebSocket backend and a React client, supporting live multi-user chat with message history.',
    details: ['Express + WebSockets backend.', 'React front end with Axios.'],
    stack: ['Node.js', 'Express', 'WebSockets', 'React'],
    categories: ['Backend'],
    year: '2025',
    repo: 'https://github.com/Kelly-Buabeng/ChatBot',
  },
  {
    slug: 'nhis-redesign',
    name: 'NHIS Portal Redesign',
    blurb:
      "HCI redesign of Ghana's National Health Insurance Scheme portal, focused on accessibility and mobile use.",
    details: ['User research and usability-led redesign.', 'Built in React and Next.js.'],
    stack: ['TypeScript', 'React', 'Next.js', 'UX'],
    categories: ['Product & UX'],
    year: '2025',
    repo: 'https://github.com/Kelly-Buabeng/DCIT302-HCIPROJECT-myNHISredesign',
  },
]

export const categories: Category[] = [
  'ML & Vision',
  'Backend',
  'Intelligent Agents',
  'Networks & Data',
  'Product & UX',
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'REST APIs', 'SQLAlchemy', 'Pydantic', 'Pytest'],
  },
  {
    group: 'Data & ML',
    items: ['scikit-learn', 'OpenCV', 'YOLOv8', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    group: 'Security',
    items: ['Vulnerability assessment', 'Risk analysis', 'Security protocols', 'Cryptography'],
  },
  {
    group: 'Infra & Data stores',
    items: ['Docker', 'Linux', 'SQL', 'Supabase', 'Git & GitHub', 'Vercel', 'Postman'],
  },
  {
    group: 'Front end',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    group: 'Also',
    items: ['Prolog', 'Statistical modelling', 'Feature engineering', 'Technical writing'],
  },
]

export const achievements = [
  {
    title: 'NASA International Space Apps Challenge 2025',
    result: 'Top 2 team in Ghana · Galactic Problem Solver',
    date: 'Oct 2025',
    text: "Led ML development on NASA's Kepler exoplanet dataset; selected to represent Ghana internationally.",
  },
  {
    title: 'UN Quality of Life Hackathon 2025',
    result: 'Participant · Accra',
    date: '2025',
    text: 'Prototyped technology-driven solutions to everyday challenges faced by Ghanaians with a multidisciplinary team.',
  },
]

export const education = [
  {
    school: 'University of Ghana',
    degree: 'BSc Mathematical Sciences — Computer Science with Statistics',
    years: '2022 – 2026',
  },
  {
    school: 'Presbyterian Boys’ Secondary School (PRESEC-Legon)',
    degree: 'WASSCE, General Science',
    years: '2019 – 2022',
  },
]

export const certifications = [
  { name: 'Applied Data Science', issuer: 'WorldQuant University', note: 'In progress' },
  { name: 'Cybersecurity Fundamentals', issuer: 'IBM SkillsBuild' },
  { name: 'Professional Foundations', issuer: 'ALX Africa', note: 'Sep 2025' },
]

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]
