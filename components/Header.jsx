"use client";

import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as Scrollink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import MyButton from "./MyButton";
export default function Header() {
  const Links = [
    { name: "home", path: "home" },
    { name: "about", path: "about" },
    { name: "services", path: "services" },
    { name: "projects", path: "projects" },
    { name: "contact", path: "contact" },
  ];
  return (
    // the past dosen't matter
    <header className="bg-primary py-4 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Logo />
          </div>
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex  text-white">
              {Links.map((item, inx) => (
                <li
                  key={inx}
                  className="hover:text-accent cursor-pointer uppercase text-sm font-primary font-medium tracking-normal after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                >
                  <Scrollink
                    activeClass="text-accent"
                    to={item.path}
                    spy={true}
                    smooth={true}
                  >
                    {item.name}
                  </Scrollink>{" "}
                </li>
              ))}
            </ul>
            <MyButton
              text={"get a quote"}
              icon={
                <RiArrowRightUpLine
                  className="text-white text-xl group-hover:rotate-45
    group-hover:text-primary transition-all duration-200"
                />
              }
              bgColor={"bg-white"}
            />
          </nav>
          {/* nav mobile */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
