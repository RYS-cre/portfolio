import { LinkUI as Link } from "@/components/ui/link";

export function NavDesktop() {
    return (
        <div className="flex-1 flex flex-row gap-12 justify-end">
            <Link href="#about">
                About Me
            </Link>
            <Link href="#work">
                Work
            </Link>
            <Link href="mailto:rhys@bynitrone.com">
                Contact
            </Link>
        </div>
    )
}