# Shantanu Dubey
Bengaluru, Karnataka, India | +91 9455150010 | dubeyshantanu2@gmail.com | linkedin.com/in/shantanu-dubey-6709b711a | github.com/dubeyshantanu2

## SUMMARY
Software engineer with 7+ years building scalable production systems across startups and enterprise platforms, specializing in Applied AI, Agentic Workflows, and high-throughput Python backends. Skilled in multi-agent orchestration (LangGraph), hybrid RAG retrieval (pgvector), strict schema validation (Pydantic), and applied machine learning (XGBoost, Isolation Forest), with a proven foundation in TypeScript/JavaScript, React Native, automated testing (Jest), and enterprise change governance.

## CORE COMPETENCIES
AI Agent Orchestration (LangGraph) • LLM Prompt Engineering & Evals • Hybrid RAG (pgvector) • Pydantic Schema Enforcement • Python & asyncio • Machine Learning (XGBoost, Isolation Forest) • React Native • TypeScript / JavaScript • RESTful & WebSocket APIs • Docker & Fly.io • CI/CD & Automated Testing (Jest, DeepEval)

## WORK EXPERIENCE
**Software Engineer — AI-Directed Systems Engineering (Independent Contract)**
*Mar 2026 – Present | Remote*
- Architect and direct production multi-agent systems using LangGraph and Python 3.11 asyncio: author technical specifications and state graphs, deploying cyclical workflows with Human-in-the-Loop (HITL) checkpoints and PostgreSQL state persistence.
- Built a repeatable engineering pipeline — specification → architecture decision record → implementation → debug report → automated eval gate → pull request — backed by DeepEval and Langfuse tracing to monitor token costs, latency (p95 < 650ms), and prevent model regressions.
- Engineered a Hybrid RAG retrieval pipeline using Supabase pgvector and PostgreSQL full-text search with Reciprocal Rank Fusion (RRF) and strict Pydantic v2 schema enforcement, achieving sub-150ms semantic search with zero JSON extraction hallucinations.
- Delivered high-throughput asynchronous services on Python 3.11 with WebSocket and REST APIs, Redis pub/sub, token-bucket rate governance, and multi-stage Docker deployments on Fly.io.
- Specified and shipped an XGBoost trade-outcome classifier using walk-forward validation, SHAP feature attributions, and an unsupervised Isolation Forest anomaly-detection overlay with drift monitoring.

**Software Developer 3 — Walmart Global Tech**
*Dec 2024 – Mar 2026 | Bengaluru, India*
- Developed React Native components for the Sidekick mini-app within the Me@Walmart platform, integrating Redux selectors to manage goal types and role-based conditional rendering (leads vs. associates), improving navigation and task-completion flows.
- Designed shared frontend components and widgets for the MyWalmart platform, including API integration, error handling, and multi-workflow support; estimated and implemented features in alignment with Figma designs.
- Processed and formatted large datasets in JavaScript/JSON for testing (task queues with statuses, durations, hierarchies), supporting efficient mobile app development.
- Used Claude API and GitHub Copilot to accelerate feature delivery, code review, and debugging workflows on complex enterprise features.
- Authored and processed Change Requests (CRQs) for production deployments in compliance with enterprise change management processes.

**Software Developer — Founder and Lightning**
*Dec 2022 – Dec 2024 | London, UK (Remote)*
- Built cross-platform iOS/Android applications using React Native across multiple client engagements, translating Figma designs into pixel-perfect production UI.
- Implemented Redux for state management and optimized app performance through efficient data handling with JSON and RESTful APIs.
- Ensured app stability via TDD with Jest and React Native Testing Library; used Flipper for debugging/performance monitoring and Mixpanel for user analytics.
- Deployed applications via TestFlight and Bitrise with CI/CD pipelines; participated actively in team meetings and code reviews.
- Fixed runtime and native iOS/Android bugs to maintain seamless functionality across client projects.

**Frontend Developer — Suggaa Ventures**
*May 2022 – Dec 2022 | Bengaluru, India*
- Built complex UI screens and custom components using Redash, Skia, and Reanimated within an Expo monorepo setup; used EAS Build for scalable, efficient app builds.
- Used TypeScript for type-safe development; integrated Jotai, Google API, and GraphQL for user-facing features.

**Associate Software Developer — Navaratan Technologies**
*Sep 2021 – May 2022 | Hyderabad, India*
- Built React Native UI components and implemented Redux state management for client applications, ensuring a seamless user experience.
- Integrated RESTful APIs and JSON for backend integration and data exchange; collaborated directly with clients to understand requirements and deliver solutions to complex problems.

