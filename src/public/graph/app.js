const DATA = {"meta": {"title": "Santhosh Belgavi \u2014 knowledge graph", "built": "2026-08-27", "sources": {"S": "santhoshbelgavi.com", "P": "pragmaticagents.dev", "R": "resume", "X": "session context"}, "types": {"person": "Person", "website": "Web presence", "org": "Employer / client", "award": "Award", "program": "Program of work", "casestudy": "Case study", "system": "Personal system", "provider": "Data provider", "skill": "Skill", "tech": "Technology", "vendor": "Third-party platform", "domain": "Business domain", "cert": "Certification", "education": "Education", "article": "Writing"}, "nodeCount": 82, "edgeCount": 136}, "nodes": [{"id": "santhosh", "type": "person", "label": "Santhosh Belgavi", "aka": "Santhosh Kumar Belgavi", "title": "Business Solution Architect", "location": "Pittsburgh, PA (remote)", "email": "hello@santhoshbelgavi.com", "note": "Engineer (2005) turned solution architect. Designs solutions to operational problems in financial services; judgment on where/how/how-much agentic automation.", "sources": ["S", "P", "R", "X"]}, {"id": "sb_com", "type": "website", "label": "santhoshbelgavi.com", "url": "https://santhoshbelgavi.com", "note": "Personal site \u2014 'how I think'. Audience: PE COOs, EY FSO partners, fintech CTOs.", "sources": ["S"]}, {"id": "pa_dev", "type": "website", "label": "pragmaticagents.dev", "url": "https://pragmaticagents.dev", "note": "Case studies, projects & writing on agentic AI in private markets.", "sources": ["P"]}, {"id": "linkedin", "type": "website", "label": "LinkedIn \u2014 santhoshba", "url": "https://www.linkedin.com/in/santhoshba/", "note": "Full 21-year career history.", "sources": ["S", "P", "R"]}, {"id": "goldman", "type": "org", "label": "Goldman Sachs", "role": "Software Engineer", "years": "2005\u20132006", "note": "C++ settlement & clearance \u2014 Global Factory, replacing the Southeast Asia clearance system.", "sources": ["R"]}, {"id": "northern", "type": "org", "label": "The Northern Trust", "role": "Software Engineer", "years": "2006\u20132007", "note": "Stream Reconciliation \u2014 Actuate\u2192Crystal report conversion, PL/SQL, Crystal Enterprise scheduling.", "sources": ["R"]}, {"id": "bny", "type": "org", "label": "BNY Mellon", "role": "Senior Software Engineer", "years": "2007\u20132008", "note": "SWIFT straight-through processing for Corporate Actions (MT564\u2013567) via modular PL/SQL; PACE data integration for Private Wealth.", "sources": ["S", "R", "X"]}, {"id": "citi", "type": "org", "label": "Citigroup", "role": "Technology Lead / Data Analyst", "years": "2010\u20132016", "note": "Private Bank client onboarding (One Source) integrated with Pershing NetX360; KYC/AML/FATCA compliance; AML Compliance Metrics reporting.", "sources": ["R", "X"]}, {"id": "suntrust", "type": "org", "label": "SunTrust Mortgage", "role": "Business Analyst", "years": "2016", "note": "Empower LOS enhancements + mobile app; MSP servicing \u2014 Director's Scripts, workflow redesign, automations.", "sources": ["R"]}, {"id": "pnc", "type": "org", "label": "PNC", "role": "Senior Consultant / Senior BA", "years": "2017\u20132022", "note": "Modernizing the banking platform; Customer Interaction & Offer Management (PEGA); Home-Equity \u2192 MSP migration; FIS/BIAN API contracts & Swaggers.", "sources": ["R", "X"]}, {"id": "pe_firm", "type": "org", "label": "PE firm ($50B market cap)", "role": "Senior BA / Product Owner", "years": "2022\u2013present", "note": "Middle-Office modernization \u2014 margin/loan/derivative settlements; Kyriba, VPM, LemonEdge, IVP. Architected the in-house wire-automation platform.", "sources": ["S", "P", "R", "X"]}, {"id": "adam_smith", "type": "award", "label": "Adam Smith Awards 2024 \u2014 Highly Commended, Top Treasury Team", "url": "https://treasurytoday.com/asa-2024-winners/lean-team-delivers-complete-transformation/", "note": "Awarded to the client's treasury team; recognised the wire-automation programme. Public record.", "sources": ["S", "P", "X"]}, {"id": "prog_wire", "type": "program", "label": "Wire-automation platform", "metric": "$350B+ processed \u00b7 0%\u219299.9% STP \u00b7 99.9% via SWIFT", "note": "Middle Office ran wires by hand; default answer was a vendor tool. Analysis showed the firm already owned the rails \u2014 built in house instead. Multi-million-dollar tool avoided.", "sources": ["S", "P", "R", "X"]}, {"id": "prog_waterfall", "type": "program", "label": "LemonEdge waterfall / allocation automation", "note": "Automating Portfolio Allocation & Waterfall calculations (European & American style) and reporting for Fund Controllers.", "sources": ["P", "R"]}, {"id": "prog_citi_onb", "type": "program", "label": "Private Bank client onboarding STP", "metric": "5 days \u2192 1\u20132 days \u00b7 STP 90%\u219299.9% in 3 months", "note": "Citigroup One Source; fixed production issues at source; FATCA/AML/KYC/CIP/EDD checklist revamp.", "sources": ["R", "X"]}, {"id": "prog_bny_ca", "type": "program", "label": "Corporate-actions SWIFT STP", "note": "Top-down modular PL/SQL processing SWIFT MT564/565/566/567 so corporate actions reflect in client portfolios in time.", "sources": ["R", "X"]}, {"id": "prog_suntrust", "type": "program", "label": "Mortgage-servicing automations", "metric": "bankruptcy-suspense distribution \u221250 person-hrs/day, \u2212$29k/mo \u00b7 Nevada IOE \u22129 person-days, \u2212$30k/yr", "note": "Director's Scripts, delinquency tax reporting, escrow-deletion fee, manual IOE for NV loans.", "sources": ["R"]}, {"id": "prog_citi_aml", "type": "program", "label": "AML Compliance Metrics", "note": "Reporting & analytics over Mantas, iCAPS, Training, HR data; SQL views for MicroStrategy; Assessment-Unit reporting.", "sources": ["R"]}, {"id": "cs_wire", "type": "casestudy", "label": "Case study \u2014 $350B in wires, 0%\u219299%+ STP", "url": "https://pragmaticagents.dev/work/wire-automation/", "sources": ["P"]}, {"id": "cs_fund_agent", "type": "casestudy", "label": "Case study \u2014 Teaching an AI agent to read fund inception documents", "url": "https://pragmaticagents.dev/work/fund-onboarding-agent/", "sources": ["P"]}, {"id": "cs_santhoshias", "type": "casestudy", "label": "Case study \u2014 SanthoshIAS", "url": "https://pragmaticagents.dev/work/santhoshias/", "sources": ["P"]}, {"id": "cs_sentinel", "type": "casestudy", "label": "Case study \u2014 Sentinel", "url": "https://pragmaticagents.dev/work/sentinel/", "sources": ["P"]}, {"id": "cs_moneta", "type": "casestudy", "label": "Case study \u2014 Moneta", "url": "https://pragmaticagents.dev/work/moneta/", "sources": ["P"]}, {"id": "cs_flowdeck", "type": "casestudy", "label": "Case study \u2014 FlowDeck", "url": "https://pragmaticagents.dev/work/flowdeck/", "sources": ["P"]}, {"id": "cs_apex", "type": "casestudy", "label": "Case study \u2014 APEX / AlphaEdge", "url": "https://pragmaticagents.dev/work/apex/", "sources": ["P"]}, {"id": "cs_kidstream", "type": "casestudy", "label": "Case study \u2014 KidStream", "url": "https://pragmaticagents.dev/work/kidstream/", "sources": ["P"]}, {"id": "fund_agent", "type": "system", "label": "Fund-onboarding agent", "note": "Claude-powered agent that reads fund legal / inception documents and automates LemonEdge fund-accounting setup. In active development.", "sources": ["P", "S", "X"]}, {"id": "santhoshias", "type": "system", "label": "SanthoshIAS", "note": "Personal Infrastructure-as-a-Service: one priority-chain DataResolver, six market-data providers, automatic failover; DuckDB cache; MCP interface. Serves Moneta, FlowDeck, APEX.", "sources": ["P", "X"]}, {"id": "sentinel", "type": "system", "label": "Sentinel", "note": "Self-learning admin dashboard supervising the personal stack; launchd-native where possible; codified playbooks for recurring failures (e.g. auto-restart a stale data feed).", "sources": ["P", "X"]}, {"id": "moneta", "type": "system", "label": "Moneta", "note": "Self-hosted personal-finance platform \u2014 7,000+ transactions, 3 years history, TWR/MWR/Sharpe. FastAPI \u00b7 DuckDB \u00b7 Rust \u00b7 React 19. Consumes SanthoshIAS.", "sources": ["P", "X"]}, {"id": "flowdeck", "type": "system", "label": "FlowDeck", "note": "Self-hosted options-flow analytics \u2014 replaced a paid SaaS with ~800 lines of Rust. Consumes SanthoshIAS.", "sources": ["P", "X"]}, {"id": "apex", "type": "system", "label": "APEX / AlphaEdge", "note": "Options analytics & semi-automated trading platform, v11. Bayesian expectancy, per-symbol state machines, five-layer safety architecture. Consumes SanthoshIAS.", "sources": ["P", "X"]}, {"id": "kidstream", "type": "system", "label": "KidStream", "note": "Curated, self-hosted children's media \u2014 allowlist only, no algorithm, no ads, no tracking. Pinchflat \u00b7 Jellyfin \u00b7 Swiftfin \u00b7 Apple TV \u00b7 NAS.", "sources": ["P"]}, {"id": "p_theta", "type": "provider", "label": "ThetaData", "note": "Options data \u2014 priority 1.", "sources": ["P", "X"]}, {"id": "p_quant", "type": "provider", "label": "QuantData", "note": "Vol surface & flow \u2014 priority 2.", "sources": ["P", "X"]}, {"id": "p_dxlink", "type": "provider", "label": "DXLink", "note": "Streaming \u2014 priority 3.", "sources": ["P", "X"]}, {"id": "p_alpaca", "type": "provider", "label": "Alpaca", "note": "Equity & paper trading \u2014 priority 4.", "sources": ["P", "X"]}, {"id": "p_ibkr", "type": "provider", "label": "IBKR", "note": "Live broker \u2014 priority 5.", "sources": ["P", "X"]}, {"id": "p_tasty", "type": "provider", "label": "Tastyworks", "note": "Options broker \u2014 priority 6.", "sources": ["P", "X"]}, {"id": "sk_solarch", "type": "skill", "label": "Business solution architecture", "note": "From a messy problem to a design people can act on; works with dev architects & product owners to build it.", "sources": ["S", "P", "X"]}, {"id": "sk_stp", "type": "skill", "label": "Straight-through processing", "note": "Repeated pattern: find where a process breaks, design the break out of it. Wires, client onboarding, corporate actions.", "sources": ["S", "R", "X"]}, {"id": "sk_treasury", "type": "skill", "label": "Treasury & middle-office automation", "sources": ["S", "P", "R"]}, {"id": "sk_fundacct", "type": "skill", "label": "Fund-accounting automation", "note": "Open/closed-ended funds, European & American waterfalls, SPVs, CLOs; VPM, LemonEdge, IVP, TriOptima.", "sources": ["P", "R"]}, {"id": "sk_agentic", "type": "skill", "label": "Agentic AI \u2014 applied with restraint", "note": "Where it fits, how to wire it safely, how much of a workflow it should touch. Builds the systems personally.", "sources": ["S", "P", "X"]}, {"id": "sk_reqanalysis", "type": "skill", "label": "Requirements & process analysis", "note": "As-is/to-be Visio process maps, BRDs, gap & impact analysis, traceability. Kept off the marketing site; real capability.", "sources": ["R", "X"]}, {"id": "sk_datamapping", "type": "skill", "label": "Data mapping & analysis", "note": "Complex Oracle SQL / stored procedures, ETL, mainframe, API-to-Kafka mapping.", "sources": ["R", "X"]}, {"id": "sk_apidesign", "type": "skill", "label": "API contract design & test", "note": "Reads API contracts, authors Swaggers to org standard, validates built APIs in Postman/SoapUI, challenges wrong responses.", "sources": ["R", "X"]}, {"id": "sk_po", "type": "skill", "label": "Product ownership", "note": "Backlog, sprint planning, refinement; CSPO certified.", "sources": ["R"]}, {"id": "t_java", "type": "tech", "label": "Java / J2EE", "sources": ["R"]}, {"id": "t_plsql", "type": "tech", "label": "Oracle PL/SQL", "sources": ["R"]}, {"id": "t_cpp", "type": "tech", "label": "C++", "sources": ["R"]}, {"id": "t_rust", "type": "tech", "label": "Rust", "note": "Personal stack.", "sources": ["P", "X"]}, {"id": "t_api", "type": "tech", "label": "REST / SOAP / XML", "sources": ["R"]}, {"id": "t_swagger", "type": "tech", "label": "Swagger / OpenAPI", "sources": ["R"]}, {"id": "t_swift", "type": "tech", "label": "SWIFT messaging", "note": "MT564\u2013567 corporate actions; 99.9% of PE wires instructed via SWIFT.", "sources": ["S", "P", "R"]}, {"id": "t_kafka", "type": "tech", "label": "Kafka streaming", "sources": ["R"]}, {"id": "t_duckdb", "type": "tech", "label": "DuckDB", "sources": ["P", "X"]}, {"id": "t_fastapi", "type": "tech", "label": "FastAPI", "sources": ["P", "X"]}, {"id": "t_react", "type": "tech", "label": "React 19", "sources": ["P", "X"]}, {"id": "t_claude", "type": "tech", "label": "Claude / Anthropic \u00b7 MCP", "sources": ["P", "X"]}, {"id": "t_postman", "type": "tech", "label": "Postman / SoapUI", "sources": ["R"]}, {"id": "t_visio", "type": "tech", "label": "MS Visio (process modelling)", "sources": ["R"]}, {"id": "t_eleventy", "type": "tech", "label": "Eleventy (both sites)", "sources": ["S", "P"]}, {"id": "v_kyriba", "type": "vendor", "label": "Kyriba", "sources": ["S", "P", "R"]}, {"id": "v_lemonedge", "type": "vendor", "label": "LemonEdge", "sources": ["P", "R", "X"]}, {"id": "v_blackknight", "type": "vendor", "label": "Black Knight \u2014 Empower LOS / MSP", "sources": ["R"]}, {"id": "v_pershing", "type": "vendor", "label": "Pershing NetX360", "sources": ["R"]}, {"id": "v_fis", "type": "vendor", "label": "FIS", "sources": ["R"]}, {"id": "v_vpm_ivp", "type": "vendor", "label": "VPM \u00b7 IVP \u00b7 TriOptima", "sources": ["R"]}, {"id": "d_retail", "type": "domain", "label": "Retail banking", "sources": ["R"]}, {"id": "d_mortgage", "type": "domain", "label": "US mortgage (origination & servicing)", "sources": ["R"]}, {"id": "d_privatebank", "type": "domain", "label": "Private banking / wealth management", "sources": ["R"]}, {"id": "d_corpactions", "type": "domain", "label": "Corporate actions & reconciliation", "sources": ["R"]}, {"id": "d_middleoffice", "type": "domain", "label": "Middle office & treasury", "sources": ["S", "P", "R"]}, {"id": "d_pe", "type": "domain", "label": "Private equity / fund accounting", "sources": ["S", "P", "R"]}, {"id": "d_payments", "type": "domain", "label": "Payments \u00b7 KYC / AML / FATCA", "sources": ["R"]}, {"id": "c_cspo", "type": "cert", "label": "Certified Scrum Product Owner (CSPO)", "sources": ["R"]}, {"id": "c_scrum", "type": "cert", "label": "Scrum Master \u00b7 Advanced Scrum Master \u00b7 Software Product Owner (Skillsoft)", "sources": ["R"]}, {"id": "edu_vtu", "type": "education", "label": "B.E. Computer Science \u2014 VTU, Bangalore (2001\u20132005)", "note": "Dr. Ambedkar Institute of Technology.", "sources": ["R"]}, {"id": "art_waterfall", "type": "article", "label": "Writing \u2014 European vs American waterfall: what the software actually has to do", "note": "In the pipeline.", "sources": ["P"]}, {"id": "art_fundagent", "type": "article", "label": "Writing \u2014 The fund-onboarding agent: reading legal documents with LLMs", "note": "In the pipeline.", "sources": ["P"]}, {"id": "art_vendorbuild", "type": "article", "label": "Writing \u2014 Vendor, extend, or build: a decision framework from $350B of wires", "note": "In the pipeline.", "sources": ["P"]}], "edges": [{"from": "santhosh", "to": "sb_com", "rel": "owns", "source": "S"}, {"from": "santhosh", "to": "pa_dev", "rel": "owns", "source": "P"}, {"from": "santhosh", "to": "linkedin", "rel": "profile on", "source": "S"}, {"from": "sb_com", "to": "pa_dev", "rel": "links to", "source": "S"}, {"from": "pa_dev", "to": "sb_com", "rel": "links to", "source": "P"}, {"from": "santhosh", "to": "goldman", "rel": "Software Engineer (2005\u201306)", "source": "R"}, {"from": "santhosh", "to": "northern", "rel": "Software Engineer (2006\u201307)", "source": "R"}, {"from": "santhosh", "to": "bny", "rel": "Senior Software Engineer (2007\u201308)", "source": "R"}, {"from": "santhosh", "to": "citi", "rel": "Technology Lead / Data Analyst (2010\u201316)", "source": "R"}, {"from": "santhosh", "to": "suntrust", "rel": "Business Analyst (2016)", "source": "R"}, {"from": "santhosh", "to": "pnc", "rel": "Senior Consultant / Senior BA (2017\u201322)", "source": "R"}, {"from": "santhosh", "to": "pe_firm", "rel": "Senior BA / Product Owner (2022\u2013present)", "source": "R"}, {"from": "prog_wire", "to": "pe_firm", "rel": "delivered at", "source": "S"}, {"from": "prog_waterfall", "to": "pe_firm", "rel": "delivered at", "source": "P"}, {"from": "prog_citi_onb", "to": "citi", "rel": "delivered at", "source": "R"}, {"from": "prog_citi_aml", "to": "citi", "rel": "delivered at", "source": "R"}, {"from": "prog_bny_ca", "to": "bny", "rel": "delivered at", "source": "R"}, {"from": "prog_suntrust", "to": "suntrust", "rel": "delivered at", "source": "R"}, {"from": "santhosh", "to": "prog_wire", "rel": "architected", "source": "S"}, {"from": "santhosh", "to": "prog_waterfall", "rel": "leads", "source": "P"}, {"from": "santhosh", "to": "prog_citi_onb", "rel": "led", "source": "R"}, {"from": "santhosh", "to": "prog_bny_ca", "rel": "built", "source": "R"}, {"from": "santhosh", "to": "prog_suntrust", "rel": "built", "source": "R"}, {"from": "santhosh", "to": "prog_citi_aml", "rel": "built", "source": "R"}, {"from": "adam_smith", "to": "pe_firm", "rel": "awarded to treasury team of", "source": "X"}, {"from": "adam_smith", "to": "prog_wire", "rel": "recognised", "source": "P"}, {"from": "santhosh", "to": "cs_wire", "rel": "authored", "source": "P"}, {"from": "santhosh", "to": "cs_fund_agent", "rel": "authored", "source": "P"}, {"from": "santhosh", "to": "cs_santhoshias", "rel": "authored", "source": "P"}, {"from": "santhosh", "to": "cs_sentinel", "rel": "authored", "source": "P"}, {"from": "santhosh", "to": "cs_moneta", "rel": "authored", "source": "P"}, {"from": "santhosh", "to": "cs_flowdeck", "rel": "authored", "source": "P"}, {"from": "santhosh", "to": "cs_apex", "rel": "authored", "source": "P"}, {"from": "santhosh", "to": "cs_kidstream", "rel": "authored", "source": "P"}, {"from": "cs_wire", "to": "prog_wire", "rel": "documents", "source": "P"}, {"from": "cs_fund_agent", "to": "fund_agent", "rel": "documents", "source": "P"}, {"from": "cs_santhoshias", "to": "santhoshias", "rel": "documents", "source": "P"}, {"from": "cs_sentinel", "to": "sentinel", "rel": "documents", "source": "P"}, {"from": "cs_moneta", "to": "moneta", "rel": "documents", "source": "P"}, {"from": "cs_flowdeck", "to": "flowdeck", "rel": "documents", "source": "P"}, {"from": "cs_apex", "to": "apex", "rel": "documents", "source": "P"}, {"from": "cs_kidstream", "to": "kidstream", "rel": "documents", "source": "P"}, {"from": "cs_wire", "to": "pa_dev", "rel": "published on", "source": "P"}, {"from": "cs_santhoshias", "to": "pa_dev", "rel": "published on", "source": "P"}, {"from": "santhosh", "to": "fund_agent", "rel": "builds", "source": "P"}, {"from": "santhosh", "to": "santhoshias", "rel": "builds", "source": "P"}, {"from": "santhosh", "to": "sentinel", "rel": "builds", "source": "P"}, {"from": "santhosh", "to": "moneta", "rel": "builds", "source": "P"}, {"from": "santhosh", "to": "flowdeck", "rel": "builds", "source": "P"}, {"from": "santhosh", "to": "apex", "rel": "builds", "source": "P"}, {"from": "santhosh", "to": "kidstream", "rel": "builds", "source": "P"}, {"from": "fund_agent", "to": "v_lemonedge", "rel": "automates", "source": "P"}, {"from": "fund_agent", "to": "t_claude", "rel": "built with", "source": "P"}, {"from": "moneta", "to": "santhoshias", "rel": "consumes", "source": "P"}, {"from": "flowdeck", "to": "santhoshias", "rel": "consumes", "source": "P"}, {"from": "apex", "to": "santhoshias", "rel": "consumes", "source": "P"}, {"from": "sentinel", "to": "santhoshias", "rel": "supervises", "source": "P"}, {"from": "sentinel", "to": "moneta", "rel": "supervises", "source": "P"}, {"from": "sentinel", "to": "flowdeck", "rel": "supervises", "source": "P"}, {"from": "sentinel", "to": "apex", "rel": "supervises", "source": "P"}, {"from": "santhoshias", "to": "p_theta", "rel": "resolves via", "source": "P"}, {"from": "santhoshias", "to": "p_quant", "rel": "resolves via", "source": "P"}, {"from": "santhoshias", "to": "p_dxlink", "rel": "resolves via", "source": "P"}, {"from": "santhoshias", "to": "p_alpaca", "rel": "resolves via", "source": "P"}, {"from": "santhoshias", "to": "p_ibkr", "rel": "resolves via", "source": "P"}, {"from": "santhoshias", "to": "p_tasty", "rel": "resolves via", "source": "P"}, {"from": "santhoshias", "to": "t_duckdb", "rel": "caches to", "source": "P"}, {"from": "santhoshias", "to": "t_claude", "rel": "exposes via MCP", "source": "P"}, {"from": "santhoshias", "to": "t_rust", "rel": "built with", "source": "P"}, {"from": "moneta", "to": "t_fastapi", "rel": "built with", "source": "P"}, {"from": "moneta", "to": "t_react", "rel": "built with", "source": "P"}, {"from": "moneta", "to": "t_duckdb", "rel": "built with", "source": "P"}, {"from": "apex", "to": "t_fastapi", "rel": "built with", "source": "P"}, {"from": "apex", "to": "t_rust", "rel": "built with", "source": "P"}, {"from": "flowdeck", "to": "t_rust", "rel": "built with", "source": "P"}, {"from": "sb_com", "to": "t_eleventy", "rel": "built with", "source": "S"}, {"from": "pa_dev", "to": "t_eleventy", "rel": "built with", "source": "P"}, {"from": "santhosh", "to": "sk_solarch", "rel": "practises", "source": "S"}, {"from": "santhosh", "to": "sk_stp", "rel": "practises", "source": "S"}, {"from": "santhosh", "to": "sk_treasury", "rel": "practises", "source": "S"}, {"from": "santhosh", "to": "sk_fundacct", "rel": "practises", "source": "P"}, {"from": "santhosh", "to": "sk_agentic", "rel": "practises", "source": "S"}, {"from": "santhosh", "to": "sk_reqanalysis", "rel": "practises", "source": "R"}, {"from": "santhosh", "to": "sk_datamapping", "rel": "practises", "source": "R"}, {"from": "santhosh", "to": "sk_apidesign", "rel": "practises", "source": "R"}, {"from": "santhosh", "to": "sk_po", "rel": "practises", "source": "R"}, {"from": "prog_wire", "to": "sk_solarch", "rel": "demonstrates", "source": "P"}, {"from": "prog_wire", "to": "sk_stp", "rel": "demonstrates", "source": "S"}, {"from": "prog_wire", "to": "sk_treasury", "rel": "demonstrates", "source": "P"}, {"from": "prog_citi_onb", "to": "sk_stp", "rel": "demonstrates", "source": "R"}, {"from": "prog_bny_ca", "to": "sk_stp", "rel": "demonstrates", "source": "R"}, {"from": "prog_waterfall", "to": "sk_fundacct", "rel": "demonstrates", "source": "P"}, {"from": "fund_agent", "to": "sk_agentic", "rel": "demonstrates", "source": "P"}, {"from": "santhoshias", "to": "sk_agentic", "rel": "demonstrates", "source": "X"}, {"from": "prog_citi_onb", "to": "sk_datamapping", "rel": "demonstrates", "source": "R"}, {"from": "prog_bny_ca", "to": "sk_apidesign", "rel": "demonstrates", "source": "R"}, {"from": "sk_stp", "to": "t_swift", "rel": "uses", "source": "R"}, {"from": "sk_fundacct", "to": "v_lemonedge", "rel": "uses", "source": "P"}, {"from": "sk_fundacct", "to": "v_vpm_ivp", "rel": "uses", "source": "R"}, {"from": "sk_treasury", "to": "v_kyriba", "rel": "uses", "source": "R"}, {"from": "sk_apidesign", "to": "t_swagger", "rel": "uses", "source": "R"}, {"from": "sk_apidesign", "to": "t_api", "rel": "uses", "source": "R"}, {"from": "sk_apidesign", "to": "t_postman", "rel": "uses", "source": "R"}, {"from": "sk_datamapping", "to": "t_plsql", "rel": "uses", "source": "R"}, {"from": "sk_reqanalysis", "to": "t_visio", "rel": "uses", "source": "R"}, {"from": "sk_agentic", "to": "t_claude", "rel": "uses", "source": "P"}, {"from": "prog_bny_ca", "to": "t_plsql", "rel": "built with", "source": "R"}, {"from": "prog_citi_onb", "to": "v_pershing", "rel": "integrated", "source": "R"}, {"from": "prog_suntrust", "to": "v_blackknight", "rel": "built on", "source": "R"}, {"from": "prog_wire", "to": "v_kyriba", "rel": "built on", "source": "P"}, {"from": "prog_wire", "to": "t_swift", "rel": "built on", "source": "P"}, {"from": "prog_wire", "to": "d_middleoffice", "rel": "in domain", "source": "S"}, {"from": "prog_waterfall", "to": "d_pe", "rel": "in domain", "source": "P"}, {"from": "prog_citi_onb", "to": "d_privatebank", "rel": "in domain", "source": "R"}, {"from": "prog_citi_onb", "to": "d_payments", "rel": "in domain", "source": "R"}, {"from": "prog_bny_ca", "to": "d_corpactions", "rel": "in domain", "source": "R"}, {"from": "prog_suntrust", "to": "d_mortgage", "rel": "in domain", "source": "R"}, {"from": "goldman", "to": "d_corpactions", "rel": "in domain", "source": "R"}, {"from": "northern", "to": "d_corpactions", "rel": "in domain", "source": "R"}, {"from": "citi", "to": "d_privatebank", "rel": "in domain", "source": "R"}, {"from": "pnc", "to": "d_retail", "rel": "in domain", "source": "R"}, {"from": "pnc", "to": "d_mortgage", "rel": "in domain", "source": "R"}, {"from": "pe_firm", "to": "d_pe", "rel": "in domain", "source": "R"}, {"from": "pe_firm", "to": "d_middleoffice", "rel": "in domain", "source": "R"}, {"from": "santhosh", "to": "d_middleoffice", "rel": "specialises in", "source": "S"}, {"from": "santhosh", "to": "d_pe", "rel": "specialises in", "source": "S"}, {"from": "santhosh", "to": "c_cspo", "rel": "holds", "source": "R"}, {"from": "santhosh", "to": "c_scrum", "rel": "holds", "source": "R"}, {"from": "santhosh", "to": "edu_vtu", "rel": "studied at", "source": "R"}, {"from": "edu_vtu", "to": "t_cpp", "rel": "foundation in", "source": "R"}, {"from": "pa_dev", "to": "art_waterfall", "rel": "will publish", "source": "P"}, {"from": "pa_dev", "to": "art_fundagent", "rel": "will publish", "source": "P"}, {"from": "pa_dev", "to": "art_vendorbuild", "rel": "will publish", "source": "P"}, {"from": "art_waterfall", "to": "sk_fundacct", "rel": "about", "source": "P"}, {"from": "art_fundagent", "to": "fund_agent", "rel": "about", "source": "P"}, {"from": "art_vendorbuild", "to": "prog_wire", "rel": "about", "source": "P"}]};
const TYPE_LABEL = DATA.meta.types, SRC_LABEL = DATA.meta.sources;
const COLORS = {
  person:"#C8963E", website:"#6B7A8F", org:"#4A78B5", program:"#2E9C8E", casestudy:"#8668C4",
  system:"#4EA24E", provider:"#7BA86B", skill:"#D0873B", tech:"#5E8BA8", vendor:"#C56B86",
  domain:"#6366A8", award:"#E6B840", cert:"#9B8AA8", education:"#9B8AA8", article:"#A88BC9"
};
const ORDER = ["person","website","org","program","casestudy","system","provider","skill","tech","vendor","domain","award","cert","education","article"];

