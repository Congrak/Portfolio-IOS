import { useEffect, useState } from "react";
import { TECHNOLOGYS } from "../Utils/Technology";
export const Dock = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [technologys, setTechnologys] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    let tech = [];
    for (let key in TECHNOLOGYS) {
      tech.push(TECHNOLOGYS[key]);
    }
    setTechnologys(tech);

    const dockDiv = document.getElementById("dockDiv");

    dockDiv.addEventListener("mousemove", handleMouseMove);

    return () => {
      dockDiv.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getScale = (index) => {
    if (hoveredIndex === index) return 2;
    if (hoveredIndex === index - 1 || hoveredIndex === index + 1) return 1.5;
    return 1;
  };

  const getMargin = (index) => {
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) return "0px -65px";
      if (index === hoveredIndex - 1 || index === hoveredIndex + 1)
        return "0px -20px";
    }
    return "0";
  };

  const isHover = hoveredIndex == null ? "p-3" : "p-4";

  return (
    <div
      id="dockDiv"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`flex items-end gap-4 rounded-2xl bg-gray-200/25 ${isHover} hover:px-8  duration-300 `}
      style={{cursor:"pointer",}}
    >
      {technologys.map((info, i) => (
        <div
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          className={`aspect-square w-10 rounded-lg`}
          style={{
            transform: `scale(${getScale(i)})`,
            translate: getMargin(i),
            transition: "transform 0.s ease-in-out",
          }}
        >
          <a href={`${info.web}`} target='_blank'rel="noopener noreferrer"><div dangerouslySetInnerHTML={{ __html: info.svg }} /></a>
        </div>
      ))}
    </div>
  );
};
