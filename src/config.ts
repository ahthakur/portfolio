export const siteConfig = {
  name: "Abhijit Thakur",
  title: "Senior DevSecOps & Cloud Security Engineer",
  description:
    "Portfolio of Abhijit Thakur, Senior DevSecOps & Cloud Security Engineer",
  accentColor: "#1d4ed8",
  social: {
    email: "Abhijit.Thakur@icloud.com",
    linkedin: "https://www.linkedin.com/in/abhijit-thakur-58b87742/",
    github: "https://github.com/ahthakur",
  },
  aboutMe:
    "Security and DevSecOps engineer with over 16 years of experience hardening regulated cloud environments. " +
    "At IBM Cloud, I secure an observability platform spanning 20+ OpenShift clusters and 5,500+ nodes, embedding SAST/DAST into CI/CD pipelines " +
    "and leading audit certifications across SOC 2, PCI-DSS, HIPAA, ISO 27001, and FedRAMP. " +
    "My background spans container security, compliance automation, Kubernetes, and the intersection of security with AI infrastructure. " +
    "I build practical tools that solve real deployment problems rather than demos.",
  skills: [
    "DevSecOps",
    "Cloud Security",
    "Kubernetes",
    "CI/CD Pipeline Security",
    "SOC 2 / PCI-DSS",
    "Python",
    "Bash",
    "Terraform",
  ],
  projects: [
    {
      name: "ComplianceGuard",
      description:
        "AI-powered compliance drift detection agent that scans containerized infrastructure against declarative YAML policies, classifies violations with Claude AI, and generates PCI-DSS v4.0 auditor-ready evidence reports with guided remediation.",
      link: "https://github.com/ahthakur/complianceguard",
      demo: "/demo/complianceguard",
      skills: ["Python", "Docker", "Claude AI", "PCI-DSS"],
    },
    {
      name: "Personal Dietician",
      description:
        "Full-stack AI-powered nutrition and meal planning app with computer vision food logging, workout-aware scheduling, and real-time macro tracking.",
      link: "https://github.com/ahthakur/dietician-k8s",
      demo: "/demo/dietician",
      liveUrl: "https://dietician.abhijitt.com",
      skills: ["Python", "FastAPI", "Claude AI", "Kubernetes"],
    },
    {
      name: "DrinkFinder",
      description:
        "Next.js application that compares real in-store drink prices from local retailers to help users find the cheapest options nearby.",
      link: "https://github.com/ahthakur/drinkfinder",
      demo: "/demo/drinkfinder",
      liveUrl: "https://drinkfinder-eight.vercel.app/",
      skills: ["Next.js", "TypeScript"],
    },
    {
      name: "Stock Lakehouse",
      description:
        "Lakehouse exploring decades of daily US stock-market history. Trino federates from Postgres into Iceberg on MinIO through a Bronze/Silver/Gold medallion pipeline, and a local Ollama model turns plain-English questions into live SQL.",
      link: "https://github.com/ahthakur/stock-lakehouse",
      demo: "/demo/stock-lakehouse",
      skills: ["Trino", "Apache Iceberg", "MinIO", "Ollama", "Python"],
    },
  ],
  experience: [
    {
      company: "IBM Cloud",
      title: "Senior DevSecOps / Cloud Security Engineer",
      dateRange: "Sep 2016 - Present",
      bullets: [
        "Secured a microservices platform across 20+ OpenShift clusters and 5,500+ nodes, enforcing mTLS, RBAC, namespace isolation, and pod security constraints supporting 1M+ log lines/hour at 99% uptime SLA.",
        "Hardened CI/CD pipelines by integrating SAST (SonarQube, Mend) and DAST (OWASP ZAP) scanning, dependency checks, and policy-enforced deployment validation with automated rollback.",
        "Led audit certifications (SOC 2, HIPAA, PCI-DSS, ISO 27001, FedRAMP) achieving 100% compliance across IBM Public Cloud PaaS; served as primary security liaison with auditors.",
      ],
    },
    {
      company: "FedEx Services",
      title: "Technical Analyst, Identity and Access Management",
      dateRange: "Jan 2013 - Sep 2016",
      bullets: [
        "Led enterprise-wide Web SSO implementation using SAML, OAuth 2.0, and OIDC via PingFederate, enabling secure authentication across 100+ internal and external applications.",
        "Managed and upgraded PingFederate to support high-volume authentication for 50+ vendor integrations while enforcing SHA-2/TLS 1.2 security standards.",
        "Managed SSL certificate lifecycle across Apache, WebLogic, and PingFederate servers, reducing unplanned downtime for critical authentication services.",
      ],
    },
  ],
  resume: "/Abhijit_Thakur_Resume.pdf",
  education: [
    {
      school: "University of Memphis",
      degree: "Master of Science, Computer Science",
      dateRange: "2011 - 2012",
      achievements: [],
    },
    {
      school: "University of Pune, India",
      degree: "Bachelor of Engineering, Computer Science",
      dateRange: "2005 - 2008",
      achievements: [],
    },
  ],
};
