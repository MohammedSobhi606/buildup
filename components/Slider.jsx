import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
export default function Slider() {
  return (
    <Swiper
      className="bg-white shadow-lg
    w-full  max-w-[630px]  "
      autoplay
    >
      <SwiperSlide>
        <div className="px-12 py-8! md:pl-[60px] flex  items-center gap-9 h-full! ">
          <div className="relative xl:flex size-[90px] hidden">
            <Image
              src={"/img/testimonials/avatar.jpg"}
              fill
              quality={100}
              alt="fafa"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eveniet provident, officiis delectus ea eum, aperiam .
            </p>
            <p className="font-semibold text-primary">jone doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-12 py-8! md:pl-[60px] flex  items-center gap-9 h-full! ">
          <div className="relative xl:flex size-[90px] hidden">
            <Image
              src={"/img/testimonials/avatar.jpg"}
              fill
              quality={100}
              alt="fafa"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eveniet provident, officiis delectus ea eum, aperiam .
            </p>
            <p className="font-semibold text-primary">jone doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-12 py-8! md:pl-[60px] flex  items-center gap-9 h-full! ">
          <div className="relative xl:flex size-[90px] hidden">
            <Image
              src={"/img/testimonials/avatar.jpg"}
              fill
              quality={100}
              alt="fafa"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eveniet provident, officiis delectus ea eum, aperiam .
            </p>
            <p className="font-semibold text-primary">jone doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-12 py-8! md:pl-[60px] flex  items-center gap-9 h-full! ">
          <div className="relative xl:flex size-[90px] hidden">
            <Image
              src={"/img/testimonials/avatar.jpg"}
              fill
              quality={100}
              alt="fafa"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eveniet provident, officiis delectus ea eum, aperiam .
            </p>
            <p className="font-semibold text-primary">jone doe</p>
          </div>
        </div>
      </SwiperSlide>
      <SliderButtons />
    </Swiper>
  );
}

import { useSwiper } from "swiper/react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

export function SliderButtons() {
  const swipe = useSwiper();
  return (
    <div className="w-max absolute bottom-2 right-2 flex gap-1 z-10">
      <button
        onClick={() => {
          swipe.slidePrev();
        }}
        className="bg-accent text-primary text-2xl size-[48px] flex-center transition-all cursor-pointer"
      >
        <RiArrowLeftLine />
      </button>
      <button
        onClick={() => {
          swipe.slideNext();
        }}
        className="bg-accent text-primary text-2xl size-[48px] flex-center transition-all cursor-pointer disabled:pointer-none disabled:text-gray-400"
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
}
