const links = [
  {
    label: "Email",
    value: "rodricelis@gmail.com",
    href: "mailto:rodricelis@gmail.com",
    color: "bg-red-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "rodrigo-celis-zamora",
    href: "https://www.linkedin.com/in/rodrigo-celis-zamora/",
    color: "bg-blue-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Congrak",
    href: "https://github.com/Congrak",
    color: "bg-gray-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(954) 832-2731",
    href: "tel:+19548322731",
    color: "bg-green-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Hollywood, Florida",
    href: null,
    color: "bg-orange-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export const Contact = () => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="flex justify-start text-2xl">
        <h1 className="pl-2 font-semibold">Contact</h1>
      </div>
      <div className="flex flex-col p-6 pt-3 gap-3">
        <p className="text-gray-400 text-sm">Feel free to reach out — I'm open to new opportunities.</p>
        {links.map((item, index) => (
          item.href ? (
            <a key={index} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-sm transition-all duration-200 group">
              <div className={`${item.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-medium text-gray-700 group-hover:text-red-500 transition-colors">{item.value}</p>
              </div>
            </a>
          ) : (
            <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <div className={`${item.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-medium text-gray-700">{item.value}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};