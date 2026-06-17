import { useEffect, useState } from "react";
import { TECHNOLOGYS } from "../../Utils/Technology";
import { useTheme } from "../../context/ThemeContext";

export const Dock = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [technologys, setTechnologys] = useState([]);
  const { darkMode } = useTheme();

  const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    const tech = Object.values(TECHNOLOGYS);
    setTechnologys(tech);
    const dockDiv = document.getElementById("dockDiv");
    dockDiv.addEventListener("mousemove", handleMouseMove);
    return () => dockDiv.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getScale = (index) => {
    if (hoveredIndex === index) return 2;
    if (hoveredIndex === index - 1 || hoveredIndex === index + 1) return 1.5;
    return 1;
  };

  const getMargin = (index) => {
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) return "0px -65px";
      if (index === hoveredIndex - 1 || index === hoveredIndex + 1) return "0px -20px";
    }
    return "0";
  };

  const dockBg = darkMode
    ? "bg-white/10 border border-white/20"
    : "bg-black/10 border border-black/10";

  return (
    <div
      id="dockDiv"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`flex items-end gap-4 rounded-2xl ${dockBg} backdrop-blur-2xl p-3 hover:px-8 duration-300`}
      style={{ cursor: "pointer", boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.15)" }}
    >
      {technologys.map((info, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          className="aspect-square w-10 rounded-lg"
          style={{ transform: `scale(${getScale(i)})`, translate: getMargin(i), transition: "transform 0.15s ease-in-out" }}
        >
          <a href={info.web} target="_blank" rel="noopener noreferrer">
            <div dangerouslySetInnerHTML={{ __html: info.svg }} />
          </a>
        </div>
      ))}
    </div>
  );
};