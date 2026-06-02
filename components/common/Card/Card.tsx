import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface Props {
    title: string;
    description: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
}

export default function Card({projects, className}: {projects: Props, className: string}) {

    return (
        <div className={`${className} flex flex-col gap-y-6 p-6 border border-accent rounded-lg bg-card transition-colors hover:border-blue-700`}>
            <div className="flex items-center justify-between"> 
                <h2 className="text-foreground text-xl font-semibold">{projects.title}</h2>
                <div className="flex gap-x-6 text-muted">
                    <Link 
                        className="p-1 rounded-lg hover:bg-accent"
                        href={projects.githubUrl}
                    >
                        <FaGithub size={22}/>
                    </Link>
                    <Link 
                        className="p-1 rounded-lg hover:bg-accent"
                        href={projects.liveUrl}
                    >
                        <FiExternalLink size={22}/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 text-sm text-muted">
                <span>{projects.description}</span>
                <div className="grid grid-cols-3 gap-2 whitespace-nowrap">
                    {projects.tags.map(tag => 
                        <span 
                            key={tag} 
                            className="px-2 py-1 rounded-lg text-center bg-accent"
                        >
                            {tag}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}