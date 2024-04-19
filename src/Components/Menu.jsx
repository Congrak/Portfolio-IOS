import { useEffect, useState } from "react";
import { Music } from "./Music";
import { Fullscreen } from "../Utils/fullscreen";
import { useAppDispatch } from "../hooks/useStore";
import { isCalculatorOpen } from "../store/calculator/slice";

export const Menua = ({ display }) => {
  const [range, setRange] = useState(80);
  const [volum, setVolum] = useState(50);
  const [isFull, setIsFull] = useState(false);
  const [wifiActive, setWifiActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);
  const [airActive, setAirActive] = useState(false);

  const dispatch = useAppDispatch()

  useEffect(() => {
    const root = document.querySelector("#root");

    root.style.filter = `Brightness(${range}%)`;
  }, [range]);

  return (
    
      <div
        className="absolute z-[100] w-80 h-96 max-w-full top-8 right-0 sm:right-2 p-2.5 grid grid-cols-4 grid-rows-5 gap-2 bg-gray-100 bg-opacity-70 rounded-2xl text-black border border-gray-400 border-opacity-50"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 5px 0px;",
          display: display,
        }}
      >
        <div className="bg-white rounded-xl col-span-2 row-span-2 p-2 flex flex-col justify-around">
          <div className="flex space-x-2">
            <div
              className={`flex rounded-full w-[32px] h-[32px] ${
                wifiActive ? "bg-blue-500/90" : "bg-gray-200"
              } items-center justify-center cursor-pointer transition-colors duration-300`}
              onClick={() => setWifiActive(!wifiActive)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={`${wifiActive ? "white" : "black"}`}
                width="16"
                height="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>
            </div>

            <div className="flex flex-col pt-0.5 text-left">
              <p className="">Wi-Fi</p>
              <p className="text-gray-500 text-xs">
                {wifiActive ? "Home" : "Off"}
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <div
              className={`flex rounded-full w-[32px] h-[32px] ${
                blueActive ? "bg-blue-500/90" : "bg-gray-200"
              } items-center justify-center cursor-pointer transition-colors duration-300`}
              onClick={() => setBlueActive(!blueActive)}
            >
              <svg
                stroke={`${blueActive ? "white" : "black"}`}
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
              </svg>
            </div>
            <div className="flex flex-col pt-0.5 text-left">
              <p className="">Bluetooth</p>
              <p className="text-gray-500 text-xs">
                {blueActive ? "Rodri`s Airpods" : "Off"}
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <div
              className={`flex rounded-full w-[32px] h-[32px] ${
                airActive ? "bg-blue-500/90" : "bg-gray-200"
              } items-center justify-center cursor-pointer transition-colors duration-300`}
              onClick={() => setAirActive(!airActive)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="16"
                height="16"
                fill={`${airActive ? "white" : "black"}`}
              >
                <path d="M 25 5 C 13.414063 5 4 14.414063 4 26 C 4 33.917969 8.394531 40.824219 14.878906 44.398438 C 15.363281 44.664063 15.972656 44.488281 16.238281 44.007813 C 16.503906 43.523438 16.328125 42.914063 15.84375 42.644531 C 9.980469 39.414063 6 33.179688 6 26 C 6 15.496094 14.496094 7 25 7 C 35.503906 7 44 15.496094 44 26 C 44 33.179688 40.019531 39.414063 34.15625 42.644531 C 33.671875 42.914063 33.496094 43.523438 33.761719 44.007813 C 34.027344 44.488281 34.636719 44.664063 35.121094 44.398438 C 41.605469 40.824219 46 33.917969 46 26 C 46 14.414063 36.585938 5 25 5 Z M 25 9 C 15.621094 9 8 16.621094 8 26 C 8 32.410156 11.554688 38 16.808594 40.894531 C 17.289063 41.160156 17.898438 40.984375 18.167969 40.5 C 18.433594 40.019531 18.257813 39.410156 17.773438 39.140625 C 13.140625 36.589844 10 31.671875 10 26 C 10 17.703125 16.703125 11 25 11 C 33.296875 11 40 17.703125 40 26 C 40 31.671875 36.859375 36.589844 32.226563 39.140625 C 31.742188 39.410156 31.566406 40.019531 31.832031 40.5 C 32.101563 40.984375 32.710938 41.160156 33.191406 40.894531 C 38.445313 38 42 32.410156 42 26 C 42 16.621094 34.378906 9 25 9 Z M 25 13 C 17.832031 13 12 18.832031 12 26 C 12 30.898438 14.71875 35.175781 18.734375 37.390625 C 19.21875 37.65625 19.828125 37.480469 20.09375 37 C 20.359375 36.515625 20.183594 35.90625 19.703125 35.640625 C 16.304688 33.765625 14 30.160156 14 26 C 14 19.914063 18.914063 15 25 15 C 31.085938 15 36 19.914063 36 26 C 36 30.160156 33.695313 33.765625 30.296875 35.640625 C 29.816406 35.90625 29.640625 36.515625 29.90625 37 C 30.171875 37.480469 30.78125 37.65625 31.265625 37.390625 C 35.28125 35.175781 38 30.898438 38 26 C 38 18.832031 32.167969 13 25 13 Z M 25 17 C 20.042969 17 16 21.042969 16 26 C 16 29.390625 17.882813 32.351563 20.660156 33.886719 C 20.976563 34.0625 21.359375 34.058594 21.667969 33.871094 C 21.976563 33.6875 22.164063 33.351563 22.15625 32.992188 C 22.144531 32.628906 21.945313 32.304688 21.625 32.132813 C 19.464844 30.941406 18 28.648438 18 26 C 18 22.121094 21.121094 19 25 19 C 28.878906 19 32 22.121094 32 26 C 32 28.648438 30.535156 30.941406 28.375 32.132813 C 28.054688 32.304688 27.855469 32.628906 27.84375 32.992188 C 27.835938 33.351563 28.023438 33.6875 28.332031 33.871094 C 28.640625 34.058594 29.023438 34.0625 29.339844 33.886719 C 32.117188 32.351563 34 29.390625 34 26 C 34 21.042969 29.957031 17 25 17 Z M 25 21 C 22.25 21 20 23.25 20 26 C 20 27.882813 21.0625 29.519531 22.597656 30.363281 C 23.082031 30.632813 23.691406 30.457031 23.957031 29.972656 C 24.222656 29.488281 24.046875 28.878906 23.5625 28.613281 C 22.632813 28.097656 22 27.136719 22 26 C 22 24.332031 23.332031 23 25 23 C 26.667969 23 28 24.332031 28 26 C 28 27.136719 27.367188 28.097656 26.4375 28.613281 C 25.953125 28.878906 25.777344 29.488281 26.042969 29.972656 C 26.308594 30.457031 26.917969 30.632813 27.402344 30.363281 C 28.9375 29.519531 30 27.882813 30 26 C 30 23.25 27.75 21 25 21 Z M 25 25 C 24.449219 25 24 25.449219 24 26 C 24 26.550781 24.449219 27 25 27 C 25.550781 27 26 26.550781 26 26 C 26 25.449219 25.550781 25 25 25 Z" />
              </svg>
            </div>
            <div className="flex flex-col pt-0.5 text-left">
              <p className="">Airdrop</p>
              <p className="text-gray-500 text-xs">
                {airActive ? "Everyone" : "Receiving Off"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 col-span-2 bg-white rounded-xl items-center justify-center">
          <div className="flex rounded-full w-[32px] h-[32px] bg-gray-200 items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path>
            </svg>
          </div>
          <div>Ligth Mode</div>
        </div>
        <div
          className="bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer"
          onClick={() => dispatch(isCalculatorOpen())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M23,3H8C6.895,3,6,3.895,6,5v20c0,1.105,0.895,2,2,2h15c1.105,0,2-0.895,2-2V5C25,3.895,24.105,3,23,3z M10.5,16 c0.828,0,1.5,0.672,1.5,1.5S11.328,19,10.5,19S9,18.328,9,17.5S9.672,16,10.5,16z M9,12.5c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5S11.328,14,10.5,14S9,13.328,9,12.5z M15.5,24h-5C9.672,24,9,23.328,9,22.5S9.672,21,10.5,21h5 c0.828,0,1.5,0.672,1.5,1.5S16.328,24,15.5,24z M15.5,19c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 S16.328,19,15.5,19z M15.5,14c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.328,14,15.5,14z M20.5,24 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S21.328,24,20.5,24z M20.5,19c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S21.328,19,20.5,19z M20.5,14c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 S21.328,14,20.5,14z M22,9H9V6h13V9z" />
          </svg>

          <span>Calculator</span>
        </div>
        <div
          className="bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer"
          onClick={() => {
            Fullscreen();
            setIsFull(!isFull);
          }}
        >
          {isFull ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"></path>
            </svg>
          )}

          <span>Fullscreen</span>
        </div>
        <div className="bg-white col-span-4 rounded-xl p-2 flex flex-col gap-2">
          <div className="text-start">
            <span>Brightness</span>
          </div>
          <div className="flex items-center border border-gray border-l-2 border-r-0 border-b-2 border-t-2 pl-1 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path>
            </svg>
            <div className="w-full h-6 bg-gray-200 rounded-full flex items-start border-gray border-l-0 border-r-2">
              <input
                type="range"
                min="10"
                max="100"
                onChange={(e) => setRange(e.target.value)}
                value={range}
                className="h-full accent-white active:accent-white focus:ring ring-white bg-white border-gray  border-l-0 rounded-full appearance-none range-lg cursor-pointer"
                style={{ width: `${range}%`, accentColor: "white" }}
              />
            </div>
          </div>
        </div>
        <div className="bg-white col-span-4 rounded-xl p-2 flex flex-col gap-2">
          <div className="text-start">
            <span>Volume</span>
          </div>
          <div className="flex items-center border border-gray border-l-2 border-r-0 border-b-2 border-t-2 pl-1 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z"></path>
              <path d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z"></path>
              <path d="M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z"></path>
            </svg>
            <div className="w-full h-6 bg-gray-200 rounded-full flex items-start border-gray border-l-0 border-r-2">
              <input
                type="range"
                min="10"
                max="100"
                onChange={(e) => setVolum(e.target.value)}
                value={volum}
                className="h-full accent-white active:accent-white focus:ring ring-white bg-white border-gray  border-l-0 rounded-full appearance-none range-lg cursor-pointer"
                style={{ width: `${volum}%`, accentColor: "white" }}
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white col-span-4 rounded-xl cursor-pointer">
          <Music volum={volum} />
        </div>
      </div>
    
  );
};
