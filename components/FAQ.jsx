"use client";
import { motion } from "framer-motion";

import PreTitle from "./PreTitle";
import FaqItem from "./FaqItem";

export default function FAQ() {
  const ques = [
    {
      title: "how long will my construction project take",
      description:
        "the duration depends on the project scope and size typically ranging from a few weeks to several months we will provide a detailed timeline after assessment",
    },
    {
      title: "what materials do you use",
      description:
        "we use high-quality materials such as concrete steel and sustainable wood ensuring durability and eco-friendliness specific choices can be discussed during planning",
    },
    {
      title: "can you handle both residential and commercial builds",
      description:
        "yes we specialize in both residential and commercial construction offering tailored solutions for homes offices and industrial spaces",
    },
    {
      title: "what is the cost of a construction project",
      description:
        "costs vary based on design materials and labor we offer free estimates after an initial consultation to provide a clear budget",
    },
    {
      title: "do you provide design services",
      description:
        "yes we offer design consultation and planning services to create blueprints that meet your vision and local regulations",
    },
    {
      title: "how do you ensure project safety",
      description:
        "we adhere to strict safety standards with trained personnel regular inspections and compliance with local building codes",
    },
  ];
  const faqItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3, // stagger
      },
    }),
  };
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-20 ">
          <PreTitle text={"Faq"} center />
          <h2 className="h2 mb3">Got Questions ? w've got you coverd</h2>
          <p className="mb-11 max-w-[480px] mx-auto  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            laudantium nemo debitis natus assumenda facilis error earum libero
            ipsam eius .
          </p>
        </div>
        <ul className="flex flex-col w-full gap-5">
          {ques.map((q, index) => (
            <motion.li
              variants={faqItemVariants}
              initial="hidden"
              whileInView={"visible"}
              custom={index}
              key={index}
              className=""
            >
              <FaqItem desc={q.description} title={q.title} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
