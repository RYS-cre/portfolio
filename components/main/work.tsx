import { LinkUI } from "../ui/link";
import { ArrowRightIcon } from "lucide-react";

import { WorkItem } from "./work-item";
import { SectionHeader } from "./section-header";

const work = [
    {
        title: "Portfolio Page",
        from: "2025",
        to: "Present",
        type: "Personal",
        tech: "Next.js Application",
        href: "/",
    },
    {
        title: "RepHQ",
        from: "2025",
        to: "Present",
        type: "Personal",
        tech: "Next.js Application",
        href: "/",
    },
    {
        title: "ProClient",
        from: "2025",
        to: "Present",
        type: "Professional",
        tech: "Next.js Application",
        href: "/",
    },
    {
        title: "SigmaVue",
        from: "2025",
        to: "Present",
        type: "Professional",
        tech: "Next.js Application",
        href: "/work/sigmavue",
        image: "/images/work/sigmavue/dashboard.png",
    },
    {
        title: "TradeDevi Website",
        from: "2024",
        to: "2024",
        type: "Professional",
        tech: "Webflow, HTML, CSS, JavaScript",
        href: "",
    },
    {
        title: "SigmaAlgo Website",
        from: "2022",
        to: "2024",
        type: "Professional",
        tech: "Webflow, HTML, CSS, JavaScript",
        href: "",
    },
    {
        title: "ArtiumPro Website",
        from: "2022",
        to: "2023",
        type: "Professional",
        tech: "Webflow, HTML, CSS, JavaScript",
        href: "",
    }
]

export function Work() {
    return (
        <div id="work" className="space-y-8">
            <SectionHeader 
                title="Work & Projects" 
                description="Take a look at what I've accomplished with professional experience and personal projects." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {work.map((item) => (
                    <WorkItem key={item.title} {...item} />
                ))}
            </div>
        </div>
    )
}