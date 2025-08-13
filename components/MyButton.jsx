import React from "react";

export default function MyButton({ text, icon, bgColor }) {
  return (
    <button
      className={`w-[200px] h-[54px] py-[5px] pl-[18px] pr-[5px] flex items-center justify-between min-w-[200px] group ${bgColor} cursor-pointer `}
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold uppercase text-primary text-sm">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary group-hover:bg-accent transition-all duration-200 flex-center">
        {icon}
      </div>
    </button>
  );
}
