import { useState } from "react";
import { LIST_ABOUT } from "../const/aboutConst";
import { renderViews } from "../Components/renderViews";

export const About = () => {
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState("");

  return (
    <>
      <div className="w-[33%] h-full bg-gray-200 bg-opacity-90 p-2">
        <div className="flex justify-start items-center gap-2">
          <p className="text-bold text-gray-500 text-sm">About Me</p>
        </div>
        <ul className="flex flex-col gap-2 ">
          {LIST_ABOUT.map((info, index) => (
            <li
              key={index}
              className={`flex gap-2 items-center cursor-pointer rounded hover:bg-gray-400/30 p-2 transition-colors duration-200 ${
                isActive === index ? "bg-gray-400/30" : ""
              } ${index === 0 && isActive === false ? "bg-gray-400/30" : ""}`
            }
              onClick={() => {
                setIsActive(index);
                setType(info.name);
              }}
            >
              <div className={`h-3 w-3 rounded-full ${info.color}`}></div>
              <p className="text-xs">{info.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full bg-white p-1 border border-t-gray-300">
        {renderViews(type)}
      </div>
    </>
  );
};
