export const MobileNav = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];
    return (
        /* Sticky nav */
        <nav className="sticky top-0 z-50 bg-[#0d0d0f]/90 backdrop-blur border-b border-white/10 flex">
            {navItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex-1 py-3 text-xs font-semibold transition-colors ${activeSection === item.id ? "text-red-400 border-b-2 border-red-400" : "text-gray-500"}`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    )
}   