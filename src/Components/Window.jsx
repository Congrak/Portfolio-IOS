import React, { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { renderWindow } from "./renderWindow";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch } from "../hooks/useStore";
import { open } from "../store/window/slice";

export const Window = ({ index, name, width = 700, height = 400 }) => {

  const [maximizar, setMaximizar] = useState(false);
  const [position, setPosition] = useState({ x: 164, y: 33 });
  const [lastPosition, setLastPosition] = useState({ x: 164, y: 33 });

  const winContainer = useRef(null);

  const title = index > 0 ? name + " " + "(" + index + ")" : "Name";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(open(index));
  },[index])

  useEffect(() => {
    setLastPosition({ x: position.x, y: position.y });

    if (maximizar === true) {
      setPosition({ x: 0, y: 0 });
      winContainer.current.style.position = "absolute";
      winContainer.current.style.width = "100vw";
      winContainer.current.style.height = "100vh";
      winContainer.current.style.overflow = "hidden";
      winContainer.current.style.transition = "width 0.5s, height 0.5s, left 0.5s, top 0.5s";
    } else {
      setPosition({ x: lastPosition.x, y: lastPosition.y });
      winContainer.current.style.width = width + "px";
      winContainer.current.style.height = height + "px";
    }
  }, [maximizar]);

  return (
    <Rnd
      size={{
        width: width,
        height: height,
      }}
      position={{ x: position.x, y: position.y }}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      disableDragging={maximizar ? true : false}
      minWidth={width}
      minHeight={height}
      cancel=".cancel-drag"
    >
      <motion.div
      className="w-full h-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1 , scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {name === "Calculator" ? (
          <div
            ref={winContainer}
            className="w-full h-full flex flex-col absolute justify-content-center bg-[#1B1C1E]"
          >
            <div className="flex cursor-default h-5 w-full ">
              <div className="flex justify-start items-center gap-2 h-full w-[50%] bg-[#1B1C1E] p-2">
                <div className=" h-3 w-3 rounded-full bg-red-500 cursor-pointer"></div>
                <div
                  className="h-3 w-3 rounded-full bg-green-500 cursor-pointer"
                  
                ></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400 cursor-pointer"></div>
              </div>
              <div className="bg-white h-full w-[50%] text-start bg-[#1B1C1E]">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="cancel-drag flex h-full w-full cursor-default bg-[#1B1C1E]">
              {renderWindow(name)}
            </div>
          </div>
        ) : (
          <div
            ref={winContainer}
            className="w-full h-full flex flex-col absolute justify-content-center rounded"
          >
            {name === "Terminal" || name === "VS Code" ? (
              <div className="flex cursor-default h-5 w-full ">
                <div className="flex justify-start items-center gap-2 h-full w-[50%] bg-white p-2">
                  <div className=" h-3 w-3 rounded-full bg-red-500 cursor-pointer"></div>
                  <div
                    className="h-3 w-3 rounded-full bg-green-500 cursor-pointer"
                    onClick={() => setMaximizar(!maximizar)}
                  ></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400 cursor-pointer"></div>
                </div>
                <div className="bg-white h-full w-[50%] text-start">
                  <h1>{title}</h1>
                </div>
              </div>
            ) : (
              <div className="flex cursor-default h-5 w-full">
                <div className="flex justify-start items-center gap-2 h-full w-[32.9%] bg-gray-200 bg-opacity-90 p-2">
                  <div className=" h-3 w-3 rounded-full bg-red-500 cursor-pointer"></div>
                  <div
                    className="h-3 w-3 rounded-full bg-green-500 cursor-pointer"
                    onClick={() => setMaximizar(!maximizar)}
                  ></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400 cursor-pointer"></div>
                </div>
                <div className="bg-white h-full w-full">
                  <h1>{title}</h1>
                </div>
              </div>
            )}
            <div className="cancel-drag flex h-full w-full cursor-default">
              {renderWindow(name)}
            </div>
          </div>
        )}
      </motion.div>
    </Rnd>
  );
};
