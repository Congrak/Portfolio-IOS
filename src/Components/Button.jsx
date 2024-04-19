export const Button = ({ text, background, textColor, onClick }) => {
  return (
    <div
      className={`w-[60px] h-[40px] flex justify-center items-center cursor-pointer ${background} ${textColor}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </div>
  );
};
