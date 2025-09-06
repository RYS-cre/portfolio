import { CaseStudyHeader } from "@/components/work/case_study/case-study-header";
import { CaseStudyOverview } from "@/components/work/case_study/case-study-overview";
import { CaseStudyProblem } from "@/components/work/case_study/case-study-problem";
import { CaseStudyRole } from "@/components/work/case_study/case-study-role";
import { CaseStudySolution } from "@/components/work/case_study/case-study-solution";


export default function Sigmavue() {
    return (
        <main>
            <CaseStudyHeader
                title="SigmaVue"
                description="SigmaVue is a web application offering centralized trading portfolio and account management. It is built with upon Next.js with supporting libraries like Tanstack and Zustand."
                client="PrideRockEnterprises"
                timeline="2024 - Present"
                role="Lead Frontend Developer"
            />
            <CaseStudyOverview
                overview={`SigmaVUE is a real-time trading terminal that lets retail and enterprise users automate trades, copy trades across multiple brokerage accounts, and monitor performance with low latency. When I joined, the product had powerful ideas and a basic Next.js app  but struggled with frontend reliability (flaky WebSockets), slow initial renders on the dashboard, and inconsistent data handling (e.g., poor session and auth management, broken hooks, inconsistent data conventions). My mandate was to make the experience fast, resilient, and trustworthy—and to ship features that could scale to enterprise customers.

                    I led the frontend architecture in Next.js + TypeScript, built a robust data layer with TanStack Query for server state and Zustand for local/UI state, and standardized component patterns with Tailwind CSS and ShadCN UI. On the data side, the backend team built a django app that (on GCP Kubernetes) emits position_update events for opens/closes/changes, while a separate quote stream feeds live prices. I designed a FE pipeline that computes PnL client-side from that quote stream, avoiding backend hot paths and keeping the UI reactive under load. For reliability, I implemented idempotent WS handlers, exponential backoff, automatic resubscription, and thoughtful empty/error/skeleton states to keep the app stable and legible even under poor network conditions.`}
                objectives={[
                    "Performance: Reduce the dashboard TTI and LCP",
                    "Reliability: WS stability, error handling and backoff auto-reconnection, empty/error/skeleton states with REST fallback when available",
                    "Data: Client-side PnL computation from quote stream, reducing backend load and improving UI responsiveness and pnl reporting speed",
                    "UX: Reduce ambiguous loading/error states, add skeletons and optimistic updates",
                    "Maintainability: Standardize on Tanstack Query and Zustand separation, shared hooks (usePositions, useQuotes) and a typed API layer"
                ]}
            />
            <CaseStudyProblem 
                painPoints={[
                    "Poor WebSocket reliability",
                    "Slow initial render of the dashboard",
                    "Inconsistent data handling",
                    "Poor session and auth management",
                ]}
            />
            <CaseStudyRole 
            roleOverview="As the lead frontend developer, I was responsible for the overall architecture and implementation of the frontend." 
            rolePoints={[
                "Lead the frontend architecture in Next.js + TypeScript",
                "Built a robust data layer with TanStack Query for server state and Zustand for local/UI state",
                "Standardized component patterns with Tailwind CSS and ShadCN UI",
                "Designed a FE pipeline that computes PnL client-side from the quote stream, avoiding backend hot paths and keeping the UI reactive under load",
                "Implemented idempotent WS handlers, exponential backoff, automatic resubscription, and thoughtful empty/error/skeleton states to keep the app stable and legible even under poor network conditions"
            ]} 
            roleImage="/images/sigmavue/role.png" />
            <CaseStudySolution 
            architectureOverview="The frontend is built with Next.js + TypeScript, with a robust data layer with TanStack Query for server state and Zustand for local/UI state, and standardized component patterns with Tailwind CSS and ShadCN UI." 
            keyPatternsAndComponents={[
                "Use of hooks for state management and data fetching", 
                "Feature first approach to building components, keeping the logic and UI separate",
                "With the use of Tanstack Query, tables and data visualization components are effectively built with error and loading states as well as optimistic updates and pagination",
                "Next auth is used for authentication and authorization. The session hook is used to keep unauthorized users from accessing the app. A user's session expired after 24 hours, so the validaty of the session token is monitored to prompt a relogin when the session expires",

            ]} 
            consideredTradeoffs={[
                "FE Client pnL Calculation for display speed vs BE server side PnL calculation for accuracy",
                "Single WS connection for all features vs multiple WS connections for each feature",
                "Query invalidation granularity vs simplicity"
            ]} />
            {/* Results */}
            {/* What I Learned */}
        </main>
    )
}