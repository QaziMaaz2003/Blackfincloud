/**
 * ALL site copy, links and image URLs live here.
 * When migrating to WordPress/Divi, this file is the copy-paste source for every module.
 * Contact details follow the live site (blackfincloud.com); edit `contact` to change them everywhere.
 */

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const contact = {
  // Main address (Redding). Foothill Ranch is kept as an additional office.
  address: '2055 Pine Street, Redding, CA 96001',
  city: 'Redding, California',
  otherOffices: [{ name: 'Foothill Ranch office', address: '26632 Towne Center Dr #312, Foothill Ranch, CA 92610' }],
  phone: '(949) 478-0901',
  phoneHref: 'tel:+19494780901',
  email: 'contracts@blackfincloud.com',
  linkedin: 'https://www.linkedin.com/in/owenbscott/',
  // Meeting booking link. Every "book a meeting / schedule a call" button points here.
  calendly: 'https://calendly.com/blackfincloud/30min?back=1',
}

export const mapsLink = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Power Platform', href: '/power-platform' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Past Performance', href: '/past-performance' },
  { label: 'Process', href: '/process' },
  { label: 'CMAS Contract', href: '/cmas-contract' },
]

export const hero = {
  eyebrow: 'Microsoft Dynamics 365 & Power Platform',
  title: 'Software built for how you actually work.',
  subtitle:
    'Enterprise-grade low-code solutions shaped around your operations—and delivered in weeks instead of years.',
  primaryCta: { label: 'Schedule free discovery call', href: contact.calendly },
  secondaryCta: { label: 'Explore Power Platform', href: '/power-platform' },
  image: unsplash('1522071820081-009f0129c71c', 1800),
  imageAlt: 'Operations leaders reviewing a digital workflow dashboard',
  stats: [
    { value: 160, suffix: '+', label: 'Deployments' },
    { value: 15, suffix: '+', label: 'Years across sectors' },
    { text: 'Weeks', label: 'Typical path to launch' },
  ],
  credentials: ['CMAS 3-24-05-2024', 'SAM CAGE 8CP18', 'DUNS 08-135-7555'],
  clients: ['Los Angeles County', 'NY Power Authority', 'LAUSD', 'Chicago Elections Board'],
}

export const solutions = {
  eyebrow: 'One connected ecosystem',
  title: 'Your Microsoft stack. Fully working together.',
  intro:
    'From frontline data capture to executive reporting, we design the connected layer that closes operational gaps.',
  products: [
    {
      icon: 'users',
      name: 'Dynamics 365',
      tag: 'Customer Engagement',
      text: 'Sales, service and relationship management on one secure, role-based platform.',
      points: ['Sales & service modernization', 'Case and relationship management', 'Secure role-based experiences'],
      image: unsplash('1551288049-bebda4e38f71', 1000),
    },
    {
      icon: 'grid',
      name: 'Power Apps',
      tag: 'Canvas & Model-Driven',
      text: 'Custom apps that match your workflow, built and refined in weeks rather than quarters.',
      points: ['Canvas apps for frontline data capture', 'Model-driven apps for case and record management', 'Role-based, mobile-ready experiences'],
      image: unsplash('1498050108023-c5249f4df085', 1000),
    },
    {
      icon: 'bolt',
      name: 'Power Automate',
      tag: 'RPA & Workflows',
      text: 'Automate approvals, notifications and repetitive tasks across every system you use.',
      points: ['Approvals and notifications that run themselves', 'RPA for repetitive, rules-based tasks', 'Connects the systems you already use'],
      image: unsplash('1518770660439-4636190af475', 1000),
    },
    {
      icon: 'chart',
      name: 'Power BI',
      tag: 'Advanced Analytics',
      text: 'Live dashboards and reporting that turn operational data into confident decisions.',
      points: ['Executive dashboards and scorecards', 'Live operational reporting', 'Governed, role-based data access'],
      image: unsplash('1460925895917-afdab827c52f', 1000),
    },
  ],
  feature: {
    eyebrow: 'Featured platform',
    title: 'Dynamics 365',
    text: 'Unify constituent, customer, and operational data around the way your teams already work.',
    points: [
      'Sales & service modernization',
      'Case and relationship management',
      'Secure role-based experiences',
    ],
    image: unsplash('1551288049-bebda4e38f71', 1200),
    imageAlt: 'Analysts reviewing live business intelligence dashboards',
  },
}

export const advantage = {
  eyebrow: 'The low-code advantage',
  title: 'Less software friction. More operational momentum.',
  columns: ['', 'Traditional Delivery', 'The Blackfin Way'],
  rows: [
    ['Cost', 'Large upfront investment', 'Focused investment, faster value'],
    ['Timeline', 'Months or years', 'Working releases in weeks'],
    ['Flexibility', 'Rigid, vendor-defined process', 'Designed around your workflow'],
    ['Maintenance', 'Specialized developer dependency', 'Adaptable Microsoft platform'],
  ],
}

export const process = {
  eyebrow: 'A practical path forward',
  title: 'Three steps. No black box.',
  intro:
    'You see, test, and shape the solution throughout delivery—so GoLive feels like progress, not a surprise.',
  steps: [
    {
      n: '01',
      title: 'Analyze Together',
      text: 'Deep discovery, artifact collection, workflow mapping, and solution scoping.',
      points: ['Deep discovery sessions with your team', 'Artifact and document collection', 'Workflow mapping', 'Solution scoping'],
      image: unsplash('1552664730-d307ca884978', 1000),
    },
    {
      n: '02',
      title: 'Iterative Design',
      text: 'Agile sprints, hands-on prototypes, and continuous stakeholder feedback.',
      points: ['Agile sprints with working releases', 'Hands-on prototypes you can click through', 'Continuous stakeholder feedback'],
      image: unsplash('1531403009284-440f080d1e12', 1000),
    },
    {
      n: '03',
      title: 'Continuous Deployment',
      text: 'Testing, training, seamless GoLive, and dependable ongoing support.',
      points: ['Testing before every release', 'Training in written, video and LMS formats', 'Seamless GoLive', 'Dependable ongoing support'],
      image: unsplash('1542744173-8e7e53415bb0', 1000),
    },
  ],
}

