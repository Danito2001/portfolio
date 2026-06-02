
const skillCategories = [
    {
        title: "Lenguajes",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
        title: "Frameworks & Librerias",
        skills: ["React", "Next.js"],
    },
    {
        title: "Styling",
        skills: ["Tailwind CSS", "CSS Modulos"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "GitHub", "Vercel"],
    },
    {
        title: "Estados",
        skills: ["Redux Toolkit", "Context"]
    },
]

export default function SkillsSection() {
    return (
        <section id="skills" className="min-h-screen px-6 py-24">
            <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-foreground">Habilidades</h2>
                <p className="max-w-xl text-muted">
                    Tecnologías y herramientas con las que trabajo habitualmente.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-accent bg-card p-6 transition-color duration-300 hover:border-blue-700"
                    >
                        <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
