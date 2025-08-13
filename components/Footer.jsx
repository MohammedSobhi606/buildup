import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiCodeLine,
  RiMailFill,
  RiMapFill,
  RiMapPinLine,
  RiPhoneFill,
} from "react-icons/ri";
import MyButton from "./MyButton";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer id="footer" className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-15 xl:gap-7 ">
          {/* logo & text */}
          <div className="flex-1">
            <Link href={"/"} className="flex mb-6">
              <Image src={"/logo.svg"} alt="logo" width={230} height={48} />
            </Link>
            <p className="text-border max-w-[270px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique, eaque, neque recusandae molestias maxime consequatur
            </p>
          </div>
          {/* contacts */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white! mb-10">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>email@ubanbuild.com</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>+01017283953</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMapFill className="text-accent text-xl" />
                <p>email@ubanbuild.com</p>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white! mb-10">Newsletter</h4>
            <p className="mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem obcaecati, minima accusamus quos eligendi laborum
              nam quidem tempora unde fugit repellat maiores mollitia! Incidunt
              dicta eum laudantium officia ipsa neque.
            </p>
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="bg-accent size-12 absolute right-2 top-2 bottom-2 text-primary text-xl flex-center">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copy  */}
      <div
        className="container mx-auto xl:px-0
      py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between"
      >
        <p className="text-border">
          Copyright &copy; 2025 UrbanBuild,All rights reserved.
        </p>
        <div>
          <p className="text-lg text-white font-semibold flex items-center gap-1">
            <RiCodeLine className="text-accent size-7   " /> Mohammed Sobhi
          </p>
          <Socials
            containerStyles={"flex gap-6 text-white justify-center pl-4 mt-2 "}
            iconStyle={"hove:text-accent transition-all"}
          />
        </div>
      </div>
    </footer>
  );
}
