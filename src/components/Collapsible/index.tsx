"use client";

import { DataItemCategory } from "@/app/dtos/DataItemCategory";
import { ItemCategory } from "@/app/dtos/ItemCategoryDTO";
import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  handleSelectTitleAndIcon: (name: string, icon: string) => void;
  selectedItem: ItemCategory | null;
  setSelectedItem: (item: ItemCategory | null) => void;
};

type ItemComponentProps = {
  itemCategory: ItemCategory;
  isSelected: boolean;
  handleSelectedCategory: () => void;
};

const ItemComponent = ({
  itemCategory,
  isSelected,
  handleSelectedCategory,
}: ItemComponentProps) => (
  <div
    onClick={handleSelectedCategory}
    key={itemCategory.id}
    className={`px-4 py-4 rounded-[32px] flex items-center flex-row self-start custom-div cursor-pointer  ${
      isSelected ? "bg-[#222729]" : ""
    }`}
  >
    <Image
      className="pr-4"
      src={itemCategory.image}
      width={40}
      height={40}
      alt={itemCategory.title}
    />
    <p className="text-sm leading-4 text-[#F2F4F8] font-semibold w-[150px]">
      {itemCategory.title}
    </p>
  </div>
);

export function Collapsible({
  title,
  handleSelectTitleAndIcon,
  selectedItem,
  setSelectedItem,
}: Props) {
  const [data, setData] = useState<DataItemCategory[]>([
    {
      id: 0,
      title: "Carteiras",
      items: [
        {
          id: 0,
          title: "Carteira Seleção",
          image: "/selecão.svg",
          type: "carteiras",
        },

        {
          id: 1,
          title: "Carteira FATOR",
          image: "/fator.svg",
          type: "carteiras",
        },

        {
          id: 2,
          title: "Carteira Dividendos",
          image: "/dividendos.svg",
          type: "carteiras",
        },
        {
          id: 3,
          title: "Carteira Essencial",
          image: "/essencial.svg",
          type: "carteiras",
        },
        {
          id: 4,
          title: "Carteira de Flls",
          image: "/fll.svg",
          type: "carteiras",
        },
        {
          id: 5,
          title: "Carteira Small Caps",
          image: "/smallCaps.svg",
          type: "carteiras",
        },
      ],
    },
    {
      id: 1,
      title: "Cursos",
      items: [
        {
          id: 0,
          title: "Valuation 2.0",
          image: "/vza.svg",
          type: "cursos",
        },
        {
          id: 1,
          title: "Código.py",
          image: "/py.svg",
          type: "cursos",
        },
        {
          id: 2,
          title: "Dash.py",
          image: "/dash.svg",
          type: "cursos",
        },
        {
          id: 3,
          title: "Carteira Essencial",
          image: "/essencial.svg",
          type: "cursos",
        },
        {
          id: 4,
          title: "Curso Reels",
          image: "/minicurso.svg",
          type: "cursos",
        },
        {
          id: 5,
          title: "Enciclopédia de Fll",
          image: "/enciclopedia.svg",
          type: "cursos",
        },
      ],
    },
    {
      id: 2,
      title: "Consultoria",
      items: [
        {
          id: 0,
          title: "Consultoria VAROS",
          image: "/vza.svg",
          type: "consultoria",
        },
      ],
    },
  ]);
  const selectedItemCategory = (item: ItemCategory) => {
    handleSelectTitleAndIcon(item.title, item.image);
    setSelectedItem(item);
  };
  const selectedTitle = data.find((item) => item.title === title);

  return (
    <div
      className={`bg-[#131516] px-8 py-8 rounded-[32px] mt-4 border border-[#222729] w-full flex flex-col`}
    >
      {selectedTitle?.items &&
        selectedTitle.items.map((item) => (
          <ItemComponent
            key={item.id}
            itemCategory={item}
            isSelected={
              selectedItem?.type === item.type && selectedItem?.id === item.id
            }
            handleSelectedCategory={() => selectedItemCategory(item)}
          />
        ))}
    </div>
  );
}
