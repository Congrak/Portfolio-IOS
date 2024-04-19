import { useState } from "react";
import { Menua } from "./Menu";
import { BatteryStatus } from "./Battery";
import { handleDownload } from "../Utils/handleDownload";
import { Toaster } from "react-hot-toast";
export const Nav = () => {
  const [isShow, setIsShow] = useState(false);

  const getCurrentTime = () => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const dateString = new Date().toLocaleString("en-US", options);
    return dateString.replace(/,/g, "");
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-slate-800/25 p-1">
        <div className="start flex gap-1">
          <div className="Logo h-4 w-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              fill="white"
            >
              <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796" />
            </svg>
          </div>
          <div className="ul">
            <ul className="flex gap-2">
              <li className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300">
                File
              </li>
              <li className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300">
                Edit
              </li>
              <li className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300">
                View
              </li>
              <li className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300">
                Window
              </li>
              <li className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300">
                Help
              </li>
            </ul>
          </div>
        </div>

        <div
          className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300 cursor-pointer"
          onClick={handleDownload}
        >
          <p>Rodrigo Celis</p>
          <Toaster />
        </div>

        <div className="End">
          <ul className="flex gap-2">
            <li className="p-1">
              <BatteryStatus />
            </li>
            <li className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>
            </li>
            <li className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </li>
            <li
              className="hover:bg-white hover:bg-opacity-30 rounded p-1 ease-in-out duration-300"
              onClick={() => setIsShow(!isShow)}
            >
              <svg
                viewBox="0 0 29 29"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z"></path>
              </svg>
            </li>
            <li className="p-1">{getCurrentTime()}</li>
          </ul>
        </div>
      </nav>
      {isShow && <Menua display={"Visible"} />}
    </>
  );
};
