"use client";

import { useContactForm } from "@/hook/useContactForm";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const contactLinks = [
    {
        icon: IoMailOutline,
        label: "Email",
        value: "cnavarrodaniel18@gmail.com",
        href: "mailto: cnavarrodaniel18@gmail.com",
    },
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/daniel-carvajal",
        href: "https://www.linkedin.com/in/daniel-carvajal-09b8752a6",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "github.com/Danito2001",
        href: "https://github.com/Danito2001",
    },
]


export default function Contact() {

    const { formValue, handleChange, handleSubmit, sended } = useContactForm();
    const { name, email, message } = formValue;

    return (
        <section id="contact" className="min-h-screen px-6 space-y-10">
            <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">Contacto</h2>
                <p className="max-w-xl text-muted">
                    Si estas interesado, puedes contactarme por estos medios.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contactLinks.map((contact, index) => {
                    const Icon = contact.icon

                    return (
                        <Link
                            key={index}
                            href={contact.href}
                            className="group flex items-center rounded-lg border border-border bg-card py-6 px-2 transition-all duration-300 hover:border-blue-700"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                                <Icon className="h-6 w-6 text-blue-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted">{contact.label}</p>
                                <p className="font-medium text-foreground text-sm truncate">{contact.value}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className="flex flex-col gap-y-2 sm:mx-20 lg:max-w-150 lg:mx-auto">
                <p className="text-muted">Si tienes alguna consulta, puedes escribirme.</p>
                <div className="relative">
                    <form
                        onSubmit={handleSubmit}
                        className={`flex flex-col p-4 gap-y-4 border border-border rounded-lg bg-card transition-all duration-500
                            ${sended ? "blur-xs pointer-events-none" : "blur-none pointer-events-auto"}
                        `}
                    >
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Nombre"
                            required
                            minLength={4}
                            className="rounded-md p-2 text-white bg-accent"
                        />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="rounded-md p-2 text-white bg-accent"
                        />
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            value={message}
                            onChange={handleChange}
                            required
                            minLength={10}
                            rows={4}
                            className="rounded-md p-2 text-white bg-accent"
                        />

                        <button
                            type="submit"
                            className="p-4 text-white text-sm bg-blue-700/20 cursor-pointer transition-colors hover:bg-blue-700/50"
                        >
                            Enviar
                        </button>
                    </form>
                    {sended && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="bg-black/60 text-white px-6 py-3 rounded-lg">
                                Correo enviado con exito! 🎉
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-60 border-t border-accent" />
        </section>
    )
}
