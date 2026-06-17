import { useEffect, useState } from "react";
import { Music } from "./Music";
import { Fullscreen } from "../../Utils/fullscreen";
import { useAppDispatch } from "../../hooks/useStore";
import { isCalculatorOpen } from "../../store/calculator/slice";
import { useTheme } from "../../context/ThemeContext";

export const Menua = ({ display }) => {
  const [range, setRange] = useState(80);
  const [volum, setVolum] = useState(50);
  const [isFull, setIsFull] = useState(false);
  const [wifiActive, setWifiActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);
  const [airActive, setAirActive] = useState(false);

  const dispatch = useAppDispatch();
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.querySelector("#root").style.filter = `brightness(${range}%)`;
  }, [range]);

  const panel = darkMode ? "bg-gray-800/90 border-gray-600/40" : "bg-gray-100 bg-opacity-70 border-gray-400 border-opacity-50";
  const card = darkMode ? "bg-gray-700" : "bg-white";
  const txt = darkMode ? "text-white" : "text-black";
  const sub = darkMode ? "text-gray-400" : "text-gray-500";
  const ico = darkMode ? "bg-gray-600" : "bg-gray-200";
  const track = darkMode ? "#4b5563" : "#e5e7eb";

  return (
    <div
      className={`absolute z-[100] w-80 h-96 max-w-full top-8 right-0 sm:right-2 p-2.5 grid grid-cols-4 grid-rows-5 gap-2 ${panel} rounded-2xl border`}
      style={{ display, boxShadow: "rgba(0,0,0,0.3) 0px 0px 5px 0px" }}
    >
      {/* Connectivity — col-span-2 row-span-2 */}
      <div className={`${card} rounded-xl col-span-2 row-span-2 p-2 flex flex-col justify-around`}>
        <div className="flex space-x-2">
          <div
            className={`flex rounded-full w-[32px] h-[32px] ${wifiActive ? "bg-blue-500/90" : ico} items-center justify-center cursor-pointer transition-colors duration-300`}
            onClick={() => setWifiActive(!wifiActive)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={wifiActive ? "white" : darkMode ? "white" : "black"} width="16" height="16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
          </div>
          <div className="flex flex-col pt-0.5 text-left">
            <p className={`text-xs font-semibold ${txt}`}>Wi-Fi</p>
            <p className={`text-[10px] ${sub}`}>{wifiActive ? "Home" : "Off"}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <div
            className={`flex rounded-full w-[32px] h-[32px] ${blueActive ? "bg-blue-500/90" : ico} items-center justify-center cursor-pointer transition-colors duration-300`}
            onClick={() => setBlueActive(!blueActive)}
          >
            <svg stroke={blueActive ? "white" : darkMode ? "white" : "black"} fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
            </svg>
          </div>
          <div className="flex flex-col pt-0.5 text-left">
            <p className={`text-xs font-semibold ${txt}`}>Bluetooth</p>
            <p className={`text-[10px] ${sub}`}>{blueActive ? "Rodri's AirPods" : "Off"}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <div
            className={`flex rounded-full w-[32px] h-[32px] ${airActive ? "bg-blue-500/90" : ico} items-center justify-center cursor-pointer transition-colors duration-300`}
            onClick={() => setAirActive(!airActive)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16" height="16" fill={airActive ? "white" : darkMode ? "white" : "black"}>
              <path d="M 25 5 C 13.414063 5 4 14.414063 4 26 C 4 33.917969 8.394531 40.824219 14.878906 44.398438 C 15.363281 44.664063 15.972656 44.488281 16.238281 44.007813 C 16.503906 43.523438 16.328125 42.914063 15.84375 42.644531 C 9.980469 39.414063 6 33.179688 6 26 C 6 15.496094 14.496094 7 25 7 C 35.503906 7 44 15.496094 44 26 C 44 33.179688 40.019531 39.414063 34.15625 42.644531 C 33.671875 42.914063 33.496094 43.523438 33.761719 44.007813 C 34.027344 44.488281 34.636719 44.664063 35.121094 44.398438 C 41.605469 40.824219 46 33.917969 46 26 C 46 14.414063 36.585938 5 25 5 Z M 25 25 C 24.449219 25 24 25.449219 24 26 C 24 26.550781 24.449219 27 25 27 C 25.550781 27 26 26.550781 26 26 C 26 25.449219 25.550781 25 25 25 Z" />
            </svg>
          </div>
          <div className="flex flex-col pt-0.5 text-left">
            <p className={`text-xs font-semibold ${txt}`}>AirDrop</p>
            <p className={`text-[10px] ${sub}`}>{airActive ? "Everyone" : "Receiving Off"}</p>
          </div>
        </div>
      </div>

      {/* Dark/Light Mode — col-span-2 */}
      <div
        className={`flex space-x-2 col-span-2 ${card} rounded-xl items-center justify-center cursor-pointer hover:brightness-95 transition-all`}
        onClick={toggleTheme}
      >
        <div className={`flex rounded-full w-[32px] h-[32px] items-center justify-center transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-yellow-300"}`}>
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg fill="white" viewBox="0 0 512 512" height="16" width="16">
              <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1031.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
            </svg>
          )}
        </div>
        <span className={`text-sm font-semibold ${txt}`}>{darkMode ? "Dark Mode" : "Light Mode"}</span>
      </div>

      {/* Calculator */}
      <div
        className={`${card} rounded-xl flex flex-col items-center justify-center cursor-pointer hover:brightness-95 transition-all`}
        onClick={() => dispatch(isCalculatorOpen())}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill={darkMode ? "#9ca3af" : "currentColor"} width="20" height="20">
          <path d="M23,3H8C6.895,3,6,3.895,6,5v20c0,1.105,0.895,2,2,2h15c1.105,0,2-0.895,2-2V5C25,3.895,24.105,3,23,3z M10.5,16c0.828,0,1.5,0.672,1.5,1.5S11.328,19,10.5,19S9,18.328,9,17.5S9.672,16,10.5,16z M9,12.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S11.328,14,10.5,14S9,13.328,9,12.5z M15.5,24h-5C9.672,24,9,23.328,9,22.5S9.672,21,10.5,21h5c0.828,0,1.5,0.672,1.5,1.5S16.328,24,15.5,24z M15.5,19c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.328,19,15.5,19z M15.5,14c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.328,14,15.5,14z M20.5,24c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S21.328,24,20.5,24z M20.5,19c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S21.328,19,20.5,19z M20.5,14c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S21.328,14,20.5,14z M22,9H9V6h13V9z" />
        </svg>
        <span className={`text-xs ${txt}`}>Calculator</span>
      </div>

      {/* Fullscreen */}
      <div
        className={`${card} rounded-xl flex flex-col items-center justify-center cursor-pointer hover:brightness-95 transition-all`}
        onClick={() => { Fullscreen(); setIsFull(!isFull); }}
      >
        {isFull ? (
          <svg fill={darkMode ? "#9ca3af" : "currentColor"} viewBox="0 0 16 16" height="16" width="16">
            <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z" />
          </svg>
        ) : (
          <svg fill={darkMode ? "#9ca3af" : "currentColor"} viewBox="0 0 16 16" height="16" width="16">
            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
          </svg>
        )}
        <span className={`text-xs ${txt}`}>Fullscreen</span>
      </div>

      {/* Brightness */}
      <div className={`${card} col-span-4 rounded-xl p-2 flex flex-col gap-2`}>
        <span className={`text-xs text-start font-semibold ${txt}`}>Brightness</span>
        <div className="flex items-center gap-2 px-1">
          <svg fill={darkMode ? "#9ca3af" : "#6b7280"} viewBox="0 0 512 512" height="12" width="12">
            <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
          </svg>
          <input type="range" min="10" max="100" value={range} onChange={(e) => setRange(e.target.value)}
            className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: "#3b82f6", background: track }} />
        </div>
      </div>

      {/* Volume */}
      <div className={`${card} col-span-4 rounded-xl p-2 flex flex-col gap-2`}>
        <span className={`text-xs text-start font-semibold ${txt}`}>Volume</span>
        <div className="flex items-center gap-2 px-1">
          <svg fill={darkMode ? "#9ca3af" : "#6b7280"} viewBox="0 0 512 512" height="12" width="12">
            <path d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm88-80a16 16 0 01-14.29-23.19C314.7 293.93 320 275 320 256c0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z" />
            <path d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z" />
          </svg>
          <input type="range" min="0" max="100" value={volum} onChange={(e) => setVolum(e.target.value)}
            className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: "#3b82f6", background: track }} />
        </div>
      </div>

      {/* Music */}
      <div className={`${card} relative col-span-4 rounded-xl cursor-pointer overflow-hidden`}>
        <Music volum={volum} />
      </div>
    </div>
  );
};