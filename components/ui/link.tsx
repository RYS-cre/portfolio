import Link from "next/link";


export function LinkUI({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="group">
            <div>{children}</div>
            <div className="h-0.5 w-0 bg-foreground group-hover:w-full transition-all duration-300"/>
        </Link>
    )
}