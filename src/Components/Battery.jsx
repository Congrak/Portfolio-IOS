import { useEffect, useState } from "react";

export const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const updateBatteryInfo = (battery) => {

      setLevel(battery.charging ? battery.level * 0.73: battery.level * 0.73);
      
      setBatteryLevel(battery.charging ? true : false);
    };

    navigator.getBattery().then((battery) => {
      updateBatteryInfo(battery);

      battery.addEventListener("levelchange", () => updateBatteryInfo(battery));

      battery.addEventListener("chargingchange", () =>
        updateBatteryInfo(battery)
      );
    });
  }, []);

  return (
    <div className="relative">
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
          d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
        />
      </svg>
      <div
        className={`absolute top-[35%] left-[0.1rem] h-[0.36rem] ${
          batteryLevel === true ? "bg-green-400" : "bg-white"
        }`}
        style={{ maxWidth: "0.73rem", width: level + "rem" }}
      ></div>
      {batteryLevel === true ? (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="absolute top-[35%] left-[28%]"
          height="6"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
        </svg>
      ) : (
        ""
      )}
    </div>
  );
};
