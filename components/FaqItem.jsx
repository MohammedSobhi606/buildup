"use client";
import { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";
export default function FaqItem({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border-b flex flex-col py-5">
      <div className="flex items-center justify-between ">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max cursor-pointer">
          {title}
        </h4>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="size-[44px] bg-accent flex-center text-primary cursor-pointer"
        >
          {isOpen ? (
            <RiSubtractFill
              className={`transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </button>
      </div>
      {/* description */}
      <div
        className={`${
          isOpen
            ? "max-h-[200px]  opacity-100  transition-all duration-700 ease-in-out"
            : "max-h-0 opacity-0 transition-all duration-500 ease-in-out"
        } `}
      >
        <p className=" flex items-center max-w-[860px]">{desc}</p>
      </div>
    </div>
  );
}
