import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface WorkItemProps {
    title: string;
    from: string;
    to: string;
    type: string;
    tech: string;
    href: string;
    image?: string;
}

export function WorkItem({ title, from, to, type, tech, href, image }: WorkItemProps) {
    return (
        <Link href={href}>
            <Card className="group relative min-h-64 py-0 flex flex-col justify-between border-none overflow-hidden hover:bg-card/70 transition-all duration-300 after:content-[''] after:absolute after:inset-[-1px] after:z-[-1] after:rounded-xl after:bg-gradient-to-br after:from-white/30 after:via-white/0 after:to-white/20 hover:after:from-primary/50 hover:after:via-card hover:after:to-primary/30">
                <CardHeader className="relative z-10 py-4 bg-gradient-to-t from-transparent to-card">
                    <CardTitle className="text-muted-foreground text-sm font-normal">
                        {tech}
                    </CardTitle>
                </CardHeader>
                <CardFooter className="relative z-10 flex flex-col items-stretch py-4 bg-gradient-to-b from-transparent to-card">
                    <div>
                        <span className="font-medium">{title}</span>
                    </div>
                    <div className="flex flex-row gap-1 justify-between">
                        <div className="flex flex-row gap-1">
                            <span className="text-muted-foreground group-hover:text-primary-muted-foreground transition-all duration-300">{from}</span>
                            <span className="text-muted-foreground group-hover:text-primary-muted-foreground transition-all duration-300">-</span>
                            <span className="text-muted-foreground group-hover:text-primary-muted-foreground transition-all duration-300">{to}</span>
                        </div>
                        <div className="flex flex-row gap-1">
                            <span className="text-muted-foreground group-hover:text-primary-muted-foreground transition-all duration-300">{type}</span>
                        </div>
                    </div>
                </CardFooter>
                {image && (
                    <Image
                        className="object-cover opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300"
                        src={image || ""}
                        alt={title}
                        fill
                    />
                )}
            </Card>
        </Link>
    )
}