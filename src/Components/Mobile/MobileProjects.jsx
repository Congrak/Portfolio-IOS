export const MobileProjects = () => {
    const projects = [
        { name: "Tints at Home", url: "https://www.tintsathomefl.com/", type: "Professional", color: "bg-blue-500", stack: ["Next.js", "TypeScript", "REST", "CSS"], description: "Hair coloring service site built with Next.js and TypeScript." },
        { name: "WhizzLink", url: "https://whizzlink.vercel.app/", type: "Personal", color: "bg-purple-500", stack: ["Next.js", "TypeScript", "PostgreSQL", "CSS"], description: "URL shortener with persistent PostgreSQL storage." },
        { name: "IconDex", url: "https://icondex.vercel.app/", type: "Personal", color: "bg-yellow-500", stack: ["Storybook", "React", "TypeScript", "Vite", "NPM"], description: "Icon library published to NPM, documented with Storybook." },
        { name: "Rodricraft", url: "https://rodricraft.netlify.app", type: "Personal", color: "bg-green-500", stack: ["React", "Three.js", "Vite"], description: "3D interactive portfolio built with Three.js and React." },
    ];

    return (
        <div className="flex flex-col gap-3">
            {projects.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:border-red-500/40 transition-all group">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${p.color}`}></div>
                            <span className="font-semibold text-white text-sm group-hover:text-red-400 transition-colors">{p.name}</span>
                        </div>
                        <span className="text-[10px] text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{p.type}</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((t, j) => (
                            <span key={j} className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    );
}
