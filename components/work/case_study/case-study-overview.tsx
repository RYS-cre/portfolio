"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { CaseStudySectionHeader } from "./case-study-section-header";

interface CaseStudyOverviewProps {
    overview: string;
    objectives?: string[];
}

export function CaseStudyOverview({ overview, objectives = [] }: CaseStudyOverviewProps) {
    return (
        <div className="mx-16 my-32 space-y-32">
            <div className="space-y-4">
                <CaseStudySectionHeader title="Project Overview & Objectives" />
                <motion.div 
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
                >
                    <p style={{ whiteSpace: "pre-line" }}>{overview}</p>
                </motion.div>
            </div>
            <motion.div 
                className="flex flex-col md:flex-row-reverse gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col justify-center gap-1 border-l-1 border-primary pl-4">
                    <h2 className="text-3xl font-bold">Objectives</h2>
                    <p>Objectives I aimed to achieve for this project.</p>
                </div>
                <Card className="flex-1 flex justify-end mr-8 p-4">
                    <ul className="space-y-2">
                        {objectives.length === 0 && (
                            <li>No explicit objectives were set for this project.</li>
                        )}
                        {objectives.map((objective, index) => (
                            <li key={index} className="font-semibold"><span className="text-md font-bold text-primary mr-2">{`> `}</span>{objective}</li>
                        ))}
                    </ul>
                </Card>
            </motion.div>
        </div>
    )
}