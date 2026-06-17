export const MobileAbout = () => {
    return (
        <div className="flex flex-col gap-5">
            <p className="text-gray-400 text-sm leading-relaxed">
                I'm a <span className="text-red-400 font-semibold">Full-Stack Developer</span> with a background in{" "}
                <span className="text-red-400 font-semibold">Telecommunications Engineering</span> and a growing focus on{" "}
                <span className="text-red-400 font-semibold">Cybersecurity</span>. I've led frontend teams, shipped production systems, and diagnosed complex technical failures at scale — now I'm channeling that expertise into securing them.
            </p>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col gap-3">
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest">What I bring to the table</p>
                {[
                    { title: "Technical Product Specialist @ TikTok", desc: "Resolved 3,000+ cases for VIP enterprise clients, driving $10M+ in revenue." },
                    { title: "Frontend Lead @ Stagewood", desc: "Owned architecture, built design systems, set up CI/CD on AWS." },
                    { title: "Daily Linux User", desc: "Terminal-native — scripting, sysadmin, and low-level tooling is my everyday." },
                    { title: "Cybersecurity Focus", desc: "Transitioning into security (SOC, AppSec, Pentesting) combining all my background." },
                ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                        <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">→</span>
                        <div>
                            <span className="text-white text-xs font-semibold">{item.title}</span>
                            <span className="text-gray-400 text-xs"> — {item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-4 text-xs text-gray-500 border-t border-white/10 pt-4">
                <span>🇻🇪 Spanish — Native</span>
                <span>🇺🇸 English — Fluent</span>
            </div>
        </div>
    );
};