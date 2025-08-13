"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
  PiArrowArcRightBold,
} from "react-icons/pi";
import PreTitle from "./PreTitle";
import MyButton from "./MyButton";
import { fadeIn } from "@/public/variants";
import { AnimatePresence, motion } from "framer-motion";
export default function Services() {
  const services = [
    {
      name: "residential",
      icon: <PiWallFill className="size-8" />,
      title: "Residential Construction Services",
      description: "we build homes with precision and care",
      serviceList: [
        "house construction",
        "renovation projects",
        "interior finishing",
      ],
      thumbs: [
        { url: "/img/services/thumb-1.jpg" },
        { url: "/img/services/thumb-2.jpg" },
      ],
    },
    {
      name: "commercial",
      icon: <PiPaintRollerFill className="size-8" />,
      title: "Commercial Construction Solutions",
      description: "we construct with durability and innovation",
      serviceList: [
        "office buildings",
        "retail spaces",
        "industrial facilities",
      ],
      thumbs: [
        { url: "/img/services/thumb-3.jpg" },
        { url: "/img/services/thumb-4.jpg" },
      ],
    },
    {
      name: "structural",
      icon: <PiWrenchFill className="size-8" />,
      title: "Structural Reinforcement Services",
      description: "we strengthen with expertise and safety",
      serviceList: [
        "foundation repair",
        "beam reinforcement",
        "seismic retrofitting",
      ],
      thumbs: [{ url: "/img/services/thumb-5.jpg" }],
    },
    {
      name: "landscape",
      icon: <PiUserGearFill className="size-8" />,
      title: "Landscape and Outdoor Construction",
      description: "we design outdoor spaces with beauty and function",
      serviceList: [
        "garden landscaping",
        "patio installation",
        "outdoor lighting",
      ],
      thumbs: [{ url: "/img/services/thumb-6.jpg" }],
    },
  ];
  const SlideInVars = {
    hidden: { opacity: 0, x: -300 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
    exit: { opacity: 0, scale: 0 },
  };
  const [value, setvalue] = useState(services[0].name);
  return (
    <section className="pt-16 xl:pt-36  " name="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <PreTitle text={"our services"} center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions from planing to completion
            , with a focus on quality and innovation.
          </p>
        </motion.div>
        <Tabs
          onValueChange={setvalue}
          defaultValue={value}
          className={" flex flex-col xl:flex-row  w-full gap-[30px] "}
        >
          <TabsList
            className={
              " grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8 h-full w-full rounded-none p-0 bg-transparent xl:w-[345px] "
            }
          >
            {services.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={`${item.name}`}
                  className={
                    "w-full rounded-none h-[100px] flex  items-center justify-baseline     p-0 outline-none"
                  }
                >
                  <div
                    className={`h-[100px] w-[100px] flex-center   ${
                      value === item.name
                        ? "bg-primary text-white"
                        : "bg-accent text-primary"
                    }`}
                  >
                    <div className="text-4xl   ">{item.icon}</div>
                  </div>
                  <div className="uppercase  font-primary text-base font-semibold tracking-[.6px]  flex-1  ">
                    {item.name}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="flex-1 bg-white shadow-xl h-[490px] p-[30px] ">
            {services.map((item) => {
              return (
                <AnimatePresence key={item.name}>
                  <TabsContent value={item.name} className={"m-0"}>
                    <motion.div
                      variants={SlideInVars}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                    >
                      {/* content */}

                      <div className="flex flex-col  md:flex-row gap-[30px]">
                        {/* images */}
                        <div className="flex  md:flex-col gap-5 xl:gap-7">
                          {item.thumbs.map((thumb, inx) => {
                            return (
                              <div
                                key={inx}
                                className="relative w-[140px] xl:w-[200px]"
                              >
                                <Image
                                  src={thumb.url}
                                  alt="imkak"
                                  width={100}
                                  height={100}
                                />
                              </div>
                            );
                          })}
                        </div>
                        {/* text , buttons */}
                        <div>
                          <div>
                            <h3 className="h3 mb-6">{item.title}</h3>
                            <p className="mb-10">{item.description}</p>
                            {/* service List */}
                            <ul className="grid grid-cols-2 gap-4 mb-12">
                              {item.serviceList.map((serv, inx) => (
                                <li
                                  key={inx}
                                  className="flex items-center gap-4"
                                >
                                  <div className="size-2 bg-accent rounded-full" />
                                  <p className="text-primary font-medium capitalize ">
                                    {serv}
                                  </p>
                                </li>
                              ))}
                            </ul>
                            <MyButton
                              text={"read more"}
                              bgColor={"bg-accent"}
                              icon={
                                <PiArrowArcRightBold className="size-6 text-white" />
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
