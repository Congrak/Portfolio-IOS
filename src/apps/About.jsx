import { useState } from "react";
import { LIST_ABOUT } from "../const/aboutConst";
import { renderViews } from "../Components/Web/renderViews";
import { useTheme } from "../context/ThemeContext";

export const About = () => {
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState("");
  const { darkMode } = useTheme();

  const sidebarBg = darkMode ? "bg-[#2a2a2a]" : "bg-gray-200/95";
  const sidebarTitle = darkMode ? "text-gray-400" : "text-gray-500";
  const itemText = darkMode ? "text-gray-200" : "text-gray-700";
  const activeItem = darkMode ? "bg-white/10" : "bg-gray-400/30";
  const hoverItem = darkMode ? "hover:bg-white/5" : "hover:bg-gray-400/20";
  const contentBg = darkMode ? "bg-[#1e1e1e]" : "bg-white";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-300";

  return (
    <div className="flex w-full h-full">
      <div className={`w-[33%] h-full ${sidebarBg} p-2 flex-shrink-0`}>
        <p className={`font-semibold ${sidebarTitle} text-sm mb-2 px-1`}>About Me</p>
        <ul className="flex flex-col gap-1">
          {LIST_ABOUT.map((info, index) => (
            <li
              key={index}
              className={`flex gap-2 items-center cursor-pointer rounded-md px-2 py-1.5 transition-colors duration-150 ${isActive === index || (index === 0 && isActive === false) ? activeItem : hoverItem
                }`}
              onClick={() => { setIsActive(index); setType(info.name); }}
            >
              <div className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${info.color}`} />
              <p className={`text-xs font-medium ${itemText}`}>{info.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`flex-1 h-full ${contentBg} border-l ${borderColor} overflow-hidden`}>
        {renderViews(type)}
      </div>
    </div>
  );
};