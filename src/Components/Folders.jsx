import { useEffect, useRef, useState } from "react";
import { Window } from "./Window";
import { useAppSelector, useAppDispatch } from "../hooks/useStore";

export const Folders = () => {
  const [clicks, setClicks] = useState(0);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [renderWindow, setRenderWindow] = useState([]);

  const isOpen = useAppSelector((state) => state.calculator);

  const handleClick = (name) => {
    setClicks((prevClicks) => prevClicks + 1);

    if (clicks % 2 === 0) {
      setIsWindowOpen(true);
    } else {
      setIsWindowOpen(false);
    }

    setTimeout(() => {
      setClicks(0);
    }, 1000);

    if (isWindowOpen) {
      setRenderWindow([...renderWindow, { name: name }]);
    }
  };

  return (
    <div className="absolute z-[60] p-5">
      {renderWindow.map((item, index) => {
        return (
        <Window id ={index} key={index} index={index} name={item.name} />
      )})}
      {isOpen && <Window name={"Calculator"} width={250} height={350} />}
      <div className="text-white text-xs flex flex-col">
        <div
          className="w-20 h-26 m-5 p-2 rounded-md hover:bg-gray-200/25 cursor-pointer"
          onDoubleClick={() => handleClick("About me")}
        >
          <div className="w-full h-full">
            <img src="/me-removebg-preview.png" />
          </div>
          <div className="w-full h-full">
            <p>
              <bold>About me</bold>
            </p>
          </div>
        </div>

        <div
          className="w-20 h-26 m-5 p-2 rounded-md hover:bg-gray-200/25 cursor-pointer"
          onDoubleClick={() => handleClick("Terminal")}
        >
          <div className="w-full h-full">
            <img src="/terminal.png" />
          </div>
          <div className="w-full h-full">
            <p>
              <bold>Terminal</bold>
            </p>
          </div>
        </div>

        <div
          className="w-20 h-26 m-5 p-1 rounded-md hover:bg-gray-200/25 cursor-pointer"
          onDoubleClick={() => handleClick("VS Code")}
        >
          <div className="w-full h-full flex justify-center items-center">
            <img src="/vs.png" className="w-[64px] h-[64px]" />
          </div>
          <div className="w-full h-full">
            <p>
              <bold>VS Code</bold>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
