// ─────────────────────────────────────────────────────────────────────────────
//  8-Hour Sprint Curated Problem Statements — MU HackSphere 2026
//  Mewar University, Gangrar, Chittorgarh, Rajasthan
//  Filtered specifically for feasibility within an 8-hour hackathon sprint.
// ─────────────────────────────────────────────────────────────────────────────

export interface ProblemStatement {
  id: string;
  domain: string;
  title: string;
  statement: string;
  description: string;
  sdg: string;
  organization?: string;
  estimatedHours: string;
  feasibilityTip: string;
  suggestedStack: string[];
}

export interface DomainMeta {
  emoji: string;
  color: string;
  light: string;
  border: string;
  gradient: string;
}

// Active Domains with 8-Hour Feasible Problems
export const DOMAINS: string[] = [
  "Web 3.0",
  "EdTech",
  "FinTech",
  "Space & Energy",
  "Bitcoin",
  "Heritage",
  "Healthcare",
  "Ecosystems",
  "Cybersecurity",
  "Transportation",
  "Clean & Green",
  "Robotics & Drones",
  "Sports",
  "Tourism",
  "Sustainability & Development",
];

export const DOMAIN_META: Record<string, DomainMeta> = {
  "Web 3.0": {
    emoji: "🔷",
    color: "#7C3AED",
    light: "#F5F3FF",
    border: "#C4B5FD",
    gradient: "linear-gradient(135deg,#7C3AED,#A78BFA)",
  },
  "EdTech": {
    emoji: "🎓",
    color: "#0369A1",
    light: "#E0F2FE",
    border: "#7DD3FC",
    gradient: "linear-gradient(135deg,#0369A1,#38BDF8)",
  },
  "FinTech": {
    emoji: "💵",
    color: "#059669",
    light: "#D1FAE5",
    border: "#6EE7B7",
    gradient: "linear-gradient(135deg,#059669,#34D399)",
  },
  "Space & Energy": {
    emoji: "🚀",
    color: "#1D4ED8",
    light: "#DBEAFE",
    border: "#93C5FD",
    gradient: "linear-gradient(135deg,#1D4ED8,#60A5FA)",
  },
  "Bitcoin": {
    emoji: "₿",
    color: "#B45309",
    light: "#FEF3C7",
    border: "#FCD34D",
    gradient: "linear-gradient(135deg,#B45309,#F59E0B)",
  },
  "Heritage": {
    emoji: "🏛️",
    color: "#92400E",
    light: "#FEF9C3",
    border: "#FDE68A",
    gradient: "linear-gradient(135deg,#92400E,#D97706)",
  },
  "Healthcare": {
    emoji: "❤️",
    color: "#DC2626",
    light: "#FEE2E2",
    border: "#FCA5A5",
    gradient: "linear-gradient(135deg,#DC2626,#F87171)",
  },
  "Ecosystems": {
    emoji: "🌿",
    color: "#15803D",
    light: "#DCFCE7",
    border: "#86EFAC",
    gradient: "linear-gradient(135deg,#15803D,#4ADE80)",
  },
  "Cybersecurity": {
    emoji: "🛡️",
    color: "#7C3AED",
    light: "#EDE9FE",
    border: "#A78BFA",
    gradient: "linear-gradient(135deg,#4C1D95,#7C3AED)",
  },
  "Transportation": {
    emoji: "🚌",
    color: "#0F766E",
    light: "#CCFBF1",
    border: "#5EEAD4",
    gradient: "linear-gradient(135deg,#0F766E,#2DD4BF)",
  },
  "Clean & Green": {
    emoji: "☀️",
    color: "#CA8A04",
    light: "#FEF9C3",
    border: "#FDE047",
    gradient: "linear-gradient(135deg,#CA8A04,#FACC15)",
  },
  "Robotics & Drones": {
    emoji: "🤖",
    color: "#475569",
    light: "#F1F5F9",
    border: "#94A3B8",
    gradient: "linear-gradient(135deg,#334155,#64748B)",
  },
  "Sports": {
    emoji: "🏃",
    color: "#EA580C",
    light: "#FFEDD5",
    border: "#FDBA74",
    gradient: "linear-gradient(135deg,#EA580C,#FB923C)",
  },
  "Tourism": {
    emoji: "✈️",
    color: "#0284C7",
    light: "#E0F2FE",
    border: "#38BDF8",
    gradient: "linear-gradient(135deg,#0284C7,#38BDF8)",
  },
  "Sustainability & Development": {
    emoji: "🌍",
    color: "#16A34A",
    light: "#DCFCE7",
    border: "#4ADE80",
    gradient: "linear-gradient(135deg,#14532D,#16A34A)",
  },
};

