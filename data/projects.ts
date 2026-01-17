// data/projects.ts
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  gridSpan: string; // This will control the bento-box sizing
  gallery?: string[]; // Array of extra images 
}

export const projects: Project[] = [
    {
    id: 1,
    title: "Sine Festival Digital Content",
    category: "User Interface Design",
    image: "/Sine.png",
    gridSpan: "md:col-span-1 md:row-span-1", // Small square
  },
    {
    id: 2,
    title: "CBC VIsual Notes",
    category: "Branding",
    image: "/cbc.png", 
    gridSpan: "md:col-span-2 md:row-span-2", // Large square
  },
  {
    id: 3,
    title: "Pratt Heman",
    category: "Branding",
    image: "Pratt.jpg",
    gridSpan: "md:col-span-2 md:row-span-1", // Wide rectangle
  },
  {
    id: 4,
    title: "Magis Branding",
    category: "Branding",
    image: "/Magis.png",
    gridSpan: "md:col-span-1 md:row-span-1", // Small square
  },
  {
    id: 5,
    title: "Melk Shelter Website",
    category: "Web Design",
    image: "/website.png",
    gridSpan: "md:col-span-1 md:row-span-1", // Small square
  },
  {
    id: 6,
    title: "Pass The Ball",
    category: "Social Media Campaign",
    image: "/social.png",
    gridSpan: "md:col-span-1 md:row-span-1", // Small square
  },
];