export const MobileExperience = () => {

    const experience = [
        { role: "TikTok Technical Product Specialist", company: "Atento / TikTok", period: "06/2024 – Present", color: "bg-green-400", bullets: ["Resolved 3,000+ cases for VIP enterprise clients", "Drove $10M+ in revenue through root-cause analysis", "Investigated ad-delivery and algorithm behavior"] },
        { role: "Software Developer (Frontend Lead)", company: "Stagewood Consortium Inc.", period: "09/2023 – 06/2024", color: "bg-purple-400", bullets: ["Led frontend team and owned architecture decisions", "Built design system with Storybook across multiple apps", "CI/CD on AWS, Next.js, Mapbox, WordPress APIs"] },
        { role: "Frontend Web Developer", company: "Ugo Digital Ltd", period: "11/2022 – 09/2023", color: "bg-yellow-400", bullets: ["React interfaces with cross-browser compatibility"] },
    ];

    return (
        <div className="flex flex-col gap-4">
            <div>
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">Education</p>
                <div className="flex flex-col gap-4">
                    {[
                        { degree: "Full-Stack Developer", school: "4Geeks Academy", period: "09/2022 – 02/2023", color: "bg-red-400" },
                        { degree: "Telecommunications Engineering", school: "UCAB", period: "2014 – 2017", color: "bg-blue-400" },
                    ].map((e, i) => (
                        <div key={i} className="flex gap-3">
                            <div className={`w-2.5 h-2.5 rounded-full ${e.color} 
const experience = [
    { role: "TikTok Technical Product Specialist", company: "Atento / TikTok", period: "06/2024 – Present", color: "bg-green-400", bullets: ["Resolved 3,000+ cases for VIP enterprise clients", "Drove $10M+ in revenue through root-cause analysis", "Investigated ad-delivery and algorithm behavior"] },
    { role: "Software Developer (Frontend Lead)", company: "Stagewood Consortium Inc.", period: "09/2023 – 06/2024", color: "bg-purple-400", bullets: ["Led frontend team and owned architecture decisions", "Built design system with Storybook across multiple apps", "CI/CD on AWS, Next.js, Mapbox, WordPress APIs"] },
    { role: "Frontend Web Developer", company: "Ugo Digital Ltd", period: "11/2022 – 09/2023", color: "bg-yellow-400", bullets: ["React interfaces with cross-browser compatibility"] },
];
mt-1.5 flex-shrink-0`}></div>
                            <div>
                                <p className="text-white text-sm font-semibold">{e.degree}</p>
                                <p className="text-red-400 text-xs">{e.school}</p>
                                <p className="text-gray-500 text-xs">{e.period}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">Work Experience</p>
                <div className="flex flex-col gap-5">
                    {experience.map((e, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="flex flex-col items-center">
                                <div className={`w-2.5 h-2.5 rounded-full ${e.color} mt-1.5 flex-shrink-0`}></div>
                                {i < experience.length - 1 && <div className="w-px flex-1 bg-white/10 mt-1"></div>}
                            </div>
                            <div className="pb-2">
                                <p className="text-white text-sm font-semibold">{e.role}</p>
                                <p className="text-red-400 text-xs">{e.company}</p>
                                <p className="text-gray-500 text-xs mb-2">{e.period}</p>
                                <ul className="flex flex-col gap-1">
                                    {e.bullets.map((b, j) => (
                                        <li key={j} className="text-gray-400 text-xs flex gap-1.5">
                                            <span className="text-red-400 flex-shrink-0">·</span>{b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}   