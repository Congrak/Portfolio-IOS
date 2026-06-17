import { useState } from "react";
import { MobileHeader } from "../Components/Mobile/MobileHeader";
import { MobileNav } from "../Components/Mobile/MobileNav";
import { MobileAbout } from "../Components/Mobile/MobileAbout";
import { MobileProjects } from "../Components/Mobile/MobileProjects";
import { MobileExperience } from "../Components/Mobile/MobileExperience";
import { MobileContact } from "../Components/Mobile/MobileContact";

export const MobilePortfolio = () => {
    const [activeSection, setActiveSection] = useState("about");

    return (
        <div className="min-h-screen bg-[#0d0d0f] text-white font-sans">
            <MobileHeader />
            <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
            {/* Content */}
            <main className="px-5 py-6 max-w-lg mx-auto">

                {/* About */}
                {activeSection === "about" && <MobileAbout />}

                {/* Projects */}
                {activeSection === "projects" && (
                    <MobileProjects />
                )}

                {/* Experience */}
                {activeSection === "experience" && (
                    <MobileExperience />
                )}

                {/* Contact */}
                {activeSection === "contact" && (
                    <MobileContact />
                )}

            </main>

            {/* Footer */}
            <footer className="text-center text-gray-600 text-xs py-8 border-t border-white/5">
                Rodrigo Celis · {new Date().getFullYear()}
            </footer>
        </div>
    );
}
