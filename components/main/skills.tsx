import { SectionHeader } from "./section-header";
import { SkillsItem } from "./skills-item";

const skills = [
    {
        section: "Languages",
        skills: [
            {
                name: "HTML",
                proficiency: "Proficient"
            },
            {
                name: "CSS",
                proficiency: "Proficient"
            },
            {
                name: "JavaScript",
                proficiency: "Proficient"
            },
            {
                name: "TypeScript",
                proficiency: "Proficient"
            },
            {
                name: "Python",
                proficiency: "Proficient"
            }
        ]
    },
    {
        section: "Frameworks & Libraries",
        skills: [
            {
                name: "React",
                proficiency: "Proficient"
            },
            {
                name: "Next.js",
                proficiency: "Proficient"
            },
            {
                name: "Tailwind CSS",
                proficiency: "Proficient"
            },
            {
                name: "PostgreSQL",
                proficiency: "Intermediate"
            },
        ]
    },
    {
        section: "Tools",
        skills: [
            {
                name: "Git",
                proficiency: "Proficient"
            },
            {
                name: "Figma",
                proficiency: "Intermediate"
            },
            {
                name: "Docker",
                proficiency: "Intermediate"
            }, 
            {
                name: "Postman",
                proficiency: "Proficient"
            },
            {
                name: "Vercel",
                proficiency: "Proficient"
            },
            {
                name: "Cursor/Claude Code",
                proficiency: "Proficient"
            }
        ]
    }
]


export function Skills() {
    return (
        <div id="skills" className="space-y-8">
            <SectionHeader title="Skills" description="Take a look at what I've accomplished with professional experience and personal projects." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <SkillsItem key={skill.section} {...skill} />
                ))}
            </div>
        </div>
    )
}