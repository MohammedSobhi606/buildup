"use client";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import PreTitle from "./PreTitle";
import Image from "next/image";
import Link from "next/link";
function Work() {
  const workData = [
    {
      img: "/img/work/restoration.jpg",
      name: "restoration",
      description: "build unique and smart designs ",
      href: "",
    },
    {
      img: "/img/work/construction.jpg",
      name: "construction",
      description: "build unique and smart designs ",
      href: "",
    },
    {
      img: "/img/work/renovation.jpg",
      name: "renovation",
      description: "build unique and smart designs ",
      href: "",
    },
    {
      img: "/img/work/consulting.jpg",
      name: "consulting",
      description: "build unique and smart designs ",
      href: "",
    },
  ];
  return (
    <section id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <PreTitle text={"our work"} center />
          <h2 className="h2 mb-3"> discover our projects</h2>
          <p className="capitalize mb-11 max-w-md mx-auto">
            providing expert services designer to deliver quality and innovation
            in every project we undertake
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {workData.map((item, inx) => (
            <div
              key={inx}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center "
            >
              <Image
                src={item.img}
                alt="image"
                className="object-cover"
                fill
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex items-center justify-between text-center text-white md:translate-y-[188px] md:group md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-2">
                  <h4 className="text-white! font-semibold tracking-[1px] font-primary uppercase text-start">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p> {item.description}</p>
                  </div>{" "}
                </div>{" "}
                <Link
                  href={item.href}
                  className="size-10  bg-accent text-primary text-2xl flex-center absolute xl:right-1 xl:top-1 right-3 "
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
