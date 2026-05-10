// Canvas Presets — 3-level hierarchy: Sphere → Subcategory → Business Model
// Data from KSE Zubchenok business model PDF + DE methodology

var CANVAS_PRESETS = {
  // ===== SUBSCRIPTION (default, shared across spheres) =====
  subscription: {
    label: "🔄 Subscription/SaaS",
    desc: "Recurring revenue from monthly/annual subscriptions. MRR/ARR metrics, high gross margin (70-85%).",
    examples: ["Netflix","Zoom","Notion","Grammarly","Salesforce"],
    de: {
      raison: "Democratize access to [domain] through a recurring, self-service platform that delivers continuous value.",
      market: "Beachhead: SMBs in [vertical] with 10-200 employees. TAM: $2-5B. End user: team leads who need [outcome] daily.",
      value: "10x faster [workflow] vs manual. Automated [process]. ROI in <3 months. Quantified: save 15+ hours/week per team.",
      advantage: "Network effects from user data. Switching costs from workflow integration. Proprietary [algo/dataset].",
      acquisition: "DMU: team lead (champion) + IT admin (buyer). Content marketing → free trial → product-led growth. Trigger: pain with current manual process.",
      "unit-econ": "LTV: $1,800 (ARPU $15/mo × 70% margin ÷ 5% churn). CAC: $50. LTV/CAC: 36x. Payback: 5 months.",
      revenue: "Tiered pricing: Free → Pro $15/user/mo → Enterprise $30/user/mo. Annual discount 20%. Expansion via seats + features.",
      "overall-econ": "Gross margin 70-85%. Break-even at ~500 paying customers. Burn $3K/mo pre-revenue. Rule of 40 target.",
      build: "MVBP: core [workflow] automation + 1 integration. Key assumption: users will pay after trial. Track: trial-to-paid rate, DAU/MAU.",
      scaling: "Follow-on: enterprise tier, adjacent verticals, marketplace of integrations. Product-led + sales-assist motion."
    },
    bmc: {
      partners: "Cloud providers (AWS/GCP), integration partners (Slack, Zapier), payment processors (Stripe)",
      activities: "Product development, customer success, content marketing, infrastructure reliability",
      proposition: "Automated [workflow] that saves 15+ hours/week. Self-service, instant onboarding, continuous updates.",
      relationships: "Self-service (freemium/trial), automated onboarding, community support, CSM for enterprise",
      segments: "SMBs (10-200 employees) in [vertical], team leads, IT decision-makers",
      resources: "Codebase, cloud infra, user data, brand, developer team",
      channels: "Website, app stores, content/SEO, integrations marketplace, partner referrals",
      costs: "R&D (40%), cloud hosting (15%), marketing (25%), customer support (10%), G&A (10%)",
      "revenue-streams": "Monthly subscriptions (MRR), annual prepay, enterprise contracts, add-on features"
    },
    lean: {
      problem: "1. Manual [workflow] wastes 15+ hours/week. 2. Existing tools are bloated/expensive. 3. No simple solution for [vertical].",
      solution: "1. Automated [workflow] in one click. 2. Lightweight, purpose-built. 3. Free tier to start, upgrade when ready.",
      uvp: "The simplest way to [achieve outcome] — set up in 5 minutes, save 15 hours/week, or it's free.",
      advantage: "Proprietary [algo/data], network effects from user behavior, deep [vertical] integration",
      segments: "Early adopters: team leads at 10-50 person companies in [vertical] who are frustrated with manual processes",
      metrics: "Acquisition: trial signups. Activation: first [action] within 24h. Retention: DAU/MAU >40%. Revenue: MRR. Referral: NPS >50.",
      channels: "Product-led (free trial), content/SEO, integrations, word-of-mouth",
      costs: "R&D, cloud hosting, marketing, support",
      revenue: "Subscription: $15-30/user/mo. LTV $1,800. Payback 5 months."
    }
  },

  // ===== MARKETPLACE =====
  marketplace: {
    label: "🏪 Marketplace",
    desc: "Connect buyers and sellers. Revenue from commissions/fees. Network effects are the moat.",
    examples: ["Rozetka","Airbnb","Uber","Jooble","Preply"],
    de: {
      raison: "Create an efficient market where [buyers] and [sellers] connect directly, reducing friction and cost.",
      market: "Beachhead: [specific buyer segment] in [region]. TAM: $5-20B. Two-sided: supply density = demand value.",
      value: "For buyers: wider selection, lower prices, verified quality. For sellers: access to demand, lower CAC.",
      advantage: "Network effects: more sellers → more buyers → more sellers. Liquidity moat. Review/trust system.",
      acquisition: "Supply first: seed 1,000+ sellers via outreach. Demand: SEO + paid. DMU: individual buyer + procurement.",
      "unit-econ": "Take rate 15-30%. AOV $50. LTV: $200 (4 repeat purchases). CAC: $80. Payback: 1-2 orders.",
      revenue: "Commission per transaction (15-30%), listing fees for premium placement, advertising from sellers.",
      "overall-econ": "Gross margin 25-40% (COGS = seller payouts). Break-even at 10K monthly transactions. Burn $5K/mo.",
      build: "MVBP: listing + search + checkout + reviews. Key assumption: sellers will list without upfront payment. Track: listings, GMV, repeat rate.",
      scaling: "Adjacent categories, B2B marketplace, SaaS tools for sellers, logistics/fulfillment services."
    },
    bmc: {
      partners: "Payment processors, logistics providers, verification services, marketing affiliates",
      activities: "Platform development, seller onboarding, quality control, demand generation, dispute resolution",
      proposition: "Verified [category] marketplace with widest selection, best prices, and buyer protection",
      relationships: "Self-service for both sides, trust & safety team, seller support, buyer reviews",
      segments: "Buyers: price-sensitive [segment]. Sellers: small businesses seeking online demand channel",
      resources: "Platform codebase, seller/buyer database, review data, brand trust, payment infrastructure",
      channels: "SEO (product listings), paid acquisition, seller referrals, social media",
      costs: "Platform development (30%), marketing (35%), operations/support (20%), payment processing (15%)",
      "revenue-streams": "Transaction commission (15-30%), premium listings, seller advertising, subscription for pro sellers"
    },
    lean: {
      problem: "1. Fragmented market — hard to find [product/service]. 2. No trust/verification. 3. High intermediary costs.",
      solution: "1. One platform with all [category] listings. 2. Reviews + verification. 3. Direct connection, lower fees.",
      uvp: "Find any [product/service] in one place — verified sellers, buyer protection, best price guaranteed.",
      advantage: "Network effects (liquidity), trust system (reviews), seller lock-in (repeat demand)",
      segments: "Early adopters: [specific buyer segment] frustrated with current search process",
      metrics: "GMV, take rate, seller retention, buyer repeat rate, NPS, listing growth",
      channels: "SEO (product pages), seller outreach, referral programs, paid acquisition",
      costs: "Platform dev, marketing, operations, payment processing",
      revenue: "Commission 15-30%, premium listings, seller ads"
    }
  },

  // ===== SAAS FREEMIUM =====
  "saas-freemium": {
    label: "🆓 SaaS Freemium",
    desc: "Free tier drives adoption, paid tier monetizes power users. Conversion rate 2-5% is typical.",
    examples: ["Grammarly","Canva","Preply Business","Monobank","Reface"],
    de: {
      raison: "Give [capability] to everyone for free, monetize the power users who need more.",
      market: "Beachhead: individual [role] users. TAM: $3-10B. Free users = top of funnel. Paid: 2-5% conversion.",
      value: "Free: core [feature] with limits. Paid: unlimited + advanced features + collaboration. Value gap is clear.",
      advantage: "Viral loop from free users. Data moat from usage patterns. Brand awareness at scale.",
      acquisition: "Product-led: free signup → in-product prompts to upgrade. Viral: sharing/collaboration features. DMU: individual user.",
      "unit-econ": "ARPU $20/mo (paid). Free→paid conversion 3%. Blended CAC $30. LTV: $1,200. Payback: 1.5 months for paid users.",
      revenue: "Free tier → Pro ($12/mo) → Business ($24/mo). Revenue from 3% of users. Expansion: seats, API, enterprise.",
      "overall-econ": "Gross margin 75-85%. Free tier cost: hosting + support. Break-even at 50K free users (1,500 paid). Burn $4K/mo.",
      build: "MVBP: free tier with 1 killer feature + upgrade wall. Key assumption: 3%+ will convert. Track: free→paid rate, feature usage.",
      scaling: "Enterprise tier, API/platform, international markets, vertical-specific features."
    },
    bmc: {
      partners: "Cloud providers, integration platforms, content creators for free tier",
      activities: "Product development, free user support, conversion optimization, viral feature development",
      proposition: "Free [capability] for everyone — upgrade when you need more power, collaboration, or advanced features",
      relationships: "Self-service free tier, in-product upgrade prompts, community, CSM for enterprise",
      segments: "Free: individual users worldwide. Paid: power users, teams, enterprises",
      resources: "Codebase, free user base (top of funnel), usage data, brand, cloud infra",
      channels: "Product-led (free signup), viral features, SEO, app stores, referral programs",
      costs: "R&D (45%), free tier hosting (20%), marketing (20%), support (10%), G&A (5%)",
      "revenue-streams": "Pro subscriptions, Business/Enterprise plans, API access, marketplace"
    },
    lean: {
      problem: "1. [Capability] is too expensive for individuals. 2. Existing tools have no free entry. 3. Switching cost is high.",
      solution: "1. Free tier with real value. 2. Upgrade only when needed. 3. Import from existing tools.",
      uvp: "Get [capability] for free today — upgrade only when you're ready for more.",
      advantage: "Viral loop, massive free user base, data from usage patterns, brand at scale",
      segments: "Early adopters: individual [role] users who can't afford enterprise tools",
      metrics: "Free signups, activation rate, free→paid conversion, paid retention, viral coefficient",
      channels: "Free product, viral sharing, SEO, app stores, referral rewards",
      costs: "Free tier hosting, R&D, conversion optimization",
      revenue: "3% conversion to paid ($12-24/mo). LTV $1,200."
    }
  },

  // ===== MANUFACTURING =====
  manufacturing: {
    label: "🏭 Manufacturing",
    desc: "Physical product creation. COGS-heavy, supply-chain dependent. Margin 30-50%.",
    examples: ["Kormotech","Ajax Systems","MacPaw (hardware)"],
    de: {
      raison: "Build [product category] that is better/cheaper/more accessible than imports, for [market].",
      market: "Beachhead: [region] consumers/businesses needing [product]. TAM: $10-50B. Import substitution opportunity.",
      value: "30% cheaper than imports, same or better quality. Local support + warranty. Faster delivery.",
      advantage: "Local production = lower logistics cost + tariff advantage. Supply chain relationships. Brand trust.",
      acquisition: "B2B: distributor partnerships, trade shows. B2C: retail + e-commerce. DMU: procurement manager or end consumer.",
      "unit-econ": "COGS 55% of price. AOV $50. LTV: $300 (6 repeat purchases). CAC: $100. Payback: 2-3 orders.",
      revenue: "Direct sales + distributor wholesale. Pricing: cost+ margin model. Volume discounts for B2B.",
      "overall-econ": "Gross margin 45%. Break-even at 5,000 units/month. CapEx for equipment. Burn $8K/mo operating.",
      build: "MVBP: 1 product SKU, local materials, manual process. Key assumption: demand exists at price point. Track: units sold, return rate.",
      scaling: "Expand SKU line, automate production, export to new markets, B2B private label."
    },
    bmc: {
      partners: "Raw material suppliers, distributors, logistics companies, certification bodies",
      activities: "Production, quality control, supply chain management, sales, R&D for new products",
      proposition: "High-quality [product] made locally — 30% cheaper than imports, with local warranty and fast delivery",
      relationships: "Distributor partnerships, direct B2C sales, B2B contracts, after-sales support",
      segments: "B2B: distributors, retailers. B2C: price-conscious consumers in [region]",
      resources: "Production facility, equipment, supply chain, workforce, certifications, brand",
      channels: "Distributors, retail stores, e-commerce, trade shows, B2B direct sales",
      costs: "Raw materials (40%), labor (20%), logistics (15%), marketing (10%), overhead (15%)",
      "revenue-streams": "Product sales (wholesale + retail), B2B contracts, private label manufacturing"
    },
    lean: {
      problem: "1. Imported [product] is expensive. 2. No local alternative. 3. Long delivery times from abroad.",
      solution: "1. Local production at 30% lower cost. 2. Same/better quality with local certification. 3. 2-day delivery.",
      uvp: "Local [product] — same quality as imports, 30% cheaper, delivered in 2 days.",
      advantage: "Local supply chain, tariff advantage, brand trust, lower logistics cost",
      segments: "Early adopters: [region] buyers frustrated with import prices and delivery times",
      metrics: "Units produced, units sold, return rate, gross margin, distributor count",
      channels: "Distributors, e-commerce, retail, trade shows",
      costs: "Materials, labor, logistics, overhead",
      revenue: "Product sales, wholesale, B2B contracts"
    }
  },

  // ===== SERVICES =====
  services: {
    label: "💼 Services/IT",
    desc: "Sell expertise and time. Revenue = rate × hours. High margin (40-60%) but hard to scale.",
    examples: ["N-iX","SoftServe","People.ai","PeopleForce"],
    de: {
      raison: "Provide [domain] expertise that clients lack in-house, delivered faster and better than they can build themselves.",
      market: "Beachhead: mid-market companies needing [service]. TAM: $20-100B. Client: CTO/VP who needs [outcome] fast.",
      value: "2x faster delivery vs in-house. Access to specialized talent. Predictable cost via fixed-price or T&M.",
      advantage: "Deep expertise in [domain]. Talent pool. Reusable components/frameworks. Client relationships = retention.",
      acquisition: "Outbound: LinkedIn + conferences. Inbound: case studies + thought leadership. DMU: CTO (champion) + CFO (buyer).",
      "unit-econ": "Blended rate $80/hr. Utilization target 75%. Gross margin 40%. LTV: $50K per client. CAC: $200.",
      revenue: "T&M billing, fixed-price projects, retainer contracts. Expansion: add services, extend engagements.",
      "overall-econ": "Gross margin 40%. Break-even at 5 consultants billed. Burn $6K/mo bench cost. Rule: minimize bench time.",
      build: "MVBP: 1 service offering with 2-3 consultants. Key assumption: clients will pay $80/hr. Track: utilization rate, pipeline.",
      scaling: "Productize services into SaaS, hire more talent, open new offices, build delivery methodology."
    },
    bmc: {
      partners: "Technology vendors (AWS, Azure), staffing agencies, training providers, client PMOs",
      activities: "Service delivery, talent recruitment, client management, pre-sales, methodology development",
      proposition: "Expert [domain] teams that deliver 2x faster — predictable cost, guaranteed quality",
      relationships: "Long-term client partnerships, dedicated teams, advisory boards, community events",
      segments: "Mid-market and enterprise companies needing [domain] expertise, CTOs/VPs with budget",
      resources: "Talent pool, delivery methodology, client relationships, frameworks/codebase, brand",
      channels: "Outbound sales, conferences, case studies, referrals, LinkedIn",
      costs: "Talent salaries (60%), sales & marketing (15%), office/remote (10%), G&A (15%)",
      "revenue-streams": "T&M billing, fixed-price projects, retainers, managed services"
    },
    lean: {
      problem: "1. Can't find/hire [domain] talent fast enough. 2. In-house team lacks expertise. 3. Project deadlines slipping.",
      solution: "1. Ready-made expert team in days. 2. Deep [domain] specialization. 3. Fixed-price or T&M with guarantees.",
      uvp: "Expert [domain] team on demand — start in 2 weeks, deliver 2x faster, or we fix it free.",
      advantage: "Talent pool, reusable frameworks, deep [domain] expertise, client relationships",
      segments: "Early adopters: CTOs at mid-market companies with urgent [domain] needs",
      metrics: "Utilization rate, pipeline value, client retention, NPS, bench time %",
      channels: "Outbound, conferences, referrals, case studies",
      costs: "Talent, sales, operations",
      revenue: "Hourly/project billing, retainers, managed services"
    }
  },

  // ===== B2G/PUBLIC =====
  b2g: {
    label: "🏛️ B2G/Public Sector",
    desc: "Government contracts, long sales cycles, compliance-heavy. ProZorro-style procurement.",
    examples: ["ProZorro","eHealth Ukraine","Diia","GovTech"],
    de: {
      raison: "Digitize [public service] to make it transparent, efficient, and accessible to every citizen.",
      market: "Beachhead: [specific government agency/ministry]. TAM: $500M-5B (public IT budget). Procurement via ProZorro.",
      value: "10x faster service delivery. Transparency via open data. Cost reduction 30-50% vs manual processes.",
      advantage: "Compliance expertise. Political connections. First-mover in [domain]. Open-source credibility.",
      acquisition: "ProZorro tenders. Lobbying. Pilot projects. DMU: minister (sponsor) + IT director (evaluator) + procurement (buyer).",
      "unit-econ": "Contract value $100K-5M. Sales cycle 6-18 months. Gross margin 30-40%. CAC: $20K (tender preparation).",
      revenue: "Government contracts, pilot projects, maintenance/SLA fees, international development grants (USAID, EU).",
      "overall-econ": "Gross margin 30-40%. Revenue lumpy (contract-based). Break-even at 2-3 mid-size contracts/year. Burn $10K/mo between contracts.",
      build: "MVBP: working demo for 1 agency process. Key assumption: agency will adopt after pilot. Track: tender wins, pilot success rate.",
      scaling: "Expand to more agencies, other countries, open-source community, SaaS for smaller municipalities."
    },
    bmc: {
      partners: "Government agencies, international donors (USAID, EU), system integrators, open-source communities",
      activities: "Compliance development, tender participation, stakeholder management, deployment & training",
      proposition: "Transparent, efficient [public service] — open-source, compliant, proven in pilot",
      relationships: "Long-term government contracts, advisory boards, public-private partnerships, community engagement",
      segments: "Central government agencies, municipalities, state-owned enterprises",
      resources: "Compliance certifications, government relationships, open-source codebase, domain expertise",
      channels: "ProZorro tenders, direct lobbying, pilot projects, conferences, donor programs",
      costs: "Compliance (20%), development (35%), sales/tender prep (20%), deployment (15%), G&A (10%)",
      "revenue-streams": "Government contracts, maintenance/SLA, donor grants, consulting"
    },
    lean: {
      problem: "1. [Public service] is slow, opaque, corrupt. 2. Citizens can't access services online. 3. No data for decision-making.",
      solution: "1. Digital platform with open data. 2. Online service portal. 3. Real-time analytics dashboard.",
      uvp: "Open-source [public service] platform — transparent by design, 10x faster, 30% cheaper to operate.",
      advantage: "Open-source trust, compliance expertise, first-mover in [domain], political capital",
      segments: "Early adopters: reform-minded agencies with donor support and digital mandate",
      metrics: "Tender win rate, citizen adoption, service delivery time, cost savings, transparency score",
      channels: "ProZorro, pilot projects, donor programs, lobbying",
      costs: "Compliance, development, tender prep, deployment",
      revenue: "Government contracts, SLA fees, donor grants"
    }
  },

  // ===== SOCIAL ENTERPRISE =====
  social: {
    label: "🌱 Social Enterprise",
    desc: "Mission-driven venture balancing impact and financial sustainability. Hybrid models common.",
    examples: ["Teach For Ukraine","Husk","United24","Social Venture Fund"],
    de: {
      raison: "Solve [social problem] through a sustainable enterprise model — impact first, revenue to sustain.",
      market: "Beachhead: [affected population] in [region]. TAM: depends on donor/market size. Beneficiary ≠ customer often.",
      value: "Measurable impact on [problem]. For beneficiaries: improved [outcome]. For payers: ROI on social investment.",
      advantage: "Deep community trust. Mission alignment attracts talent. Impact data = moat. First-mover in [problem area].",
      acquisition: "For beneficiaries: community outreach, NGO partnerships. For funders: impact reports, grant applications. DMU: program director.",
      "unit-econ": "Impact unit cost: $[X] per beneficiary served. Revenue per beneficiary: $[Y]. Gap filled by grants/donations.",
      revenue: "Earned revenue (50-70%): service fees, product sales. Grants (20-30%): foundations, government. Impact investment (10-20%).",
      "overall-econ": "Gross margin 30-50%. Break-even when earned revenue covers 70%+ of costs. Burn offset by grants. Path to self-sustainability in 3-5 years.",
      build: "MVBP: serve 100 beneficiaries with measurable [outcome]. Key assumption: impact can be measured and funded. Track: beneficiary count, outcome metrics, cost per beneficiary.",
      scaling: "Replicate to new regions, franchise model, policy advocacy, train-the-trainer, SaaS for other NGOs."
    },
    bmc: {
      partners: "NGOs, government agencies, foundations, impact investors, community organizations, universities",
      activities: "Program delivery, impact measurement, fundraising, community engagement, advocacy",
      proposition: "Measurable [social outcome] per dollar invested — sustainable model that scales beyond grant dependency",
      relationships: "Community trust, donor stewardship, volunteer engagement, government collaboration",
      segments: "Beneficiaries: [affected population]. Customers/payers: government, foundations, CSR programs, impact investors",
      resources: "Community trust, impact data, methodology, team passion, volunteer network, brand/mission",
      channels: "Community outreach, grant applications, impact platforms, government partnerships, media",
      costs: "Program delivery (50%), fundraising (15%), admin (15%), impact measurement (10%), advocacy (10%)",
      "revenue-streams": "Service fees, product sales, government contracts, grants, impact investment, donations"
    },
    lean: {
      problem: "1. [Social problem] affects [X] people. 2. Current solutions are insufficient/unsustainable. 3. No market incentive to solve it.",
      solution: "1. Enterprise model that serves [population] sustainably. 2. Measurable impact per dollar. 3. Revenue model that reduces grant dependency.",
      uvp: "Solve [social problem] sustainably — every dollar creates measurable [outcome], and the model funds itself over time.",
      advantage: "Community trust, impact data, mission-driven talent, first-mover in [problem area]",
      segments: "Early adopters: [specific beneficiary group] + foundation/government program officers who fund [problem area]",
      metrics: "Beneficiaries served, outcome per dollar, earned revenue ratio, cost per beneficiary, repeat engagement",
      channels: "Community outreach, grants, government, impact investors, media",
      costs: "Program delivery, fundraising, measurement, operations",
      revenue: "Earned revenue + grants + impact investment"
    }
  },

  // ===== BLANK =====
  generic: {
    label: "📝 Blank Canvas",
    desc: "Start from scratch. Fill each block yourself. Use the hint text as guidance for what belongs in each section.",
    examples: [],
    de: {
      raison: "", market: "", value: "", advantage: "", acquisition: "", "unit-econ": "", revenue: "", "overall-econ": "", build: "", scaling: ""
    },
    bmc: {
      partners: "", activities: "", proposition: "", relationships: "", segments: "", resources: "", channels: "", costs: "", "revenue-streams": ""
    },
    lean: {
      problem: "", solution: "", uvp: "", advantage: "", segments: "", metrics: "", channels: "", costs: "", revenue: ""
    }
  }
};