const cv = document.getElementById('c'), ctx = cv.getContext('2d');
let W=0,H=0,DPR=Math.min(window.devicePixelRatio||1,2);
const nodes = DATA.nodes.map(n=>({...n}));
const byId = Object.fromEntries(nodes.map(n=>[n.id,n]));
const edges = DATA.edges.map(e=>({...e,a:byId[e.from],b:byId[e.to]}));
nodes.forEach(n=>{n.deg=0}); edges.forEach(e=>{e.a.deg++;e.b.deg++});
const adj = {}; nodes.forEach(n=>adj[n.id]=[]);
edges.forEach(e=>{adj[e.from].push({o:e.to,rel:e.rel,dir:'out'});adj[e.to].push({o:e.from,rel:e.rel,dir:'in'});});

// seeded rng
let _s=20260827; const rnd=()=>{_s=(_s*1664525+1013904223)>>>0;return _s/4294967296;};
nodes.forEach((n,i)=>{const a=i/nodes.length*Math.PI*2;n.x=Math.cos(a)*260+(rnd()-.5)*80;n.y=Math.sin(a)*260+(rnd()-.5)*80;n.vx=0;n.vy=0;});
byId.santhosh.x=0;byId.santhosh.y=0;

const hidden = new Set();
let focus=null, hoverNode=null, view={x:0,y:0,k:1}, dragNode=null, dragging=false, warm=0;
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

