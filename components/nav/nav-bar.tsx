"use client";

import { LinkUI as Link } from "@/components/ui/link";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";   
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";


export function NavBar() {
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    return (
        <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex flex-row items-center h-24 px-32 bg-background border-b border-muted transition-all duration-300`}
        >
            <div>
                <Link href="/">
                    Rhys' Portfolio
                </Link>
            </div>
            {isDesktop ? <NavDesktop /> : <NavMobile />}
        </nav>
    )
}