export const industries = {
  eyebrow: 'Built for accountable operations',
  title: 'Deep context for complex environments.',
  items: [
    {
      title: 'Government & Public Sector',
      points: ['Procurement', 'Constituent services', 'Grants', 'Mission-critical case management'],
      text: 'Procurement, constituent services, grants, and mission-critical case management.',
      image: unsplash('1529107386315-e1a2ed48a620', 800),
    },
    {
      title: 'Financial Services & Private Equity',
      points: ['Portfolio visibility', 'Deal workflows', 'Relationship intelligence', 'Compliance'],
      text: 'Portfolio visibility, deal workflows, relationship intelligence, and compliance.',
      image: unsplash('1554224155-6726b3ff858f', 800),
    },
    {
      title: 'Non-Profits',
      points: ['Program delivery', 'Donor operations', 'Service tracking', 'Outcome reporting'],
      text: 'Program delivery, donor operations, service tracking, and outcome reporting.',
      image: unsplash('1559526324-4b87b5e36e44', 800),
    },
    {
      title: 'Commercial Enterprise',
      points: ['Sales', 'Service', 'Field operations', 'Cross-functional process modernization'],
      text: 'Sales, service, field operations, and cross-functional process modernization.',
      image: unsplash('1497366216548-37526070297c', 800),
    },
  ],
}

export const work = {
  eyebrow: 'Selected past performance',
  title: 'Proven where the stakes are high.',
  items: [
    {
      client: 'Los Angeles County',
      platform: 'Microsoft Dynamics 365',
      meta: '2019',
      title: 'Procurement, redesigned around the work.',
      text: 'A Microsoft Dynamics 365 procurement system deployed in a matter of months.',
      image: unsplash('1450101499163-c8848c66ca85', 800),
    },
    {
      client: 'NY Power Authority',
      platform: 'Microsoft platform',
      meta: '',
      title: 'Connected customer operations',
      text: 'Microsoft platform expertise applied in a complex public authority environment.',
      image: unsplash('1504384308090-c894fdcc538d', 800),
    },
    {
      client: 'LAUSD',
      platform: 'Dynamics CRM',
      meta: '2014–2018',
      title: 'Student support tracking',
      text: 'Dynamics CRM supported activity tracking for special student populations.',
      image: unsplash('1580582932707-520aed937b7b', 800),
    },
  ],
}

export const roi = {
  eyebrow: 'Estimate the opportunity',
  title: 'What could better workflows give back?',
  intro:
    'Use this directional model to explore potential annual capacity. A discovery session can validate the inputs for your organization.',
  hourlyValue: 42,
  // Staff who touch the workflow, by organization size
  sizes: [
    { label: '1–50 people', staff: 20 },
    { label: '51–250 people', staff: 100 },
    { label: '251–1,000 people', staff: 400 },
    { label: '1,000+ people', staff: 1000 },
  ],
  // Hours reclaimed per affected person per year
  bottlenecks: [
    { label: 'Manual data entry', hours: 7 },
    { label: 'Reporting & spreadsheets', hours: 5 },
    { label: 'Approvals & handoffs', hours: 4 },
    { label: 'Disconnected systems', hours: 6 },
  ],
  defaultSize: 1,
  defaultBottleneck: 0,
  disclaimer:
    'Directional estimate based on role volume, common workflow reduction patterns, and a $42 blended hourly value. Not a guarantee.',
}

export const experience = {
  eyebrow: 'Experience without the overhead',
  title: 'Senior expertise, focused on your outcome.',
  text: 'Blackfin brings deep Microsoft platform experience to organizations that need practical progress—not a drawn-out transformation program.',
  areas: [
    { icon: 'layers', title: 'Architecture', text: 'Right-sized designs that scale with the Microsoft platform.' },
    { icon: 'shield', title: 'Governance', text: 'Security, roles and compliance built in from day one.' },
    { icon: 'users', title: 'Adoption', text: 'Training and documentation in written, video and LMS formats.' },
    { icon: 'lifebuoy', title: 'Support', text: 'Dependable help long after GoLive.' },
  ],
}

export const testimonial = {
  eyebrow: 'Deployment notes',
  title: 'Real work. Real operating environments.',
  quote: 'A Dynamics 365 procurement system moved from requirement to deployment in a matter of months.',
  author: 'Public-sector procurement',
  meta: 'Los Angeles County · 2019 deployment',
  image: unsplash('1517245386807-bb43f82c33c4', 1000),
}

export const about = {
  eyebrow: 'About Blackfin',
  title: 'Microsoft platform specialists since 2010.',
  text: [
    'Blackfin Cloud Services specializes in Microsoft Dynamics 365 Customer Engagement and the Power Platform—Power Apps, Power Automate and Power BI. We have served government and commercial organizations, including Los Angeles County, NY Power Authority, Chicago Elections Board and LAUSD.',
    'Founder Owen Scott has deployed Microsoft Dynamics CRM and 365 more than 60 times in enterprise settings and 100+ times for small and micro businesses between 2007 and 2024.',
  ],
  competencies: [
    'Cloud-based application development',
    'Digital modernization & transformation',
    'Process analysis using AI tools',
    'Data integration and analysis',
    'Systems integration',
  ],
  differentiators: [
    'Rapid analysis, design and deployment',
    'Cloud and on-premises architecture experience',
    'Written, video and LMS documentation',
    'Networking and DNS infrastructure expertise',
  ],
  industries:
    'Government, financial services, non-profit, healthcare, manufacturing, aerospace, retail, entertainment and education.',
  image: unsplash('1556761175-b413da4baf72', 1000),
}