**Application Developer — B2BDock**
*Oct 2019 – Sep 2021 | Bengaluru, India*
- Designed and implemented application solutions for B2BDock's platform targeting both Android and iOS, using React Native and Redux for frontend development.
- Built a comprehensive CRM system for customer interaction management; integrated third-party APIs to extend functionality and improve user experience.
- Delivered applications that contributed directly to company growth and helped the founder secure funding in the company's first round.

## SELECTED CLIENT PROJECTS
**The Draft**
Contributed to the development of the Draft Mobile App, a social media platform for jobseekers and posters, building cross-platform functionality with React Native. Implemented state management with Redux and React Query, integrated Firebase for real-time updates, and used Keychain for secure storage. Focused on performance optimization and media rendering with Fast Image and video libraries, enhanced navigation using React Navigation, and integrated Mixpanel for user behavior analytics.

**Platform**
A React Native boilerplate built to streamline and accelerate project setup for new client engagements, letting teams start delivering features immediately. Combined React Native with Redux Toolkit for state management, React Navigation for in-app routing, and React Hooks for state/lifecycle management. Used react-native-config for staging/production environment handling and Appium for end-to-end testing, following TDD principles with Jest. Configured Bitrise and CircleCI for CI/CD with automated build notifications and code review, and i18n-js for app localization — giving new projects a scalable, production-ready foundation from day one.

**Greenspace Golf**
A free social application for golf enthusiasts to connect and share their passion for the game. Built using React Native CLI with Redux Toolkit for API integration, featuring deep linking, FCM/APNS push notifications, and Google and Apple sign-up/login. Built following TDD principles and regularly updated based on user feedback.

**Path Truck and Trailer**
A navigation app for truck drivers focused on safety, efficiency, and profitability, integrating the Google Maps API for precise route planning and reliable map services. Developed with TypeScript to ensure clean, maintainable code aligned with industry best practices.

**Suggaa**
An online cab-aggregator service providing safe, comfortable rides for customers and earning opportunities for driver-partners. Implemented Mixpanel for event tracking and integrated third-party packages alongside custom UI components. Built using Expo CLI, delivering high-performance React Native applications for iOS and Android, with complex UI screens built using Skia and Reanimated.

**VBN Official**
An app enabling small businesses to exchange and generate leads within a network, with statistics for recurring in-person meetups. Built with React Native for a responsive user experience.

**B2BDock**
A platform helping retailers and brands manage orders, sales, inventory, and marketing, with customizable user profiles and product cataloging. Built with React Native and Redux for frontend development, and Node.js, Flask, and MongoDB for backend development.

## INDEPENDENT TECHNICAL PROJECTS
- **Agentic Trading Infrastructure (ARES, AEOLUS, KRONOS, ARGUS)** — A portfolio of interoperating systems for Indian derivatives markets, including an asynchronous signal engine running XGBoost predictions, a market-regime forecaster, a position-guarding scanner, and a real-time microstructure terminal, sharing a common Redis-based rate-governance layer.
- **Clawbot** — A Discord bot integrating the Claude API for natural-language code generation and iterative debugging, with Docker-sandboxed execution and per-user SQLite conversation history, deployed on a VPS for 24/7 availability.
- **Kairos** — A real-time market-monitoring system on a VPS, ingesting live data via REST APIs at 1-minute intervals, persisting to Supabase/PostgreSQL, and delivering scored alerts via Discord webhooks.

## EDUCATION
**Bachelor of Engineering, Mechanical Engineering**
Visvesvaraya Technological University

## TECHNICAL SKILLS
- **AI & Agentic Systems**: LangGraph, Multi-Agent Orchestration, Human-in-the-Loop (HITL), Hybrid RAG, pgvector, Pydantic v2, Instructor, Prompt Engineering, Claude API, OpenAI SDK, LLM Observability & Evals (Langfuse, DeepEval)
- **Machine Learning & Analytics**: XGBoost, Isolation Forest, Walk-Forward Validation, SHAP Feature Attribution, Scikit-Learn, Pandas, NumPy
- **Backend & Systems**: Python 3.11, asyncio, FastAPI, PostgreSQL, Supabase, Redis Pub/Sub, RESTful APIs, WebSockets, Docker, Fly.io
- **Mobile & Frontend**: React Native, TypeScript, JavaScript, Redux, React Navigation, GraphQL, JSON, Reanimated & Gesture Handler, Skia, CSS, Tailwind CSS, Material UI, Storybook
- **Tools, CI/CD & Platforms**: Xcode, Android Studio SDK, Jest, TestFlight, Bitrise, GitHub Actions, Git flow, Yarn, Figma, Mixpanel, Flipper
