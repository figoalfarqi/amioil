export interface ProductItem {
  slug: string;
  title: string;
  category: "Petroleum" | "Gas & NGL" | "Industrial" | "Feedstocks";
  description: string;
  applications: string;
  supplyRequirements: string;
  details?: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    slug: "en590",
    title: "EN590 Diesel",
    category: "Petroleum",
    description: "Ultra-low-sulfur diesel sourcing for qualified buyers.",
    applications: "Road transport, distribution and fleet operations.",
    supplyRequirements:
      "EN590 grade, sulfur limit, destination specification, seasonal properties and inspection requirements.",
    details:
      "We coordinate procurement and logistics for EN590 10ppm ultra-low sulfur diesel, meeting stringent international environmental standards and technical specifications required by major fleet operators and distribution networks.",
  },
  {
    slug: "jet-a1",
    title: "Jet A-1",
    category: "Petroleum",
    description: "Aviation turbine fuel procurement for qualified counterparties.",
    applications: "Aviation fuel distributors and approved aviation supply chains.",
    supplyRequirements:
      "Applicable aviation fuel standard, quality assurance chain, approvals and delivery location.",
    details:
      "Structured aviation turbine fuel supply aligned with DEF STAN 91-091 and ASTM D1655 standards, adhering strictly to Joint Inspection Group (JIG) handling guidelines and comprehensive chain-of-custody verification.",
  },
  {
    slug: "fuel-oil",
    title: "Fuel Oil",
    category: "Petroleum",
    description: "Selected industrial and marine fuel grades.",
    applications: "Industrial energy, marine bunkering and power generation.",
    supplyRequirements:
      "VLSFO / HSFO grade, sulfur, viscosity, density, flash point and agreed marine or industrial standard.",
    details:
      "Reliable sourcing for Very Low Sulfur Fuel Oil (VLSFO 0.5% max), High Sulfur Fuel Oil (HSFO 180 / 380 cSt), and customized industrial heavy fuel oils complying with ISO 8217 marine bunker specifications.",
  },
  {
    slug: "lpg",
    title: "LPG & NGL",
    category: "Gas & NGL",
    description: "LPG, propane and butane supply opportunities.",
    applications: "Industrial users, distributors and gas supply chains.",
    supplyRequirements:
      "Composition, pressure requirements, delivery terminal, vessel suitability and required approvals.",
    details:
      "Liquefied petroleum gas (commercial propane, butane, and mixed refrigerated or pressurized cargoes) sourced from established regional and international gas processing facilities for industrial and commercial distribution.",
  },
  {
    slug: "sulfur",
    title: "Sulfur Granules",
    category: "Industrial",
    description: "Connecting refinery and gas-processing sulfur sources with Indonesian demand.",
    applications: "Fertilizer, sulfuric acid, chemical manufacturing and mineral processing.",
    supplyRequirements:
      "Purity, moisture, ash, acidity, particle size, form, packaging and independent analysis.",
    details:
      "Granular and formed elemental sulfur (99.5% - 99.8% minimum purity), sourced directly from gas desulfurization units and refinery hydrotreaters to serve critical domestic fertilizer plants and metallurgical processing sectors.",
  },
  {
    slug: "petcoke",
    title: "Petroleum Coke",
    category: "Industrial",
    description: "Selected petroleum coke grades for industrial applications.",
    applications: "Cement, industrial energy and other grade-specific applications.",
    supplyRequirements:
      "Fuel-grade or other requested grade, sulfur, ash, volatile matter, moisture and calorific value.",
    details:
      "High calorific fuel-grade petroleum coke (green delayed petcoke) optimized for cement kilns, power stations, and industrial thermal heating, calibrated for specific sulfur and volatile matter parameters.",
  },
  {
    slug: "bitumen",
    title: "Bitumen & Asphalt",
    category: "Industrial",
    description: "Bitumen sourcing for infrastructure and industrial projects.",
    applications: "Road construction, infrastructure and waterproofing.",
    supplyRequirements:
      "Penetration or viscosity grade, applicable standard, packing, heating and discharge arrangements.",
    details:
      "Standard paving grades (Pen 60/70, Pen 80/100, and Viscosity Grade VG-30/40) supplied in bulk hot liquid vessels, new steel drums, or polybags/jumbos designed for national road infrastructure projects.",
  },
  {
    slug: "base-oil",
    title: "Base Oils & Wax",
    category: "Industrial",
    description: "Selected base oil grades and paraffin wax sourcing.",
    applications: "Lubricant blending, manufacturing and specialty industrial products.",
    supplyRequirements:
      "Base oil group and viscosity grade; wax melting point, oil content and packing.",
    details:
      "API Group I (SN 150, SN 500, Bright Stock), Group II (150N, 500N), Group III base oils, alongside fully and semi-refined paraffin wax grades for precision lubricant formulation and industrial manufacturing.",
  },
  {
    slug: "feedstocks",
    title: "Naphtha & Condensate",
    category: "Feedstocks",
    description: "Selected refinery and petrochemical feedstock opportunities.",
    applications: "Refining, petrochemical processing and industrial feedstock use.",
    supplyRequirements:
      "Composition, distillation profile, sulfur, origin and customer acceptance criteria.",
    details:
      "Light and heavy virgin naphtha (paraffinic and full-range) and stabilized gas condensate for petrochemical steam crackers, aromatics plants, and domestic refinery balancing.",
  },
  {
    slug: "industrial-diesel",
    title: "Industrial Diesel & Gasoline",
    category: "Petroleum",
    description: "Fuel procurement tailored to destination-market requirements.",
    applications: "Mining, manufacturing, fleet operators and qualified distributors.",
    supplyRequirements:
      "Diesel or gasoline grade, applicable destination specification, quantity and delivery schedule.",
    details:
      "Commercial-grade automotive gasoil (HSD / Minyak Solar) and finished motor gasoline grades (RON 92, 95) tailored for heavy equipment, extractive industries, captive power generation, and licensed regional fuel dealers.",
  },
];

export const CATEGORIES = ["All", "Petroleum", "Gas & NGL", "Industrial", "Feedstocks"] as const;
