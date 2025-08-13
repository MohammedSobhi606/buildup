import React from "react";

export default function PreTitle({ text, center }) {
  return (
    <div
      className={`flex gap-3  items-center  mb-4 ${
        center && "justify-center"
      }  `}
    >
      <hr className="size-2 text-accent bg-accent" />
      <h1 className={`uppercase text-primary font-primary tracking-widest`}>
        {text}
      </h1>
      <hr className="size-2 text-accent bg-accent" />
    </div>
  );
}
