"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export function SliderOne() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="max-md:mx-4 md:w-[415px] ">
      <div ref={sliderRef} className="flex flex-row keen-slider  ">
        <div className="keen-slider__slide  px-6 py-6 bg-[#131516] rounded-[24px] mt-14 border border-[#222729] flex flex-col  ">
          <Image
            className="flex self-start"
            src="/tag.svg"
            width={21}
            height={23}
            alt={"logo"}
          />
          <p className="text-lg leading-5 text-[#B0B7BE] py-4 font-medium">
            Conteúdos preparados para trazer mais segurança, independente do seu
            nível. Conteúdos preparados para trazer mais segurança, independente
            do seu nível.Conteúdos preparados para trazer mais segurança,
            independente do seu nível.
          </p>
          <p className="text-lg leading-5 text-[#F2F4F8] italic font-medium ">
            Assinante VAROS
          </p>
        </div>

        <div className="keen-slider__slide  px-6 py-6 bg-[#131516] rounded-[24px] mt-14 border border-[#222729] flex flex-col ">
          <Image
            className="flex self-start"
            src="/tag.svg"
            width={21}
            height={23}
            alt={"logo"}
          />
          <p className="text-lg leading-5 text-[#B0B7BE] py-4 font-medium">
            Eu acompanho vários gestores de fundo e educadores financeiros. Tu
            de longe és um dos que mais contribui para minha construção de
            conhecimento. A forma que colocas coisas que outras pessoas fazem
            parecer complexas de uma forma super simples e ginal. Parabéns! E
            continue.
          </p>
          <p className="text-lg leading-5 text-[#F2F4F8] italic font-medium ">
            Assinante VAROS
          </p>
        </div>

        <div className="keen-slider__slide px-6 py-6 bg-[#131516] rounded-[24px] mt-14 border border-[#222729] flex flex-col  ">
          <Image
            className="flex self-start"
            src="/tag.svg"
            width={21}
            height={23}
            alt={"logo"}
          />
          <p className="text-lg leading-5 text-[#B0B7BE] py-4 font-medium">
            Nunca vi algo tão completo que nem o de vocês. E olha que esses 11
            anos que tô no MF já assinei muita casa de análise. Nada chega perto
            do trabalho seu e da sua equipe.
          </p>
          <p className="text-lg leading-5 text-[#F2F4F8] italic font-medium ">
            Assinante VAROS
          </p>
        </div>
      </div>
    </div>
  );
}
