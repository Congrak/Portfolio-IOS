<div align="center">

# 🖥️ Portfolio — Rodrigo Celis

**An interactive macOS-style portfolio built with React**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org)

[Live Demo](https://congrak.github.io/portfolio-ios) · [LinkedIn](https://www.linkedin.com/in/rodrigo-celis-zamora/) · [GitHub](https://github.com/Congrak)

</div>

---

## Overview

Desktop users get a fully interactive **macOS desktop simulation** — open windows, drag them around, use a real terminal, toggle dark/light mode from the control center. Mobile users get a clean, fast **modern portfolio website** that adapts automatically.

---

## Features

### Desktop (≥768px) — macOS Simulation
- **Draggable & resizable windows** with macOS traffic light buttons (close, minimize, maximize)
- **Interactive Terminal** powered by xterm.js with a custom command system
- **Control Center** — brightness, volume, Wi-Fi, Bluetooth, AirDrop, calculator, fullscreen toggle, dark/light mode
- **Animated Dock** with magnification effect on hover
- **Dark / Light Mode** with smooth transitions across all UI elements
- **CV Download** — click your name in the navbar

### Mobile (<768px) — Modern Portfolio
- Tabbed single-page layout: About · Projects · Experience · Contact
- Dark theme with red accent matching the desktop version
- Fully responsive, no horizontal scroll

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Window System | react-rnd |
| Animations | Framer Motion |
| Terminal | xterm.js + FitAddon + WebLinksAddon |
| Audio | Howler.js |
| Notifications | react-hot-toast |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Congrak/portfolio-ios.git
cd portfolio-ios

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Terminal Commands

Open the Terminal window on the desktop and try:

```bash
help                    # list all available commands
ls                      # list files in current directory
cd about                # navigate to about folder
cat me.txt              # read about me
cat contact.txt         # read contact info
cat important.txt       # 👀
cd projects             # navigate to projects folder
ls                      # list project files
cat tintsathome.txt     # read project details
cat whizzlink.txt
cat icondex.txt
cat rodricraft.txt
..                      # go back to root
clear                   # clear the terminal
reset                   # reset terminal to welcome screen
```

---

## Project Structure

```
src/
├── apps/               # Window content (Terminal, Calculator, About, VS Code)
├── Components/         # Core UI (Dock, Navbar, Window, Menu, Folders, MobilePortfolio)
├── Views/              # About Me tabs (Biography, Projects, Studies, Contact)
├── context/            # ThemeContext — dark/light mode
├── store/              # Redux store + slices
├── const/              # Terminal command responses
└── Utils/              # Fullscreen, CV download, tech icons
```

---

## Projects

| Project | Type | Stack | Link |
|---|---|---|---|
| **Tints at Home** | Professional | Next.js, TypeScript, REST | [tintsathomefl.com](https://www.tintsathomefl.com/) |
| **WhizzLink** | Personal | Next.js, TypeScript, PostgreSQL | [whizzlink.vercel.app](https://whizzlink.vercel.app/) |
| **IconDex** | Personal | React, Storybook, Vite, NPM | [icondex.vercel.app](https://icondex.vercel.app/) |
| **Rodricraft** | Personal | React, Three.js, Vite | [rodricraft.netlify.app](https://rodricraft.netlify.app) |

---

## About Me

**Rodrigo Celis** — Full-Stack Developer transitioning into Cybersecurity.

- Technical Product Specialist @ TikTok — resolved 3,000+ cases for VIP clients, driving $10M+ in revenue
- Frontend Lead @ Stagewood Consortium — owned architecture, design systems, and CI/CD on AWS
- Daily Linux user — terminal-native, scripting, sysadmin
- Pursuing SOC / AppSec / Pentesting roles

📍 Hollywood, Florida &nbsp;·&nbsp; 🇻🇪 Spanish (Native) &nbsp;·&nbsp; 🇺🇸 English (Fluent)

---

## Contact

| | |
|---|---|
| Email | rodricelis@gmail.com |
| LinkedIn | [rodrigo-celis-zamora](https://www.linkedin.com/in/rodrigo-celis-zamora/) |
| GitHub | [Congrak](https://github.com/Congrak) |
| Phone | (954) 832-2731 |

---

<div align="center">
  <sub>Built with React · Designed to impress</sub>
</div>
