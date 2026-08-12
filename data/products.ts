export type Product = {
  slug: string;
  name: string;
  category: string; // matches a Category.slug in data/categories.ts
  description: string;
};

/**
 * Curated showcase, not the full catalog — per the "don't display hundreds
 * of products initially" guidance. Descriptions are generic/placeholder;
 * replace with real manufacturer/model data before launch.
 */
export const PRODUCTS: Product[] = [
  { slug: "professional-convection-oven", name: "Professional Convection Oven", category: "ovens", description: "Precision heat distribution for high-volume commercial kitchens." },
  { slug: "professional-coffee-machine", name: "Professional Coffee Machine", category: "coffee-equipment", description: "Commercial-grade extraction systems for hospitality operations." },
  { slug: "commercial-refrigerator", name: "Commercial Refrigerator", category: "refrigeration", description: "Reliable cold-chain equipment for foodservice and institutional use." },
  { slug: "planetary-mixer", name: "Planetary Mixer", category: "mixers", description: "Heavy-duty mixing for bakery and industrial food production." },
  { slug: "commercial-dishwasher", name: "Commercial Dishwasher", category: "dishwashing", description: "High-throughput washing systems built for continuous service." },
  { slug: "shawarma-machine", name: "Shawarma Machine", category: "shawarma-equipment", description: "Vertical grill systems for fast-food and QSR operations." },
  { slug: "stainless-steel-work-table", name: "Stainless Steel Work Table", category: "kitchen-furniture", description: "Durable, hygienic workstations for professional kitchens." },
  { slug: "vacuum-packaging-machine", name: "Vacuum Packaging Machine", category: "packaging", description: "Sealing and packaging equipment for food safety and shelf life." },
  { slug: "soft-serve-machine", name: "Soft Serve Machine", category: "ice-cream-equipment", description: "Continuous-freeze equipment for cafés and dessert operations." },
  { slug: "bar-refrigerator-station", name: "Bar Refrigerator Station", category: "bar-equipment", description: "Integrated cold storage and prep for high-volume bar service." },
  { slug: "hot-holding-cabinet", name: "Hot Holding Cabinet", category: "hot-holding", description: "Maintains safe serving temperature for prepared food." },
  { slug: "commercial-food-processor", name: "Commercial Food Processor", category: "food-processing", description: "High-capacity cutting and processing for kitchen prep lines." },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}
