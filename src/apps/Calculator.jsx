import { useState, useEffect } from "react";
import { Button } from "../Components/Button";

export const Calculator = () => {

  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [operator, setOperator] = useState("");

  useEffect(() => {
    setValue(value)
    
  }, [value])
  
  const handleNumber = (number) => {
    if (value === 0) {
      setValue(number);
    } else if (/^\d{0,10}$/.test(value + number)) {
      setValue(value + number);
    }
  }

  const handleClear = () => {
    setValue(0);
    setPrevValue(0);
    setOperator("");
  }

  console.log(value);

  const handleOperator = (operator) => {

      if (operator === '+') {
        setPrevValue(value);
        setValue(0);
        setOperator(operator);
      } else if (operator === '-') {
        setPrevValue(value);
        setValue(0);
        setOperator(operator);
      } else if (operator === 'x') {
        setPrevValue(value);
        setValue(0);
        setOperator(operator);
      } else if (operator === '/') {
        setPrevValue(value);
        setValue(0);
        setOperator(operator);
      } else if (operator === '%') {
        setPrevValue(value);
        setValue(0);
        setOperator(operator);
      }
  }
  
  const handleEqual = () => {
    if (operator === '+') {
      setValue(parseFloat(prevValue) + parseFloat(value));
    } else if (operator === '-') {
      setValue(parseFloat(prevValue) - parseFloat(value));
    } else if (operator === 'x') {
      setValue(parseFloat(prevValue) * parseFloat(value));
    } else if (operator === '/') {
      setValue(parseFloat(prevValue) / parseFloat(value));
    } else if (operator === '%') {
      setValue(parseFloat(prevValue) % parseFloat(value));
    } 
  }

  const handlePositiveNegative = () => {
      setValue(value * -1);
  }
  return (
    <div className="h-full w-full bg-[#1B1C1E] flex flex-col justify-center items-center">
      <div className="w-full h-full p-2">
        <div className="w-full bg-[#1B1C1E]h-full flex items-center justify-end ">
          <span className="text-3xl text-end text-white">{value}</span>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="flex justify-center items-center w-full gap-1 p-1">
          <Button
            text="AC"
            background={"bg-[#9F9F9F]"}
            textColor={"text-black"}
            onClick={() => handleClear()}
          />
          <Button
            text="+/-"
            background={"bg-[#9F9F9F]"}
            textColor={"text-black"}
            onClick={() => handlePositiveNegative()}
          />
          <Button
            text="%"
            background={"bg-[#9F9F9F]"}
            textColor={"text-black"}
            onClick={() => handleOperator('%')}
          />
          <Button text="÷" background={"bg-[#F69920]"} textColor={"text-white"} onClick={() =>handleOperator('/')}/>
        </div>
        <div className="flex justify-center items-center w-full gap-1 p-1">
          <Button text="7" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('7')} />
          <Button text="8" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('8')}/>
          <Button text="9" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('9')}/>
          <Button text="x" background={"bg-[#F69920]"} textColor={"text-white"} onClick={() =>handleOperator('x')}/>
        </div>
        <div className="flex justify-center items-center w-full gap-1 p-1">
          <Button text="4" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('4')}/>
          <Button text="5" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('5')}/>
          <Button text="6" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('6')}/>
          <Button text="-" background={"bg-[#F69920]"} textColor={"text-white"} onClick={() =>handleOperator('-')}/>
        </div>
        <div className="flex justify-center items-center w-full gap-1 p-1">
          <Button text="1" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('1')}/>
          <Button text="2" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('2')}/>
          <Button text="3" background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('3')}/>
          <Button text="+" background={"bg-[#F69920]"} textColor={"text-white"} onClick={() =>handleOperator('+')}/>
        </div>
        <div className="flex justify-center items-center w-full gap-1 p-1">
          <div
            type="button"
            className="h-[40px] w-[125px] flex justify-start items-center bg-[#313131] text-white cursor-pointer"
            onClick={() =>handleNumber('0')}
          >
            <span className="pl-4">0</span>
          </div>
          <Button text="." background={`bg-[#313131]`} textColor={"text-white"} onClick={() =>handleNumber('.')}/>
          <Button text="=" background={"bg-[#F69920]"} textColor={"text-white"} onClick={() =>handleEqual()}/>
        </div>
      </div>
    </div>
  );
};
