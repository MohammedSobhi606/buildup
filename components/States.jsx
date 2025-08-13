"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const statesData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "client Satisfaction",
  },
  {
    endCountNum: 800,
    endCountText: "*",
    text: "Successful Projects",
  },
  {
    endCountNum: 32,
    endCountText: "K",
    text: "Happy Clients",
  },
  {
    endCountNum: 26,
    endCountText: "+",
    text: "Years of Experiance",
  },
];
export default function States() {
  const ref = useRef(null);
  const Inview = useInView(ref, { margin: "-100px", once: true });
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-16 w-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col  
          items-center
          text-center
          h-full
          gap-12
          xl:flex-row
          xl:text-left
          justify-between
        text-white"
        >
          {statesData.map((item, inx) => {
            return (
              <div className="w-full " key={inx}>
                <div className="text-5xl font-semibold">
                  {Inview && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText} </span>{" "}
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