export const faq = {
  eyebrow: 'Common questions',
  title: 'Clear answers before we begin.',
  items: [
    {
      q: 'How quickly can a solution launch?',
      a: 'Most engagements deliver working releases in weeks rather than months. Scope, integrations and stakeholder availability set the exact timeline, and a discovery call gives you a realistic plan.',
    },
    {
      q: 'Do we need new Microsoft licenses?',
      a: 'Often not. Many organizations already own Microsoft 365 licenses that include Power Platform capabilities. We review your current licensing during discovery and only recommend what you actually need.',
    },
    {
      q: 'Can you support government security requirements?',
      a: 'Yes. We have delivered for Los Angeles County, NY Power Authority, LAUSD and the Chicago Elections Board, and hold CMAS, SAM CAGE and DUNS registrations for public-sector procurement.',
    },
    {
      q: 'Can you migrate our legacy system?',
      a: 'Yes. We map your existing workflows and data, then migrate and integrate them into the Microsoft platform in phases so operations keep running throughout.',
    },
    {
      q: 'What happens after GoLive?',
      a: 'You get training, documentation in written, video and LMS formats, and dependable ongoing support so your team can adapt the solution as your needs change.',
    },
  ],
}

export const form = {
  eyebrow: 'Start with a working session',
  title: 'Bring us the process that slows you down.',
  text: "In a focused discovery call, we'll map the bottleneck, identify the right Microsoft tools, and outline a practical next step.",
  note: 'Government and commercial inquiries welcome',
  orgTypes: ['Government / public sector', 'Commercial enterprise', 'Financial services', 'Non-profit'],
  projects: ['Dynamics 365', 'Power Apps', 'Workflow automation', 'Power BI analytics'],
  submit: 'Request your discovery call',
  reassurance: 'No sales script. Just a focused conversation about your operation.',
  success: "Thank you! We've received your request and will be in touch shortly.",
}

export const footer = {
  links: [
    { label: 'Terms', href: 'https://www.blackfincloud.com/terms-and-conditions/' },
    { label: 'Privacy', href: 'https://www.blackfincloud.com/privacy/' },
  ],
  blurb: 'Enterprise Microsoft solutions for the way your organization actually operates.',
  government: ['CMAS 3-24-05-2024', 'SAM CAGE: 8CP18', 'SAM UEI: NMH9P38XNZFS', 'DUNS: 08-135-7555'],
  naics: ['541511 · 541512 · 51320', '541519 · 51820 · 51920 · 541990'],
  legal:
    '© 2026 Blackfin Cloud Services, LLC. All rights reserved. Microsoft, Dynamics 365, and Power Platform are trademarks of Microsoft Corporation.',
}

export const cmas = {
  eyebrow: 'Government contracting',
  title: 'CMAS Contract',
  text: 'Blackfin Cloud Services holds a California Multiple Award Schedule (CMAS) contract, giving California public agencies a streamlined procurement path for Microsoft Dynamics 365 and Power Platform services.',
  details: [
    { label: 'CMAS contract', value: '3-24-05-2024' },
    { label: 'SAM CAGE', value: '8CP18' },
    { label: 'SAM UEI', value: 'NMH9P38XNZFS' },
    { label: 'DUNS', value: '08-135-7555' },
    { label: 'NAICS', value: '541511, 541512, 51320, 541519, 51820, 51920, 541990' },
  ],
  image: unsplash('1486406146926-c627a92ad1ab', 1600),
}

/* ---------- Multipage: page heroes, CTA banner, extra page content ---------- */

export const pages = {
  about: {
    eyebrow: 'About Blackfin',
    title: 'Microsoft platform specialists, focused on your outcome.',
    text: 'Since 2010 we have helped government and commercial teams turn Dynamics 365 and the Power Platform into software that fits the way they work.',
    image: unsplash('1521737604893-d14cc237f11d', 1800),
  },
  powerPlatform: {
    eyebrow: 'Power Platform',
    title: 'Your Microsoft stack. Fully working together.',
    text: 'Dynamics 365, Power Apps, Power Automate and Power BI—designed as one connected layer, from frontline data capture to executive reporting.',
    image: unsplash('1451187580459-43490279c0fa', 1800),
  },
  industries: {
    eyebrow: 'Industries',
    title: 'Deep context for complex environments.',
    text: 'We build for organizations where process, compliance and accountability matter every day.',
    image: unsplash('1449824913935-59a10b8d2000', 1800),
  },
  work: {
    eyebrow: 'Past performance',
    title: 'Proven where the stakes are high.',
    text: 'Selected engagements with public-sector and enterprise clients.',
    image: unsplash('1477959858617-67f85cf4f1df', 1800),
  },
  process: {
    eyebrow: 'Our process',
    title: 'Three steps. No black box.',
    text: 'You see, test, and shape the solution throughout delivery—so GoLive feels like progress, not a surprise.',
    image: unsplash('1519389950473-47ba0277781c', 1800),
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's map the process that slows you down.",
    text: 'Book a free discovery call. No sales script—just a focused conversation about your operation.',
    image: unsplash('1521791136064-7986c2920216', 1800),
  },
}

export const cta = {
  title: 'Bring us the process that slows you down.',
  text: "In a focused discovery call, we'll map the bottleneck, identify the right Microsoft tools, and outline a practical next step.",
  primary: { label: 'Schedule free discovery call', href: contact.calendly },
  secondary: { label: 'Call ' + contact.phone, href: contact.phoneHref },
}

export const aboutStats = [
  { value: 2010, prefix: 'Since ', label: 'Serving government & commercial' },
  { value: 60, suffix: '+', label: 'Enterprise deployments' },
  { value: 100, suffix: '+', label: 'Small-business deployments' },
  { value: 160, suffix: '+', label: 'Deployments overall' },
]

export const leadership = {
  eyebrow: 'Leadership',
  name: 'Owen Scott',
  role: 'Founder',
  text: 'Owen has deployed Microsoft Dynamics CRM and 365 more than 60 times in enterprise settings and 100+ times for small and micro businesses between 2007 and 2024.',
}

export const industriesAlso = {
  title: 'Also serving',
  items: ['Healthcare', 'Manufacturing', 'Aerospace', 'Retail', 'Entertainment', 'Education'],
}

