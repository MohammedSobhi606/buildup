import React from "react";
import PreTitle from "./PreTitle";
import Image from "next/image";
import MyButton from "./MyButton";
import { RiContactsLine } from "react-icons/ri";
import { fadeIn } from "@/public/variants";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-0 xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="max-w-[540px]"
            >
              {/* title */}
              <PreTitle text={"aboute us"} />
              <h2 className="h2 mb-6">
                {" "}
                focused on excellence in every project{" "}
              </h2>
              <p className="mb-11">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, perferendis. Id, quasi tempore molestiae tempora harum
                quas iure ab, iste aut dolor excepturi eligendi voluptate, amet
                aliquid ea quod? Quas?
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src={"../img/about/signature.svg"}
                  width={154}
                  height={38}
                  alt="text"
                />
                <p>company CEO</p>
              </div>
              <MyButton
                text={"contact us"}
                icon={
                  <RiContactsLine className="size-5 text-white group-hover:text-primary" />
                }
                bgColor={"bg-accent"}
              />
            </motion.div>
          </div>
          {/* image
           */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex  xl:justify-center  "
          >
            <div className="relative xl:w-[444px] xl:h-[493px] ">
              <div className="hidden xl:flex w-full h-full bg-accent absolute -top-4 -left-4 -z-10" />

              <img
                src="../img/about/about.png"
                className="w-[444px] h-[492px]"
                alt="text"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
