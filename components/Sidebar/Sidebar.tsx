"use client"

import { useState, useEffect } from "react"
import { FiHome } from "react-icons/fi";
import { FaRegEnvelope, FaRegFolderOpen, FaRegUser  } from "react-icons/fa"
import { LuWrench } from "react-icons/lu"


const navItems = [
	{ id: "hero", label: "Inicio", icon: FiHome },
	{ id: "projects", label: "Proyectos", icon: FaRegFolderOpen },
	{ id: "about", label: "Sobre mí", icon: FaRegUser },
	{ id: "skills", label: "Habilidades", icon: LuWrench },
	{ id: "contact", label: "Contacto", icon: FaRegEnvelope },
]

export default function Sidebar() {

	const [ activeSection, setActiveSection ] = useState("hero")

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => document.getElementById(item.id))
			const scrollPosition = window.scrollY + 100

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i]
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(navItems[i].id)
					break
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<aside className="fixed left-0 top-0 z-50 flex-col hidden h-screen w-64 border border-r border-accent bg-card p-6 lg:flex">
			<div className="mb-12">
				<h2 className="text-xl font-bold text-foreground">Portafolio</h2>
				<p className="text-sm text-muted">Desarollador Frontend</p>
			</div>

			<nav className="flex flex-1 flex-col gap-2">
				{navItems.map((item) => {
					const Icon = item.icon
					const isActive = activeSection === item.id
					return (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${isActive
									? "bg-accent text-foreground"
									: "text-muted hover:bg-accent hover:text-foreground"
								}`}
						>
							<Icon className="h-5 w-5"/>
							{item.label}
						</button>
					)
				})}
			</nav>
		</aside>
	)
}
