import { ArrowRightIcon } from "lucide-react";
import { LinkUI } from "../ui/link";


export function SectionHeader({ title, description }: { title: string, description: string }) {
    return (
        <div className="relative flex flex-col border-l border-primary pl-4">
                <h2 className="text-2xl font-medium">
                    {title}
                </h2>
                <p className="text-muted-foreground">
                    {description}
                </p>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <LinkUI href="https://github.com/RYS-cre">
                        <div className="flex flex-row gap-2 items-center group">
                            GitHub
                            <ArrowRightIcon className="w-4 h-4 group-hover:-rotate-30 transition-all duration-300" />
                        </div>
                    </LinkUI>
                </div>
            </div>
    )
}