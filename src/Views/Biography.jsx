export const Biography = () => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="flex justify-start text-2xl">
        <h1 className="pl-2 font-semibold">Biography</h1>
      </div>
      <div className="flex flex-col p-6 pt-3 gap-4">

        <div className="flex items-center gap-4">
          <img
            src="/yo.jpg"
            alt="Rodrigo Celis"
            className="w-20 h-20 rounded-full object-cover border-2 border-red-500 flex-shrink-0"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Rodrigo Celis</h2>
            <p className="text-red-500 font-medium text-sm">Full-Stack Developer → Cybersecurity</p>
            <p className="text-gray-400 text-xs mt-1">📍 Hollywood, Florida &nbsp;·&nbsp; 🐧 Daily Linux User</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">
          I'm a <span className="font-bold text-red-500">Full-Stack Developer</span> with a background in{" "}
          <span className="font-bold text-red-500">Telecommunications Engineering</span> and a growing focus on{" "}
          <span className="font-bold text-red-500">Cybersecurity</span>. I've led frontend teams, shipped production systems, and diagnosed complex technical failures at scale — now I'm channeling that expertise into securing them.
        </p>

        <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex flex-col gap-2">
          <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">What I bring to the table</p>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-red-400 font-bold mt-0.5">→</span>
            <span><span className="font-semibold text-gray-700">Technical Product Specialist @ TikTok</span> — resolved 3,000+ cases for VIP enterprise clients, driving $10M+ in revenue through root-cause analysis of ad delivery and algorithm behavior.</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-red-400 font-bold mt-0.5">→</span>
            <span><span className="font-semibold text-gray-700">Frontend Team Lead @ Stagewood</span> — owned end-to-end architecture, built design systems, set up CI/CD on AWS, and drove technology decisions across multiple products.</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-red-400 font-bold mt-0.5">→</span>
            <span><span className="font-semibold text-gray-700">Daily Linux user</span> — comfortable in the terminal, scripting, system administration, and low-level tooling. Not just a developer who "has used Linux" — it's my primary environment.</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-red-400 font-bold mt-0.5">→</span>
            <span><span className="font-semibold text-gray-700">Cybersecurity focus</span> — combining my engineering background, technical support expertise, and developer mindset to transition into security roles (SOC, AppSec, Pentesting).</span>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["Linux", "Cybersecurity", "Full-Stack", "React", "Next.js", "TypeScript", "AWS", "CI/CD", "Technical Support", "Team Lead"].map((tag) => (
            <span key={tag} className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">{tag}</span>
          ))}
        </div>

        <div className="flex gap-4 text-xs text-gray-400 border-t border-gray-100 pt-3">
          <span>🇻🇪 Spanish — Native</span>
          <span>🇺🇸 English — Fluent</span>
        </div>

      </div>
    </div>
  );
};