import Project from "../types/project";

const projects: Project[] = [
  {
    name: "Digital Market",
    description: [""],
    categories: ["Swift", "SwiftUI", "iOS"],
    image: "digital-market.png",
    alt: "Screenshot of Digital Market iOS application",
    source: "https://github.com/zoeschmitt/digital-market",
  },
  {
    name: "Foundation",
    description: [""],
    categories: ["TypeScript", "AWS", "API", "Blockchain"],
    image: "foundation.png",
    alt: "Screenshot of Foundation API web demo",
    source: "https://github.com/zoeschmitt/foundation",
    small: true
  },
  {
    name: "TrailerHub",
    description: [""],
    categories: ["Flutter", "JavaScript", "Firebase", "React"],
    image: "trailerhub.png",
    alt: "Screenshot TrailerHub mobile app",
  },
  {
    name: "Inventory",
    description: [""],
    categories: ["Flutter", "Dart"],
    image: "inventory.png",
    alt: "Screenshot of Inventory mobile app",
    source: "https://github.com/zoeschmitt/inventory-app-flutter",
  },
];
export default projects;
