import Project from "../types/project";

const projects: Project[] = [
  {
    name: "Marketplace API & Mobile App",
    description: [
      "Digital asset marketplace API built on the Polygon blockchain that allows developers to create NFT marketplaces. Also an iOS application that utilizes the API to create an NFT marketplace where users can mint, list, and buy NFTs.",
    ],
    categories: ["TypeScript", "AWS", "API", "Swift", "SwiftUI", "iOS"],
    image: "digital-market.png",
    alt: "Screenshot of Digital Market iOS application",
    source: "https://github.com/zoeschmitt/digital-market",
  },
  {
    name: "TrailerHub",
    description: [
      "A multi-platform trailer sharing mobile app that was deployed on the AppStore & Google Playstore.",
    ],
    categories: ["Flutter", "JavaScript", "Firebase", "React", "Android", "iOS"],
    image: "trailerhub.png",
    alt: "Screenshot TrailerHub mobile app",
  },
  {
    name: "Inventory",
    description: [
      "Inventory tracking app for a CBD company. Track items across multiple locations, search & filter inventory, edit items, add photos, view COA reports, move inventories throughout locations, and more.",
    ],
    categories: ["Flutter", "Dart", "Android", "iOS"],
    image: "inventory.png",
    alt: "Screenshot of Inventory mobile app",
    source: "https://github.com/zoeschmitt/inventory-app-flutter",
  },
  {
    name: "Matrix Transformations Visualizer",
    description: [
      "Utility iOS app that allows you to view transformations like xyz axis rotations, scaling, and offset in real time.",
    ],
    categories: ["iOS", "SwiftUI", "Swift"],
    image: "matrix.png",
    alt: "Screenshot of matrix transformation visualization mobile app",
    source: "https://github.com/zoeschmitt/matrix-transformations-visualizer",
  },
];
export default projects;
