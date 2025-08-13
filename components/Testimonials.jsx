import React from "react";
import MyButton from "./MyButton";
import { RiAddLine } from "react-icons/ri";
import Image from "next/image";
import Slider from "./Slider";
import PreTitle from "./PreTitle";

export default function Testimonials() {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text  */}
          <div className="flex-1 max-w-[480px] xl:pt-[54px] mb-12 xl:mb-0 ">
            <PreTitle text={"testimonials"} />
            <h2 className="h2 mb-6">built on trust ,proven by results</h2>
            <p className="mb-10 max-w-[420px] capitalize">
              from homes to comercial spaces ,our clients share thier
              experiences of working with us ,see how we've helped then bring
              thier dreames to live with expert craftsnesship.
            </p>
            <MyButton
              text={"work with us"}
              bgColor={"bg-accent"}
              icon={<RiAddLine className="text-white size-6" />}
            />
          </div>
          {/* img & slider */}

          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end ">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src={"/img/testimonials/img.jpg"}
                fill
                className="object-cover"
                quality={100}
                alt="jhh"
              />
            </div>
            <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max ">
              {/* slider */}
              <Image
                src={"/img/testimonials/quote.svg"}
                alt="fdaf"
                width={54}
                height={36}
                className="absolute z-20 -top-4 left-14 "
              />
              <Slider />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
