const projects = [
    {
        name: "Tints at Home",
        url: "https://www.tintsathomefl.com/",
        type: "Professional",
        color: "bg-blue-500",
        stack: ["Next.js", "TypeScript", "REST", "CSS"],
        description: "Professional project — hair coloring service business site built with Next.js and TypeScript.",
    },
    {
        name: "WhizzLink",
        url: "https://whizzlink.vercel.app/",
        type: "Personal",
        color: "bg-purple-500",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "CSS"],
        description: "URL shortener app with persistent storage using PostgreSQL.",
    },
    {
        name: "IconDex",
        url: "https://icondex.vercel.app/",
        type: "Personal",
        color: "bg-yellow-500",
        stack: ["Storybook", "React", "TypeScript", "Vite", "NPM"],
        description: "Icon library published to NPM, built and documented with Storybook.",
    },
    {
        name: "Rodricraft",
        url: "https://rodricraft.netlify.app",
        type: "Personal",
        color: "bg-green-500",
        stack: ["React", "Three.js", "Vite", "JavaScript"],
        description: "3D interactive portfolio built with Three.js and React.",
    },
];

export const Projects = () => {
    return (
        <div className="h-full w-full overflow-y-auto">
            <div className="flex justify-start text-2xl">
                <h1 className="pl-2 font-semibold">Projects</h1>
            </div>
            <div className="flex flex-col p-6 pt-3 gap-3">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-gray-200 rounded-lg p-3 hover:border-red-300 hover:shadow-sm transition-all duration-200 group"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${project.color}`}></div>
                                <span className="font-semibold text-gray-700 text-sm group-hover:text-red-500 transition-colors">{project.name}</span>
                            </div>
                            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{project.type}</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-2 pl-4">{project.description}</p>
                        <div className="flex flex-wrap gap-1 pl-4">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded-full">{tech}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};