"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu3Line } from "react-icons/ri";
import Logo from "./Logo";
import { Link as Scrollink } from "react-scroll";
import { useState } from "react";
import Socials from "./Socials";

export default function NavMobile() {
  const Links = [
    { name: "home", path: "home" },
    { name: "about", path: "about" },
    { name: "services", path: "services" },
    { name: "projects", path: "projects" },
    { name: "contact", path: "contact" },
  ];
  const [open, setopen] = useState(false);

  return (
    <div>
      <Sheet onOpenChange={setopen} open={open}>
        <SheetTrigger className="text-white flex-center text-3xl cursor-pointer">
          <RiMenu3Line />
        </SheetTrigger>

        <SheetContent className={"bg-primary border-none text-white"}>
          <div className="flex items-center flex-col pt-16 pb-8 justify-between h-full">
            <SheetHeader>
              <Logo />
              <SheetTitle className={"sr-only"}>Navigation</SheetTitle>
            </SheetHeader>
            <ul className="w-full flex flex-col gap-10 justify-center text-center">
              {Links.map((item, inx) => (
                <li
                  className="text-white uppercase font-primary font-medium tracking-[1.2px] cursor-pointer  "
                  key={inx}
                >
                  <Scrollink
                    activeClass="text-accent"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      setopen(false);
                    }}
                  >
                    {item.name}
                  </Scrollink>
                </li>
              ))}
            </ul>

            <Socials containerStyles={"text-white text-xl flex gap-6 "} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
