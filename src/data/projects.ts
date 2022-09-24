import Project from "../types/project";

const projects: Project[] = [
  {
    name: "Digital Market",
    description: [
      "An iOS application that utilizes my digital asset API to create an NFT marketplace where users can mint, list, and buy NFTs on the Polygon blockchain.",
    ],
    categories: ["Swift", "SwiftUI", "iOS"],
    image: "digital-market.png",
    alt: "Screenshot of Digital Market iOS application",
    source: "https://github.com/zoeschmitt/digital-market",
  },
  {
    name: "Foundation",
    description: [
      "Digital asset marketplace API built on a blockchain that allows developers to create an NFT marketplace.",
    ],
    categories: ["TypeScript", "AWS", "API", "Blockchain"],
    image: "foundation.png",
    alt: "Screenshot of Foundation API web demo",
    source: "https://github.com/zoeschmitt/foundation",
    small: true,
  },
  {
    name: "TrailerHub",
    description: [
      "A multi-platform trailer sharing mobile app that was deployed on the AppStore & Google Playstore. It gained over 400 users and earned a small profit.",
    ],
    categories: ["Flutter", "JavaScript", "Firebase", "React"],
    image: "trailerhub.png",
    alt: "Screenshot TrailerHub mobile app",
  },
  {
    name: "Inventory",
    description: [
      "Track items across multiple locations, search & filter inventory, edit items, add photos, view COA reports, move inventories throughout locations, and more.",
    ],
    categories: ["Flutter", "Dart"],
    image: "inventory.png",
    alt: "Screenshot of Inventory mobile app",
    source: "https://github.com/zoeschmitt/inventory-app-flutter",
  },
];
export default projects;
