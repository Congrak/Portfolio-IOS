export const MobileHeader = () => {
    const tags = ["Linux", "Cybersecurity", "Full-Stack", "React", "Next.js", "TypeScript", "AWS", "CI/CD"];

    return (
        <header className="px-6 pt-12 pb-8 flex flex-col items-center text-center border-b border-white/10">
            <div className="relative mb-4">
                <img src="/yo.jpg" alt="Rodrigo Celis" className="w-24 h-24 rounded-full object-cover border-2 border-red-500" />
                <span className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-[#0d0d0f]"></span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Rodrigo Celis</h1>
            <p className="text-red-400 font-medium text-sm mt-1">Full-Stack Developer → Cybersecurity</p>
            <p className="text-gray-500 text-xs mt-1">📍 Hollywood, Florida &nbsp;·&nbsp; 🐧 Daily Linux User</p>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {tags.map(tag => (
                    <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="flex gap-4 mt-5">
                <a href="https://github.com/Congrak" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-xs px-4 py-2 rounded-full hover:border-red-500/50 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/rodrigo-celis-zamora/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white text-xs px-4 py-2 rounded-full hover:bg-blue-500 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                </a>
            </div>
        </header>
    )
}