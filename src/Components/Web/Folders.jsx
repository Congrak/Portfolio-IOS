import { useState } from "react";
import { Window } from "./Window";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import { AnimatePresence } from "framer-motion";
import { closeCalculator } from "../../store/calculator/slice";

export const Folders = () => {
  const [windows, setWindows] = useState([]);
  const isOpen = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const handleOpen = (name) => setWindows((prev) => [...prev, { name, id: Date.now() }]);
  const handleClose = (id) => setWindows((prev) => prev.filter((w) => w.id !== id));

  return (
    <div className="absolute z-[60] p-5">
      <AnimatePresence>
        {windows.map((item, index) => (
          <Window key={item.id} index={index} name={item.name} onClose={() => handleClose(item.id)} />
        ))}
        {isOpen && (
          <Window key="calculator" name="Calculator" width={250} height={350} onClose={() => dispatch(closeCalculator())} />
        )}
      </AnimatePresence>

      <div className="text-white text-xs flex flex-col" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
        <div className="w-20 m-3 p-2 rounded-lg hover:bg-white/20 cursor-pointer transition-colors" onDoubleClick={() => handleOpen("About me")}>
          <img src="/me-removebg-preview.png" className="w-full" />
          <p className="text-center font-semibold mt-1">About me</p>
        </div>
        <div className="w-20 m-3 p-2 rounded-lg hover:bg-white/20 cursor-pointer transition-colors" onDoubleClick={() => handleOpen("Terminal")}>
          <img src="/terminal.png" className="w-full" />
          <p className="text-center font-semibold mt-1">Terminal</p>
        </div>
        <div className="w-20 m-3 p-2 rounded-lg hover:bg-white/20 cursor-pointer transition-colors" onDoubleClick={() => handleOpen("VS Code")}>
          <div className="flex justify-center items-center">
            <img src="/vs.png" className="w-16 h-16" />
          </div>
          <p className="text-center font-semibold mt-1">VS Code</p>
        </div>
      </div>
    </div>
  );
};