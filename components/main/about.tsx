import { SectionHeader } from "./section-header";


export function About() {
    return (
        <div id="about" className="space-y-8">
            <SectionHeader title="About" description="Learn a little bit about me and what I've been up to." />
            <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                    Hey! I'm Rhys Mulholland.
                </p>
                <p className="text-muted-foreground">
                    I'm a self-taught developer primarily focused on the frontend side of web applications. 
                    I can develop responsive, fully optimised web applications from scratch using industry standard tools and technologies. 
                    Although I present myself as a front-end developer, I also possess back-end and AI related skills to support my development 
                    process such as python and node.js.
                </p>
                <p className="text-muted-foreground">
                    Creating stunning, fast web applications has been a passion of mine for years. I began my journey where most do
                    copying popular sites, then expanding my skill set and creativity with custom websites. I recently found myself
                    rapidly expanding my knowledge with React and Next.js by creating user friendly web applications and dashboards, solo.
                </p>
                <p className="text-muted-foreground">
                    I always strive to learn more about the newest technologies and development trends to stay ahead of the curve.
                </p>
            </div>
        </div>
    )
}