"use client";

import { ArrowRightIcon } from "lucide-react";
import { LinkUI as Link } from "../ui/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <div id="hero" className="flex-1 flex flex-col gap-12 py-64 w-full md:w-2/3 xl:w-1/2">
            <div className="text-center md:text-left">
                <motion.span className="text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >{`<RhysMulholland />`}</motion.span>
                <motion.h1 
                    className="text-5xl font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    I'm a <span className="font-bold">frontend developer</span> with a passion for building responsive and user-friendly <span className="font-bold">web apps.</span>
                </motion.h1>
            </div>
            
            <div className="flex flex-row gap-12 justify-center md:justify-start">
                <motion.div className="flex flex-row gap-12 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                >
                    <Link href="#work">
                        View work
                    </Link>
                </motion.div>
                <motion.div className="flex flex-row gap-12 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                <Link href="mailto:rhys@bynitrone.com">
                    <div className="flex flex-row gap-2 items-center group">
                        Contact
                        <ArrowRightIcon className="w-4 h-4 group-hover:-rotate-30 transition-all duration-300" />
                    </div>
                </Link>
                </motion.div>
            </div>
        </div>
    )
}