export const processExtras = {
  eyebrow: 'What you get',
  title: 'Documentation and training that outlast the project.',
  items: [
    { icon: 'layers', title: 'Written documentation', text: 'Clear guides for administrators and end users.' },
    { icon: 'grid', title: 'Video walkthroughs', text: 'Short recordings your team can replay any time.' },
    { icon: 'users', title: 'LMS-ready training', text: 'Training content packaged for your learning management system.' },
  ],
}

export const contactSteps = {
  eyebrow: 'What happens next',
  title: 'A short path from hello to a plan.',
  items: [
    { n: '01', title: 'Send your request', text: 'Tell us your organization type and the project you have in mind.' },
    { n: '02', title: 'Discovery call', text: "We'll map the bottleneck and identify the right Microsoft tools." },
    { n: '03', title: 'A practical next step', text: 'You leave with a clear, right-sized plan—no obligation.' },
  ],
}

/* =====================================================================
 * EXPANDED CONTENT (multi-section pages)
 * Facts come from blackfincloud.com; wording marked "drafted" in
 * docs/WORDPRESS-MIGRATION.md should be confirmed with the client.
 * ===================================================================== */

/* ---------- Home ---------- */

export const why = {
  eyebrow: 'Why Blackfin',
  title: 'Enterprise-grade tools, without the enterprise price tag.',
  text: 'Small and mid-sized organizations deserve software that fits how they work. Here is what that looks like in practice.',
  items: [
    { icon: 'bolt', title: 'Weeks, not years', text: 'Low-code on the Microsoft platform means working releases quickly, so your team sees progress early and often.' },
    { icon: 'target', title: 'Built around your workflow', text: 'We adapt the software to your process, not the other way round—no rigid, vendor-defined templates.' },
    { icon: 'dollar', title: 'Focused investment', text: 'Right-sized scope and a platform you likely already license keep costs proportionate to value.' },
    { icon: 'shield', title: 'Government-ready', text: 'Role-based security and public-sector delivery experience, backed by CMAS, SAM CAGE and DUNS registrations.' },
    { icon: 'users', title: 'Senior team, no hand-offs', text: 'You work directly with the people who have deployed Dynamics 365 and the Power Platform over 160 times.' },
    { icon: 'lifebuoy', title: 'Support after GoLive', text: 'Training, documentation and dependable ongoing support so your team can keep adapting the solution.' },
  ],
}

export const homeStats = [
  { value: 160, suffix: '+', label: 'Deployments delivered' },
  { value: 15, suffix: '+', label: 'Years across sectors' },
  { value: 4, suffix: '', label: 'Microsoft platforms, one connected stack' },
  { value: 100, suffix: '+', label: 'Small-business deployments' },
]

export const useCases = {
  eyebrow: 'What teams build with us',
  title: 'From first request to daily operations.',
  text: 'A few of the workflows we regularly bring onto the Microsoft platform.',
  items: [
    { icon: 'doc', title: 'Procurement & vendor management', text: 'Requests, approvals, contracts and vendor records in one traceable system.', image: unsplash('1450101499163-c8848c66ca85', 700) },
    { icon: 'users', title: 'Case & constituent management', text: 'Every interaction, document and follow-up tied to the person or case it belongs to.', image: unsplash('1573167243872-43c6433b9d40', 700) },
    { icon: 'flag', title: 'Grants & program tracking', text: 'Applications, milestones and outcomes tracked from intake through reporting.', image: unsplash('1517842645767-c639042777db', 700) },
    { icon: 'trend', title: 'Sales & relationship management', text: 'A clear view of pipeline, accounts and relationships for commercial and financial teams.', image: unsplash('1526628953301-3e589a6a8b74', 700) },
    { icon: 'sync', title: 'Workflow automation', text: 'Approvals, notifications and repetitive tasks that run themselves.', image: unsplash('1518770660439-4636190af475', 700) },
    { icon: 'chart', title: 'Executive dashboards', text: 'Live reporting that turns operational data into decisions.', image: unsplash('1518186285589-2f7649de83e0', 700) },
  ],
}

export const gallery = {
  eyebrow: 'How we work',
  title: 'Side by side with your team.',
  text: 'Discovery workshops, hands-on prototypes and regular demos—your people are in the room from day one.',
  images: [
    { src: unsplash('1552581234-26160f608093', 1000), alt: 'Team mapping a workflow with sticky notes', caption: 'Workflow mapping', tall: true },
    { src: unsplash('1522202176988-66273c2fd55f', 800), alt: 'Colleagues reviewing a prototype on a laptop', caption: 'Prototype reviews' },
    { src: unsplash('1553028826-f4804a6dba3b', 800), alt: 'Overhead view of a team working at a shared table', caption: 'Agile sprints' },
    { src: unsplash('1556761175-4b46a572b786', 1000), alt: 'Bright open office with teams collaborating', caption: 'Open collaboration', wide: true },
  ],
}

/* ---------- Ecosystem diagram (Home + Solutions) ---------- */

export const ecosystem = {
  eyebrow: 'How the stack fits together',
  title: 'Capture. Automate. Engage. Analyze.',
  text: 'One connected layer on a shared Microsoft data platform, so information entered once is available everywhere it is needed.',
  nodes: [
    { icon: 'grid', name: 'Power Apps', role: 'Capture', text: 'Frontline apps for data entry and case work.' },
    { icon: 'bolt', name: 'Power Automate', role: 'Automate', text: 'Workflows, approvals and notifications.' },
    { icon: 'users', name: 'Dynamics 365', role: 'Engage', text: 'Customer, constituent and case management.' },
    { icon: 'chart', name: 'Power BI', role: 'Analyze', text: 'Dashboards and executive reporting.' },
  ],
  foundation: 'Shared Microsoft data platform · Microsoft 365 · Teams · SharePoint · Azure',
}

/* ---------- About ---------- */

