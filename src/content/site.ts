export const brand = {
  name: "Vivantix",
  tagline: "AI Company Brain Platform",
  corePromise:
    "We build company-specific AI systems that centralise knowledge, automate operations and scale with your business.",
  oneLiner:
    "Vivantix builds AI company brains that become the foundation for intelligent operations.",
  location: "Johannesburg, South Africa",
  email: "hello@vivantix.co.za",
} as const;

export const navLinks = [
  { label: "Platform", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Vivantix", href: "#why" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;


export const heroSection = {
  id: "hero",
  eyebrow: "Company Brain LLM • AI Operations",
  subheading:
    "Vivantix builds company-specific AI systems that centralise knowledge, automate operations and form the foundation for intelligent growth.",
  primaryCta: {
    label: "Book a Free Consultation",
    href: "#contact",
  },
  secondaryCta: {
    label: "See how it works",
    href: "#services",
  },
} as const;

export const servicesSection = {
  id: "services",
  heading: "What we build",
  subheading:
    "A modular AI foundation that starts with a Company Brain and expands into automations, agents and operational intelligence.",
  items: [
    {
      title: "Company Brain LLM",
      description:
        "A private, company-specific AI that understands your documents, processes, language and internal knowledge.",
      bullets: [
        "Internal knowledge assistant for teams",
        "Company memory, rules and reasoning",
        "Role-based access and secure isolation",
        "Foundation for all future automations",
      ],
    },
    {
      title: "AI Automations & Agents",
      description:
        "Extend your Company Brain with automations and AI agents that execute real work across your systems.",
      bullets: [
        "Workflow and task automation",
        "CRM, email and accounting integrations",
        "AI agents for Sales, Ops, Finance or HR",
        "Charged per automation, scaled by complexity",
      ],
    },
    {
      title: "Operational Intelligence & Insights",
      description:
        "Dashboards and AI-generated insights that turn operational data into clear, actionable decisions.",
      bullets: [
        "Operational and financial dashboards",
        "AI-generated monthly insights",
        "Trend detection and early warnings",
        "Decision support for leadership teams",
      ],
    },
  ],
} as const;

export const processSection = {
  id: "process",
  heading: "How we work",
  subheading:
    "A consultation-led process designed to build and expand your Company Brain.",
  steps: [
    {
      label: "1. Discovery & Assessment",
      description:
        "We assess your business size, workflows, data sources and automation opportunities.",
    },
    {
      label: "2. Company Brain Blueprint",
      description:
        "We design your AI architecture, data ingestion plan, access model and expansion roadmap.",
    },
    {
      label: "3. Build, Deploy & Expand",
      description:
        "We deploy your Company Brain, validate it with your team and expand it through automations.",
    },
  ],
} as const;

export const whySection = {
  id: "why",
  heading: "Why Vivantix?",
  subheading:
    "Engineer-led, automation-first and built for real operational outcomes.",
  reasons: [
    {
      title: "Engineering-led systems",
      description:
        "Architecture, reliability and long-term scalability always come first.",
    },
    {
      title: "Automation-first mindset",
      description:
        "We remove manual work quietly in the background, not add complexity.",
    },
    {
      title: "Built around real workflows",
      description:
        "Designed around how your team actually operates.",
    },
    {
      title: "Scalable AI foundations",
      description:
        "Your Company Brain grows with your business and future needs.",
    },
    {
      title: "Transparent collaboration",
      description:
        "Clear communication, clear decisions, no black boxes.",
    },
    {
      title: "Long-term AI partnership",
      description:
        "We build foundations, not one-off experiments.",
    },
  ],
  founderCard: {
    name: "Cameron Brighton",
    title: "Founder & Software Engineer",
    blurb:
      "Engineer-led AI systems and automation platforms for SMEs and growing businesses across construction, logistics, fitness and professional services.",
    contactLabel:
      "Based in Johannesburg. Working with clients remotely and on-site.",
  },
} as const;

export const projectsSection = {
  id: "projects",
  heading: "Reference systems and concept builds",
  subheading:
    "Examples of systems built on top of the Vivantix Company Brain architecture.",
  projects: [
    {
      title: "Automated Construction Invoicing System",
      category: "Company Brain Extension",
      problem:
        "Manual invoicing, data fragmentation and calculation errors.",
      solution:
        "A centralised system that automates invoice creation and tracks payment status end-to-end.",
      result:
        "Faster invoicing, fewer errors and predictable cashflow.",
      status: "In development",
    },
    {
      title: "E-Commerce & In-Store Sales Intelligence",
      category: "Operational Intelligence",
      problem:
        "No unified view of online and in-store performance.",
      solution:
        "A single analytics layer with real-time KPIs and AI insights.",
      result:
        "Smarter decisions and a single source of truth.",
      status: "Concept",
    },
  ],
} as const;

export const contactSection = {
  id: "contact",
  heading: "Where innovation is unavoidable.",
  subheading:
    "Tell us about your business and what’s stealing your time. We’ll assess fit, scope and next steps.",
  cta: {
    label: "Request Consultation",
  },
} as const;