// ===== SPHERE-SUBCATEGORY-MODEL HIERARCHY =====
// Each sphere has subcategories, each subcategory has relevant business models
var SPHERE_TREE = {
  science: {
    label: "🩺 Sphere I — Science",
    subcats: {
      "bio-med": {
        label: "🧬 Bio/Med",
        desc: "Biotech, medtech, health SaaS, pharma, diagnostics",
        models: ["subscription","saas-freemium","services","b2g"]
      },
      green: {
        label: "🌿 Green/Sustainability",
        desc: "Cleantech, carbon credits, ESG platforms, green SaaS",
        models: ["subscription","saas-freemium","marketplace","b2g","social"]
      },
      agtech: {
        label: "🌾 AgTech",
        desc: "Precision agriculture, farm management, supply chain",
        models: ["subscription","saas-freemium","manufacturing","marketplace"]
      },
      "human-systems": {
        label: "🧠 Human Systems",
        desc: "EdTech, HR tech, wellness, behavioral science",
        models: ["subscription","saas-freemium","services","social"]
      }
    }
  },
  entrepreneurship: {
    label: "💼 Sphere II — Entrepreneurship",
    subcats: {
      mvps: {
        label: "🚀 MVPs",
        desc: "Product validation, lean startup, build-measure-learn",
        models: ["subscription","saas-freemium","marketplace","services"]
      },
      "founder-logic": {
        label: "🧭 Founder Logic",
        desc: "Decision-making, team building, fundraising, vision",
        models: ["subscription","saas-freemium","services"]
      },
      "market-validation": {
        label: "📊 Market Validation",
        desc: "Customer discovery, unit economics, beachhead market",
        models: ["subscription","marketplace","saas-freemium","manufacturing","services"]
      },
      "ecosystem-ops": {
        label: "🔗 Ecosystem & Ops",
        desc: "Partnerships, operations, scaling, legal/compliance",
        models: ["marketplace","services","b2g","manufacturing"]
      }
    }
  },
  technology: {
    label: "⚙️ Sphere III — Technology",
    subcats: {
      analytics: {
        label: "📈 Analytics",
        desc: "Data platforms, BI, ML/AI tools, observability",
        models: ["subscription","saas-freemium","services"]
      },
      engineering: {
        label: "🔧 Engineering",
        desc: "Dev tools, CI/CD, infrastructure, security",
        models: ["subscription","saas-freemium","services"]
      },
      dashboards: {
        label: "📊 Dashboards",
        desc: "Visualization, reporting, KPI tracking, decision support",
        models: ["subscription","saas-freemium","b2g"]
      },
      infrastructure: {
        label: "🏗️ Infrastructure",
        desc: "Cloud, APIs, platforms, open-source foundations",
        models: ["subscription","saas-freemium","services","b2g"]
      }
    }
  }
};
