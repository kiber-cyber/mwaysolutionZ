export type Category = {
  slug: string;
  name: string;
  nameKa: string;
};

/** Product taxonomy — matches the original catalog structure. */
export const CATEGORIES: Category[] = [
  { slug: "coffee-equipment", name: "Coffee Equipment", nameKa: "ყავის აპარატები" },
  { slug: "ice-cream-equipment", name: "Ice Cream Equipment", nameKa: "ნაყინის აპარატები" },
  { slug: "bar-equipment", name: "Bar Equipment", nameKa: "ბარის დანადგარები" },
  { slug: "hot-holding", name: "Hot Holding", nameKa: "თბილად შენახვა" },
  { slug: "refrigeration", name: "Refrigeration", nameKa: "მაცივრები" },
  { slug: "mixers", name: "Mixers", nameKa: "მიქსერები" },
  { slug: "ovens", name: "Ovens", nameKa: "ღუმელები" },
  { slug: "hot-equipment", name: "Hot Equipment", nameKa: "ცხელი დანადგარები" },
  { slug: "food-processing", name: "Food Processing", nameKa: "საკვების გადამუშავება" },
  { slug: "kitchen-furniture", name: "Kitchen Furniture", nameKa: "სამზარეულოს ავეჯი" },
  { slug: "fast-food-equipment", name: "Fast Food Equipment", nameKa: "სწრაფი კვების დანადგარები" },
  { slug: "packaging", name: "Packaging", nameKa: "შესაფუთი მასალა-დანადგარები" },
  { slug: "dishwashing", name: "Dishwashing", nameKa: "ჭურჭლის სარეცხი დანადგარები" },
  { slug: "tableware-accessories", name: "Tableware & Accessories", nameKa: "ჭურჭელი და აქსესუარები" },
  { slug: "shawarma-equipment", name: "Shawarma Equipment", nameKa: "შაურმის აღჭურვილობა" },
  { slug: "spare-parts", name: "Spare Parts & Consumables", nameKa: "სათადარიგო ნაწილები და სახარჯი მასალები" },
];