function resize(){
  const r=cv.getBoundingClientRect(); W=r.width;H=r.height;
  cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener('resize',resize); resize();
view.x=W/2; view.y=H/2;

function radius(n){return 4+Math.sqrt(n.deg)*2.1 + (n.type==='person'?6:0);}
function visible(n){return !hidden.has(n.type);}

function tick(){
  const REP=4200, SPR=0.038, LEN=104, GRAV=0.011, DAMP=0.83, VMAX=16, DT=0.5;
  for(let i=0;i<nodes.length;i++){
    const a=nodes[i]; if(!visible(a))continue;
    for(let j=i+1;j<nodes.length;j++){
      const b=nodes[j]; if(!visible(b))continue;
      let dx=a.x-b.x, dy=a.y-b.y, d2=dx*dx+dy*dy;
      if(d2<64){d2=64; if(dx===0&&dy===0){dx=(rnd()-.5);dy=(rnd()-.5);}}
      const d=Math.sqrt(d2), f=REP/d2;
      const fx=dx/d*f, fy=dy/d*f;
      a.vx+=fx;a.vy+=fy;b.vx-=fx;b.vy-=fy;
    }
    a.vx-=a.x*GRAV; a.vy-=a.y*GRAV;
  }
  for(const e of edges){
    const a=e.a,b=e.b; if(!visible(a)||!visible(b))continue;
    let dx=b.x-a.x, dy=b.y-a.y, d=Math.hypot(dx,dy)||0.01;
    const f=(d-LEN)*SPR, fx=dx/d*f, fy=dy/d*f;
    a.vx+=fx;a.vy+=fy;b.vx-=fx;b.vy-=fy;
  }
  for(const n of nodes){
    if(n===dragNode){n.vx=0;n.vy=0;continue;}
    n.vx*=DAMP;n.vy*=DAMP;
    const v=Math.hypot(n.vx,n.vy); if(v>VMAX){n.vx=n.vx/v*VMAX;n.vy=n.vy/v*VMAX;}
    n.x+=n.vx*DT;n.y+=n.vy*DT;
  }
}
function T(n){return {x:n.x*view.k+view.x, y:n.y*view.k+view.y};}
function fitView(pad){
  pad = pad||70;
  let mnx=1e9,mny=1e9,mxx=-1e9,mxy=-1e9,any=false;
  for(const n of nodes){ if(!visible(n))continue; any=true;
    mnx=Math.min(mnx,n.x);mny=Math.min(mny,n.y);mxx=Math.max(mxx,n.x);mxy=Math.max(mxy,n.y); }
  if(!any)return;
  const panelW = (document.getElementById('panel').classList.contains('show') && W>620) ? 348 : 0;
  const legendW = W>620 ? 150 : 0;
  const availW = W - pad*2 - panelW - legendW;
  const gw=Math.max(mxx-mnx,1), gh=Math.max(mxy-mny,1);
  view.k=Math.min(2.6,Math.max(.3,Math.min(availW/gw,(H-pad*2)/gh)));
  view.x=(legendW+pad+availW/2)-((mnx+mxx)/2)*view.k;
  view.y=H/2-((mny+mxy)/2)*view.k;
}

function draw(){
  ctx.clearRect(0,0,W,H);
  const foc = focus, near = foc? new Set([foc.id,...adj[foc.id].map(a=>a.o)]) : null;
  // edges
  for(const e of edges){
    if(!visible(e.a)||!visible(e.b))continue;
    const p=T(e.a),q=T(e.b);
    const hot = foc && (e.from===foc.id||e.to===foc.id);
    ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);
    ctx.strokeStyle = hot? getCSS('--edge-hi') : (foc? withA(getCSS('--edge'),0.25): getCSS('--edge'));
    ctx.lineWidth = hot?1.6:0.8; ctx.stroke();
    if(hot){
      const mx=(p.x+q.x)/2,my=(p.y+q.y)/2;
      ctx.font='10px Inter,sans-serif';ctx.fillStyle=getCSS('--ink-dim');ctx.textAlign='center';
      ctx.fillText(e.rel.replace(/\s*\(.*\)/,''),mx,my-3);
    }
  }
  // nodes
  for(const n of nodes){
    if(!visible(n))continue;
    const p=T(n), r=radius(n)*Math.max(view.k,.7);
    const dim = foc && !near.has(n.id);
    ctx.beginPath();ctx.arc(p.x,p.y,r,0,7);
    ctx.fillStyle = dim? withA(COLORS[n.type],0.22) : COLORS[n.type];
    ctx.fill();
    if(n===foc || n===hoverNode){ctx.lineWidth=2.5;ctx.strokeStyle=getCSS('--accent');ctx.stroke();}
    else if(n.type==='person'){ctx.lineWidth=2;ctx.strokeStyle=getCSS('--bg');ctx.stroke();}
    const showLabel = !dim && (n.type==='person'||n.type==='org' || n.deg>=9 || n===foc || n===hoverNode || (near&&near.has(n.id)) || view.k>1.7);
    if(showLabel){
      const lbl = n.label.replace(/^(Case study|Writing) \u2014 /,'');
      ctx.font=(n===foc?'600 ':'')+ (11*Math.max(view.k*.6,.85)|0) +'px Inter,sans-serif';
      ctx.textAlign='center';ctx.textBaseline='top';
      const tw=ctx.measureText(lbl).width;
      ctx.fillStyle=withA(getCSS('--panel'),.82);
      ctx.fillRect(p.x-tw/2-3,p.y+r+2,tw+6,14);
      ctx.fillStyle=dim?getCSS('--ink-dim'):getCSS('--ink');
      ctx.fillText(lbl.length>34?lbl.slice(0,32)+'\u2026':lbl,p.x,p.y+r+3);
    }
  }
}
const _cssCache={};
function getCSS(v){if(!(v in _cssCache))_cssCache[v]=getComputedStyle(document.documentElement).getPropertyValue(v).trim();return _cssCache[v];}
function withA(c,a){ // c is #hex or rgba()
  if(c.startsWith('#')){const n=parseInt(c.slice(1),16);return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`;}
  return c.replace(/[\d.]+\)$/,a+')');
}
function loop(){
  const steps = reduce? 0 : (warm<300? (warm<70?5:1) : (dragging?1:0.34));
  let s=steps; while(s>=1){tick();warm++;s--;}
  if(steps<1 && Math.random()<steps){tick();}
  if(reduce && warm<500){for(let i=0;i<500;i++)tick();warm=500;fitView();}
  if(warm<320 && !dragging) fitView();
  draw();
  requestAnimationFrame(loop);
}
loop();
addEventListener('resize',()=>setTimeout(()=>fitView(),60));

// ---- legend
const lg=document.getElementById('legend');
const counts={}; nodes.forEach(n=>counts[n.type]=(counts[n.type]||0)+1);
ORDER.filter(t=>counts[t]).forEach(t=>{
  const row=document.createElement('div');row.className='lg-row';row.dataset.t=t;
  row.innerHTML=`<span class="lg-dot" style="background:${COLORS[t]}"></span><span class="lg-n">${TYPE_LABEL[t]||t}</span><span class="lg-c">${counts[t]}</span>`;
  row.onclick=()=>{ if(hidden.has(t))hidden.delete(t); else hidden.add(t); row.classList.toggle('off'); if(focus&&hidden.has(focus.type))setFocus(null); };
  lg.appendChild(row);
});

// ---- panel
const panel=document.getElementById('panel');
panel.querySelector('.p-close').onclick=()=>setFocus(null);
function setFocus(n){
  focus=n;
  if(!n){panel.classList.remove('show');setTimeout(()=>fitView(),30);return;}
  panel.classList.add('show');
  panel.querySelector('.p-type').textContent=TYPE_LABEL[n.type]||n.type;
  panel.querySelector('.p-type').style.color=COLORS[n.type];
  panel.querySelector('h2').textContent=n.label;
  const meta=[n.title,n.role&&n.years?`${n.role} \u00b7 ${n.years}`:(n.years||n.role),n.metric,n.location].filter(Boolean).join('  \u00b7  ');
  panel.querySelector('.p-meta').textContent=meta; panel.querySelector('.p-meta').style.display=meta?'block':'none';
  panel.querySelector('.p-note').textContent=n.note||''; panel.querySelector('.p-note').style.display=n.note?'block':'none';
  const lk=panel.querySelector('.p-link');
  if(n.url){lk.href=n.url;lk.textContent=n.url.replace(/^https?:\/\//,'');lk.style.display='inline-block';}else lk.style.display='none';
  const src=panel.querySelector('.p-src');src.innerHTML='';
  (n.sources||[]).forEach(s=>{const el=document.createElement('span');el.textContent=SRC_LABEL[s]||s;src.appendChild(el);});
  const cl=panel.querySelector('.p-conn-list');cl.innerHTML='';
  const conns=adj[n.id].slice().sort((a,b)=>byId[b.o].deg-byId[a.o].deg);
  const h=document.createElement('div');h.className='p-conn-h';h.textContent=`Connections (${conns.length})`;cl.appendChild(h);
  conns.forEach(c=>{
    const o=byId[c.o];const el=document.createElement('div');el.className='p-conn';
    const verb=c.dir==='out'?c.rel:`&larr; ${c.rel}`;
    el.innerHTML=`<span class="r">${verb.replace(/\s*\(.*\)/,'')}</span> &nbsp;${o.label.replace(/^(Case study|Writing) \u2014 /,'')}`;
    el.onclick=()=>{setFocus(o);centerOn(o);};
    cl.appendChild(el);
  });
}
function centerOn(n){view.x = W/2 - n.x*view.k; view.y = H/2 - n.y*view.k;}

// ---- interaction
function nodeAt(mx,my){
  let best=null,bd=1e9;
  for(const n of nodes){ if(!visible(n))continue; const p=T(n);const d=Math.hypot(p.x-mx,p.y-my);const r=radius(n)*Math.max(view.k,.7)+6;
    if(d<r&&d<bd){bd=d;best=n;} }
  return best;
}
cv.addEventListener('pointerdown',e=>{
  const mx=e.offsetX,my=e.offsetY; const n=nodeAt(mx,my);
  if(n){dragNode=n;dragging=true;n._px=mx;n._py=my;cv.setPointerCapture(e.pointerId);}
  else {dragging=true;dragNode=null;view._sx=mx-view.x;view._sy=my-view.y;}
});
cv.addEventListener('pointermove',e=>{
  const mx=e.offsetX,my=e.offsetY;
  if(dragging&&dragNode){dragNode.x=(mx-view.x)/view.k;dragNode.y=(my-view.y)/view.k;}
  else if(dragging){view.x=mx-view._sx;view.y=my-view._sy;}
  else{const n=nodeAt(mx,my);hoverNode=n;cv.style.cursor=n?'pointer':'grab';}
});
cv.addEventListener('pointerup',e=>{
  const mx=e.offsetX,my=e.offsetY;
  if(dragNode && Math.hypot(mx-dragNode._px,my-dragNode._py)<4){ setFocus(dragNode); }
  dragging=false;dragNode=null;
});
cv.addEventListener('dblclick',()=>fitView());
cv.addEventListener('wheel',e=>{
  e.preventDefault();
  const mx=e.offsetX,my=e.offsetY, f=e.deltaY<0?1.12:1/1.12, nk=Math.min(3.2,Math.max(.35,view.k*f));
  view.x = mx-(mx-view.x)*(nk/view.k); view.y = my-(my-view.y)*(nk/view.k); view.k=nk;
},{passive:false});

// ---- search
const search=document.getElementById('search');
search.addEventListener('input',()=>{
  const q=search.value.trim().toLowerCase(); if(!q){return;}
  const hit=nodes.find(n=>visible(n)&&n.label.toLowerCase().includes(q));
  if(hit){setFocus(hit);centerOn(hit);}
});
search.addEventListener('keydown',e=>{if(e.key==='Enter'){const q=search.value.trim().toLowerCase();const hit=nodes.find(n=>visible(n)&&n.label.toLowerCase().includes(q));if(hit){setFocus(hit);centerOn(hit);}}});

setTimeout(()=>{fitView();},380);
