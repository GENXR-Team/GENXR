import {

  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const services = [
  {
    title: "VR Applications",
    icon: web,
  },
  {
    title: "AR Applications",
    icon: mobile,
  },
  {
    title: "3D Interactive Application",
    icon: backend,
  },
  {
    title: "Architectural Walkthroughs",
    icon: creator,
  },
];

const technologies = [


  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "VR Applications",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "VR Applications",
    points: [
      "VR Architectural Walkthroughs & Visualization",
      "VR Training Simulations",
      "VR Retail & Shopping Experiences",
      "Virtual Reality Product Configurators",

    ],
  },
  {
    title: "AR Application",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "AR Application",
    points: [
      "AR Product Visualization.",
      "AR Navigation & Wayfinding.",
      "AR Marketing & Advertising.",
      "AR for Factory Walkthrough.",
      "AR for Education and Training.",
    ],
  },
  {
    title: "3D Application",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "3D Application",
    points: [
      "3D Product Configurators",
      "3D Architectural Walkthroughs & Visualizations",
      "3D Simulations and Industrial Applications",
      "3D Training Applications",
      "360 degree Panoramic Virtual Tour",
      "Custom 3D Interactive Solutions",
    ],
  },
  {
    title: "Architectural Walkthroughs",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Architectural Walkthroughs",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Architectural Walkthroughs",
    description:
      " Bring spaces to life with detailed, explorable 3D environments." +
        " Ideal for real estate firms, architects, and interior designers looking to showcase designs interactively.",
    tags: [
      {
        name: "Unreal-Engine",
        color: "blue-text-gradient",
      },
      {
        name: "Blueprint/C++,",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "VR Training Simulations-Moulding Machines",
    description:
      " VR and AI voice Based training simulation model for injection moulding machine to provide guided instructions and measures for " +
        "workers and trainees.",
    tags: [
      {
        name: "Unreal-Engine",
        color: "blue-text-gradient",
      },
      {
        name: "Android SDK & VR",
        color: "green-text-gradient",
      },
      {
        name: "Blueprint/C++,",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Product Configurator",
    description:
      "  Allow to customize and interact with Furniture in real-time 3D with layout and material picker. " +
        "This project is perfect for industries like automotive, furniture, electronics, fashion, and manufacturing.",
    tags: [
      {
        name: "Unreal-Engine",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "Blueprint/C++,",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
