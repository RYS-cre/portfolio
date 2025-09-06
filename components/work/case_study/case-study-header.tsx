"use client";

import { motion } from "framer-motion";

interface CaseStudyHeaderProps {

    title: string;
    description: string;
    client?: string;
    timeline?: string;
    role?: string;
}

export function CaseStudyHeader({ title, description, client = "N/A", timeline = "N/A", role = "N/A" }: CaseStudyHeaderProps) {
    return (
        <div className="mx-16 my-32 space-y-8">
            <div className="flex flex-col gap-4">
                <motion.span className="text-muted-foreground -mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                >{`<CaseStudy />`}</motion.span>
                <motion.h1 
                    className="text-6xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >{title}</motion.h1>
                <motion.p className="text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >{description}</motion.p>
            </div>
            <motion.div className="flex flex-col gap-2 text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col gap-2">
                    <p>Client: <span className="font-bold text-foreground">{client}</span></p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Timeline: <span className="font-bold text-foreground">{timeline}</span></p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Role: <span className="font-bold text-foreground">{role}</span></p>
                </div>
            </motion.div>
        </div>
    )
}