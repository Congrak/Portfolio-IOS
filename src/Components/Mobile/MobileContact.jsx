export const MobileContact = () => {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-gray-400 text-sm mb-2">Feel free to reach out — I'm open to new opportunities.</p>
            {[
                { label: "Email", value: "rodricelis@gmail.com", href: "mailto:rodricelis@gmail.com", bg: "bg-red-500" },
                { label: "LinkedIn", value: "rodrigo-celis-zamora", href: "https://www.linkedin.com/in/rodrigo-celis-zamora/", bg: "bg-blue-600" },
                { label: "GitHub", value: "Congrak", href: "https://github.com/Congrak", bg: "bg-gray-700" },
                { label: "Phone", value: "(954) 832-2731", href: "tel:+19548322731", bg: "bg-green-600" },
                { label: "Location", value: "Hollywood, Florida", href: null, bg: "bg-orange-500" },
            ].map((item, i) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                    <Wrapper key={i} href={item.href || undefined}
                        target={item.href?.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:border-red-500/40 transition-all group">
                        <div className={`${item.bg} w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold`}>
                            {item.label[0]}
                        </div>
                        <div>
                            <p className="text-gray-500 text-[10px]">{item.label}</p>
                            <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">{item.value}</p>
                        </div>
                    </Wrapper>
                );
            })}
        </div>
    )
}   