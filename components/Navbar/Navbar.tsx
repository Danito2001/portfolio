"use client"

import { useState } from "react"
import { FiHome } from "react-icons/fi";
import { FaRegEnvelope, FaRegFolderOpen, FaRegUser  } from "react-icons/fa"
import { LuWrench } from "react-icons/lu"
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const navItems = [
    { id: "hero", label: "Home", icon: FiHome },
    { id: "projects", label: "Projects", icon: FaRegFolderOpen },
    { id: "about", label: "About", icon: FaRegUser },
    { id: "skills", label: "Skills", icon: LuWrench },
    { id: "contact", label: "Contact", icon: FaRegEnvelope },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-card px-4 py-4 lg:hidden">
                <div>
                    <h2 className="text-lg font-bold text-foreground">Portafolio</h2>
                    <p className="text-xs text-muted">Desarollador Frontend</p>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-foreground hover:bg-secondary"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <IoMdClose size={25} /> : <FaBars size={25} />}
                </button>
            </header>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setIsOpen(false)}>
                    <nav
                        className="absolute right-0 top-[73px] w-64 border-l border-border bg-card p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-muted transition-all duration-200 hover:bg-accent hover:text-foreground"
                                >
                                    <Icon className="h-5 w-5" />
                                    {item.label}
                                </button>
                            )
                        })}
                    </nav>
                </div>
            )}
        </>
    )
}
