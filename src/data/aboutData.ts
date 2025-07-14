import { site } from './site';

export const aboutHero = {
  title: "About",
  subtitle: "Our Mission",
  description: `We are Kenya's most trusted forex broker review platform, dedicated to providing unbiased, data-driven analysis to help Kenyan traders make informed decisions in the forex market. Our team of certified analysts combines deep market expertise with rigorous testing methodology.`
};

export const coreValues = [
  {
    title: "Our Mission",
    description: "To empower Kenyan traders with comprehensive, unbiased forex broker reviews and educational resources that promote safe and profitable trading.",
    icon: "🎯"
  },
  {
    title: "Our Vision",
    description: "To be the most trusted source of forex broker information in East Africa, setting the standard for transparency and accuracy in financial market analysis.",
    icon: "👁️"
  },
  {
    title: "Our Values",
    description: "Integrity, transparency, accuracy, and independence guide all our reviews. We never accept payment for favorable ratings or reviews.",
    icon: "⚖️"
  }
];

export const team = [
  {
    name: "James Kimani",
    role: "Chief Financial Analyst & Founder",
    credentials: "CFA, FRM",
    education: "University of Nairobi - Bachelor of Commerce (Finance)",
    experience: "12+ years in financial markets analysis",
    bio: "James has over 12 years of experience in financial markets, specializing in forex and derivatives trading. He holds the Chartered Financial Analyst (CFA) and Financial Risk Manager (FRM) designations. Previously worked at Standard Bank Kenya and Citibank as a senior analyst.",
    expertise: ["Forex Analysis", "Risk Management", "Market Research", "Financial Modeling"],
    avatar: "👨🏾‍💼"
  },
  {
    name: "Sarah Wanjiku",
    role: "Senior Market Analyst",
    credentials: "CPA, CFE",
    education: "Strathmore University - Bachelor of Commerce (Accounting)",
    experience: "8+ years in market analysis and forex trading",
    bio: "Sarah brings extensive experience in market analysis and currency trading. As a Certified Public Accountant (CPA) and Certified Fraud Examiner (CFE), she specializes in broker financial analysis and regulatory compliance. Former senior analyst at KCB Bank.",
    expertise: ["Market Analysis", "Currency Trading", "Financial Reporting", "Compliance"],
    avatar: "👩🏾‍💼"
  },
  {
    name: "David Ochieng",
    role: "Regulatory Affairs Specialist",
    credentials: "LLB, CMA License",
    education: "University of Nairobi School of Law - Bachelor of Laws",
    experience: "10+ years in financial regulation and compliance",
    bio: "David is our regulatory expert with deep knowledge of Kenyan financial laws and CMA regulations. He holds a Law degree from University of Nairobi and is licensed by the Capital Markets Authority. Previously worked at CMA Kenya as a compliance officer.",
    expertise: ["Financial Law", "Regulatory Compliance", "CMA Regulations", "Legal Analysis"],
    avatar: "👨🏾‍⚖️"
  },
  {
    name: "Grace Mutua",
    role: "Fintech & Payments Specialist",
    credentials: "MSc FinTech, PMP",
    education: "University of Cape Town - Master of Science in Financial Technology",
    experience: "6+ years in fintech and payment systems",
    bio: "Grace specializes in financial technology and payment systems analysis. With an MSc in FinTech from University of Cape Town and Project Management Professional (PMP) certification, she evaluates broker payment methods and technology infrastructure.",
    expertise: ["Financial Technology", "Payment Systems", "M-Pesa Integration", "Digital Banking"],
    avatar: "👩🏾‍💻"
  },
  {
    name: "Peter Mwangi",
    role: "Risk Management Analyst",
    credentials: "CRM, ACCA",
    education: "ACCA Professional - Association of Chartered Certified Accountants",
    experience: "9+ years in risk management and trading",
    bio: "Peter is our risk management specialist, focusing on trading risk assessment and broker safety evaluation. He holds the Certified Risk Manager (CRM) designation and ACCA qualification. Former risk manager at Equity Bank.",
    expertise: ["Risk Assessment", "Trading Risk", "Portfolio Management", "Stress Testing"],
    avatar: "👨🏾‍📊"
  },
  {
    name: "Ann Nyokabi",
    role: "Economic Research Analyst",
    credentials: "MA Economics, CFA Level II",
    education: "University of Nairobi - Master of Arts in Economics",
    experience: "7+ years in economic research and analysis",
    bio: "Ann leads our economic research efforts, analyzing macroeconomic factors affecting currency markets. She holds an MA in Economics and is a CFA Level II candidate. Previously worked at Kenya National Bureau of Statistics.",
    expertise: ["Economic Analysis", "Monetary Policy", "Currency Research", "Statistical Analysis"],
    avatar: "👩🏾‍🎓"
  }
];

export const methodology = [
  {
    title: "Real Account Testing",
    description: "We open real trading accounts with minimum deposits and conduct actual trades to test execution, spreads, and withdrawal processes.",
    icon: "💰"
  },
  {
    title: "Regulatory Verification",
    description: "Every broker undergoes thorough regulatory checks including CMA status verification and international license validation.",
    icon: "🔍"
  },
  {
    title: "Cost Analysis",
    description: "Comprehensive analysis of all trading costs including spreads, commissions, swaps, and hidden fees across multiple account types.",
    icon: "📊"
  },
  {
    title: "Platform Testing",
    description: "Hands-on testing of trading platforms for functionality, speed, reliability, and mobile compatibility under different market conditions.",
    icon: "💻"
  },
  {
    title: "Customer Support Evaluation",
    description: "Multi-channel testing of customer support including response times, quality of assistance, and language support for Kenyan clients.",
    icon: "🎧"
  },
  {
    title: "Continuous Monitoring",
    description: "Ongoing monitoring of broker performance, regulatory changes, and market conditions to keep reviews current and accurate.",
    icon: "📈"
  }
];

export const certifications = [
  { name: "CMA Registration", status: "Verified", icon: "🏛️" },
  { name: "ISO 27001 Certified", status: "Compliant", icon: "🔒" },
  { name: "Data Protection Certified", status: "Compliant", icon: "🛡️" },
  { name: "Editorial Standards", status: "Verified", icon: "📝" }
];

export const schemaData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Forex Broker Reviews Kenya",
  "description": "Learn about our expert team, methodology, and commitment to providing unbiased forex broker reviews for Kenyan traders",
  "url": `${site.url}/about/`,
  "mainEntity": {
    "@type": "Organization",
    "name": site.siteName,
    "foundingDate": "2022",
    "founders": [
      {
        "@type": "Person",
        "name": "James Kimani",
        "jobTitle": "Chief Financial Analyst"
      }
    ],
    "employee": team.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role.split(" & ")[0],
      "hasCredential": member.credentials
    }))
  }
};