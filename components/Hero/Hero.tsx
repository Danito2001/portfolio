"use client"

import { IoArrowDown } from "react-icons/io5";

export default function Hero() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section
            id="hero"
            className="flex min-h-screen flex-col items-center justify-center px-6 text-center lg:items-start lg:text-left"
        >
            <div>
                <p className="mb-4 text-sm tracking-wider font-semibold text-blue-700 uppercase">
                    Desarrollador Frontend
                </p>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                    Daniel Carvajal
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-muted text-pretty">
                    Desarrollador Frontend especializado en React, Next.js y TypeScript. Comprometido con la creación de interfaces
                    rápidas, intuitivas y centradas en el usuario.
                </p>
                <div className="flex flex-row gap-4">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="flex items-center gap-x-2 px-6 py-4 rounded-xl bg-blue-700/20 text-sm text-foreground hover:bg-primary/90"
                    >
                        Ver Proyectos
                        <IoArrowDown className="mx-auto h-4 w-4" />
                    </button>
                    <a
                        href="/Daniel_Carvajal_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-accent rounded-xl bg-transparent px-6 py-4 text-sm text-foreground hover:bg-secondary"
                    >
                        Ver CV
                    </a>
                </div>
            </div>
        </section>
    )
}
