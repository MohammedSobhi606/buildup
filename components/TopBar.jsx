import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";
export default function TopBar() {
  return (
    <section
      name="home"
      className="py-4 xl:h-16 xl:p-0 bg-gradient-to-t from-accent to-amber-200 flex items-center"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* phone & email */}
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex-center">
                <RiPhoneFill />
              </div>
              <p>+010 17283953</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex-center">
                <RiMailFill />
              </div>
              <p>moha2000.yahoo@gmail.com</p>
            </div>
          </div>
          {/* socials */}
          <div>
            <Socials
              containerStyles={"flex items-center gap-8  mx-auto xl:mx-0"}
              iconStyle={"text-primary hover:text-amber-900"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
