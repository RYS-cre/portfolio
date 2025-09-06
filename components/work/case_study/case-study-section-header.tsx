"use client";

import { motion } from "framer-motion";

export function CaseStudySectionHeader({ title }: { title: string }) {
    return (
        <motion.div 
            className="flex flex-col gap-4 border-l-1 border-primary pl-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay: 1.2, duration: 0.5, ease: "easeOut" }}
        >
            <h2 className="text-2xl font-bold">{title}</h2>
        </motion.div>  
    )
}