export const mission = {
  quote: 'Small and mid-sized organizations deserve enterprise-grade tools—without the enterprise price tag.',
  cite: 'The Blackfin belief',
}

export const timeline = {
  eyebrow: 'Our journey',
  title: 'Fifteen years of Microsoft platform delivery.',
  items: [
    { year: '2007', title: 'Hands-on with Dynamics CRM', text: 'Owen Scott begins deploying Microsoft Dynamics CRM for enterprise and small-business clients.' },
    { year: '2010', title: 'Blackfin begins serving clients', text: 'Government and commercial organizations start relying on Blackfin for Microsoft platform delivery.' },
    { year: '2014–2018', title: 'LAUSD student support tracking', text: 'Dynamics CRM supports activity tracking for special student populations.' },
    { year: '2019', title: 'Los Angeles County procurement', text: 'A Dynamics 365 procurement system is deployed in a matter of months.' },
    { year: '2024', title: 'CMAS contract awarded', text: 'Contract 3-24-05-2024 gives California agencies a streamlined procurement path.' },
    { year: 'Today', title: '160+ deployments and counting', text: 'Dynamics 365 and the full Power Platform, across government, finance, non-profit and commercial teams.' },
  ],
}

export const values = {
  eyebrow: 'How we think',
  title: 'Principles behind every engagement.',
  items: [
    { icon: 'target', title: 'Your workflow first', text: 'We start by understanding how your people actually work, then shape the software around it.' },
    { icon: 'search', title: 'No black box', text: 'You see, test and shape the solution throughout delivery, so GoLive is never a surprise.' },
    { icon: 'dollar', title: 'Right-sized investment', text: 'We recommend only what you need and make the most of the Microsoft licenses you already own.' },
    { icon: 'heart', title: 'Built to last', text: 'Clear documentation, training and support mean your team owns the solution long after launch.' },
  ],
}

export const credentials = {
  eyebrow: 'Credentials',
  title: 'Registered and ready for public-sector procurement.',
  items: [
    { label: 'CMAS contract', value: '3-24-05-2024' },
    { label: 'SAM CAGE', value: '8CP18' },
    { label: 'SAM UEI', value: 'NMH9P38XNZFS' },
    { label: 'DUNS', value: '08-135-7555' },
  ],
}

export const engage = {
  eyebrow: 'Working together',
  title: 'Ways to work with Blackfin.',
  items: [
    { icon: 'search', title: 'Discovery & scoping', text: 'A focused working session to map the bottleneck, choose the right Microsoft tools and outline a practical plan.' },
    { icon: 'layers', title: 'Build & deploy', text: 'Agile delivery with hands-on prototypes, regular demos, testing, training and a smooth GoLive.' },
    { icon: 'lifebuoy', title: 'Support & enhance', text: 'Ongoing support and incremental improvements as your operation and the Microsoft platform evolve.' },
  ],
}

/* ---------- Solutions ---------- */

export const capabilities = {
  eyebrow: 'Capabilities',
  title: 'What the platform lets us build for you.',
  items: [
    { icon: 'users', title: 'Sales & service', text: 'Modernize customer engagement with leads, accounts, cases and service queues.' },
    { icon: 'doc', title: 'Case management', text: 'Track requests, documents and outcomes from intake to resolution.' },
    { icon: 'sync', title: 'Workflow automation', text: 'Replace email chains and manual hand-offs with governed approvals.' },
    { icon: 'grid', title: 'Custom apps', text: 'Purpose-built canvas and model-driven apps for your exact process.' },
    { icon: 'chart', title: 'Reporting & BI', text: 'Live dashboards and scorecards for leaders and frontline teams.' },
    { icon: 'layers', title: 'Data integration', text: 'Connect legacy databases, spreadsheets and line-of-business systems.' },
    { icon: 'lock', title: 'Role-based security', text: 'Secure, auditable experiences that match your governance requirements.' },
    { icon: 'clock', title: 'Legacy migration', text: 'Move from aging systems in phases, without interrupting operations.' },
  ],
}

export const integrations = {
  eyebrow: 'Works with what you have',
  title: 'Built on the Microsoft tools your teams already use.',
  text: 'Because the solutions live on the Microsoft platform, they connect naturally to everyday tools—and to your existing data.',
  items: ['Microsoft 365', 'Teams', 'Outlook', 'SharePoint', 'Excel', 'Azure', 'Legacy databases', 'Line-of-business systems'],
  image: unsplash('1531973576160-7125cd663d86', 1200),
}

export const solutionTags: Record<string, string[]> = {
  'Dynamics 365': ['Sales', 'Customer service', 'Case management', 'Relationship intelligence'],
  'Power Apps': ['Field data capture', 'Inspections', 'Request intake', 'Mobile-ready'],
  'Power Automate': ['Approvals', 'Notifications', 'Document routing', 'RPA'],
  'Power BI': ['Executive dashboards', 'KPI scorecards', 'Operational reporting', 'Self-service analytics'],
}

/* ---------- Industries ---------- */

export const industryDetail: Record<
  string,
  { challenges: string[]; delivers: string[]; solutions: string[]; badge?: { value: string; label: string } }
> = {
  'Government & Public Sector': {
    challenges: ['Manual, paper-heavy procurement and approvals', 'Constituent requests spread across disconnected systems', 'Tight budgets and strict accountability'],
    delivers: ['Traceable procurement and case workflows', 'One view of every constituent interaction', 'Role-based security and audit-friendly records'],
    solutions: ['Procurement', 'Constituent services', 'Grants', 'Case management'],
    badge: { value: '4', label: 'flagship public-sector clients' },
  },
  'Financial Services & Private Equity': {
    challenges: ['Deal and relationship data scattered across spreadsheets', 'Limited visibility across the portfolio', 'Compliance evidence that is hard to assemble'],
    delivers: ['A structured deal and relationship pipeline', 'Portfolio dashboards for partners and analysts', 'Built-in compliance tracking and records'],
    solutions: ['Deal workflows', 'Portfolio visibility', 'Relationship intelligence', 'Compliance'],
  },
  'Non-Profits': {
    challenges: ['Donor, program and volunteer data in separate tools', 'Reporting outcomes to funders takes too long', 'Small teams with little room for IT overhead'],
    delivers: ['One record for every donor, participant and program', 'Service tracking that feeds outcome reporting', 'Affordable, easy-to-maintain low-code apps'],
    solutions: ['Program delivery', 'Donor operations', 'Service tracking', 'Outcome reporting'],
  },
  'Commercial Enterprise': {
    challenges: ['Sales and service teams working from different data', 'Manual field and back-office processes', 'Legacy systems that are costly to change'],
    delivers: ['Connected sales, service and field operations', 'Automation of repetitive, cross-team processes', 'Incremental modernization, not a big-bang rewrite'],
    solutions: ['Sales', 'Service', 'Field operations', 'Process modernization'],
  },
}

