"use client";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
const animation = { duration: 30000, easing: (t: number) => t };

export function Carousel() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 105,
    },
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },

    loop: true,
    renderMode: "precision",
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider flex flex-row items-center mt-[72px] md:mt-[88px]  pl-11 pt-7 pb-5 btn-gradient rounded-3xl"
    >
      <div className="keen-slider__slide">
        <p className="text-[#B0B7BE] text-xl">visto em</p>
      </div>
      <div className="keen-slider__slide">
        <Image src="/slider1.svg" width={67} height={26} alt={"logo"} />
      </div>

      <div className="keen-slider__slide ">
        <Image src="/slider2.svg" width={25} height={25} alt={"logo"} />
      </div>

      <div className="keen-slider__slide ">
        <Image src="/slider3.svg" width={76} height={28} alt={"logo"} />
      </div>

      <div className="keen-slider__slide ">
        <Image src="/slider4.svg" width={28} height={28} alt={"logo"} />
      </div>

      <div className="keen-slider__slide ">
        <Image src="/slider5.svg" width={28} height={28} alt={"logo"} />
      </div>
      <div className="keen-slider__slide">
        <Image src="/slider6.svg" width={141} height={28} alt={"logo"} />
      </div>
    </div>
  );
}
