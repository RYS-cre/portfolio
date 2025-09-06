import { Hero } from "./hero";
import { About } from "./about";
import { Footer } from "./footer";
import { Skills } from "./skills";
import { Work } from "./work";

export function Main() {
    return (
        <main className="flex flex-col gap-64 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-32 min-h-[calc(100vh-6rem)]">
            <Hero />
            <Work />
            <Skills />
            <About />
        </main>
    )
}