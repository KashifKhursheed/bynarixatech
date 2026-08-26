import {
  ServiceItem,
  TechItem,
  ProjectItem,
  TestimonialItem,
  PricingPlan,
  FAQItem,
  BlogPost,
  CareerPosition,
} from '../types';

export const COMPANY_INFO = {
  name: 'Bynarixa Tech Solutions',
  shortName: 'Bynarixa',
  tagline: 'Engineering the Future with Intelligent Software.',
  heroHeadline: 'Building Next-Generation Mobile Apps, Web Apps & Enterprise Software.',
  heroDescription:
    'Bynarixa Tech Solutions is a premier software engineering powerhouse delivering cloud-native applications, AI-driven systems, custom enterprise platforms, and cross-platform mobile solutions built for global scale.',
  phone: '0306-9299193',
  intlPhone: '+92 306 9299193',
  whatsappNumber: '923069299193',
  email: 'info@bynarixa.com',
  location: 'Pakistan',
  address: 'Bynarixa Tech Tower, Software Technology Park, Pakistan',
  businessHours: 'Monday–Saturday, 9 AM – 7 PM PKT',
};

export const STATS = [
  { value: '250+', label: 'Projects Completed', icon: 'CheckCircle2' },
  { value: '120+', label: 'Happy Global Clients', icon: 'Users' },
  { value: '18+', label: 'Countries Served', icon: 'Globe' },
  { value: '8+', label: 'Years Experience', icon: 'Award' },
  { value: '45+', label: 'Expert Engineers', icon: 'Cpu' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'android-dev',
    title: 'Android App Development',
    category: 'mobile',
    iconName: 'Smartphone',
    shortDesc: 'High-performance native Android apps built with Kotlin, Jetpack Compose, and robust architecture.',
    fullDesc: 'We construct hyper-responsive, secure, and intuitive Android applications engineered for the vast ecosystem of modern Android devices. Our development leverages modern Kotlin coroutines, Jetpack libraries, Clean Architecture, and seamless offline-first synchronization.',
    features: ['Native Kotlin & Jetpack Compose', 'Material Design 3 Integration', 'Biometric & Hardware Integration', 'Play Store Optimization & Publishing'],
    techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Coroutines', 'Room DB', 'Retrofit'],
    deliverables: ['Production APK & AAB Files', 'Source Code Repository', 'Architecture & API Docs', 'Play Store Listing Setup'],
  },
  {
    id: 'ios-dev',
    title: 'iOS App Development',
    category: 'mobile',
    iconName: 'Apple',
    shortDesc: 'Flawless native iOS apps crafted using Swift, SwiftUI, and Apple ecosystem guidelines.',
    fullDesc: 'Deliver delightful experiences to iPhone, iPad, and Apple Watch users. Our iOS engineering team builds lightweight, lightning-fast native applications prioritizing privacy, human interface guidelines, and buttery smooth 120Hz animations.',
    features: ['Swift & SwiftUI Architecture', 'Apple Pay & HealthKit Integration', 'Strict Security & Encryption', 'App Store Review Guidance'],
    techStack: ['Swift', 'SwiftUI', 'Combine', 'CoreData', 'TestFlight', 'XCode'],
    deliverables: ['App Store Submission', 'TestFlight Build Pipeline', 'Modular Swift Codebase', 'Complete Design Specs'],
  },
  {
    id: 'flutter-dev',
    title: 'Flutter Development',
    category: 'mobile',
    iconName: 'Layers',
    shortDesc: 'Multi-platform apps for iOS, Android, and Web from a single high-performance Dart codebase.',
    fullDesc: 'Accelerate your time-to-market with Google Flutter framework. We build visually stunning cross-platform applications featuring 60fps native performance, custom UI shaders, and state management via BLoC or Provider.',
    features: ['Single Codebase Multi-Platform', 'Pixel-Perfect Custom UI', 'Native Hardware Access', 'Rapid Hot-Reload Iteration'],
    techStack: ['Flutter', 'Dart', 'BLoC Pattern', 'Firebase', 'GraphQL', 'Riverpod'],
    deliverables: ['iOS & Android Builds', 'Web App Deployment', 'Flutter UI Design Kit', 'CI/CD Pipeline'],
  },
  {
    id: 'react-native',
    title: 'React Native Development',
    category: 'mobile',
    iconName: 'Tablet',
    shortDesc: 'Scalable mobile apps powered by React and native bridge components for seamless speed.',
    fullDesc: 'Combine the agility of React web development with full native device performance. Bynarixa engineers robust React Native apps with TypeScript, Reanimated 3, and native C++ modules where extreme performance is required.',
    features: ['Cross-Platform React Code Sharing', 'Reanimated 3 Motion Engine', 'Over-The-Air (OTA) Updates', 'Native Module Bridges'],
    techStack: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'Reanimated', 'Jest'],
    deliverables: ['Store-ready Mobile Apps', 'Shared Web Component Library', 'OTA Update Setup', 'Unit & E2E Test Suite'],
  },
  {
    id: 'pwa-dev',
    title: 'Progressive Web Apps (PWA)',
    category: 'web',
    iconName: 'Globe',
    shortDesc: 'Installable, offline-capable web applications delivering app-like performance on all browsers.',
    fullDesc: 'Bridge the gap between web and mobile apps. Our PWAs deliver instant page loads via Service Workers, background push notifications, home-screen installation, and full offline caching capabilities.',
    features: ['Offline-First Functionality', 'Push Notification Engine', 'Lighthouse Score 95+ Guarantee', 'Zero-Install Web Experience'],
    techStack: ['Workbox', 'Service Workers', 'React/Next.js', 'Web Push API', 'IndexedDB'],
    deliverables: ['PWA Manifest & Workers', 'Lighthouse Audit Report', 'Web App Deployment', 'Cross-Browser Suite'],
  },
  {
    id: 'custom-web',
    title: 'Custom Web Applications',
    category: 'web',
    iconName: 'Code',
    shortDesc: 'Bespoke web portals, dashboards, and client platforms engineered with modern frontend stacks.',
    fullDesc: 'Transform complex business logic into intuitive web portals. We build custom web apps equipped with real-time updates, reactive data tables, enterprise security, and responsive layouts for all device sizes.',
    features: ['Server-Side & Client Rendering', 'Real-Time WebSockets', 'Granular Role-Based Access', 'High-Density Data Views'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL'],
    deliverables: ['Responsive Web Portal', 'REST & GraphQL APIs', 'Deployment Scripts', 'User Management Panel'],
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    category: 'enterprise',
    iconName: 'Building2',
    shortDesc: 'Mission-critical enterprise solutions engineered for maximum security, fault-tolerance, and scale.',
    fullDesc: 'Empower your enterprise with custom software solutions designed to streamline complex workflows, handle millions of concurrent transactions, and meet strict SOC2 and ISO compliance benchmarks.',
    features: ['Microservices Architecture', 'High-Availability Clusters', 'SSO & OAuth 2.0 Integration', 'Comprehensive Audit Logging'],
    techStack: ['Node.js', 'Python', '.NET Core', 'PostgreSQL', 'Docker', 'Kubernetes'],
    deliverables: ['Distributed System Architecture', 'Disaster Recovery Plan', 'Enterprise Admin Console', 'Full Security Audit'],
  },
  {
    id: 'saas-dev',
    title: 'SaaS Development',
    category: 'web',
    iconName: 'Cloud',
    shortDesc: 'End-to-end multi-tenant SaaS platforms featuring automated subscriptions and analytics.',
    fullDesc: 'Build profitable, scalable Software-as-a-Service platforms. From tenant isolation and Stripe billing integration to usage tracking, feature flags, and custom onboarding flows, we turn SaaS concepts into market leaders.',
    features: ['Multi-Tenant Database Architecture', 'Automated Stripe & PayPal Billing', 'Usage-Based Analytics Engine', 'Custom Customer Portals'],
    techStack: ['Next.js', 'Express', 'Stripe API', 'PostgreSQL', 'Redis', 'AWS CloudFront'],
    deliverables: ['Production SaaS App', 'Billing & Subscription Engine', 'Analytics Dashboard', 'Admin Portal'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Intelligent Systems',
    category: 'ai_cloud',
    iconName: 'Bot',
    shortDesc: 'Empower your software with LLMs, predictive AI, NLP workflows, and automated vision engines.',
    fullDesc: 'Capitalize on the AI revolution. We integrate Gemini, OpenAI, Claude, custom fine-tuned models, and RAG (Retrieval-Augmented Generation) pipelines into your existing apps to automate manual work and deliver predictive insights.',
    features: ['Custom RAG Knowledge Bases', 'LLM Chatbots & Assistants', 'Predictive Analytics Models', 'Automated Document OCR & NLP'],
    techStack: ['Gemini API', 'LangChain', 'Python', 'Vector DBs (Pinecone/Weaviate)', 'PyTorch'],
    deliverables: ['Trained AI Agents', 'Vector Index Pipeline', 'API Proxy Server', 'Latency Optimization Guide'],
  },
  {
    id: 'api-dev',
    title: 'API Development & Middleware',
    category: 'enterprise',
    iconName: 'Cpu',
    shortDesc: 'Secure, lightning-fast RESTful and GraphQL APIs powering web, mobile, and third-party integrations.',
    fullDesc: 'Connect systems effortlessly with clean, self-documenting APIs. We architect microservices and middleware with low latency, rate limiting, tokenized authentication, and automated OpenAPI/Swagger specs.',
    features: ['RESTful & GraphQL Architectures', 'Rate Limiting & Threat Protection', 'Swagger/OpenAPI Documentation', 'Automated API Test Suites'],
    techStack: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'Swagger', 'Postman'],
    deliverables: ['Deployed API Endpoints', 'Interactive Documentation', 'SDK Client Libraries', 'Postman Test Collections'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Prototyping',
    category: 'web',
    iconName: 'Layout',
    shortDesc: 'Human-centered user interface design, visual design systems, and interactive clickable prototypes.',
    fullDesc: 'Design software that users love. Our UI/UX team conducts user research, wireframing, interactive prototyping, and design system creation to ensure your product is visual perfection and mathematically effortless to navigate.',
    features: ['Design Systems & Component Specs', 'Interactive Figma Prototypes', 'Accessibility (WCAG 2.1) Audits', 'Usability Testing Sessions'],
    techStack: ['Figma', 'Adobe XD', 'Framer', 'Tailwind CSS', 'Design Systems'],
    deliverables: ['Figma UI Kit & Design System', 'Clickable Prototype', 'Asset Export Bundle', 'UX Research Insights'],
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud Infrastructure & DevOps',
    category: 'ai_cloud',
    iconName: 'Server',
    shortDesc: 'Automated CI/CD pipelines, container orchestration, and zero-downtime cloud infrastructure.',
    fullDesc: 'Deploy with confidence. We configure secure, auto-scaling cloud architectures on AWS, GCP, and Azure featuring Docker containerization, Kubernetes orchestration, Terraform infrastructure-as-code, and 24/7 monitoring.',
    features: ['Automated GitHub Actions CI/CD', 'Docker & Kubernetes Clusters', 'Terraform Infrastructure as Code', 'Prometheus & Grafana Monitoring'],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    deliverables: ['Production Cloud Setup', 'CI/CD Build Pipelines', 'Terraform Configuration Scripts', 'Security Hardening Audit'],
  },
  {
    id: 'maintenance-support',
    title: 'Software Maintenance & Support',
    category: 'enterprise',
    iconName: 'ShieldCheck',
    shortDesc: 'Proactive 24/7 monitoring, security patching, performance tuning, and continuous feature updates.',
    fullDesc: 'Ensure your application stays secure, compliant, and lightning-fast post-launch. Our dedicated support team handles OS updates, library patches, emergency hotfixes, and ongoing feature enhancement sprints.',
    features: ['SLA-Backed 24/7 Monitoring', 'Monthly Security Vulnerability Audits', 'Performance Optimization Sprints', 'Dedicated Support Manager'],
    techStack: ['Sentry', 'Datadog', 'Git', 'AWS CloudWatch', 'Jira'],
    deliverables: ['Monthly Health Reports', 'Guaranteed SLA Uptime', 'Emergency Patching Service', 'Code Refactoring'],
  },
  {
    id: 'erp-systems',
    title: 'Custom ERP Systems',
    category: 'enterprise',
    iconName: 'Database',
    shortDesc: 'Centralized enterprise resource planning software connecting inventory, finance, HR, and operations.',
    fullDesc: 'Eliminate data silos across your organization. Our custom ERP platforms unify supply chain management, human resources, financial accounting, and operational reporting into one single source of truth.',
    features: ['Real-Time Inventory Tracking', 'Financial Ledger & Payroll Suite', 'Automated Workflow Triggers', 'Custom Executive Dashboards'],
    techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis', 'Celery'],
    deliverables: ['Modular ERP Platform', 'Data Migration Utility', 'Departmental Role Manager', 'Training Manuals'],
  },
  {
    id: 'crm-solutions',
    title: 'Custom CRM Solutions',
    category: 'enterprise',
    iconName: 'UserCheck',
    shortDesc: 'Tailored Customer Relationship Management systems to accelerate sales cycles and boost customer retention.',
    fullDesc: 'Empower your sales and customer success teams. We build custom CRMs with pipeline tracking, automated lead scoring, omnichannel communication logs, and predictive sales analytics.',
    features: ['Visual Sales Pipeline Kanban', 'Omnichannel Email & WhatsApp Logs', 'Lead Scoring Algorithms', 'Automated Task Reminders'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Twilio API', 'SendGrid'],
    deliverables: ['Custom CRM Web Portal', 'Mobile Sales App', 'Integration Connectors', 'Sales Training Workshops'],
  },
  {
    id: 'ecommerce-platforms',
    title: 'E-Commerce Platforms',
    category: 'web',
    iconName: 'ShoppingBag',
    shortDesc: 'High-converting custom online storefronts, headless commerce solutions, and payment integrations.',
    fullDesc: 'Drive revenue with lightning-fast e-commerce platforms. Whether custom headless setups or complex multi-vendor marketplaces, we optimize checkout funnels, inventory sync, and multi-currency payment gateways.',
    features: ['Headless Storefront Speed', 'Multi-Currency & Tax Engine', 'Global Payment Gateway Sync', 'Automated Order Fulfillment'],
    techStack: ['Next.js', 'Stripe', 'Node.js', 'Shopify Storefront API', 'PostgreSQL'],
    deliverables: ['High-Speed Storefront', 'Merchant Admin Dashboard', 'Payment Gateway Integration', 'SEO & Analytics Setup'],
  },
];

export const TECHNOLOGIES_DATA: TechItem[] = [
  // Frontend
  { name: 'TypeScript', icon: 'Code2', category: 'Frontend', level: 'Expert', description: 'Strict type safety and robust software design' },
  { name: 'React.js', icon: 'Atom', category: 'Frontend', level: 'Expert', description: 'Dynamic UI development with modular components' },
  { name: 'Next.js', icon: 'Globe2', category: 'Frontend', level: 'Expert', description: 'Server-side rendering, static generation, and API routes' },
  { name: 'Vue.js', icon: 'Boxes', category: 'Frontend', level: 'Advanced', description: 'Progressive framework for reactive web user interfaces' },
  { name: 'Tailwind CSS', icon: 'Palette', category: 'Frontend', level: 'Expert', description: 'Utility-first CSS framework for custom responsive design' },
  { name: 'HTML5 & CSS3', icon: 'FileCode', category: 'Frontend', level: 'Expert', description: 'Semantic markup, modern layout models, and web accessibility' },
  { name: 'JavaScript (ES6+)', icon: 'Terminal', category: 'Frontend', level: 'Expert', description: 'Core asynchronous web programming and DOM engines' },

  // Backend
  { name: 'Node.js', icon: 'Server', category: 'Backend', level: 'Expert', description: 'Asynchronous event-driven server runtime' },
  { name: 'Express.js', icon: 'Cpu', category: 'Backend', level: 'Expert', description: 'Lightweight, fast microservice API architecture' },
  { name: 'Python', icon: 'Binary', category: 'Backend', level: 'Expert', description: 'Powering AI workflows, data processing, and backends' },
  { name: 'Django', icon: 'Shield', category: 'Backend', level: 'Advanced', description: 'High-level Python web framework for batteries-included apps' },
  { name: 'Laravel (PHP)', icon: 'Layers', category: 'Backend', level: 'Advanced', description: 'Elegant MVC architecture for rapid web application delivery' },
  { name: '.NET Core', icon: 'Briefcase', category: 'Backend', level: 'Advanced', description: 'Enterprise cross-platform software development framework' },

  // Database
  { name: 'PostgreSQL', icon: 'Database', category: 'Database', level: 'Expert', description: 'Advanced open-source relational database with JSON support' },
  { name: 'MySQL', icon: 'Table', category: 'Database', level: 'Expert', description: 'Reliable, high-speed relational storage engine' },
  { name: 'MongoDB', icon: 'HardDrive', category: 'Database', level: 'Expert', description: 'NoSQL document database for flexible schema scaling' },
  { name: 'Firebase / Firestore', icon: 'Flame', category: 'Database', level: 'Expert', description: 'Real-time cloud database and client synchronization' },

  // Cloud
  { name: 'AWS (Amazon Web Services)', icon: 'CloudRain', category: 'Cloud', level: 'Expert', description: 'EC2, S3, Lambda, RDS, and CloudFront cloud computing' },
  { name: 'Google Cloud Platform', icon: 'Cloud', category: 'Cloud', level: 'Expert', description: 'Cloud Run, BigQuery, Vertex AI, and Kubernetes Engine' },
  { name: 'Docker', icon: 'Box', category: 'Cloud', level: 'Expert', description: 'Application containerization for consistent deployment environments' },
  { name: 'Microsoft Azure', icon: 'CloudLightning', category: 'Cloud', level: 'Advanced', description: 'Enterprise cloud services and hybrid deployment networks' },

  // Mobile
  { name: 'Flutter & Dart', icon: 'Smartphone', category: 'Mobile', level: 'Expert', description: 'High-performance multi-platform mobile native applications' },
  { name: 'React Native', icon: 'Tablet', category: 'Mobile', level: 'Expert', description: 'Cross-platform mobile apps with native UI performance' },
  { name: 'Kotlin (Android)', icon: 'SmartphoneNfc', category: 'Mobile', level: 'Expert', description: 'Modern native Android mobile application engineering' },
  { name: 'Swift (iOS)', icon: 'AppWindow', category: 'Mobile', level: 'Expert', description: 'Native iOS, iPadOS, and Apple watchOS applications' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fintech-neobank-app',
    title: 'NovaBank - AI-Powered Neobanking Platform',
    client: 'Nova Financial Group',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Next-gen mobile banking app featuring instant biometric transfers, AI budgeting assistant, and multi-currency accounts.',
    fullChallenge: 'Nova required a secure, compliant banking application capable of processing 50,000 requests/sec with zero latency, real-time fraud detection, and intuitive UX for younger demographics.',
    solution: 'Bynarixa engineered a Flutter mobile frontend coupled with Node.js microservices, biometrics encryption, and a custom Gemini AI financial advisor module.',
    impact: ['1.2M Active Users in first 6 months', '99.999% Core System Uptime', '4.9 Star Rating on App Store & Play Store'],
    tags: ['Flutter', 'Node.js', 'PostgreSQL', 'Biometrics', 'AI Assistant'],
    liveUrl: 'https://wa.me/923069299193?text=I%20want%20to%20view%20NovaBank%20Case%20Study',
    metrics: [
      { label: 'Active Users', value: '1.2M+' },
      { label: 'Transactions/Sec', value: '50K' },
      { label: 'Store Rating', value: '4.9/5' },
    ],
  },
  {
    id: 'healthtech-telemedicine',
    title: 'CarePulse - Enterprise Telehealth & EHR System',
    client: 'CarePulse Medical Networks',
    category: 'Enterprise Software',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'HIPAA-compliant web & mobile healthcare portal with WebRTC video consultations, automated prescription generation, and AI triage.',
    fullChallenge: 'Healthcare providers faced severe friction connecting remote patients with specialists while keeping electronic health records strictly HIPAA compliant.',
    solution: 'Built a multi-tenant React and Python platform with encrypted WebRTC video streaming, digital prescriptions, and automated EHR sync.',
    impact: ['300,000 Virtual Consultations completed', '65% Reduction in Patient Wait Times', '100% HIPAA & GDPR Compliance Audit Passed'],
    tags: ['React', 'Python', 'WebRTC', 'AWS HealthLake', 'HIPAA'],
    liveUrl: 'https://wa.me/923069299193?text=I%20want%20to%20view%20CarePulse%20Case%20Study',
    metrics: [
      { label: 'Consultations', value: '300K+' },
      { label: 'Wait Reduction', value: '65%' },
      { label: 'Compliance', value: '100%' },
    ],
  },
  {
    id: 'logistics-fleet-saas',
    title: 'OmniTrack - Global Logistics & Fleet Telematics SaaS',
    client: 'LogiX Global',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Real-time GPS fleet tracking, automated route optimization, and fuel consumption predictive analytics for 10,000+ commercial trucks.',
    fullChallenge: 'A leading logistics firm struggled with inefficient delivery routes, high fuel overheads, and fragmented driver communication across 12 countries.',
    solution: 'Designed an IoT telemetry platform using Next.js, Go backend, and machine learning algorithms for dynamic real-time rerouting around traffic.',
    impact: ['22% Reduction in Fleet Fuel Expenses', '4.2 Million Tons CO2 Emissions Saved', '98.8% On-Time Delivery Ratio'],
    tags: ['Next.js', 'Go', 'IoT Telematics', 'Docker', 'Google Maps API'],
    liveUrl: 'https://wa.me/923069299193?text=I%20want%20to%20view%20OmniTrack%20Case%20Study',
    metrics: [
      { label: 'Fuel Saved', value: '22%' },
      { label: 'Tracked Vehicles', value: '10K+' },
      { label: 'On-Time Rate', value: '98.8%' },
    ],
  },
  {
    id: 'ecom-luxury-marketplace',
    title: 'Aura Luxe - Headless Omni-Channel E-Commerce',
    client: 'Aura Retail International',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Ultrafast headless commerce platform with 3D AR product preview, localized currency checkout, and dynamic personalization.',
    fullChallenge: 'Legacy monolithic e-commerce software suffered from slow page loads (4.5s) during global product launches, losing millions in abandoned carts.',
    solution: 'Re-architected the store using Next.js, Stripe, and Shopify Headless APIs, achieving sub-second load times worldwide.',
    impact: ['180% Increase in Mobile Conversion Rate', '0.6s Average Page Load Speed', '$45M Annual Processed GMV'],
    tags: ['Next.js', 'Shopify Headless', 'Stripe', 'Tailwind', 'AR 3D'],
    liveUrl: 'https://wa.me/923069299193?text=I%20want%20to%20view%20Aura%20Luxe%20Case%20Study',
    metrics: [
      { label: 'Conversion Boost', value: '+180%' },
      { label: 'Load Speed', value: '0.6s' },
      { label: 'Processed GMV', value: '$45M+' },
    ],
  },
  {
    id: 'ai-code-copilot-web',
    title: 'DevCraft - Intelligent Enterprise Code Quality Portal',
    client: 'Bynarixa Labs',
    category: 'Web Applications',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Automated AI code review, vulnerability detection, and refactoring suite built for engineering teams.',
    fullChallenge: 'Engineering teams lost over 30% of sprint capacity conducting manual pull request code reviews and catching security regressions.',
    solution: 'Built an AI platform integrating Gemini API and AST parsers to automatically scan code changes and suggest clean code fixes directly on GitHub/GitLab.',
    impact: ['40% Faster Pull Request Approvals', '90% Early Detection of OWASP Vulnerabilities', 'Used by 250+ Software Engineering Teams'],
    tags: ['React', 'Gemini AI', 'TypeScript', 'Docker', 'REST API'],
    liveUrl: 'https://wa.me/923069299193?text=I%20want%20to%20view%20DevCraft%20Case%20Study',
    metrics: [
      { label: 'PR Review Speed', value: '+40%' },
      { label: 'Vulnerability Detection', value: '90%' },
      { label: 'Dev Teams', value: '250+' },
    ],
  },
  {
    id: 'real-estate-proptech',
    title: 'UrbanHaven - Smart Property Buying & Virtual Tour App',
    client: 'UrbanHaven Realty',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Mobile app connecting real estate buyers with properties through 360 virtual tours, mortgage calculators, and online signing.',
    fullChallenge: 'Real estate buyers found searching and viewing properties offline cumbersome, requiring repeated physical site visits.',
    solution: 'Developed a React Native application with embedded 360-degree panorama viewers, e-signatures, and instant WhatsApp chat with brokers.',
    impact: ['4x Increase in Qualified Buyer Inquiries', '50,000 Property Listings Indexed', 'Over $120M in Property Deals Facilitated'],
    tags: ['React Native', 'Firebase', 'Pano360', 'WhatsApp API'],
    liveUrl: 'https://wa.me/923069299193?text=I%20want%20to%20view%20UrbanHaven%20Case%20Study',
    metrics: [
      { label: 'Inquiries', value: '4x' },
      { label: 'Deals Closed', value: '$120M+' },
      { label: 'Listings', value: '50K+' },
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Alexander Wright',
    role: 'Chief Technology Officer',
    company: 'Nova Financial Group (USA)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Bynarixa Tech Solutions exceeded all our expectations. They delivered our fintech neobanking platform on time with enterprise security standards and flawless UI performance. Their engineering capability is truly top-tier.',
    rating: 5,
    project: 'NovaBank Mobile Banking',
  },
  {
    id: 't2',
    name: 'Dr. Sarah Jenkins',
    role: 'Head of Digital Innovation',
    company: 'CarePulse Health (UK)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Working with Bynarixa felt like an extension of our internal engineering team. Their deep knowledge of WebRTC, healthcare security, and mobile UX allowed us to launch a HIPAA-compliant portal ahead of schedule.',
    rating: 5,
    project: 'CarePulse Telehealth Portal',
  },
  {
    id: 't3',
    name: 'Tariq Al-Mansoor',
    role: 'Managing Director',
    company: 'LogiX Global Solutions (UAE)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Our global fleet telematics SaaS platform handles millions of GPS pings daily without missing a beat. Bynarixa’s mastery of cloud architecture and real-time mapping saved us over 20% in operational costs.',
    rating: 5,
    project: 'OmniTrack Fleet SaaS',
  },
  {
    id: 't4',
    name: 'Elena Rostova',
    role: 'VP of E-Commerce',
    company: 'Aura Luxury Retail (Germany)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Our store page load times dropped from 4.5 seconds to 0.6 seconds after Bynarixa rebuilt our frontend on Next.js. Our mobile conversion rate jumped by 180% immediately! Phenomenal work.',
    rating: 5,
    project: 'Aura Luxe Storefront',
  },
  {
    id: 't5',
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'SaaSify Inc (Singapore)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'Bynarixa’s attention to UI/UX design, clean code architecture, and fast communication made our SaaS development effortless. They are without a doubt one of the best software partners we have ever hired.',
    rating: 5,
    project: 'SaaS Analytics Platform',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'startup',
    name: 'Startup MVP',
    tagline: 'Ideal for early-stage startups needing a high-speed, market-ready MVP build.',
    monthlyPrice: 1499,
    annualPrice: 1199,
    recommendedFor: 'Early Startups & Single-Platform Apps',
    features: [
      'Custom iOS or Android Mobile App (or Web App)',
      'Clean UI/UX Design System (Figma)',
      'Backend API Development (Node.js/Express)',
      'Database Setup (PostgreSQL or Firebase)',
      'Core Authentication & Role Management',
      'Payment Gateway Integration (Stripe/PayPal)',
      '3 Weeks Rapid Sprint Delivery',
      '30 Days Post-Launch Support & Bug Fixes',
    ],
    deliverables: ['Production App Build', 'Full Source Code Rights', 'API Documentation', 'App Store Setup Guide'],
  },
  {
    id: 'business',
    name: 'Business Growth',
    tagline: 'Comprehensive cross-platform solution for expanding businesses & scale-ups.',
    popular: true,
    monthlyPrice: 3499,
    annualPrice: 2899,
    recommendedFor: 'Growing Businesses & Cross-Platform Products',
    features: [
      'Cross-Platform iOS & Android Apps (Flutter / React Native)',
      'Full Custom Web Application / Portal (React / Next.js)',
      'Advanced UI/UX Motion Design & Micro-interactions',
      'Scalable Microservices Architecture & Redis Cache',
      'AI API Integration (Gemini / OpenAI)',
      'Automated CI/CD Pipeline & Docker Cloud Setup',
      'Admin Control Panel & Analytics Dashboard',
      '6 Weeks Sprint Delivery',
      '90 Days SLA-backed Dedicated Support',
    ],
    deliverables: ['Store Ready Mobile Apps', 'Deployed Web App', 'Cloud Infrastructure Code', 'Complete Developer Specs'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Custom',
    tagline: 'Mission-critical software, custom ERP/CRM, AI systems & 24/7 support.',
    monthlyPrice: 7999,
    annualPrice: 6499,
    recommendedFor: 'Large Enterprises & High-Scale Systems',
    features: [
      'Full-Scale Custom Software Engineering (Web, Mobile, Cloud)',
      'Custom Enterprise ERP / CRM System',
      'Private AI Knowledge Base & RAG Pipelines',
      'High-Availability Kubernetes Cluster on AWS / GCP',
      'SOC2 / HIPAA / GDPR Compliance Security Audit',
      'Dedicated Senior Engineering Pod & Tech Lead',
      '24/7 SLA Monitoring & Rapid Incident Response',
      'Dedicated Account Manager & Weekly Executive Demos',
    ],
    deliverables: ['Full Distributed System Architecture', 'Kubernetes Deployment', 'Penetration Test Report', '24/7 SLA Support Agreement'],
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Development',
    question: 'How long does it typically take to develop a software project?',
    answer: 'Timeline depends on project scope. A Startup MVP usually takes 3 to 4 weeks. Full cross-platform applications take 6 to 10 weeks, while large enterprise ERP/CRM systems range from 3 to 6 months. We provide detailed sprint schedules before work commences.',
  },
  {
    id: 'faq-2',
    category: 'Intellectual Property',
    question: 'Will I own 100% of the source code and intellectual property (IP)?',
    answer: 'Yes, absolutely. Upon project completion and payment, 100% of the source code, design assets, patents, and IP rights belong to you. We sign a formal Non-Disclosure Agreement (NDA) prior to project discussion.',
  },
  {
    id: 'faq-3',
    category: 'Process',
    question: 'How do you communicate project progress during development?',
    answer: 'We follow Agile/Scrum methodology with bi-weekly sprint demos. You receive access to a dedicated Jira/Trello board, a private Slack/WhatsApp channel, and live staging environments where you can test features as they are built.',
  },
  {
    id: 'faq-4',
    category: 'Tech Stack',
    question: 'How do you select the best technology stack for my project?',
    answer: 'We evaluate your business goals, target audience, performance requirements, scalability needs, and budget. For instance, Flutter/React Native is recommended for rapid mobile launch, while Kotlin/Swift is chosen for deep device hardware integration.',
  },
  {
    id: 'faq-5',
    category: 'Support',
    question: 'What kind of support and maintenance do you offer after launch?',
    answer: 'Every project includes complimentary post-launch support (30 to 90 days depending on plan). Afterwards, we offer SLA-backed monthly maintenance packages covering server monitoring, OS security patches, performance tuning, and feature updates.',
  },
  {
    id: 'faq-6',
    category: 'AI & Cloud',
    question: 'Can Bynarixa integrate custom Artificial Intelligence (AI) into our existing software?',
    answer: 'Yes! We specialize in integrating generative AI (Gemini API, OpenAI), natural language processing, vector databases, custom RAG pipelines, and automated document vision into existing web and mobile systems.',
  },
  {
    id: 'faq-7',
    category: 'Payment',
    question: 'What are your payment terms and milestone structures?',
    answer: 'We structure projects into clear milestone-based payments (e.g., 30% kickoff, 30% mid-project UI/API complete, 40% final testing & deployment). Payments can be made securely via international bank transfer, Stripe, or wire.',
  },
  {
    id: 'faq-8',
    category: 'Location',
    question: 'Where is Bynarixa located and how can I start a project?',
    answer: 'Bynarixa Tech Solutions is headquartered in Pakistan, serving global clients across the US, UK, UAE, Europe, and Asia. You can instantly reach out via WhatsApp at 0306-9299193 (+92 306 9299193) or email info@bynarixa.com.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Future of AI Integration in Enterprise Mobile Applications',
    slug: 'future-ai-enterprise-mobile-apps',
    excerpt: 'Discover how modern generative AI models and on-device LLMs are reshaping user experiences in iOS and Android software.',
    content: `
# The Future of AI Integration in Enterprise Mobile Applications

Artificial Intelligence is no longer just a trend; it is the core driver of competitive advantage in modern enterprise software. From smart predictive text to on-device neural networks, integrating AI into mobile applications creates unprecedented user engagement and operational efficiency.

## Key AI Trends for 2026 Mobile Apps

1. **On-Device Machine Learning**: Utilizing Apple Neural Engine and Android NNAPI to process sensitive data locally without cloud latency.
2. **Generative Assistant Workflows**: Empowering users to summarize contracts, draft replies, and query complex databases using conversational interfaces.
3. **Hyper-Personalization Engine**: Dynamically altering app navigation and visual themes based on individual user habits.

At **Bynarixa Tech Solutions**, we help businesses integrate Gemini AI APIs into React Native and Flutter applications seamlessly.
    `,
    category: 'AI',
    author: {
      name: 'Muhammad Farhan',
      role: 'Lead AI & Mobile Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'August 1, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'b2',
    title: 'Why Flutter is Dominating Cross-Platform Mobile Development in 2026',
    slug: 'flutter-dominating-cross-platform-2026',
    excerpt: 'An architectural deep dive comparing Flutter, React Native, and Native Swift/Kotlin for enterprise engineering.',
    content: `
# Why Flutter is Dominating Cross-Platform Mobile Development

Building separate native teams for iOS and Android can double engineering overhead. Flutter has emerged as the premier framework for delivering 60fps native performance from a single Dart codebase.

## Why Engineering Leaders Choose Flutter

- **Pixel-Perfect Consistency**: Render identical UI widgets across iOS, Android, Desktop, and Web.
- **Impeller Graphics Engine**: Eliminates jank and ensures silky smooth transitions on 120Hz displays.
- **Rapid Prototyping**: Hot-reload speeds up feature velocity by up to 40%.

Contact Bynarixa Tech Solutions to build your next Flutter cross-platform mobile application.
    `,
    category: 'Mobile Development',
    author: {
      name: 'Zainab Rashid',
      role: 'Senior Flutter Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    date: 'July 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'b3',
    title: 'Building Zero-Downtime Microservices with Docker and Kubernetes',
    slug: 'zero-downtime-microservices-kubernetes',
    excerpt: 'Step-by-step guide to configuring cloud infrastructure for high-availability enterprise web portals.',
    content: `
# Building Zero-Downtime Microservices with Docker and Kubernetes

Downtime during traffic spikes can cost enterprises thousands of dollars per minute. Transitioning from monolithic architectures to containerized microservices guarantees fault tolerance and instant auto-scaling.

## Best Practices for High Availability

- **Rolling Deployment Strategies**: Update containers without dropping active socket connections.
- **Automated Health Checks**: Let Kubernetes automatically restart unhealthy pods.
- **Distributed Caching with Redis**: Offload heavy database queries to memory.

Learn how Bynarixa configures Kubernetes clusters on AWS and Google Cloud for maximum resilience.
    `,
    category: 'Cloud',
    author: {
      name: 'Usman Ali',
      role: 'DevOps & Cloud Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    date: 'July 20, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'b4',
    title: 'Modern Web Performance Optimization: Reaching 95+ Lighthouse Scores',
    slug: 'modern-web-performance-optimization-lighthouse',
    excerpt: 'Practical techniques for optimizing React and Next.js applications for Core Web Vitals and SEO.',
    content: `
# Modern Web Performance Optimization: Reaching 95+ Lighthouse Scores

Page speed directly impacts Google search rankings and customer conversion rates. A 100ms delay in page response can decrease conversion rates by 7%.

## Strategies for Speed

1. **Server-Side Rendering & Streaming**: Serve static HTML shells instantly while streaming heavy data.
2. **Next-Gen Image Formats**: Convert PNGs to WebP/AVIF with dynamic responsive srcsets.
3. **Tree-Shaking & Code Splitting**: Reduce initial JavaScript bundle size under 100KB.

Bynarixa builds web applications engineered for sub-second page loads globally.
    `,
    category: 'Web Development',
    author: {
      name: 'Bilal Ahmed',
      role: 'Principal Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    date: 'July 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  },
];

export const CAREERS_DATA: CareerPosition[] = [
  {
    id: 'c1',
    title: 'Senior Full Stack Engineer (React & Node.js)',
    department: 'Engineering',
    location: 'Pakistan / Remote',
    type: 'Full-time',
    experience: '4+ Years',
    description: 'We are seeking an experienced Full Stack Engineer to build high-scale web platforms, microservice APIs, and real-time cloud backends.',
    requirements: [
      'Proficiency in React, Next.js, TypeScript, and Node.js/Express',
      'Solid experience with PostgreSQL, Redis, and Docker',
      'Strong understanding of RESTful/GraphQL API design',
      'Familiarity with AWS or Google Cloud deployment',
    ],
    responsibilities: [
      'Architect and write clean, tested, high-performance code',
      'Collaborate with UI/UX designers and product managers',
      'Perform code reviews and mentor junior engineers',
      'Maintain automated CI/CD build pipelines',
    ],
  },
  {
    id: 'c2',
    title: 'Lead Mobile App Developer (Flutter & Native)',
    department: 'Mobile Engineering',
    location: 'Pakistan / Hybrid',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Lead our mobile development pod in designing and publishing top-tier iOS and Android apps for international enterprise clients.',
    requirements: [
      'Deep mastery of Flutter, Dart, and state management (BLoC/Provider)',
      'Working knowledge of Kotlin and Swift native bridges',
      'Published at least 3 apps on App Store and Google Play',
      'Strong grasp of mobile security, biometrics, and offline caching',
    ],
    responsibilities: [
      'Own mobile app architecture from concept to Store release',
      'Optimize app memory usage, rendering performance, and battery consumption',
      'Direct client technical demos and sprint reviews',
    ],
  },
  {
    id: 'c3',
    title: 'AI Solutions Specialist & Python Engineer',
    department: 'AI & Data Systems',
    location: 'Pakistan / Remote',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Join our AI Innovation Lab to integrate LLMs, RAG pipelines, and vector databases into enterprise client products.',
    requirements: [
      'Strong background in Python, PyTorch/TensorFlow, and LangChain',
      'Hands-on experience with Gemini API, OpenAI APIs, and Pinecone/Weaviate',
      'Knowledge of NLP, prompt engineering, and model fine-tuning',
    ],
    responsibilities: [
      'Build custom RAG knowledge pipelines and AI assistants',
      'Optimize LLM response latency and token costs',
      'Document AI architecture and integration guidelines',
    ],
  },
  {
    id: 'c4',
    title: 'Senior UI/UX Designer & Design Systems Lead',
    department: 'Design',
    location: 'Pakistan / Remote',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Craft beautiful visual interfaces, interactive Figma wireframes, and design systems for enterprise software.',
    requirements: [
      'Expertise in Figma, Adobe Creative Suite, and prototyping tools',
      'Solid portfolio demonstrating mobile and web app UI design',
      'Understanding of WCAG 2.1 accessibility guidelines and responsive design',
    ],
    responsibilities: [
      'Design user flows, wireframes, and high-fidelity mockups',
      'Maintain and expand the Bynarixa Design System',
      'Conduct client usability testing and user research',
    ],
  },
];
