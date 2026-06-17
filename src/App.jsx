import { useState, useEffect } from "react";
import { Background } from "./Components/Web/Backgrund";
import { Dock } from "./Components/Web/Dock";
import { Folders } from "./Components/Web/Folders";
import { Nav } from "./Components/Web/Navbar";
import { MobilePortfolio } from "./Views/MobilePortfolio";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (isMobile) return <MobilePortfolio />;

  return (
    <>
      <div className={`h-screen w-screen text-center relative overflow-hidden font-Apple font-custom transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className={`z-40 relative text-xs ${darkMode ? "text-white" : "text-black"}`}>
          <Nav />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Background />
        </div>
        <Folders />
        <div className="fixed bottom-0 left-0 right-0 pb-4 flex justify-center z-40">
          <Dock />
        </div>
      </div>
    </>
  );
}

export default App;