export const compliance = {
  eyebrow: 'Built for accountable operations',
  title: 'Security and governance from day one.',
  text: 'Public-sector and regulated teams need software they can defend in an audit. We design for that from the first workshop.',
  items: [
    { icon: 'lock', title: 'Role-based access', text: 'Users see and do only what their role allows.' },
    { icon: 'doc', title: 'Traceable records', text: 'Clear histories of who did what, and when.' },
    { icon: 'shield', title: 'Microsoft-grade platform', text: 'Built on Microsoft cloud infrastructure and security tooling.' },
    { icon: 'flag', title: 'Procurement-ready', text: 'CMAS, SAM CAGE, SAM UEI and DUNS registrations on file.' },
  ],
  image: unsplash('1614064641938-3bbee52942c7', 1600),
}

/* ---------- Past performance ---------- */

export const resultStats = [
  { value: 160, suffix: '+', label: 'Deployments delivered' },
  { value: 4, suffix: '', label: 'Named public-sector clients' },
  { value: 15, suffix: '+', label: 'Years of delivery' },
  { value: 2019, label: 'Latest flagship: LA County' },
]

export const caseFacts: Record<string, { label: string; value: string }[]> = {
  'Los Angeles County': [
    { label: 'Client', value: 'Los Angeles County' },
    { label: 'Year', value: '2019' },
    { label: 'Platform', value: 'Microsoft Dynamics 365' },
    { label: 'Delivered', value: 'In a matter of months' },
  ],
  'NY Power Authority': [
    { label: 'Client', value: 'NY Power Authority' },
    { label: 'Sector', value: 'Public authority' },
    { label: 'Platform', value: 'Microsoft platform' },
    { label: 'Focus', value: 'Customer operations' },
  ],
  LAUSD: [
    { label: 'Client', value: 'LAUSD' },
    { label: 'Period', value: '2014–2018' },
    { label: 'Platform', value: 'Dynamics CRM' },
    { label: 'Focus', value: 'Student support tracking' },
  ],
}

export const alsoDelivered = {
  eyebrow: 'Also delivered for',
  title: 'A track record across public and private organizations.',
  items: [
    { icon: 'flag', title: 'Chicago Elections Board', text: 'Microsoft platform expertise supporting election operations.' },
    { icon: 'building', title: 'Financial services & private equity', text: 'Deal, portfolio and relationship workflows for lean firms.' },
    { icon: 'heart', title: 'Non-profit organizations', text: 'Program delivery, donor operations and outcome tracking.' },
    { icon: 'star', title: 'Small & micro businesses', text: 'More than 100 deployments for smaller organizations since 2007.' },
  ],
}

export const whyChoose = {
  eyebrow: 'Why agencies choose Blackfin',
  title: 'Delivery you can defend.',
  items: [
    { icon: 'clock', title: 'Fast to value', text: 'Working releases in weeks keep stakeholders confident and budgets in check.' },
    { icon: 'shield', title: 'Proven in public sector', text: 'Experience with the security, procurement and accountability demands of government.' },
    { icon: 'users', title: 'Collaborative by design', text: 'Agile sprints and regular demos mean the end users shape what gets built.' },
  ],
}

/* ---------- Process ---------- */

export const stepDetail: Record<string, { bring: string[]; deliver: string[]; badge: string }> = {
  'Analyze Together': {
    bring: ['Current documents, forms and reports', 'Time with the people who run the process', 'Your top pain points and goals'],
    deliver: ['Mapped workflows and requirements', 'A right-sized solution scope', 'A clear plan and timeline'],
    badge: 'Discovery',
  },
  'Iterative Design': {
    bring: ['Feedback on each prototype', 'Input from frontline end users', 'Decisions on priorities'],
    deliver: ['Working releases every sprint', 'Clickable prototypes to test', 'Refinements based on your feedback'],
    badge: 'Sprints',
  },
  'Continuous Deployment': {
    bring: ['Testers and champions from each team', 'Attendees for training sessions', 'GoLive sign-off'],
    deliver: ['Tested, production-ready solution', 'Training and documentation', 'Ongoing support after GoLive'],
    badge: 'GoLive',
  },
}

export const timelineWeeks = {
  eyebrow: 'A typical engagement',
  title: 'From kickoff to GoLive in weeks.',
  text: 'Illustrative only—timelines depend on scope, integrations and stakeholder availability.',
  bars: [
    { label: 'Discovery & scoping', span: '1–2', start: 0, width: 22 },
    { label: 'Iterative design sprints', span: '3–8', start: 18, width: 52 },
    { label: 'Testing & training', span: '7–10', start: 58, width: 26 },
    { label: 'GoLive & support', span: '10+', start: 78, width: 22 },
  ],
}

export const principles = {
  eyebrow: 'Our commitments',
  title: 'What you can expect throughout.',
  items: [
    { icon: 'search', title: 'Full visibility', text: 'Regular demos and open communication—never a black box.' },
    { icon: 'users', title: 'Your team in the loop', text: 'End users test and shape every release.' },
    { icon: 'dollar', title: 'No surprises', text: 'Scope, timeline and cost discussed openly up front.' },
    { icon: 'lifebuoy', title: 'Support that stays', text: 'Help after GoLive, not just until launch.' },
  ],
}

