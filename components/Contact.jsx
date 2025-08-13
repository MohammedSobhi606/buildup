import React from "react";
import Form from "./Form";
import { RiChat1Line, RiMapPinLine, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";

export default function Contact() {
  return (
    <section id="contact" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-lg p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-16 xl:border-r xl:border-border/40 h-[640px] flex flex-col ">
              <h4 className="text-[26px] font-primary font-bold mb-6 capitalize">
                {" "}
                contact us
              </h4>
              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                temporibus veritatis dolorem repellendus odit autem. Earum quod
                quisquam, non ab, a culpa excepturi ad fuga ipsum consequuntur
                eum. Non, nemo.
              </p>

              {/* {contact items} */}
              <div className="flex flex-col gap-5 divide-y-4 divide-accent/50 hover:divide-accent transition-all duration-500 ease-in-out mb-16">
                {/* item */}
                <div className="flex items-start gap-5  ">
                  {/* icon */}
                  <div>
                    <RiChat1Line className="text-2xl text-accent" />
                  </div>
                  {/* text */}
                  <div>
                    <h5 className="text-lg font-semibold font-primary leading-none mb-3">
                      Chat To Us
                    </h5>
                    <p className="capitalize">
                      our frindly team is here to help.
                    </p>
                    <p className="font-semibold text-primary">
                      hI@urban-build.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 ">
                  {/* icon */}
                  <div>
                    <RiMapPinLine className="text-2xl text-accent" />
                  </div>
                  {/* text */}
                  <div>
                    <h5 className="text-lg font-semibold font-primary leading-none mb-3">
                      Chat To Us
                    </h5>
                    <p className="capitalize">come and say hi</p>
                    <p className="font-semibold text-primary">Our Address</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 ">
                  {/* icon */}
                  <div>
                    <RiSmartphoneLine className="text-2xl text-accent" />
                  </div>
                  {/* text */}
                  <div>
                    <h5 className="text-lg font-semibold font-primary leading-none mb-3 capitalize">
                      our phone
                    </h5>
                    <p className="capitalize">
                      our frindly team is here to here from you.
                    </p>
                    <p className="font-semibold text-primary">+201017283953</p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles={" flex gap-9  "}
                iconStyle={"text-primary text-xl"}
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A quote</h2>
              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, aut error. Iste similique, deserunt distinctio, vero
                iusto itaque corporis.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
