"use client";

import { useState } from "react";

import { LinkUI as Link } from "@/components/ui/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex-1 flex flex-row gap-12 justify-end">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger>
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: 0, filter: "blur(1px)" }}
                                animate={{ rotate: 180, filter: "blur(0px)" }}
                                exit={{ rotate: 0, filter: "blur(1px)" }}
                                transition={{ duration: 0.2, ease: "backOut" }}
                            >
                                <XIcon className="size-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ rotate: 0, filter: "blur(1px)" }}
                                animate={{ rotate: 180, filter: "blur(0px)" }}
                                exit={{ rotate: 0, filter: "blur(1px)" }}
                                transition={{ duration: 0.2, ease: "backOut" }}
                            >
                                <MenuIcon className="size-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </PopoverTrigger>
                <PopoverContent className="mr-4 mt-2 rounded-xl">
                    <Link href="#about">
                        About Me
                    </Link>
                    <Link href="#work">
                        Work
                    </Link>
                    <Link href="mailto:rhys@bynitrone.com">
                        Contact
                    </Link>
                </PopoverContent>
            </Popover>
        </div>
        
    )
}