/* ---------- Contact ---------- */

export const contactCards = [
  { icon: 'phone', title: 'Call us', text: 'Speak with a specialist.', value: contact.phone, href: contact.phoneHref },
  { icon: 'mail', title: 'Email us', text: 'Contracts and general inquiries.', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'calendar', title: 'Book a call', text: 'Pick a time that suits you.', value: 'Schedule on Calendly', href: contact.calendly },
  { icon: 'pin', title: 'Visit', text: `${contact.city}.`, value: contact.address, href: mapsLink(contact.address) },
]

export const whoWeServe = {
  eyebrow: 'Who should reach out',
  title: 'Government and commercial inquiries welcome.',
  items: [
    { title: 'Government & public sector', text: 'Agencies, counties, school districts and public authorities.', image: unsplash('1529107386315-e1a2ed48a620', 700) },
    { title: 'Financial services', text: 'Private equity and financial firms seeking deal and relationship visibility.', image: unsplash('1554224155-6726b3ff858f', 700) },
    { title: 'Non-profits', text: 'Program-driven organizations that need to do more with less.', image: unsplash('1559027615-cd4628902d4a', 700) },
    { title: 'Commercial enterprise', text: 'Teams modernizing sales, service and field operations.', image: unsplash('1497366811353-6870744d04b2', 700) },
  ],
}

export const prepare = {
  eyebrow: 'Before we talk',
  title: 'Helpful to have in mind.',
  text: 'None of this is required—we will work through it together on the call.',
  items: [
    'The process that slows your team down the most',
    'The systems and spreadsheets involved today',
    'Who uses it and how many people it affects',
    'Any deadlines, budgets or security requirements',
  ],
  image: unsplash('1517842645767-c639042777db', 1000),
}

/* ---------- CMAS ---------- */

export const cmasExplainer = {
  eyebrow: 'What is CMAS?',
  title: 'A streamlined path to buy Microsoft expertise.',
  text: 'The California Multiple Award Schedule (CMAS) is a pre-competed contract vehicle administered by the California Department of General Services. Agencies can buy from schedule contractors without running a separate full bid.',
  points: ['Pre-competed contract vehicle', 'Shorter route from need to purchase', 'Dynamics 365 and Power Platform services under one contract'],
  note: 'Confirm purchasing thresholds and rules with your procurement office.',
  image: unsplash('1554469384-e58fac16e23a', 1000),
}

export const cmasSteps = {
  eyebrow: 'How to buy',
  title: 'Four steps from need to award.',
  items: [
    { n: '01', title: 'Talk to us', text: 'Share your requirements on a discovery call.' },
    { n: '02', title: 'Receive a scope', text: 'We outline a practical, right-sized plan and quote.' },
    { n: '03', title: 'Issue your order', text: 'Your procurement team purchases under CMAS contract 3-24-05-2024.' },
    { n: '04', title: 'Start delivery', text: 'We begin analysis and iterative design with your team.' },
  ],
}

export const cmasBenefits = {
  eyebrow: 'Benefits',
  title: 'Why agencies buy through CMAS.',
  items: [
    { icon: 'clock', title: 'Faster procurement', text: 'A pre-competed vehicle helps reduce time spent on solicitation.' },
    { icon: 'shield', title: 'Vetted contractor', text: 'Registered with SAM (CAGE 8CP18, UEI NMH9P38XNZFS) and DUNS.' },
    { icon: 'doc', title: 'Clear, accountable terms', text: 'Contract terms and pricing structure that procurement teams can rely on.' },
  ],
}

export const naicsDetail = [
  { code: '541511', label: 'Custom computer programming services' },
  { code: '541512', label: 'Computer systems design services' },
  { code: '541519', label: 'Other computer related services' },
  { code: '541990', label: 'All other professional, scientific and technical services' },
  { code: '51320 · 51820 · 51920', label: 'Additional registered codes' },
]

export const cmasFaq = {
  eyebrow: 'CMAS questions',
  title: 'Common procurement questions.',
  items: [
    { q: 'What does the CMAS contract cover?', a: 'Microsoft Dynamics 365 and Power Platform services, including analysis, design, development, deployment, training and support.' },
    { q: 'Can we also buy commercially?', a: 'Yes. Blackfin serves government and commercial clients. CMAS is simply one procurement option for California agencies.' },
    { q: 'Where can I find your registration details?', a: 'CMAS 3-24-05-2024, SAM CAGE 8CP18, SAM UEI NMH9P38XNZFS and DUNS 08-135-7555 are listed on this page and in our footer.' },
  ],
}

/* =====================================================================
 * PRODUCTS — "Blackfin Cloud for Government"
 * Transcribed from https://go.blackfingov.com and its three product one-sheets.
 * Images in /public/products are the client's own screenshots and one-sheets.
 * ===================================================================== */

export const productsPage = {
  eyebrow: 'Blackfin Cloud for Government',
  title: 'Tools you can use. Deployed now.',
  text: 'Three new flexible solutions that can be deployed in weeks, not months. Priced for any agency.',
  image: unsplash('1541746972996-4e0b0f43e02a', 1800),
  badge: 'Solutions for state and local government',
}

export const productsIntro = {
  eyebrow: 'Modern government software',
  title: 'Delivered faster, at a fraction of the cost, and built for your team to own.',
  text: 'State and local government software—fast, affordable, and built for independence.',
}

export const productValues = {
  eyebrow: 'Why Blackfin Cloud for Government',
  title: 'Fast, affordable, and built for independence.',
  items: [
    { icon: 'bolt', title: 'Deployed in weeks, not months', text: 'Skip the usual year-long rollout. Each solution is built to go live in weeks, with deployment times of under 60 days.' },
    { icon: 'dollar', title: 'Priced for any agency', text: 'Modern government software delivered at a fraction of the cost, and priced for ANY agency.' },
    { icon: 'users', title: 'Built for your team to own', text: 'Built on the Microsoft Power Platform and integrated with Outlook and SharePoint, so your team can own it.' },
  ],
}

