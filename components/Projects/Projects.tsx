import { Card } from "../common/Card"

const projects = [
    {
        title: "YouTube Music Clone",
        description: "Reproductor global con manejo estado. Incluye gestión de playlist, consumo de API externa y una experiencia responsiva.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS", "Axios", "Redux Toolkit"],
        liveUrl: "https://music-app-red-ten.vercel.app",
        githubUrl: "https://github.com/Danito2001/music-app",
    },
    {
        title: "Gestor de Citas Médicas",
        description: "Sistema de gestión de citas médicas con agendamiento por especialidad y disponibilidad. Incluye autenticación de pacientes y un pantel(dashboard) para los administradores de citas.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
        liveUrl: "https://medical-schedule-lime.vercel.app",
        githubUrl: "https://github.com/Danito2001/medical-schedule.git",
    },
    {
        title: "Gestor de tareas",
        description: "Gestor de tareas CRUD con almacenamiento local. Incluye filtros como orden, prioridad y completado.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
        liveUrl: "https://todo-list-one-flax-94.vercel.app",
        githubUrl: "https://github.com/Danito2001/todo-list",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen px-6 py-24">
            <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-foreground">Proyectos</h2>
                <p className="max-w-xl text-muted">
                    Proyectos en los que he trabajado, cada uno representó un reto que me permitio aprender.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => {
                    const isLast = index === projects.length - 1;
                    return (
                        <Card
                            key={index}
                            projects={project}
                            className={isLast ? "sm:col-span-2 sm:max-w-125 sm:mx-auto" : ""}
                        />
                    )
                }
            )}
            </div>
        </section>
    )
}
