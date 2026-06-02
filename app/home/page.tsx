import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";
import { Skill } from "@/components/Skill";


export default function HomePage() {

    return (
        <div>
            <Sidebar />
            <Navbar/>

            <main className="pt-[73px] lg:ml-64 lg:pt-0">
                <div className="mx-auto max-w-4xl">
                    <Hero/>
                    <Projects/>
                    <About/>
                    <Skill/>
                    <Contact/>
                </div>
            </main>

        </div>
    )
}