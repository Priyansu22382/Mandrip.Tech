import {
  Globe,
  ShoppingCart,
  AppWindow,
  Wrench,
  Palette,
  Server,
  LayoutDashboard,
  Sparkles,
  Code2,
  RefreshCw,
} from 'lucide-react'

export const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'Custom business websites built for clarity, speed and conversion — designed to represent your brand with precision.',
    longDescription:
      'We build professional websites for startups, local businesses and growing companies that need a credible digital presence. From structure and content hierarchy to responsive layouts and deployment, every site is crafted to communicate clearly and convert visitors into enquiries.',
    icon: Globe,
    deliverables: [
      'Multi-page business websites',
      'Landing pages & campaign sites',
      'Mobile-responsive layouts',
      'SEO-ready structure',
      'Contact & lead forms',
      'Hosting & deployment setup',
    ],
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description:
      'Scalable online stores with seamless checkout, product management and performance-focused shopping experiences.',
    longDescription:
      'We develop e-commerce platforms that make browsing, buying and managing products simple. Whether you are launching a new store or upgrading an existing one, we focus on clean UX, reliable checkout flows and a foundation that can grow with your catalogue.',
    icon: ShoppingCart,
    deliverables: [
      'Product catalogue & collections',
      'Cart & checkout flows',
      'Order management basics',
      'Payment gateway readiness',
      'Inventory-friendly structure',
      'Mobile shopping experience',
    ],
  },
  {
    id: 'custom-web-applications',
    title: 'Custom Web Applications',
    description:
      'Bespoke React and MERN applications tailored to your workflows, users and long-term product goals.',
    longDescription:
      'When off-the-shelf tools fall short, we build custom web applications around your process. From internal tools to client portals and SaaS-style products, we use modern React and MERN architectures that stay maintainable as your product evolves.',
    icon: AppWindow,
    deliverables: [
      'React / MERN applications',
      'User authentication & roles',
      'Custom workflows & modules',
      'Client / team portals',
      'Data-driven interfaces',
      'Scalable project structure',
    ],
  },
  {
    id: 'react-mern',
    title: 'React.js & MERN Stack',
    description:
      'Modern frontend and full-stack development with React, Node.js, Express and MongoDB for fast, maintainable products.',
    longDescription:
      'Our core engineering stack centres on React.js and the MERN ecosystem. We build component-driven interfaces, robust APIs and database-backed systems that are fast to iterate on and ready for long-term maintenance.',
    icon: Code2,
    deliverables: [
      'React SPA & multi-page apps',
      'Node.js / Express APIs',
      'MongoDB data modelling',
      'Component libraries',
      'State & routing architecture',
      'Production-ready deployments',
    ],
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description:
      'Ongoing updates, monitoring and technical care so your digital presence stays secure, fast and reliable.',
    longDescription:
      'Launch is not the finish line. We provide ongoing maintenance so your website stays secure, updated and performing — including bug fixes, content changes, backups and technical support when something needs attention.',
    icon: Wrench,
    deliverables: [
      'Security & dependency updates',
      'Bug fixes & small improvements',
      'Content & page updates',
      'Performance checks',
      'Backup management',
      'Priority technical support',
    ],
  },
  {
    id: 'redesign-optimization',
    title: 'Website Redesign & Optimization',
    description:
      'Refresh outdated sites with modern design, better structure, faster performance and clearer conversion paths.',
    longDescription:
      'If your current website looks dated, loads slowly or fails to convert, we redesign and optimise it. We improve visual hierarchy, usability, speed and messaging so your site works harder for your business.',
    icon: RefreshCw,
    deliverables: [
      'UX & visual redesign',
      'Content restructuring',
      'Performance optimisation',
      'Mobile experience upgrades',
      'Conversion-focused layouts',
      'Technical cleanup',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Clean, intentional interfaces that balance aesthetics with usability — crafted for clarity and engagement.',
    longDescription:
      'We design interfaces that feel calm, clear and premium. From wireframes to polished UI systems, every screen is shaped around real user journeys and business goals — not decoration for its own sake.',
    icon: Palette,
    deliverables: [
      'Wireframes & page flows',
      'High-fidelity UI design',
      'Design systems & components',
      'Responsive design specs',
      'Landing page concepts',
      'Dashboard & app interfaces',
    ],
  },
  {
    id: 'api-backend',
    title: 'API & Backend Development',
    description:
      'Secure APIs, integrations and server-side systems that power reliable products and connected tools.',
    longDescription:
      'We build the server-side foundations behind your product — APIs, authentication, integrations and business logic that keep data flowing securely between your frontend, services and third-party tools.',
    icon: Server,
    deliverables: [
      'REST API development',
      'Authentication & permissions',
      'Third-party integrations',
      'Database design',
      'Webhook & service connections',
      'Secure server architecture',
    ],
  },
  {
    id: 'crm-dashboards',
    title: 'CRM & Admin Dashboards',
    description:
      'Custom dashboards and management systems that bring visibility, control and efficiency to your operations.',
    longDescription:
      'We create admin panels, CRM-style tools and business dashboards that help teams manage customers, content, orders and operations from one place — built around how your business actually works.',
    icon: LayoutDashboard,
    deliverables: [
      'Custom admin panels',
      'CRM-style contact management',
      'Role-based access control',
      'Reports & activity views',
      'Content / data management',
      'Internal operations tools',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Business Automation',
    description:
      'Practical AI-powered workflows that reduce manual work, improve response times and streamline operations.',
    longDescription:
      'We help businesses apply AI where it creates real operational value — automating repetitive tasks, assisting customer responses, summarising information and connecting tools so your team spends less time on manual work.',
    icon: Sparkles,
    deliverables: [
      'Workflow automation setup',
      'AI-assisted enquiry handling',
      'Internal productivity tools',
      'Content / data assistants',
      'Process automation mapping',
      'Tool & API integrations',
    ],
  },
]

export const serviceHighlights = [
  {
    title: 'Build',
    description:
      'Websites, stores, dashboards and custom applications engineered for your brand and business goals.',
  },
  {
    title: 'Maintain',
    description:
      'Ongoing technical care, updates and support so your digital products stay secure and dependable.',
  },
  {
    title: 'Scale',
    description:
      'Architecture, redesigns and feature growth that help your product keep pace as the business expands.',
  },
]
