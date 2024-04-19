import { useEffect, useState } from "react";
import { TECHNOLOGYS } from "../Utils/Technology";
import { motion } from "framer-motion";

export const Skill = () => {
  const [technologys, setTechnologys] = useState([]);
  const [getSvg, setGetSvg] = useState([]);

  const SVG = getSvg.slice(0, getSvg.length - 2);

  useEffect(() => {
    let newArray = [];
    let newArray2 = [];

    for (let key in TECHNOLOGYS) {
      newArray.push(TECHNOLOGYS[key]);
      newArray2.push(TECHNOLOGYS[key].svg);
    }
    setGetSvg(newArray2);
    setTechnologys(newArray);
  }, []);

  return (
    <div className="h-full w-full border-red-500 w-full h-full">
      <div className="flex justify-start text-2xl gap-2`">
        <h1 className="pl-2">Skills:</h1>
      </div>
      <div className="flex justify-start p-10 pt-3 w-full h-full">
        <div className="flex">
          <ul>
            {technologys.slice(0, technologys.length - 2).map((info, index) => (
              <motion.li
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 3, delay: index * 0.1 }}
                className="flex text-left text-gray-500 gap-2 pb-2"
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-check"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="red"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                {info.name}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full h-full flex flex-col items-center gap-2">
            {SVG.map((item, index) => (
                <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 3, delay: index * 0.1 }}
                className="w-[25px] h-[25px]"
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}/>
            ))}
         
        </div>
      </div>
    </div>
  );
};
