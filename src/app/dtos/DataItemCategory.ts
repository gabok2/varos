import { ItemCategory } from "./ItemCategoryDTO";

export type DataItemCategory = {
  id: number;
  title: string;
  items?: ItemCategory[];
};