export const problemStatements: ProblemStatement[] = [
  // ══════════════════════════════════════════════
  //  1 · WEB 3.0 (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-W3-02",
    domain: "Web 3.0",
    title: "Blockchain for Transparent Food Supply Chains",
    statement: "Develop a blockchain-based system to track food products from farm to table, ensuring transparency and reducing food fraud.",
    description: "Each step of a food item's journey is recorded on an immutable ledger from harvesting to distribution. Consumers and businesses can scan a QR code to verify product origin and handling.",
    sdg: "SDG 2 (Zero Hunger), SDG 12 (Responsible Consumption)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Build a QR code scanner web app linked to an on-chain batch registry contract or IPFS metadata tracker.",
    suggestedStack: ["React", "HTML5-QRCode", "Solidity (Remix/Sepolia)", "Ethers.js"],
  },
  {
    id: "HACK-W3-06",
    domain: "Web 3.0",
    title: "Parametric Micro-Insurance for Farmers",
    statement: "On-chain micro-insurance for smallholder farmers using automated weather triggers.",
    description: "Design a smart contract protocol where insurance payouts trigger automatically based on live/mocked weather oracle data (rainfall, temperature) without manual claims.",
    sdg: "SDG 1 (No Poverty), SDG 2 (Zero Hunger)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Use OpenWeather API or mock oracle to automatically trigger simulated wallet payouts when rainfall < threshold.",
    suggestedStack: ["Solidity", "React", "OpenWeather API", "Ethers.js"],
  },
  {
    id: "HACK-W3-10",
    domain: "Web 3.0",
    title: "Decentralized Freelance Escrow with Milestone Payments",
    statement: "Build a decentralized escrow system that enables secure payments between freelancers and clients using smart contracts.",
    description: "Clients lock funds in a smart contract; payments are released per milestone upon client approval or automated time-lock conditions.",
    sdg: "SDG 8 (Decent Work and Economic Growth)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Deploy a 2-party milestone escrow contract + responsive dashboard for deposit, submit, and release.",
    suggestedStack: ["Solidity", "React", "TailwindCSS", "Ethers.js"],
  },
  {
    id: "HACK-W3-12",
    domain: "Web 3.0",
    title: "Decentralized Crowdfunding with Automated Refund Guarantees",
    statement: "Create a blockchain-based crowdfunding platform where funds are released only if predefined goals are met; otherwise contributors receive automatic refunds.",
    description: "Smart contracts enforce transparency by locking contributions until the campaign deadline. If target is met, creator withdraws; otherwise users claim refunds.",
    sdg: "SDG 9 (Innovation), SDG 8 (Economic Growth)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Classic Kickstarter smart contract pattern with deadline block timestamps and instant withdrawal buttons.",
    suggestedStack: ["Solidity", "React", "Vite", "Ethers.js"],
  },
  {
    id: "HACK-W3-13",
    domain: "Web 3.0",
    title: "Automated Data-to-Dashboard Intelligence System",
    statement: "Develop an AI-based system that allows users to upload datasets and automatically generates interactive charts and actionable insights.",
    description: "Users drag and drop CSV files; the system cleans data, suggests relevant visualizations, and generates executive summaries with natural language querying.",
    sdg: "SDG 9 (Innovation), SDG 12 (Responsible Production)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "PapaParse CSV parser + Recharts + OpenAI/Groq API for chart suggestions and summary text generation.",
    suggestedStack: ["React", "Recharts", "PapaParse", "Groq / OpenAI API"],
  },

  // ══════════════════════════════════════════════
  //  2 · EDTECH (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-ED-02",
    domain: "EdTech",
    title: "Offline-First Localized Educational Platform",
    statement: "Build an offline-first e-learning platform to deliver localized educational content to underserved communities.",
    description: "A Progressive Web App (PWA) that allows users to download courses, take interactive quizzes, and sync progress whenever connectivity is available.",
    sdg: "SDG 4 (Quality Education), SDG 10 (Reduced Inequalities)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Build as a React PWA using Dexie.js (IndexedDB) for 100% offline lesson storage and local quiz score tracking.",
    suggestedStack: ["React PWA", "Dexie.js (IndexedDB)", "TailwindCSS"],
  },
  {
    id: "HACK-ED-06",
    domain: "EdTech",
    title: "AI Career Counselor & Skill Roadmap Generator",
    statement: "Develop an AI-powered chatbot to guide students in career planning and skill development based on market trends.",
    description: "Interactive questionnaire evaluating user interests and background, outputting dynamic step-by-step career roadmaps and curated learning resources.",
    sdg: "SDG 4 (Quality Education), SDG 8 (Decent Work)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Use structured LLM output (JSON) to render visual roadmap tree nodes and estimated salary/demand stats.",
    suggestedStack: ["React", "Mermaid.js / React Flow", "Groq LLM", "TailwindCSS"],
  },
  {
    id: "HACK-ED-09",
    domain: "EdTech",
    title: "AI-Powered Automated Assessment & Feedback Engine",
    statement: "AI-Powered Automated Assessment & Feedback Engine for subjective assignments and coding exercises.",
    description: "Evaluates student answers against customized teacher rubrics, providing score breakdowns, grammar feedback, and improvement suggestions.",
    sdg: "SDG 4 (Quality Education)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Prompt engineering with structured JSON schema (Grammar, Clarity, Evidence score + remarks) on essay/code inputs.",
    suggestedStack: ["React", "OpenAI / Claude API", "TailwindCSS"],
  },
  {
    id: "HACK-ED-10",
    domain: "EdTech",
    title: "RAG Knowledge Base Chatbot for Institutional Q&A",
    statement: "Intelligent Knowledge Base Chatbot for University Syllabi, FAQs, and Exam Guidelines.",
    description: "RAG-powered assistant that ingests college handbook PDFs and provides exact answers with page citations 24/7.",
    sdg: "SDG 4 (Quality Education)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "ChromaDB / in-memory embeddings with LangChain in Python FastAPI backend + clean React chat UI.",
    suggestedStack: ["Python FastAPI", "LangChain", "ChromaDB", "React"],
  },
  {
    id: "HACK-ED-14",
    domain: "EdTech",
    title: "AI-Based Photo Doubt Solver with Step-by-Step Explanations",
    statement: "Develop an AI-powered doubt-solving platform where students can snap a photo or type questions to receive step-by-step solutions.",
    description: "Students upload textbook problems; multimodal AI breaks down formulas, concepts, and generates 3 similar practice questions.",
    sdg: "SDG 4 (Quality Education)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Gemini 1.5 Flash Vision API directly handling math/science images with KaTeX LaTeX formula rendering.",
    suggestedStack: ["React", "Gemini 1.5 Flash Vision", "KaTeX", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  3 · FINTECH (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-FT-02",
    domain: "FinTech",
    title: "RAG-Powered Regulatory Compliance Q&A Engine",
    statement: "RAG-powered search engine for financial regulations (RBI circulars, SEBI guidelines, tax compliance).",
    description: "Ingests policy documents and circulars to answer compliance questions instantly, highlighting applicable clauses and penalty rules.",
    sdg: "SDG 8 (Decent Work), SDG 16 (Strong Institutions)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Index 5-10 RBI Master Directions in ChromaDB with document chunk highlight viewer in UI.",
    suggestedStack: ["FastAPI", "LangChain", "ChromaDB", "React"],
  },
  {
    id: "HACK-FT-05",
    domain: "FinTech",
    title: "GenAI-Driven AML Suspicious Activity Report (SAR) Generator",
    statement: "Auto-draft structured, regulator-ready Anti-Money Laundering narrative reports from transaction chains.",
    description: "Analyzes suspicious transaction patterns (smurfing, rapid pass-through) and generates official SAR reports in seconds for compliance teams.",
    sdg: "SDG 16 (Peace, Justice and Strong Institutions)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Input mock banking transactions CSV -> generate formatted official PDF with entity relationship chart.",
    suggestedStack: ["React", "jsPDF", "Groq / OpenAI API", "TailwindCSS"],
  },
  {
    id: "HACK-FT-09",
    domain: "FinTech",
    title: "Personal Expense Anomaly & Budget Alert System",
    statement: "Develop a system that analyzes spending patterns, detects unusual expenses, and provides real-time budgeting alerts.",
    description: "Tracks user income/expenses, flags statistical outliers (Z-score anomaly detection), and suggests proactive savings goals.",
    sdg: "SDG 12 (Responsible Consumption)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Very high win rate for 8h! Build clean expense logger with Z-score outlier detection and visual budget meters.",
    suggestedStack: ["React", "Chart.js", "LocalStorage", "TailwindCSS"],
  },
  {
    id: "HACK-FT-10",
    domain: "FinTech",
    title: "Goal-Based Savings Planner with Micro-Investments",
    statement: "Create a platform that helps users set financial goals and automatically allocate spare change through smart savings strategies.",
    description: "Simulates transaction round-ups (e.g. ₹82 purchase rounded to ₹90, saving ₹8 into target fund) with projection curves.",
    sdg: "SDG 8 (Decent Work and Economic Growth)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Round-up simulator + interactive savings bucket progress cards with compound interest calculator.",
    suggestedStack: ["React", "Recharts", "Framer Motion", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  4 · SPACE & ENERGY (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-SP-01",
    domain: "Space & Energy",
    title: "Orbital Debris Tracking & Collision Risk Visualizer",
    statement: "AI-powered debris tracking and orbital collision risk visualization for low Earth orbit satellites.",
    description: "Ingests sample TLE satellite data, predicts close conjunction passes, and visualizes orbits and hazard corridors in a 3D Earth globe.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    estimatedHours: "5-6 hrs",
    feasibilityTip: "Use satellite.js + Three.js / React-Three-Fiber to plot 3D orbital rings around an Earth sphere with risk cones.",
    suggestedStack: ["Three.js", "satellite.js", "React", "TailwindCSS"],
  },
  {
    id: "HACK-SP-05",
    domain: "Space & Energy",
    title: "Space Weather Impact Prediction for Satellite Safety",
    statement: "Space weather monitoring dashboard predicting geomagnetic storms from solar wind data.",
    description: "Fetches NOAA DSCOVR/ACE solar wind feeds (Kp index, speed, proton flux) and triggers satellite safe-mode advisory alerts.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Live NOAA Open JSON API connection + threshold alert level meters + safe-mode checklist generator.",
    suggestedStack: ["React", "NOAA Space Weather API", "Chart.js", "TailwindCSS"],
  },
  {
    id: "HACK-SP-07",
    domain: "Space & Energy",
    title: "Exoplanet Habitability Scorer Using NASA Open Data",
    statement: "Exoplanet habitability scorer using NASA Kepler & TESS transit archives.",
    description: "Computes Earth Similarity Index (ESI) from planetary radius, orbital period, and stellar temperature from NASA open data.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Load NASA Exoplanet Archive CSV + compute ESI formula + render interactive planet comparison cards.",
    suggestedStack: ["React", "NASA Exoplanet API", "Plotly.js", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  5 · BITCOIN (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-BC-01",
    domain: "Bitcoin",
    title: "Bitcoin Transaction Graph & Anomaly Flow Tracker",
    statement: "Analyze blockchain transaction graphs to visualize fund flows and detect suspicious high-velocity patterns.",
    description: "Interactive visual node-link diagram tracing transaction inputs/outputs, flagging known mixers or high-risk wallet clusters.",
    sdg: "SDG 16 (Peace, Justice and Strong Institutions)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Connect to Blockstream.info public API + Cytoscape.js / Vis.js to render clickable transaction hops.",
    suggestedStack: ["React", "Cytoscape.js", "Blockstream API", "TailwindCSS"],
  },
  {
    id: "HACK-BC-03",
    domain: "Bitcoin",
    title: "Bitcoin DCA Backtester & Tax Gain-Loss Calculator",
    statement: "Simulate Dollar-Cost Averaging (DCA) strategies and calculate FIFO/LIFO capital gains tax reports.",
    description: "Users enter historical DCA parameters or upload wallet CSVs; system calculates returns vs lump sum and generates tax schedules.",
    sdg: "SDG 8 (Decent Work and Economic Growth)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Fetch free CoinGecko daily price history + compute DCA returns curve and capital gain buckets.",
    suggestedStack: ["React", "CoinGecko API", "Recharts", "TailwindCSS"],
  },
  {
    id: "HACK-BC-05",
    domain: "Bitcoin",
    title: "Crypto Phishing & Scam Website Detector",
    statement: "Detect fraudulent crypto investment websites, rug-pull domains, and phishing URLs.",
    description: "Analyzes URL domain similarity (typosquatting), WHOIS registration age, SSL certs, and page keywords to generate risk scores.",
    sdg: "SDG 16 (Peace, Justice and Strong Institutions)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Levenshtein domain distance checker + WHOIS age checker in FastAPI + Chrome extension / web demo.",
    suggestedStack: ["FastAPI", "dnspython / whois", "React", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  6 · HERITAGE (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-HR-02",
    domain: "Heritage",
    title: "Multilingual Cultural Heritage Storytelling Engine",
    statement: "RAG-driven interactive heritage knowledge base and voice storyteller across Indian regional languages.",
    description: "Explore historical monuments, folk tales, and dynasties through conversational AI that speaks in Hindi, Tamil, Bengali, etc.",
    sdg: "SDG 11 (Sustainable Cities), SDG 4 (Quality Education)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Ingest ASI monument history into ChromaDB + Web Speech API for voice narration in multiple languages.",
    suggestedStack: ["React", "LangChain", "Web Speech API", "TailwindCSS"],
  },
  {
    id: "HACK-HR-04",
    domain: "Heritage",
    title: "Virtual Heritage 360° Walkthrough & Interactive Guide",
    statement: "Create an immersive virtual tour of historical monuments with interactive audio lore checkpoints.",
    description: "Explore 360-degree panoramic views of Indian monuments (Hampi, Chittorgarh Fort, Konark) with clickable hotspot cards.",
    sdg: "SDG 11 (Sustainable Cities), SDG 8 (Decent Work)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Use Photo-Sphere-Viewer or Pannellum.js with 3-4 panoramic photos + audio narration hotspots.",
    suggestedStack: ["React", "Photo-Sphere-Viewer / Pannellum", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  7 · HEALTHCARE (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-HC-01",
    domain: "Healthcare",
    title: "AI-Based Early Disease Risk Assessment Engine",
    statement: "Predict diabetes, cardiovascular disease, and hypertension risk using clinical parameters and lifestyle habits.",
    description: "Users input basic vitals (BP, glucose, BMI, age, activity); ML models calculate risk percentage and recommend preventive steps.",
    sdg: "SDG 3 (Good Health and Well-being)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Train a Random Forest / Logistic Regression model on Kaggle Diabetes dataset + sleek interactive form.",
    suggestedStack: ["React", "Scikit-Learn", "FastAPI", "Recharts"],
  },
  {
    id: "HACK-HC-03",
    domain: "Healthcare",
    title: "Multilingual Rural Healthcare Triage Chatbot",
    statement: "AI-driven symptom-based triage assistant providing first-aid guidance in vernacular languages.",
    description: "Helps rural patients describe symptoms in Hindi or English, categorizes urgency (Home care, Clinic, Emergency), and lists nearby clinics.",
    sdg: "SDG 3 (Good Health and Well-being), SDG 10 (Reduced Inequalities)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Voice input via Web Speech API + medical triage prompt with red-flag emergency detection.",
    suggestedStack: ["React", "Web Speech API", "Groq / OpenAI API", "TailwindCSS"],
  },
  {
    id: "HACK-HC-04",
    domain: "Healthcare",
    title: "Automated Lab Report Summarizer & Biomarker Explainer",
    statement: "Upload lab test PDFs/images to automatically extract biomarker values and explain abnormal readings in plain language.",
    description: "Parses CBC, Lipid Profile, and Liver Panel reports, highlights out-of-range values in red, and provides dietary suggestions.",
    sdg: "SDG 3 (Good Health and Well-being)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Gemini 1.5 Flash Vision extracting structured JSON biomarker tables from uploaded lab test images.",
    suggestedStack: ["React", "Gemini 1.5 Flash", "TailwindCSS", "Recharts"],
  },
  {
    id: "HACK-HC-07",
    domain: "Healthcare",
    title: "Mental Wellness Companion with CBT Calming Exercises",
    statement: "AI mental health companion offering guided breathing, mood tracking, and cognitive behavioral therapy (CBT) exercises.",
    description: "Daily mood check-in, sentiment analysis on journal entries, and interactive box breathing animations for stress relief.",
    sdg: "SDG 3 (Good Health and Well-being)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Interactive SVG box breathing timer + mood calendar + empathetic conversational therapy companion.",
    suggestedStack: ["React", "Framer Motion", "Groq LLM", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  8 · ECOSYSTEMS (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-EO-05",
    domain: "Ecosystems",
    title: "AI-Based Waste Segregation & Recycling Scanner",
    statement: "Classify waste into Biodegradable, Recyclable, and Hazardous categories using image recognition.",
    description: "Webcam or photo upload detects plastic bottles, cardboard, e-waste, and food scraps with disposal guidelines and reward points.",
    sdg: "SDG 12 (Responsible Consumption and Production)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Teachable Machine / MobileNet or Gemini Vision in browser with gamified eco-points counter.",
    suggestedStack: ["React", "Gemini Flash / Teachable Machine", "Canvas", "TailwindCSS"],
  },
  {
    id: "HACK-EO-08",
    domain: "Ecosystems",
    title: "Personal Carbon Footprint Tracker & Reduction Planner",
    statement: "Calculate carbon footprint from travel, electricity, and food habits, with AI reduction roadmaps.",
    description: "Interactive questionnaire estimating annual CO2 emissions with category breakdown and personalized reduction goals.",
    sdg: "SDG 13 (Climate Action)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Emission factor calculations + dynamic Donut charts + weekly action challenge checklist.",
    suggestedStack: ["React", "Recharts", "Groq API", "TailwindCSS"],
  },
  {
    id: "HACK-EO-11",
    domain: "Ecosystems",
    title: "Crop Leaf Disease Classifier & Treatment Advisor",
    statement: "Detect crop leaf diseases from photos and provide affordable treatment recommendations.",
    description: "Farmers upload photos of tomato, potato, or wheat leaves; computer vision diagnoses blight/rust and suggests organic remedies.",
    sdg: "SDG 2 (Zero Hunger), SDG 12 (Responsible Production)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Pre-trained PlantVillage model or Gemini Vision API with regional language treatment prescriptions.",
    suggestedStack: ["React", "Gemini 1.5 Flash Vision", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  9 · CYBERSECURITY (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-CY-08",
    domain: "Cybersecurity",
    title: "Phishing Email & Malicious Link Analyzer",
    statement: "Analyze email headers, sender domains, and URLs to detect phishing attempts and spoofed identities.",
    description: "Paste email body or upload .eml file; tool inspects mismatched hyperlink targets, punycode domains, and urgency triggers.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    organization: "Indian Air Force (Concept)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Regex URL extractor + PhishTank API or heuristic rule score + LLM explainability report.",
    suggestedStack: ["React", "FastAPI", "Regex / Heuristics", "TailwindCSS"],
  },
  {
    id: "HACK-CY-17",
    domain: "Cybersecurity",
    title: "Domain Attack Surface & Security Scorecard Generator",
    statement: "Automated scanner assessing domain SSL health, security headers, open ports, and DNS records.",
    description: "Enter domain name; system checks SPF/DKIM/DMARC records, CSP headers, SSL cert expiration, and grades security from A+ to F.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    organization: "Bharat Electronics Ltd (BEL) (Concept)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "FastAPI endpoint fetching SSL cert, HTTP headers, and DNS records with visual security gauge.",
    suggestedStack: ["FastAPI", "dnspython / requests", "React", "Recharts"],
  },
  {
    id: "HACK-CY-21",
    domain: "Cybersecurity",
    title: "Cybercrime Bank Statement Link Analysis Tool",
    statement: "Parse bank statements to detect money laundering trails and visualize money mule networks.",
    description: "Uploads multiple CSV/PDF bank statements, identifies circular fund transfers and high-frequency structuring, rendering flow charts.",
    sdg: "SDG 16 (Peace, Justice and Strong Institutions)",
    organization: "MHA – I4C (Concept)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "CSV statement parser + Cytoscape.js transaction network graph highlighting suspicious mule accounts in red.",
    suggestedStack: ["React", "Cytoscape.js", "PapaParse", "TailwindCSS"],
  },
  {
    id: "HACK-CY-25",
    domain: "Cybersecurity",
    title: "Interactive Cyber Security & Forensics Training Lab",
    statement: "Browser-based interactive training portal with hands-on challenge modules in cryptography, SQL injection, and phishing.",
    description: "Gamified security exercises where learners analyze packet dumps, decrypt ciphers, and inspect code vulnerabilities in real time.",
    sdg: "SDG 4 (Quality Education)",
    organization: "MHA – I4C (Concept)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Interactive CTF challenges with hint system, code inspection sandbox, and score leaderboard.",
    suggestedStack: ["React", "TailwindCSS", "Framer Motion"],
  },

  // ══════════════════════════════════════════════
  //  10 · TRANSPORTATION (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-TR-01",
    domain: "Transportation",
    title: "Real-Time Bus Tracking & ETA Prediction Simulator",
    statement: "Interactive public transport tracking system with dynamic traffic-adjusted ETA predictions.",
    description: "Simulates moving buses along city routes on Leaflet map with stop arrival countdowns, passenger density gauges, and delay alerts.",
    sdg: "SDG 11 (Sustainable Cities), SDG 9 (Infrastructure)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Leaflet map with moving GPS bus markers along route polylines + live arrival countdown timer.",
    suggestedStack: ["React", "Leaflet Maps", "Turf.js", "TailwindCSS"],
  },
  {
    id: "HACK-TR-02",
    domain: "Transportation",
    title: "Delivery Route Optimizer for Green Logistics",
    statement: "Optimize multi-stop delivery routes to minimize travel time and fuel consumption.",
    description: "Users place delivery pins on map; TSP algorithm computes optimal sequence, saving fuel and calculating CO2 reduction.",
    sdg: "SDG 9 (Industry), SDG 12 (Responsible Consumption)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Leaflet map with draggable waypoints + OSRM routing API or nearest-neighbor TSP path visualizer.",
    suggestedStack: ["React", "Leaflet / OSRM API", "TailwindCSS"],
  },
  {
    id: "HACK-TR-10",
    domain: "Transportation",
    title: "Driver Fatigue & Drowsiness Detection System",
    statement: "Webcam-based real-time driver fatigue monitoring using facial landmarks to trigger audio alarms.",
    description: "Tracks eye closure duration (Eye Aspect Ratio) and yawning in real time via webcam; beeps when drowsiness is detected.",
    sdg: "SDG 3 (Good Health and Well-being)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "MediaPipe FaceMesh in browser tracking eye landmarks + Web Audio API warning siren.",
    suggestedStack: ["MediaPipe FaceMesh", "React", "Web Audio API", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  11 · CLEAN & GREEN (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-CG-001",
    domain: "Clean & Green",
    title: "Smart Farm Irrigation & Soil Moisture Controller",
    statement: "IoT sensor dashboard monitoring soil moisture and automating water irrigation schedules.",
    description: "Simulates multi-zone farm soil moisture levels; triggers smart pump relays when moisture drops below crop threshold.",
    sdg: "SDG 6 (Clean Water and Sanitation), SDG 12 (Responsible Production)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Interactive farm zone dashboard with simulated sensor sliders + automated pump on/off logic and water savings stats.",
    suggestedStack: ["React", "Recharts", "TailwindCSS", "Framer Motion"],
  },
  {
    id: "HACK-CG-003",
    domain: "Clean & Green",
    title: "Real-Time City Air Quality Index (AQI) & Health Advisory",
    statement: "Live air quality monitoring dashboard with health recommendations for vulnerable citizens.",
    description: "Fetches live PM2.5, PM10, and Ozone readings across Indian cities with color-coded advisory for outdoor activity.",
    sdg: "SDG 3 (Good Health and Well-being), SDG 11 (Sustainable Cities)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Connect to OpenAQ / WAQI free public API + search city + personalized health recommendations.",
    suggestedStack: ["React", "OpenAQ API", "Recharts", "TailwindCSS"],
  },
  {
    id: "HACK-CG-008",
    domain: "Clean & Green",
    title: "Household Energy Consumption Analyzer & Solar Shift Guide",
    statement: "Track appliance energy consumption and identify peak-hour cost savings through solar shifting.",
    description: "Users log appliances; system graphs hourly load curve and recommends shifting high-draw appliances to solar generation hours.",
    sdg: "SDG 7 (Affordable and Clean Energy), SDG 12 (Responsible Production)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Appliance wattage calculator + dynamic 24-hour solar vs grid load curve chart.",
    suggestedStack: ["React", "Chart.js", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  12 · ROBOTICS & DRONES (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-RD-03",
    domain: "Robotics & Drones",
    title: "Gesture-Controlled Robot Arm 3D Simulator",
    statement: "Control a simulated 3-DOF robot arm in 3D space using webcam hand gestures.",
    description: "MediaPipe hand tracking maps finger positions to robot arm joints in Three.js, enabling intuitive touchless control.",
    sdg: "SDG 4 (Quality Education), SDG 9 (Innovation)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "MediaPipe Hands in JavaScript + Three.js 3-DOF arm model moving smoothly with hand coordinates.",
    suggestedStack: ["MediaPipe Hands", "Three.js / React-Three-Fiber", "React", "TailwindCSS"],
  },
  {
    id: "HACK-RD-06",
    domain: "Robotics & Drones",
    title: "RAG Assistant for Robot Troubleshooting & Error Codes",
    statement: "RAG chatbot ingesting robot maintenance manuals to troubleshoot industrial robot error codes.",
    description: "Engineers query error codes (e.g. FANUC/ABB alarms); system provides exact root causes, step-by-step resolution, and wiring diagrams.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Load industrial robot error manual into ChromaDB vector database with instant lookup and resolution guides.",
    suggestedStack: ["LangChain", "FastAPI", "ChromaDB", "React"],
  },
  {
    id: "HACK-RD-08",
    domain: "Robotics & Drones",
    title: "Drone Flight Path Planner with Obstacle Avoidance Simulation",
    statement: "Interactive flight path planning tool navigating drones safely through 2D/3D obstacle zones using A* algorithm.",
    description: "Users place start/end points and draggable building obstacles; algorithm computes shortest collision-free flight path.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Canvas 2D grid with A* pathfinding algorithm animating the drone traversal around obstacle blocks.",
    suggestedStack: ["HTML5 Canvas", "A* Algorithm", "React", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  13 · SPORTS (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-SPT-01",
    domain: "Sports",
    title: "AI Exercise Pose Tracker & Technique Analyzer",
    statement: "Real-time posture and repetition tracking for squats, pushups, and gym exercises using computer vision.",
    description: "Webcam tracks body joint angles (knee, hip, elbow) via MediaPipe Pose, counting correct reps and alerting on incorrect posture.",
    sdg: "SDG 3 (Good Health and Well-being)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "MediaPipe Pose in browser calculating knee angle (180° -> 90°) with live rep counter and audio ding.",
    suggestedStack: ["MediaPipe Pose", "React", "HTML5 Canvas", "TailwindCSS"],
  },
  {
    id: "HACK-SPT-02",
    domain: "Sports",
    title: "RAG-Powered Sports Rulebook & Referee Decision Assistant",
    statement: "Query complex cricket, football, and athletics rules with instant official rulebook citations.",
    description: "Answers disputed scenarios (e.g. LBW rules, offside exceptions, concussion protocol) with exact clause citations from ICC/FIFA rulebooks.",
    sdg: "SDG 16 (Peace, Justice and Strong Institutions)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Ingest official ICC & FIFA rulebook PDFs into ChromaDB with instant citation lookup.",
    suggestedStack: ["LangChain", "FastAPI", "ChromaDB", "React"],
  },
  {
    id: "HACK-SPT-03",
    domain: "Sports",
    title: "Automated Sports Match Report & Article Generator",
    statement: "Auto-generate engaging sports journalism articles and player scorecards from match JSON data.",
    description: "Input scorecard data; LLM writes complete match summary with headline, turning points, and Player of the Match highlights.",
    sdg: "SDG 9 (Industry, Innovation and Infrastructure)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Scorecard input form -> prompt generating structured news article with exportable PDF report.",
    suggestedStack: ["React", "Groq / OpenAI API", "jsPDF", "TailwindCSS"],
  },
  {
    id: "HACK-SPT-12",
    domain: "Sports",
    title: "Gamified Digital Detox & Focus Assistant",
    statement: "Pomodoro focus timer with gamified streak rewards to overcome digital distractions.",
    description: "Users start focus sessions; virtual trees grow as time passes. Quitting early withers the tree. Includes focus analytics.",
    sdg: "SDG 3 (Good Health and Well-being)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Canvas tree growing animation + Pomodoro timer with local storage streaks.",
    suggestedStack: ["React", "HTML5 Canvas", "TailwindCSS", "Framer Motion"],
  },

  // ══════════════════════════════════════════════
  //  14 · TOURISM (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-TO-03",
    domain: "Tourism",
    title: "AI Tourist Itinerary & Budget Planner",
    statement: "Generate personalized day-by-day travel itineraries based on destination, budget, and travel interests.",
    description: "Select destination, number of days, and preferences (heritage, food, adventure); system generates sequenced itinerary with interactive map.",
    sdg: "SDG 8 (Decent Work), SDG 11 (Sustainable Cities)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Form with interest sliders -> LLM produces structured JSON itinerary mapped onto Leaflet pins.",
    suggestedStack: ["React", "Leaflet Maps", "Groq / OpenAI API", "TailwindCSS"],
  },
  {
    id: "HACK-TO-09",
    domain: "Tourism",
    title: "Offline Local Language Phrasebook with Audio Pronunciation",
    statement: "Multilingual phrase assistant for tourists navigating local markets, transport, and emergencies.",
    description: "Categorized phrase cards (Taxi, Food, Hospital, Directions) in 8 regional languages with native audio playback and phonetic guides.",
    sdg: "SDG 10 (Reduced Inequalities)",
    estimatedHours: "2-3 hrs",
    feasibilityTip: "Super fast 8-hour build! Audio flashcards using Web Speech API with offline local storage caching.",
    suggestedStack: ["React PWA", "Web Speech API", "TailwindCSS"],
  },
  {
    id: "HACK-TO-10",
    domain: "Tourism",
    title: "Nearby Attractions & Shortest Path Itinerary Planner",
    statement: "Discover nearby tourist attractions based on GPS location and available time with optimized visit order.",
    description: "Detects current coordinates, queries top heritage/food spots, and plots the shortest walking/driving route.",
    sdg: "SDG 11 (Sustainable Cities and Communities)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Geolocation API + Leaflet map + open attraction database with sequence route polyline.",
    suggestedStack: ["React", "Leaflet", "Geolocation API", "TailwindCSS"],
  },

  // ══════════════════════════════════════════════
  //  15 · SUSTAINABILITY & DEVELOPMENT (8-Hour Feasible)
  // ══════════════════════════════════════════════
  {
    id: "HACK-SI-01",
    domain: "Sustainability & Development",
    title: "Crop Suitability & Climate Resilience Planner",
    statement: "Predict optimal crops and sowing schedules based on soil NPK values, rainfall, and regional climate trends.",
    description: "Farmers enter soil test values; ML model recommends top 3 suitable crops with expected yield and water requirement.",
    sdg: "SDG 2 (Zero Hunger), SDG 13 (Climate Action)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Kaggle Crop Recommendation dataset trained on RandomForest + clean input card with yield forecast.",
    suggestedStack: ["React", "FastAPI (Scikit-Learn)", "Recharts", "TailwindCSS"],
  },
  {
    id: "HACK-SI-04",
    domain: "Sustainability & Development",
    title: "Crowdsourced Disaster Relief & Resource Mapping Platform",
    statement: "Real-time crowdsourced mapping tool for disaster-affected areas to report relief needs and medical SOS.",
    description: "Citizens drop geo-tagged pins (Food needed, Shelter, Medical SOS); relief teams filter urgent requests and update rescue status.",
    sdg: "SDG 11 (Sustainable Cities), SDG 13 (Climate Action)",
    estimatedHours: "4-5 hrs",
    feasibilityTip: "Leaflet map with click-to-pin incident reporting, category filters (Food, Medicine, Boat), and status badges.",
    suggestedStack: ["React", "Leaflet", "LocalStorage", "TailwindCSS"],
  },
  {
    id: "HACK-SI-08",
    domain: "Sustainability & Development",
    title: "Surplus Food Redistribution & NGO Connect Platform",
    statement: "Connect restaurants and banquet halls with surplus food to nearby verified charity shelters.",
    description: "Donors list excess meals with preparation timestamp; nearby NGOs receive instant notifications to claim and pick up food.",
    sdg: "SDG 2 (Zero Hunger), SDG 12 (Responsible Production)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Instant meal listing board with expiry countdown timers + claim buttons and shelter pickup map.",
    suggestedStack: ["React", "Leaflet", "LocalStorage", "TailwindCSS"],
  },
  {
    id: "HACK-SI-09",
    domain: "Sustainability & Development",
    title: "Smart Home Energy Usage & Efficiency Simulator",
    statement: "Interactive 2D home simulator optimizing residential electricity consumption and identifying energy waste.",
    description: "Interactive floorplan toggling lights, AC, and appliances with real-time wattage meters and peak-tariff savings advice.",
    sdg: "SDG 11 (Sustainable Cities), SDG 7 (Clean Energy)",
    estimatedHours: "3-4 hrs",
    feasibilityTip: "Interactive 2D room floorplan with toggleable appliance switches and dynamic energy gauge meter.",
    suggestedStack: ["React", "Framer Motion", "Recharts", "TailwindCSS"],
  },
];
