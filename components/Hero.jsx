import { RiArrowRightUpLine } from "react-icons/ri";
import MyButton from "./MyButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variants";
export default function Hero() {
  return (
    <section className="h-[76vh] hero-bg relative">
      <div className="bg-primary/30 inset-0 absolute z-10" />
      <div className="container mx-auto h-full flex items-center ">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col  items-center xl:items-start max-w-[600px]">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="h1 mb-4"
          >
            <span className="text-accent">Building </span>
            robust lasting solutions
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            atque voluptate, in suscipit ducimus cumque necessitatibus
            laudantium quaerat est tempora quod pariatur, incidunt sit sint
            labore dolore delectus obcaecati totam.
          </motion.p>
          {/* btn  */}
          <motion.div
            variants={fadeIn("", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
          >
            <MyButton
              text={"see our work"}
              icon={
                <RiArrowRightUpLine
                  className="text-white text-xl group-hover:rotate-45
    group-hover:text-primary transition-all duration-200"
                />
              }
              bgColor={"bg-accent"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
