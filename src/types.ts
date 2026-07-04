export interface Character {
  id: string;
  name: string;
  codename: string;
  src: string;
  bg: string;
  panel: string;
  edition: string;
  height: string;
  material: string;
  description: string;
}

export const IMAGES: Character[] = [
  {
    id: "01",
    name: "GLOBO",
    codename: "HYPER-ORANGE",
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png",
    bg: "#F4845F",
    panel: "#F79B7F",
    edition: "Drop #001 (150 Units)",
    height: "22cm / 8.6\"",
    material: "Solid Premium Urethane Resin",
    description: "The original round pioneer. Features deep tactile textures and a glowing tangerine glossy protective seal."
  },
  {
    id: "02",
    name: "SPROUT",
    codename: "CHLORO-GREEN",
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png",
    bg: "#6BBF7A",
    panel: "#85CC92",
    edition: "Drop #002 (120 Units)",
    height: "25cm / 9.8\"",
    material: "Matte Eco-Composite Resin",
    description: "A whimsical leafy friend embodying standard forest spirits. Hand-polished with rich velvet green finishes."
  },
  {
    id: "03",
    name: "CHERRY",
    codename: "BUBBLEGUM-PINK",
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png",
    bg: "#E882B4",
    panel: "#ED9DC4",
    edition: "Drop #003 (90 Units)",
    height: "21cm / 8.2\"",
    material: "Satin Semi-Translucent Polymer",
    description: "High-contrast chic. Hand-painted with neon accents and double-coated for ultraviolet color preservation."
  },
  {
    id: "04",
    name: "AERO",
    codename: "STRATO-BLUE",
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png",
    bg: "#6EB5FF",
    panel: "#8DC4FF",
    edition: "Drop #004 (200 Units)",
    height: "24cm / 9.4\"",
    material: "Gloss Acrylic and Polystone",
    description: "Sleek and aerodynamic. Reflective chrome-like highlights paired with smooth atmospheric sky blue coatings."
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceAnnually: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}
