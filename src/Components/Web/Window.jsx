import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import { renderWindow } from "./renderWindow";
import { motion } from "framer-motion";

const isDark = (name) => name === "Terminal" || name === "VS Code" || name === "Calculator";

export const Window = ({ index = 0, name, width = 700, height = 400, onClose }) => {
  const [maximized, setMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 164 + index * 20, y: 33 + index * 20 });
  const [size, setSize] = useState({ width, height });
  const [preMaxSize, setPreMaxSize] = useState({ width, height });
  const [preMaxPos, setPreMaxPos] = useState({ x: 164 + index * 20, y: 33 + index * 20 });

  const rndRef = useRef(null);

  const toggleMaximize = () => {
    if (!maximized) {
      setPreMaxSize({ ...size });
      setPreMaxPos({ ...position });
      setSize({ width: window.innerWidth, height: window.innerHeight - 44 });
      setPosition({ x: 0, y: 0 });
    } else {
      setSize({ ...preMaxSize });
      setPosition({ ...preMaxPos });
    }
    setMaximized((v) => !v);
  };

  const dark = isDark(name);
  const titleBarBg = dark ? "bg-[#3A3A3A]" : "bg-[#EBEBEB]";
  const titleColor = dark ? "text-[#ADADAD]" : "text-[#3C3C3C]";

  return (
    <Rnd
      ref={rndRef}
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
      }}
      disableDragging={maximized}
      enableResizing={!maximized}
      minWidth={250}
      minHeight={200}
      dragHandleClassName="drag-handle"
      style={{ zIndex: 50 }}
    >
      <motion.div
        className="w-full h-full flex flex-col"
        style={{
          borderRadius: maximized ? 0 : 10,
          overflow: "hidden",
          boxShadow: "0 22px 70px rgba(0,0,0,0.5)",
          border: `1px solid ${dark ? "#1a1a1a" : "#b0b0b0"}`,
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ type: "spring", damping: 22, stiffness: 320 }}
      >
        <div
          className={`drag-handle flex items-center h-7 w-full ${titleBarBg} px-3 relative flex-shrink-0 select-none cursor-grab active:cursor-grabbing`}
          style={{ borderBottom: `1px solid ${dark ? "#222" : "#ccc"}` }}
        >
          <div className="flex items-center gap-[6px] z-10">
            <button
              className="h-3 w-3 rounded-full bg-[#FF5F57] flex items-center justify-center group border border-[#e0443e]/60 focus:outline-none"
              onClick={onClose}
              title="Close"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <span className="hidden group-hover:block text-[7px] leading-none text-[#820005] font-bold">✕</span>
            </button>
            <button
              className="h-3 w-3 rounded-full bg-[#FEBC2E] flex items-center justify-center group border border-[#d6a12a]/60 focus:outline-none"
              title="Minimize"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <span className="hidden group-hover:block text-[7px] leading-none text-[#7a4500] font-bold">−</span>
            </button>
            <button
              className="h-3 w-3 rounded-full bg-[#28C840] flex items-center justify-center group border border-[#1aab32]/60 focus:outline-none"
              onClick={toggleMaximize}
              title="Maximize"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <span className="hidden group-hover:block text-[7px] leading-none text-[#006500] font-bold">⤢</span>
            </button>
          </div>
          <span className={`absolute inset-0 flex items-center justify-center text-xs font-medium ${titleColor} pointer-events-none`}>
            {name}
          </span>
        </div>

        <div className={`flex flex-1 overflow-hidden ${dark ? "bg-[#1E1E1E]" : "bg-white"}`}>
          {renderWindow(name)}
        </div>
      </motion.div>
    </Rnd>
  );
};