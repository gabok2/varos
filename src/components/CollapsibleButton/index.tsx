"use client";
import { Button } from "@/components/Button";
import { Collapsible } from "@/components/Collapsible";
import { useState } from "react";
import Image from "next/image";
import { ItemCategory } from "@/app/dtos/ItemCategoryDTO";

export function CollapsibleButton() {
  const [selectedTitle, setSelectedTitle] =
    useState<string>("Carteira Seleção");
  const [selectIcon, setSelectIcon] = useState<string>("/selecão.svg");
  const [openCollapsibles, setOpenCollapsibles] = useState<{
    [key: string]: boolean;
  }>({
    Carteiras: false,
    Cursos: false,
    Consultoria: false,
  });
  const [selectedItem, setSelectedItem] = useState<ItemCategory | null>(null);

  const handleOpenCollapsible = (name: string) => {
    setOpenCollapsibles((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleSelectTitleAndIcon = (name: string, icon: string) => {
    setSelectedTitle(name);
    setSelectIcon(icon);
  };

  return (
    <section className="md:min-h-[556px] pt-12 flex lg:items-baseline max-md:flex-col px-4 flex-row md:px-6 xl:px-36 md:justify-between">
      <div className="flex flex-col md:mr-[22px] lg:mr-[220px]">
        {["Carteiras", "Cursos", "Consultoria"].map((title) => (
          <div
            key={title}
            className="flex items-center max-md:w-full md:self-start pt-4 flex-col w-[270px]"
          >
            <Button.Root fullWidth>
              <Button.Background
                onClick={() => handleOpenCollapsible(title)}
                borderColor="#292222"
                backgroundColor={
                  openCollapsibles[title] ? "#222729" : "#131516"
                }
                radius={40}
              >
                <Button.Title
                  title={title}
                  color="#F2F4F8"
                  bold={openCollapsibles[title] ? 700 : 400}
                />
                <Button.Icon
                  icon={openCollapsibles[title] ? "caretDown" : "caretRight"}
                  width={17}
                  height={17}
                />
              </Button.Background>
            </Button.Root>
            <div
              className={`max-md:w-full ${
                openCollapsibles[title] ? "visible" : "hidden"
              }`}
            >
              <Collapsible
                title={title}
                handleSelectTitleAndIcon={handleSelectTitleAndIcon}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </div>
        ))}
      </div>

      <div className=" bg-[#161413] rounded-[32px] mt-8 border border-[#222729] max-md:w-full flex flex-col md:mt-[50px] lg:mt-0 ">
        <div
          className={`flex items-center  flex-row self-start  px-4 pt-7 pb-6 md:pl-6 
      }  `}
        >
          <div className={`pl-4 `}>
            <Image
              className="pr-4"
              src={selectIcon}
              width={40}
              height={40}
              alt="logo"
            />
          </div>
          <p className="text-sm leading-4 text-[#F2F4F8] font-semibold">
            {selectedTitle}
          </p>
        </div>
        <h1
          className={`text-xl leading-6 text-[#F2F4F8] font-medium  px-4 pb-6 md:pl-[41px]`}
        >
          A combinação perfeita pra você aproveitar a virada da Bolsa
        </h1>
        <p className="text-base leading-5 text-[#D3D6DF]  px-4 md:pl-[41px] md-[347px]">
          Juntamos o que há de melhor nas Carteiras VAROS: uma estratégia
          completa para você ter resultados exponenciais.
        </p>
        <div className="flex items-center justify-center sm:block md:hidden lg:hidden pb-6">
          <Image
            className="pt-6 flex items-center justify-center"
            src="/bolsaValoresCel.svg"
            width={316}
            height={292}
            alt="logo"
          />
        </div>

        <div className="pl-4 w-full md:pl-[41px] max-sm:hidden md:block lg:hidden ">
          <Image
            className="pt-6 rounded-ss-none rounded-e-[32px]"
            src="/bolsaValoresTablet.svg"
            width={621}
            height={429}
            alt="logo"
          />
        </div>

        <div className="pl-4 w-full md:pl-[41px] max-sm:hidden md:hidden lg:block">
          <Image
            className="pt-6 rounded-ss-none rounded-e-[32px]"
            src="/bolsaValores.svg"
            width={851}
            height={329}
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
}
