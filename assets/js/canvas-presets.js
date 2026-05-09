// Pre-filled canvas data per business model
// Source: KSE Zubchenok "Business Model: Startup's Focus" + Disciplined Entrepreneurship
const CANVAS_PRESETS = {
  subscription: {
    label: "🔄 Subscription / SaaS",
    desc: "Recurring revenue via MRR/ARR. Key metrics: LTV, churn, CAC. Pipeline model: you create → customer consumes.",
    examples: ["Netflix","Spotify","Adobe CC","Coursera Plus","Microsoft 365","Megogo","AllRight","Prom.ua Pro","BetterMe","LIGA360"],
    de: {
      raison: "Recurring pain demanding continuous access. Founder passion for solving a workflow/content gap that compounds. Assets: domain expertise, content library, proprietary algorithm.",
      market: "Beachhead: demographic with recurring need (language learners, fitness users, data professionals). TAM = users × monthly price × 12. Persona: 25-40yo, values convenience, hates manual processes.",
      value: "Ongoing access to content/software saving time or delivering results monthly. Quantified: saves X hours/week, delivers Y results/month. Spec: web/app with subscription paywall, onboarding, retention loops.",
      advantage: "Network effects from user data (recommendations improve). Switching costs: history, preferences, integrations. Brand trust from consistent delivery. Content/software moat grows monthly.",
      acquisition: "Champion = end user. Buyer = same (B2C) or team lead (B2B). Trigger: free trial/freemium. Process: ad/content → free trial → onboarding emails → conversion → retention (streaks, badges, recommendations).",
      "unit-econ": "LTV = ARPU × (1/churn). E.g. $15/mo × 24mo = $360. CAC = ad spend + sales / new subs. Target LTV/CAC ≥ 3:1. Payback < 12mo. Churn: <5% monthly B2C, <2% B2B.",
      revenue: "Model: recurring subscription (monthly/annual). Tiers: Free trial → Basic ($X/mo) → Pro ($Y/mo) → Enterprise ($Z/mo). Upsell: annual discount, add-ons, family plans. Channel: self-service signup.",
      "overall-econ": "P&L: Revenue = subs × ARPU. COGS: hosting, support, content. OpEx: marketing 40-60% early, R&D, G&A. Burn rate: track monthly. Runway = cash/burn. Rule of 40: growth% + margin% ≥ 40.",
      build: "Assumption 1: people pay monthly → test: trial conversion rate. Assumption 2: churn < X% → test: cohort retention 30/60/90 days. MVBP: core feature + paywall + email onboarding. Metrics: MRR, churn, trial conversion.",
      scaling: "Follow-on 1: adjacent vertical (fitness → nutrition). 2: B2B version of B2C. 3: international. Growth: referrals, integrations, content flywheel."
    },
    bmc: {
      partners: "Payment processors (Stripe, LiqPay), content/providers, integration partners (SSO, CRMs), CDN/hosting",
      activities: "Content/software development, subscription management, retention optimization, A/B testing, customer support",
      proposition: "Continuous access to evolving content/software. Always-on, always-updated. Predictable cost. Compounding value over time.",
      relationships: "Self-service onboarding, automated email nurturing, in-app support, community (Discord/Telegram), account management for B2B",
      segments: "B2C: individual subscribers with recurring needs. B2B: teams needing shared access. Early adopters: power users of free tier.",
      resources: "Software platform, content library, user behavior data, brand, engineering team, payment infrastructure",
      channels: "Free trial → product-led growth, SEO/content marketing, app stores, social ads, email campaigns, referral programs",
      costs: "Fixed: engineering salaries, hosting/CDN, content production. Variable: CAC (ads), payment fees, support. Top 3: 1) R&D 2) Marketing 3) Hosting.",
      "revenue-streams": "Monthly/annual subscriptions (MRR/ARR). Upsell: premium tiers, family/team plans, add-ons. B2B enterprise contracts. Target: >$50 ARPU B2B, >$10 B2C."
    },
    lean: {
      problem: "1. Manual/fragmented workflow wastes time weekly\n2. Existing solutions too expensive or complex\n3. No single tool covers full need end-to-end",
      solution: "1. Automated workflow replacing 3+ manual steps\n2. Simple pricing with free entry\n3. All-in-one platform covering full journey",
      uvp: "Stop wasting X hours/week on [task]. Done in one place, predictable monthly price. Cancel anytime.",
      advantage: "Proprietary algorithm/content, network effects from user data, high switching costs, first-mover in niche",
      segments: "Primary: [demographic] with recurring [task]. Early adopters: power users complaining on forums about existing tools.",
      metrics: "AARRR: Acquisition (signups), Activation (first value <5min), Retention (D7/D30), Revenue (trial→paid%), Referral (invites)",
      channels: "Free trial (product-led), SEO blog, YouTube tutorials, social ads, influencer partnerships, app store optimization",
      costs: "Fixed: R&D team, hosting. Variable: ad spend (CAC), payment fees. Top 3: 1) Engineering 2) Marketing/CAC 3) Infrastructure",
      revenue: "Subscription: $X/mo Basic, $Y/mo Pro. Annual = 10mo price. LTV = ARPU × (1/churn). Target LTV/CAC ≥ 3:1."
    }
  },
  marketplace: {
    label: "🏪 Marketplace / E-commerce",
    desc: "Connect supply with demand. Two-sided: you own the platform, not inventory. Key: liquidity. Revenue from transaction fees.",
    examples: ["Airbnb","Etsy","Amazon Marketplace","Fiverr","eBay","Rozetka","OLX.ua","Liki24","Kabanchik.ua","Shafa.ua"],
    de: {
      raison: "Fragmented market where buyers can't find sellers. Passion for connecting people and creating trust. Assets: industry connections, first supply-side relationships.",
      market: "Beachhead: one vertical with most pain (freelance services, second-hand fashion, local services). TAM = total transaction volume × take rate. Two-sided: supply + demand.",
      value: "Trust, liquidity, ease of transaction. Buyers find fast, sellers get demand without marketing. Quantified: saves X hours searching, increases seller revenue Y%.",
      advantage: "Network effects: more sellers → more buyers → more sellers. Liquidity moat: depth of inventory. Trust: reviews, verification, disputes. Switching cost: reputation on platform.",
      acquisition: "Supply-first: recruit sellers manually. Demand: SEO for listings, referral loops. DMU: buyer decides, seller is champion. Trigger: specific need search.",
      "unit-econ": "Take rate: 10-30% per transaction. LTV = avg transaction × frequency × take rate × retention months. CAC: supply (manual) vs demand (ads). Track both sides separately.",
      revenue: "Model: transaction fee (commission). Additional: listing fees, premium placement, seller subscriptions, ads on platform. Pricing: 10-20% of transaction typically.",
      "overall-econ": "Revenue = GMV × take rate. COGS: payment processing, disputes. OpEx: engineering, supply acquisition, marketing. Need 18-24mo to reach liquidity.",
      build: "Assumption 1: sellers will list → test: manually recruit 20. Assumption 2: buyers will transact → test: drive traffic, measure conversion. MVBP: listing + search + messaging + payment.",
      scaling: "New verticals on same platform. Geographic expansion. Adjacent: logistics, financing, insurance. Growth: viral loops, SEO flywheel (more listings = more traffic)."
    },
    bmc: {
      partners: "Payment processors, logistics/shipping, verification, insurance, local business associations",
      activities: "Platform development, seller onboarding & vetting, buyer acquisition, dispute resolution, trust & safety",
      proposition: "Find what you need fast (buyer). Access demand without marketing (seller). Trust & liquidity in one place.",
      relationships: "Reputation systems, reviews, dispute resolution, seller support, buyer protection guarantees",
      segments: "Two-sided: buyers (demand) + sellers/providers (supply). Seed supply first, then attract demand.",
      resources: "Platform code, seller/buyer databases, trust/review system, payment infrastructure, brand",
      channels: "Supply: manual outreach, industry events, cold email. Demand: SEO, social, referral loops, paid ads",
      costs: "Fixed: platform development, support team. Variable: payment processing, seller acquisition, marketing. Top 3: 1) R&D 2) Supply acquisition 3) Marketing",
      "revenue-streams": "Transaction commission (10-20%), listing fees, premium placement, seller subscriptions, advertising"
    },
    lean: {
      problem: "1. Buyers can't find reliable providers easily\n2. Sellers spend too much on marketing/acquisition\n3. No trust mechanism in fragmented market",
      solution: "1. Curated marketplace with verified providers\n2. Demand comes to sellers automatically\n3. Reviews + escrow + dispute resolution",
      uvp: "Find trusted [service/product] in minutes, or get discovered by ready-to-buy customers. Zero marketing needed.",
      advantage: "Network effects (liquidity), trust system with reviews, first-mover in niche, seller lock-in (reputation)",
      segments: "Supply: providers/sellers in [niche]. Demand: buyers seeking [service/product]. Early: sellers frustrated by existing platforms.",
      metrics: "GMV, take rate, liquidity (listings per category), buyer conversion, seller retention, NPS both sides",
      channels: "Supply: cold outreach, industry groups. Demand: SEO for specific services, social proof, referral programs",
      costs: "Fixed: platform, support. Variable: payment processing, seller incentives. Top 3: 1) Engineering 2) Supply acquisition 3) Marketing",
      revenue: "Commission per transaction (10-20%). Listing upgrades, featured placement. Target: positive unit economics per transaction."
    }
  },
  "saas-freemium": {
    label: "🆓 SaaS Freemium (B2B/B2C)",
    desc: "Free tier hooks users, paid tier monetizes power users. Key: conversion rate from free→paid. MRR/ARR, CAC, retention.",
    examples: ["GitLab","Zoom","Notion","Canva","Salesforce","Grammarly","Preply","Fitmap.online","PeopleForce","YouControl"],
    de: {
      raison: "Workflow pain that affects many but only some will pay to solve fully. Founder passion for democratizing access. Assets: technical expertise, open-source community, or unique dataset.",
      market: "Beachhead: users of specific tools/processes (HR-tech, EdTech, B2B data). TAM = total potential users × conversion rate × ARPU. Persona: individual user first, team lead for B2B upgrade.",
      value: "Automate/simplify/accelerate a workflow. Free tier delivers immediate value. Paid tier unlocks scale, collaboration, advanced features. Quantified: saves X hours, increases productivity Y%.",
      advantage: "Data moat from free users. Switching costs: workflows built on platform. Network effects: team adoption drives org-wide rollout. Open-source community (if applicable) = distribution.",
      acquisition: "Product-led growth: free signup → in-app prompts → usage limits → upgrade CTA. DMU: user is champion, manager is buyer. Trigger: hitting free tier limit. Process: signup → aha moment → habit → paywall → upgrade.",
      "unit-econ": "Free→paid conversion: 2-5% typical, 5-10% excellent. LTV = paid ARPU × retention months. CAC near zero for free users, higher for converting them. Payback: immediate for annual plans.",
      revenue: "Model: freemium subscription. Free: limited features/users. Pro: $X/user/mo. Enterprise: custom pricing. Upsell: team → org, monthly → annual. API/white-label for B2B.",
      "overall-econ": "Revenue = paid users × ARPU. Free users = marketing cost (hosting + support). OpEx: R&D 40%, marketing 30%, support 15%, G&A 15%. Burn: scale with paid conversion rate.",
      build: "Assumption 1: free users convert at >3%. Test: measure conversion at different limits. Assumption 2: retention >90% monthly for paid. Test: cohort analysis. MVBP: free tier + upgrade prompt + payment.",
      scaling: "Upgrading models: Grammarly (Freemium→B2B), Preply (SaaS B2B), Ajax (white-label). Platform play: API + marketplace. International: localize free tier, monetize globally."
    },
    bmc: {
      partners: "Cloud providers, integration partners (Slack, Jira, CRMs), developer community, reseller/affiliates",
      activities: "Product development, free user acquisition at scale, conversion optimization, customer success, API/platform development",
      proposition: "Start free, upgrade when ready. Powerful workflow tool with zero upfront commitment. Team features for collaboration.",
      relationships: "Self-service onboarding, in-app guidance, community forum, customer success for enterprise, developer docs for API",
      segments: "Free users (mass adoption), Pro users (power individuals), Teams (B2B), Enterprise (custom). Seed: individual contributors.",
      resources: "Codebase, user data, integration ecosystem, brand, engineering team, free user base as distribution",
      channels: "Product-led growth (free signup), SEO, developer communities, App Store/Marketplace listings, viral invites, content marketing",
      costs: "Fixed: R&D, infrastructure for free users. Variable: cloud costs scale with users, support. Top 3: 1) R&D 2) Infrastructure 3) Marketing",
      "revenue-streams": "Freemium: free → Pro ($X/mo) → Team ($Y/user/mo) → Enterprise (custom). API access, white-label, annual plans with discount."
    },
    lean: {
      problem: "1. Existing tools too expensive to try\n2. Switching cost prevents adoption\n3. Team collaboration features locked behind high paywalls",
      solution: "1. Free tier with real value (not just trial)\n2. Import from existing tools, easy onboarding\n3. Team features at per-user pricing",
      uvp: "Start free today. Upgrade only when you're hooked. No credit card needed.",
      advantage: "Free user base = distribution channel, data moat from usage patterns, integration ecosystem, community-driven growth",
      segments: "Individual users (free → Pro), Team leads (Pro → Team), CTOs/HR (Team → Enterprise). Early: frustrated users of expensive tools.",
      metrics: "Free signups, activation rate, free→paid conversion %, paid retention, ARPU, NPS, feature adoption rates",
      channels: "Product-led (free signup), SEO, developer communities, viral (invite teammates), integration marketplaces",
      costs: "Fixed: R&D, infrastructure. Variable: cloud per user, support. Top 3: 1) Engineering 2) Cloud/infra 3) Support",
      revenue: "Freemium: free → $X/mo Pro → $Y/user/mo Team. Conversion target: 3-5%. LTV focus on paid cohorts."
    }
  },
  manufacturing: {
    label: "🏭 Manufacturing / Product Sales",
    desc: "Physical product + sales. FMCG, fashion, green tech, hardware. Revenue from unit sales. Key: unit economics, COGS, distribution.",
    examples: ["Apple","Tesla","Samsung","LEGO","Xiaomi","Biosphere Corporation","Kormotech","Technocom","Enzym Group","Roshen"],
    de: {
      raison: "Solve a physical-world problem with tangible product. Passion for design/engineering/quality. Assets: manufacturing know-how, supply chain, patents, or unique materials access.",
      market: "Beachhead: users constrained by existing physical solutions. TAM = addressable units × price per unit. Persona: values performance, reliability, design, or cost advantage over alternatives.",
      value: "Performance, reliability, design, or cost advantage over existing physical solutions. Quantified: lasts X longer, costs Y less, performs Z better. Tangible, demonstrable product.",
      advantage: "Patents, proprietary manufacturing process, supply chain optimization, brand/design reputation, economies of scale. Distribution partnerships as moat.",
      acquisition: "Retail/distributor relationships. DMU: end user chooses, retailer approves, distributor delivers. Trigger: physical need, recommendation, in-store experience. Process: awareness → evaluation → purchase → repeat.",
      "unit-econ": "Unit economics: selling price - COGS = gross margin. Target: >50% gross margin. LTV = repeat purchases × margin. CAC = marketing + distribution costs / units sold. Payback: first purchase if margin positive.",
      revenue: "Model: unit sales (one-time) + accessories + service contracts. Pricing: cost-plus or value-based. Channel: retail, distributors, direct online. Recurring: replacement parts, warranty extensions.",
      "overall-econ": "P&L: Revenue = units × price. COGS: materials, manufacturing, logistics. OpEx: R&D, marketing, sales team. Inventory management critical. Cash flow: seasonality, production cycles.",
      build: "Assumption 1: target users want this product. Test: pre-orders, crowdfunding. Assumption 2: can manufacture at target COGS. Test: prototype + supplier quotes. MVBP: minimum viable product + sales channel + payment.",
      scaling: "New product lines, geographic markets, B2B/OEM channels. Platform model: accessories ecosystem. Licensing IP. International distribution partnerships."
    },
    bmc: {
      partners: "Raw material suppliers, contract manufacturers, distributors/retailers, logistics companies, certification bodies",
      activities: "Product design & engineering, manufacturing/quality control, supply chain management, distribution, brand marketing",
      proposition: "Superior physical product: better performance, design, durability, or price. Tangible, demonstrable advantage.",
      relationships: "Retail partnerships, warranty & support, brand community, influencer endorsements, customer service",
      segments: "End consumers (B2C), OEMs (B2B), retailers/distributors. Early adopters: enthusiasts in product category.",
      resources: "Manufacturing facility or partner, supply chain, patents/IP, brand, design team, quality assurance",
      channels: "Retail stores, distributors, direct online (DTC), Amazon/marketplaces, trade shows, B2B sales team",
      costs: "Fixed: manufacturing, R&D, team. Variable: materials, logistics, marketing per unit. Top 3: 1) COGS/materials 2) Distribution 3) Marketing",
      "revenue-streams": "Unit sales, accessories, service contracts, warranty extensions, licensing. Target: >50% gross margin per unit."
    },
    lean: {
      problem: "1. Existing products don't meet performance/quality expectations\n2. Price too high for what you get\n3. No product combines [feature A] + [feature B] in one",
      solution: "1. Engineered product with superior specs\n2. Optimized supply chain for better price/performance\n3. Integrated design combining key features",
      uvp: "Finally, a [product] that delivers [key benefit] at [compelling price]. Built to last.",
      advantage: "Proprietary manufacturing process, patents, exclusive supplier relationships, brand reputation, economies of scale",
      segments: "Consumers needing [product category], B2B OEMs, retailers. Early: enthusiasts who research before buying.",
      metrics: "Units sold, gross margin %, repeat purchase rate, return rate, customer satisfaction (NPS), inventory turnover",
      channels: "Retail partnerships, DTC website, Amazon, trade shows, influencer reviews, B2B direct sales",
      costs: "Fixed: manufacturing, R&D. Variable: materials, logistics per unit. Top 3: 1) COGS 2) Distribution 3) Marketing",
      revenue: "Unit sales at target gross margin. Accessories as add-on. Service contracts for recurring revenue."
    }
  },
  services: {
    label: "💼 Services / IT Outsourcing",
    desc: "Sell expertise and time. Revenue = hours × rate. Key: utilization rate, billable hours, client retention. Pipeline model.",
    examples: ["McKinsey","Deloitte","IDEO","Accenture","Bain","Fedoriv Agency","KSE Executive Education","N-iX","Sigma Software","Arzinger"],
    de: {
      raison: "Deep expertise that clients lack in-house. Passion for solving complex problems for organizations. Assets: team expertise, methodology, client relationships, industry reputation.",
      market: "Beachhead: specific industry vertical or service type (IT outsourcing, consulting, design, legal). TAM = addressable client spend in niche. Persona: C-level or department head with budget authority.",
      value: "Expert execution that would take client 3-5x longer in-house. Quantified: deliver project in X weeks vs Y months internally, at Z% of hiring cost. Methodology-driven, predictable outcomes.",
      advantage: "Team expertise depth, proprietary methodology/frameworks, client relationships & trust, industry specialization. Switching costs: knowledge transfer, relationship depth.",
      acquisition: "DMU: champion = internal sponsor, buyer = C-level/VP, veto = procurement/legal. Process: thought leadership → inbound inquiry → proposal → negotiation → contract. Trigger: project need, strategic gap.",
      "unit-econ": "Revenue = billable hours × hourly rate. Utilization target: >75%. Gross margin: rate - cost per consultant. LTV = avg project value × repeat projects. CAC: business development costs / new clients.",
      revenue: "Model: time & materials (T&M) or fixed-price projects. Pricing: $X/hour by seniority. Retainer: monthly commitment. Value-based: % of impact delivered. Channel: direct sales, referrals, RFPs.",
      "overall-econ": "P&L: Revenue = hours × rate. COGS: consultant salaries (50-60% of revenue). OpEx: BD, office, G&A. Margin target: >20% net. Cash flow: project-based, lumpy. Runway: maintain bench utilization.",
      build: "Assumption 1: clients will pay premium for expertise. Test: win 3 paid pilot projects. Assumption 2: repeat business >30%. Test: measure client retention. MVBP: core service offering + 1 reference client + proposal template.",
      scaling: "Hire more consultants, open new verticals, create productized services (fixed-scope packages), build IP/tools, geographic expansion, acquire niche firms."
    },
    bmc: {
      partners: "Technology vendors, subcontractors (overflow), academic institutions, industry associations, complementary service firms",
      activities: "Client delivery (projects), business development, talent recruitment & training, methodology development, thought leadership",
      proposition: "Expert execution faster than in-house. Proven methodology. Access to talent client can't hire. Predictable outcomes.",
      relationships: "Long-term partnerships, account management, advisory boards, trusted advisor status, project-based with repeat engagement",
      segments: "Enterprise clients (IT, strategy, design), mid-market companies, startups needing specific expertise. Government/NGOs.",
      resources: "Expert team, proprietary methodology, client relationships, brand/reputation, knowledge base, training programs",
      channels: "Direct sales, thought leadership (publications, conferences), referrals, RFP responses, partnerships, LinkedIn",
      costs: "Fixed: team salaries, office, training. Variable: subcontractors, travel, BD. Top 3: 1) People/salaries 2) BD 3) Overhead",
      "revenue-streams": "T&M projects, fixed-price engagements, monthly retainers, advisory fees, training workshops. Target: >75% utilization, >20% net margin."
    },
    lean: {
      problem: "1. Client lacks in-house expertise for critical project\n2. Hiring full-time is too slow/expensive\n3. Existing vendors don't understand [industry] specifics",
      solution: "1. Expert team deployed in days, not months\n2. Flexible engagement: project, retainer, or advisory\n3. Industry-specialized consultants with domain depth",
      uvp: "Get [expertise] delivered by specialists who understand [your industry]. No hiring, no ramp-up, results from week 1.",
      advantage: "Deep domain expertise, proprietary methodology, team chemistry, client trust built over years, talent brand attracts top consultants",
      segments: "C-level/VPs at [industry] companies. Early: companies with urgent project need and budget approved.",
      metrics: "Utilization rate, gross margin per project, client retention %, NPS, proposal win rate, revenue per consultant",
      channels: "Thought leadership, referrals from past clients, conference speaking, LinkedIn, strategic partnerships",
      costs: "Fixed: team salaries. Variable: subcontractors, travel. Top 3: 1) People 2) BD 3) Overhead",
      revenue: "Hourly/daily rate by seniority. Project-based or retainer. Target: >75% utilization, >20% net margin."
    }
  },
  b2g: {
    label: "🏛️ B2G / Public Sector",
    desc: "Sell to government: agencies, municipalities, public institutions. Revenue via procurement, RFPs, grants. Long sales cycles, large contracts.",
    examples: ["Palantir","SAP Public","Deloitte Gov","IBM Gov","Fedoriv (public cases)","KSE programs","e-Vidomosti","ProZorro","Diia ecosystem partners"],
    de: {
      raison: "Improve public services, compliance, transparency, or citizen outcomes. Passion for public impact. Assets: government relationships, compliance expertise, security clearances, policy knowledge.",
      market: "Beachhead: one government agency or municipality with specific pain. TAM = public sector IT/consulting spend in region. Persona: department head with procurement authority, influenced by policy mandates.",
      value: "Efficiency, transparency, compliance, citizen impact. Quantified: saves X hours of manual processing, reduces fraud by Y%, serves Z more citizens. Must demonstrate ROI to taxpayer.",
      advantage: "Security clearances, compliance certifications, existing government relationships, understanding of procurement process, policy expertise. Incumbent advantage: hard to displace once in.",
      acquisition: "DMU: champion = program manager, buyer = procurement office, veto = legal/compliance. Process: relationship → RFP → proposal → evaluation → contract. Trigger: policy mandate, budget allocation, audit finding.",
      "unit-econ": "Large contract values ($50K-$5M+). Long sales cycles (6-18mo). LTV = multi-year contracts with renewals. CAC = BD + proposal costs / wins. Margin: 15-25% typical. Cash flow: milestone-based payments.",
      revenue: "Model: government contracts (fixed-price or T&M). Grants for R&D. Public tenders (ProZorro). Pricing: must comply with procurement rules. Channel: direct sales + procurement portals.",
      "overall-econ": "Revenue = contract values. COGS: delivery team. OpEx: BD/proposal team, compliance, security. Cash: milestone payments, 30-60 day payment terms. Risk: contract concentration (1-2 big clients).",
      build: "Assumption 1: agency will adopt new solution. Test: pilot project or sandbox. Assumption 2: can win procurement. Test: respond to 3 RFPs. MVBP: compliance-ready MVP + security audit + reference from 1 agency.",
      scaling: "Expand to more agencies. Build platform (reusable across departments). Adjacent: regional governments, international development. Partnership with larger integrators as subcontractor → prime."
    },
    bmc: {
      partners: "System integrators, compliance/security auditors, policy advisors, technology vendors, other contractors (consortium)",
      activities: "Proposal writing, compliance management, security operations, stakeholder management, solution delivery, reporting/auditing",
      proposition: "Compliant, secure solution that improves [public outcome]. Proven in government context. Meets all regulatory requirements.",
      relationships: "Long-term contracts, formal reporting, stakeholder committees, advisory boards, public accountability",
      segments: "Government agencies, municipalities, public institutions, state-owned enterprises, international development organizations",
      resources: "Security clearances, compliance certifications, government relationships, policy expertise, secure infrastructure, reference projects",
      channels: "Procurement portals (ProZorro), direct relationships, conferences, policy networks, consortium partnerships",
      costs: "Fixed: compliance, security, team. Variable: proposal writing, legal. Top 3: 1) Delivery team 2) Compliance/security 3) BD/proposals",
      "revenue-streams": "Government contracts, grants, public tenders, multi-year framework agreements. Typical: $50K-$5M per contract, 1-3 year terms."
    },
    lean: {
      problem: "1. Government process is slow, manual, and opaque\n2. Legacy systems don't meet modern citizen expectations\n3. Compliance requirements prevent adoption of commercial tools",
      solution: "1. Digital workflow purpose-built for government\n2. Citizen-facing interface with government backend\n3. Compliance-first architecture with security built in",
      uvp: "Modern [solution] that meets every government requirement out of the box. Deploy in weeks, not years.",
      advantage: "Compliance certifications, security clearances, government relationships, policy expertise, incumbent lock-in after deployment",
      segments: "Agency program managers, CIOs in government, procurement officers. Early: agencies under mandate to modernize.",
      metrics: "Proposal win rate, contract value, delivery milestones on time, citizen adoption rate, compliance audit results",
      channels: "Procurement portals, direct BD, policy networks, conferences, consortium with integrators",
      costs: "Fixed: compliance, security, team. Variable: proposals, legal. Top 3: 1) People 2) Compliance 3) BD",
      revenue: "Government contracts via procurement. Multi-year framework agreements. Grants for innovation."
    }
  },
  social: {
    label: "🌱 Social Enterprise",
    desc: "Mission-driven venture. Impact + financial sustainability. Hybrid models: earned revenue + grants. Theory of Change required.",
    examples: ["Grameen Bank","Kiva","TOMS","Warby Parker","Ashoka fellows","Enactus","Teach For All","United Way","Plast","NGO hybrids"],
    de: {
      raison: "Social/environmental problem that demands market-based solution. Passion for impact + sustainability. Assets: community trust, volunteer network, policy knowledge, donor relationships.",
      market: "Beachhead: specific beneficiary group + specific problem (e.g. youth employment, clean water, education access). TAM = total affected population × intervention cost. Stakeholders: beneficiaries, donors, government, community.",
      value: "Measurable social/environmental impact delivered through sustainable business model. Quantified: improves X lives, reduces Y emissions, increases Z access. Theory of Change: activity → output → outcome → impact.",
      advantage: "Community trust, first-mover in social niche, donor network, policy influence, volunteer engagement. Brand authenticity. Hybrid model flexibility (nonprofit + earned revenue).",
      acquisition: "Beneficiaries: community outreach, partner referrals. Donors: impact reports, events. Government: policy alignment. DMU: multiple stakeholders with different motivations. Trigger: visible social need + proven intervention.",
      "unit-econ": "Earned revenue: fee-for-service or product sales. Grants: restricted/unrestricted. LTV = lifetime beneficiary impact + donor retention. CAC = outreach cost per beneficiary. Subsidy model: cross-subsidize with premium tier.",
      revenue: "Model: hybrid (earned + grants). Earned: sliding-scale fees, B2B services, premium products subsidizing free tier. Grants: foundations, government, CSR. Channel: partnerships + direct service + online.",
      "overall-econ": "Revenue = earned + grants. COGS: program delivery. OpEx: outreach, monitoring/evaluation, fundraising. Margin: target surplus >5% for reserves. Cash: grant cycles + earned revenue. Track: cost per beneficiary served.",
      build: "Assumption 1: intervention creates measurable impact. Test: pilot with 50 beneficiaries, measure outcomes. Assumption 2: model is financially sustainable. Test: 6-month revenue mix. MVBP: core program + measurement + 1 funding source.",
      scaling: "Replicate to new geographies. License methodology to partners. Build movement (volunteer network). Policy advocacy. Franchise model for local chapters."
    },
    bmc: {
      partners: "NGOs, government agencies, foundations/donors, community organizations, academic institutions, corporate CSR partners",
      activities: "Program delivery, impact measurement (M&E), fundraising, community organizing, advocacy, volunteer management",
      proposition: "Measurable [social/environmental] impact through sustainable intervention. Beneficiary empowerment, not charity.",
      relationships: "Community engagement, beneficiary feedback loops, donor stewardship, volunteer community, government partnership",
      segments: "Beneficiaries (direct recipients), donors/funders (individuals, foundations, CSR), government partners, volunteers",
      resources: "Community trust, methodology/program design, donor network, volunteer base, impact data, brand/mission authenticity",
      channels: "Community outreach, partner referrals, online campaigns, events, government programs, media/advocacy",
      costs: "Fixed: program team, M&E. Variable: outreach, fundraising events. Top 3: 1) Program delivery 2) Fundraising 3) M&E/impact measurement",
      "revenue-streams": "Earned: fees, products, B2B services. Grants: foundations, government, CSR. Donations: individual, corporate. Target: >40% earned revenue for sustainability."
    },
    lean: {
      problem: "1. [Social group] lacks access to [resource/opportunity]\n2. Existing solutions are charity-dependent and unsustainable\n3. Systemic barriers prevent [group] from improving their situation",
      solution: "1. Market-based intervention creating access\n2. Earned revenue model reducing dependency on donations\n3. Empowerment approach: skills + tools, not handouts",
      uvp: "Sustainable impact for [beneficiary group]. Every dollar earned reinforces the mission. Measurable outcomes, not just outputs.",
      advantage: "Community trust, proven methodology, donor network, policy influence, authentic mission-driven brand, volunteer army",
      segments: "Beneficiaries: [specific group]. Funders: foundations, CSR, individual donors. Partners: NGOs, government. Early: pilot community.",
      metrics: "Beneficiaries served, cost per beneficiary, outcome rate (% achieving target), earned revenue %, donor retention, volunteer hours",
      channels: "Community partnerships, online campaigns, donor events, government programs, media stories, referral from other NGOs",
      costs: "Fixed: program team, M&E. Variable: outreach, fundraising. Top 3: 1) Program 2) Fundraising 3) Impact measurement",
      revenue: "Hybrid: earned revenue (fees/products) + grants + donations. Target: >40% earned for long-term sustainability."
    }
  },
  generic: {
    label: "📝 Blank Canvas",
    desc: "Start from scratch. Fill each block yourself. Use the hint text as guidance for what belongs in each section.",
    examples: [],
    de: {raison:"",market:"",value:"",advantage:"",acquisition:"","unit-econ":"",revenue:"","overall-econ":"",build:"",scaling:""},
    bmc: {partners:"",activities:"",proposition:"",relationships:"",segments:"",resources:"",channels:"",costs:"","revenue-streams":""},
    lean: {problem:"",solution:"",uvp:"",advantage:"",segments:"",metrics:"",channels:"",costs:"",revenue:""}
  }
};
