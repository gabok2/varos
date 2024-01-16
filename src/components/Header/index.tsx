"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-[10px] px-36 max-xl:px-12">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/varos.svg" width={80} height={14} alt={"logo"} />
        </div>

        <div onClick={handleMenu} className="max-xl:overflow-visible xl:hidden">
          <Image
            src={isMenuOpen ? "/close.svg" : "/menu.svg"}
            width={32}
            height={14}
            alt={"logo"}
          />
        </div>
        <div className="max-xl:hidden">
          <div className="flex items-center ml-[72px]  mr-44  ">
            <a href="#" className="text-sm text-[#FAFAFA] mr-20  ">
              Produtos
            </a>
            <a href="#" className="text-sm text-[#FAFAFA] mr-20   ">
              Blog
            </a>
            <a href="#" className="text-sm text-[#FAFAFA] mr-20   ">
              Conteúdos
            </a>
            <a href="#" className="  text-sm text-[#FAFAFA] ">
              Quem Somos
            </a>
          </div>
        </div>
        <div className="max-xl:hidden">
          <div className="px-2 flex items-center">
            <div className="flex items-center px-3 gap-4">
              <Image src="/cart.svg" width={24} height={24} alt={"logo"} />
              <p className="text-lg text-[#FAFAFA] min-w-[133px] ">
                Assinar Agora
              </p>
            </div>
            <div className="flex items-center px-3 gap-4">
              <Image src="/user.svg" width={24} height={24} alt={"logo"} />
              <p className=" text-lg text-[#FAFAFA]">Entrar </p>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div className="w-full pt-7 pb-[54px] flex flex-row xl:hidden">
            <div className="  h-[1px] w-full bg-[#222729]" />
          </div>

          <div className="flex  md:justify-end xl:hidden">
            <div className="flex flex-col w-[336px] ">
              <div>
                <Button.Root>
                  <Button.Background
                    borderColor={"#FAFAFA"}
                    backgroundColor="transparent"
                    radius={4}
                    paddingLeft={13}
                    paddingRight={13}
                    paddingTop={10}
                    paddingBottom={10}
                  >
                    <Button.Icon icon="user" height={24} width={24} />
                    <Button.Title bold={600} title="ENTRAR" color="#FAFAFA" />
                  </Button.Background>
                </Button.Root>
              </div>

              <div className="pt-4">
                <Button.Root>
                  <Button.Background
                    borderColor={"#FAFAFA"}
                    backgroundColor="#19C819"
                    radius={4}
                    paddingLeft={13}
                    paddingRight={13}
                    paddingTop={10}
                    paddingBottom={10}
                  >
                    <Button.Title
                      bold={600}
                      title="ASSINAR AGORA"
                      color="#131313"
                    />
                  </Button.Background>
                </Button.Root>
              </div>

              <div className="bg-[#222729] rounded-lg  py-7 mt-[40px]">
                <h1 className="px-7 text-base font-bold text-[#FAFAFA]">
                  Produtos
                </h1>

                <div className="w-full pt-5 pb-8 flex flex-row">
                  <div className="  h-[1px] w-full bg-[#B0B7BE]" />
                </div>

                <div className="flex flex-row px-7 justify-between items-start">
                  <div className="flex flex-col  gap-2">
                    <h1 className="text-base font-semibold leading-5 text-[#FAFAFA]">
                      Carteiras
                    </h1>

                    <p className="text-xs text-[#B0B7BE] leading-3">
                      Aprenda a encontrar as melhores ações, invista seu
                      dinheiro de maneira inteligente e construa um futuro
                      financeiro sólido.
                    </p>
                  </div>
                  <Image
                    src="/arrowLight.svg"
                    width={18}
                    height={18}
                    alt={"logo"}
                  />
                </div>

                <div className="flex flex-row px-7 justify-between items-start pt-6">
                  <div className="flex flex-col  gap-2 ">
                    <h1 className="text-base font-semibold leading-5 text-[#FAFAFA]">
                      Cursos
                    </h1>

                    <p className="text-xs text-[#B0B7BE] leading-3">
                      Aprenda a encontrar as melhores ações, invista seu
                      dinheiro de maneira inteligente e construa um futuro
                      financeiro sólido.
                    </p>
                  </div>
                  <Image
                    src="/arrowLight.svg"
                    width={18}
                    height={18}
                    alt={"logo"}
                  />
                </div>

                <div className="flex flex-row px-7 justify-between items-start pt-6">
                  <div className="flex flex-col  gap-2 ">
                    <h1 className="text-base font-semibold leading-5 text-[#FAFAFA]">
                      Consultoria
                    </h1>

                    <p className="text-xs text-[#B0B7BE] leading-3">
                      Aprenda a encontrar as melhores ações, invista seu
                      dinheiro de maneira inteligente e construa um futuro
                      financeiro sólido.
                    </p>
                  </div>
                  <Image
                    src="/arrowLight.svg"
                    width={18}
                    height={18}
                    alt={"logo"}
                  />
                </div>
              </div>

              <h1 className="px-7 text-base font-bold text-[#FAFAFA] pt-[64px]">
                Blog
              </h1>
              <div className="w-full py-6  flex flex-row xl:hidden">
                <div className="  h-[1px] w-full bg-[#222729]" />
              </div>

              <h1 className="px-7 text-base font-bold text-[#FAFAFA]">
                Quem somos
              </h1>
              <div className="w-full py-6  flex flex-row xl:hidden">
                <div className="  h-[1px] w-full bg-[#222729]" />
              </div>

              <h1 className="px-7 text-base font-bold text-[#FAFAFA] ">
                Conteúdos
              </h1>
              <div className="w-full py-6  flex flex-row xl:hidden">
                <div className="  h-[1px] w-full bg-[#222729]" />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