export interface ProductGroup {
  title: string
  icon: string
  items: string[]
  ordered?: boolean
}

export interface Product {
  slug: string
  number: string
  name: string
  short: string
  tagline?: string
  lead: string
  highlights: string[]
  groups: ProductGroup[]
  deployment: string
  deploymentLabel: string
  images: string[]
  sheet: string
  sheetAlt: string
}

export const products: Product[] = [
  {
    slug: 'geospatial-management',
    number: '01',
    name: 'Geospatial Management',
    short: 'Live GIS mapping across any department asset type or service.',
    tagline: 'The most flexible mapping solution, full-stop.',
    lead: "Place ANY type of data with an address or Lat/Long onto a map, enriched by your back-end database and integrated with Microsoft Outlook, SharePoint, and the Power Platform.",
    highlights: [
      'Live GIS mapping across ANY department asset type or service',
      'Custom automated workflows',
      'Deployed in weeks, not the usual year-long GIS rollout',
      'A full-blown management app for every type of data tracked',
    ],
    groups: [
      { title: 'Potential uses', icon: 'target', items: ['Community Outreach', 'Resource Management', 'Event Management', 'Field Maintenance', 'ANY mappable data'] },
      { title: 'Core features', icon: 'layers', items: ['Custom data sets', 'Activity tracking', 'Multiple integrations'] },
      { title: 'Deployment steps', icon: 'flag', ordered: true, items: ['Gather your data', 'Configure points', 'Deploy any number of maps!'] },
    ],
    deployment: 'Less than 60 days',
    deploymentLabel: 'Deployment time',
    images: ['/products/geospatial-map.jpg'],
    sheet: '/products/geospatial-one-sheet.jpg',
    sheetAlt: 'Geospatial Management one-sheet',
  },
  {
    slug: 'project-task-automation',
    number: '02',
    name: 'Project & Task Automation',
    short: 'Build a project, assemble a team, and tasks assign themselves.',
    lead: 'If you need a project management solution that features task automation, we offer a perfect platform to get started immediately. We help you set up your task catalog so that when you create a project and add your team, the tasks are generated automatically and assigned to the role-based team members you have identified. Your system can be ready within a week or two.',
    highlights: [
      'Create multiple task catalogs by role and project type',
      'Build one or more role-based teams',
      'Create a project, build a project team, and launch!',
      'Tasks are assigned automatically with due dates; users get a dashboard with upcoming tasks for the week, month, and beyond',
    ],
    groups: [
      { title: 'Automation', icon: 'sync', items: ['Task templates', 'Task catalog', 'Auto assignment', 'Team building', 'Task dependencies'] },
      { title: 'Operations', icon: 'clock', items: ['Tracking', 'Reminders', 'Automatic communication'] },
      { title: 'Deployment steps', icon: 'flag', ordered: true, items: ['Create task catalog', 'Define roles and team(s)', 'Create project(s)'] },
    ],
    deployment: 'Less than 30 days',
    deploymentLabel: 'Deployment time',
    images: ['/products/project-dashboard.jpg'],
    sheet: '/products/project-task-one-sheet.jpg',
    sheetAlt: 'Project Management and Task Automation one-sheet',
  },
  {
    slug: 'procurement-vendor-management',
    number: '03',
    name: 'Procurement & Vendor Management',
    short: 'One centralized system for requests, approvals, budgets and vendors.',
    lead: 'Procurement is a vital function for local governments. A centralized system that provides transparency, control, and powerful reporting and tracking of expenditures is required. Our procurement and vendor management system delivers that and more.',
    highlights: [
      'Centralized request intake for goods and services across departments',
      'Multi-stage approval workflows with dynamic routing logic',
      'Real-time budget validation and spend visibility',
      'Deployed in under 30 days, with audit-ready reporting built in',
    ],
    groups: [
      {
        title: 'Core capabilities',
        icon: 'layers',
        items: [
          'Centralized request intake for goods and services across departments',
          'Configurable catalog management for standard and custom procurement items',
          'Multi-stage approval workflows with dynamic routing logic',
          'Automated notifications and status tracking across the procurement lifecycle',
        ],
      },
      {
        title: 'Financial & operational control',
        icon: 'dollar',
        items: [
          'Budget validation and real-time spend visibility during request creation',
          'Forecasting tools for departmental and organizational procurement planning',
          'Purchase order generation and lifecycle tracking',
          'Invoice intake, matching, and processing workflows',
        ],
      },
      {
        title: 'Workflow automation',
        icon: 'sync',
        items: [
          'Conditional and branching approval paths based on thresholds, categories, or departments',
          'SLA tracking for procurement cycle times',
          'Automated escalation and exception handling',
        ],
      },
      {
        title: 'Reporting & insights',
        icon: 'chart',
        items: [
          'Procurement cycle time analytics and bottleneck identification',
          'Spend analysis by department, vendor, and category',
          'Audit-ready reporting for compliance and transparency',
        ],
      },
    ],
    deployment: 'Less than 30 days',
    deploymentLabel: 'Deployment time',
    images: ['/products/procurement-dashboard.jpg', '/products/procurement-spend.jpg'],
    sheet: '/products/procurement-one-sheet.jpg',
    sheetAlt: 'Procurement and Vendor Management one-sheet',
  },
]

export const productsBand = [
  { text: '< 60', label: 'Days to deploy Geospatial Management' },
  { text: '< 30', label: 'Days to deploy Project & Task Automation' },
  { text: '< 30', label: 'Days to deploy Procurement & Vendor Management' },
  { text: '30 min', label: 'Demo to see it in action' },
]

export const productsCta = {
  title: 'Schedule your 30 minute demo',
  text: 'See how Blackfin Cloud for Government can work for your agency. No sales script—just a focused walkthrough of the solution you care about.',
  primary: { label: 'Schedule a Call', href: contact.calendly },
  secondary: { label: 'Talk to a specialist', href: '/contact' },
}
