"use client"

import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { SunIcon, MoonIcon } from "lucide-react";


export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    
    return (
        <Button 
            className="fixed bottom-4 right-4"
            variant="outline" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <AnimatePresence mode="wait">
                {theme === "dark" ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: 180, scale: 0.5, filter: "blur(4px)" }}
                        animate={{ rotate: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ rotate: 180, scale: 0.5, filter: "blur(4px)" }}
                        transition={{ duration: 0.2, ease: "backIn" }}
                    >
                        <SunIcon className="w-5 h-5" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 180, scale: 0.5, filter: "blur(4px)" }}
                        animate={{ rotate: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ rotate: 180, scale: 0.5, filter: "blur(4px)" }}
                        transition={{ duration: 0.2, ease: "backIn" }}
                    >
                        <MoonIcon className="w-5 h-5" />
                    </motion.div>
                )}
            </AnimatePresence>
        </Button>
    )
}