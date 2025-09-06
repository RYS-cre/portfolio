import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillsItemProps {
    section: string;
    skills: {
        name: string;
        proficiency: string;
    }[];
}

export function SkillsItem({ section, skills }: SkillsItemProps) {
    return (
        <Card className="group relative min-h-64 flex flex-col justify-between border-none hover:bg-card/70 hover:px-2 hover:py-8 transition-all duration-300 after:content-[''] after:absolute after:inset-[-1px] after:z-[-1] after:rounded-xl after:bg-gradient-to-br after:from-white/30 after:via-white/0 after:to-white/20 hover:after:from-primary/50 hover:after:via-card hover:after:to-primary/30">
            <CardHeader>
                <CardTitle className="text-muted-foreground text-sm font-normal group-hover:text-primary-muted-foreground transition-all duration-300">
                    {section}
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex flex-col items-stretch">
                <div className="flex flex-col gap-1">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex-1 flex flex-row justify-between">
                            <span className="font-medium group-hover:text-primary transition-all duration-300">{skill.name}</span>
                            <span className="text-muted-foreground group-hover:text-primary-muted-foreground transition-all duration-300">{skill.proficiency}</span>
                        </div>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}