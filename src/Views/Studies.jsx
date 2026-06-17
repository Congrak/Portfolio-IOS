const education = [
    {
        degree: "Full-Stack Developer",
        school: "4Geeks Academy",
        period: "09/2022 – 02/2023",
        color: "bg-red-500",
        description: "Intensive full-stack bootcamp covering React, Node.js, Python, REST APIs, SQL, and deployment.",
    },
    {
        degree: "Telecommunications Engineering",
        school: "Universidad Católica Andrés Bello",
        period: "2014 – 2017",
        color: "bg-blue-500",
        description: "Engineering program with focus on networks, systems, and signal processing.",
    },
];

const experience = [
    {
        role: "TikTok Technical Product Specialist",
        company: "Atento / TikTok",
        location: "Miramar, Florida",
        period: "06/2024 – Present",
        color: "bg-green-500",
        bullets: [
            "Resolved 3,000+ technical cases for VIP clients and major global brands",
            "Delivered data-backed recommendations generating over $10M in revenue",
            "Investigated ad-delivery and algorithm behavior for high-budget accounts",
        ],
    },
    {
        role: "Software Developer",
        company: "Stagewood Consortium Inc.",
        location: "Miami, Florida",
        period: "09/2023 – 06/2024",
        color: "bg-purple-500",
        bullets: [
            "Led frontend team, owning end-to-end software architecture decisions",
            "Built reusable design system with Storybook across multiple apps",
            "Migrated legacy tooling to Next.js; integrated Mapbox, WordPress APIs",
            "Established CI/CD workflows on AWS for React deployments",
        ],
    },
    {
        role: "Frontend Web Developer",
        company: "Ugo Digital Ltd",
        location: "United States",
        period: "11/2022 – 09/2023",
        color: "bg-yellow-500",
        bullets: [
            "Created and maintained web interfaces with HTML, CSS, JS, and React",
            "Ensured cross-browser and cross-device compatibility",
        ],
    },
];

export const Studies = () => {
    return (
        <div className="h-full w-full overflow-y-auto">
            <div className="flex justify-start text-2xl">
                <h1 className="pl-2 font-semibold">Education & Experience</h1>
            </div>
            <div className="flex flex-col p-6 pt-3 gap-5">
                <div>
                    <h2 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3">Education</h2>
                    <div className="flex flex-col gap-3">
                        {education.map((item, index) => (
                            <div key={index} className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1 flex-shrink-0`}></div>
                                    {index < education.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-1"></div>}
                                </div>
                                <div className="pb-2">
                                    <p className="font-semibold text-gray-700 text-sm">{item.degree}</p>
                                    <p className="text-red-500 text-xs font-medium">{item.school}</p>
                                    <p className="text-gray-400 text-xs">{item.period}</p>
                                    <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3">Work Experience</h2>
                    <div className="flex flex-col gap-3">
                        {experience.map((item, index) => (
                            <div key={index} className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1 flex-shrink-0`}></div>
                                    {index < experience.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-1"></div>}
                                </div>
                                <div className="pb-2">
                                    <p className="font-semibold text-gray-700 text-sm">{item.role}</p>
                                    <p className="text-red-500 text-xs font-medium">{item.company} · {item.location}</p>
                                    <p className="text-gray-400 text-xs mb-1">{item.period}</p>
                                    <ul className="flex flex-col gap-0.5">
                                        {item.bullets.map((b, i) => (
                                            <li key={i} className="text-gray-500 text-xs flex gap-1">
                                                <span className="text-red-400 mt-0.5">·</span> {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};