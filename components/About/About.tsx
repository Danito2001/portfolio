import { FaCode } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";


const highlights = [
    {
        icon: FaCode,
        title: "Atención al detalle",
        description: "Cuido la consistencia visual y funcional de cada componente.",
    },
    {
        icon: FaRegLightbulb,
        title: "Mentalidad de gestión de estados",
        description: "Siempre estoy pensando en términos de estados y flujo de datos.",
    },
    {
        icon: FaArrowTrendUp,
        title: "Conciencia del rendimiento",
        description: "Tengo en cuenta el rendimiento en la experiencia del usuario.",
    },
]

export default function About() {

    return (
        <section id="about" className="min-h-screen px-6 py-24">
            <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold text-foreground">Sobre mí</h2>
                <p className="max-w-xl text-muted">
                    Un poco sobre mi y porqué decidí ser programador
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                    <p className="leading-relaxed text-muted">
                        Soy un desarrollador frontend enfocado en crear interfaces claras, funcionales y centradas en la experiencia
                        del usuario. Me interesa no solo como se ve una aplicación, sino comó se siente al usarla
                    </p>
                    <p className="leading-relaxed text-muted">
                        Mi crecimiento ha estado impulsado por la curiosidad y el interés constante por mejorar, lo que me ha llevado
                        a dedicar tiempo en aprender nuevas herramientas, resolver problemas y entender mejores formas de desarrollo. 
                    </p>
                    <p className="leading-relaxed text-muted">
                        En mi tiempo libre continúo aprendiendo y explorando nuevas tecnologías, además de mantener tiempos de calma y 
                        reflexión para mantener el enfoque.
                    </p>
                </div>

                <div className="space-y-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="flex gap-4 rounded-lg border border-accent bg-card p-6 transition-color duration-300 hover:border-blue-700"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <Icon className="h-6 w-6 text-muted" />
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
