import { Button } from "@/components/Button";
import { CollapsibleButton } from "@/components/CollapsibleButton";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Carousel } from "@/components/Slider";
import { SliderOne } from "@/components/SliderOne";

import Image from "next/image";
export default function Home() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <section className="flex flex-col  pt-[72px]  md:justify-between md:flex-row md:px-6 px-4 md:pt-20 xl:px-36 xl:items-center ">
        <div>
          <h1 className=" max-md:text-center text-[38px] leading-10  text-[#F2F4F8] font-extrabold md:text-[50px] md:leading-[55px]">
            Investir de forma <br /> mais inteligente <br /> passa por aqui.
          </h1>
          <p className="max-md:text-center text-lg text-[#E2E5EB] pt-6  leading-5 md:w-[413px]">
            Fazemos de tudo para que você possa conquistar seus sonhos da melhor
            forma possível.
          </p>
          <div className="flex pt-8 max-md:items-center max-md:justify-center ">
            <Button.Root>
              <Button.Background
                backgroundColor="rgba(25, 200, 25, 0.40)"
                between
                radius={48}
              >
                <Button.Title title="Comprar agora" color="#19C819" />
                <Button.Icon icon="arrow" height={24} width={24} />
              </Button.Background>
            </Button.Root>
          </div>
          <div className="w-[312px] md:w-[294px] xl:w-[502px] ">
            <Carousel />
          </div>
        </div>
        <div className="max-md:hidden ">
          <Image
            className="object-contain"
            src="/cardsHero.svg"
            width={310}
            height={391}
            alt={"logo"}
          />
        </div>
      </section>

      <section className="flex flex-col  mt-[164px] md:mt-[104px] px-4 md:px-6 xl:px-36  xl:mt-[252px] ">
        <h1 className=" text-2xl font-bold leading-7 text-[#F2F4F8]  text-center  md:text-start md:w-[487px] md:text-[38px] md:leading-[45px] xl:w-[608px]  ">
          Simplifique seus investimentos e alcance seus objetivos
        </h1>
        <p className="text-lg leading-5 text-center text-[#B0B7BE] pt-4 md:w-[487px] md:text-start">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </section>

      <section>
        <CollapsibleButton />
      </section>

      <section className="flex  max-md:flex-col md:px-6 px-4  xl:px-36 flex-row gap-6 lg:justify-between">
        <div className="flex flex-col  md:pt-[200px] ">
          <h1 className="text-[38px] leading-[36px]   font-bold text-[#F2F4F8] pt-[82px] md:px-6 px-4 max-md:text-center">
            Didática de verdade
          </h1>
          <h1 className="text-lg leading-[21px] pt-2 max-md:text-center md:px-6  font-bold text-[#F2F4F8]">
            Garantindo seu aprendizado
          </h1>

          <SliderOne />
        </div>

        <div
          className="flex flex-col 
         md:pt-[191px] "
        >
          <div className="flex max-md:items-center max-md:justify-center  md:block lg:hidden   pt-6 ">
            <Image
              className="object-contain"
              src="/pessoas.svg"
              width={358}
              height={252}
              alt={"logo"}
            />
          </div>

          <div className="flex max-md:items-center max-md:justify-center   pt-6 max-sm:hidden md:hidden lg:block">
            <Image
              className="object-contain"
              src="/pessoas.svg"
              width={564}
              height={398}
              alt={"logo"}
            />
          </div>

          <div className="px-4 py-4 btn-gradient  flex-row  flex md:mt-[48px]  xl:mt-[72px]  max-md:mt-[48px]">
            <div className="flex flex-col mr-4 pb-1 lg:w-[106px] lg:h-[60px] ">
              <p className="text-lg leading-[21px] text-center  font-bold text-[#C6CAD2]">
                + 1000
              </p>

              <p className="text-sm leading-[16px] text-center  font-normal text-[#FAFAFA]">
                Nota média geral das aulas
              </p>
            </div>

            <div className="flex flex-col pb-1 lg:w-[106px] lg:h-[60px]  mr-4">
              <p className="text-lg leading-[21px] text-center  font-bold text-[#19C819]">
                4,8/5
              </p>

              <p className="text-sm leading-[16px] text-center   font-normal text-[#FAFAFA]">
                Nota média geral das aulas
              </p>
            </div>

            <div className="flex flex-col pb-1 lg:w-[106px] lg:h-[60px] ">
              <p className="text-lg leading-[21px] text-center  font-bold text-[#C6CAD2]">
                10k +
              </p>

              <p className="text-sm leading-[16px] text-center   font-normal text-[#FAFAFA]">
                Comunidade
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Input />
      </div>

      <footer className="md:px-6 xl:px-36 px-4 max-md:pt-32 md:pt-[120px] lg:pt-[128px]">
        <div className="flex self-start flex-col md:block lg:hidden">
          <Image src="/varosIcon.svg" width={74} height={74} alt={"logo"} />
          <Image
            className="pt-4"
            src="/varosNome.svg"
            width={74}
            height={13}
            alt={"logo"}
          />
        </div>

        <div className="md:flex md:flex-col-reverse ">
          <div>
            <p className=" text-sm font-medium text-[#F2F4F8]  pt-6 md:pt-12">
              VAROS 2023
            </p>
            <p className=" text-sm font-medium text-[#F2F4F8] pt-2 md:pb-14">
              Todos os direitos reservados
            </p>
          </div>

          <div className="grid max-md:grid-rows-2 max-md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-md:pt-12  grid-cols-4 max-lg:pt-[56px]">
            <div className="max-sm:hidden md:hidden lg:block">
              <Image src="/varosIcon.svg" width={74} height={74} alt={"logo"} />
              <Image
                className="pt-4"
                src="/varosNome.svg"
                width={74}
                height={13}
                alt={"logo"}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-[#F2F4F8]">Cursos</h1>
              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Valuation do Zero ao Avançado 2.0
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Código.py
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Minicurso Reels
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Enciclopédia de FII
              </p>
            </div>

            <div>
              <h1 className="text-lg font-bold text-[#F2F4F8]">Carteiras</h1>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Carteira FATOR
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Carteira Seleção
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Carteira Essencial
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Carteira Small Caps
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Carteira Dividendos
              </p>
              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Carteira Flls
              </p>
            </div>

            <div>
              <h1 className="text-lg font-bold text-[#F2F4F8] max-md:pt-12">
                Sobre
              </h1>
              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Quem somos
              </p>
            </div>

            <div>
              <h1 className="text-lg font-bold text-[#F2F4F8] max-md:pt-12">
                Rede Sociais
              </h1>
              <p className="text-[#F2F4F8] text-sm font-medium pt-6">
                Instagram
              </p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">Twitter</p>

              <p className="text-[#F2F4F8] text-sm font-medium pt-6">Youtube</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
