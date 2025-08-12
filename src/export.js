import building from "../src/assets/building.svg";
import construction from "../src/assets/icon2.svg";
import design from "../src/assets/icon3.svg";
import document from "../src/assets/icon4.svg";
import paint from "../src/assets/icon5.svg";
import support from "../src/assets/icon6.svg";
import hvacIcon from "../src/assets/icon1.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.jpg";
import client2 from "../src/assets/client2.jpg";
import client3 from "../src/assets/client3.png";

//this is for Services section
export const allservices = [
  {
    id: "air-conditioning-ventilation-air-filtration",
    icon: hvacIcon,
    title: "AIR CONDITIONING, VENTILATION & AIR FILTRATION",
    about:
      "Professional installation, maintenance, and repair of HVAC systems including duct cleaning, air quality testing, and energy-efficient solutions for optimal indoor climate control.",
  },
  {
    id: "air-system-installation-maintenance",
    icon: construction,
    title: "AIR SYSTEM INSTALLATION & MAINTENANCE",
    about:
      "Complete air system services from industrial ventilation setups to residential AC units, including regular maintenance plans to ensure peak performance and longevity.",
  },
  {
    id: "plaster-works",
    icon: design,
    title: "PLASTER WORKS",
    about:
      "High-quality plastering services for walls and ceilings, including decorative finishes, drywall installation, and expert repairs for flawless interior surfaces.",
  },
  {
    id: "floor-wall-tiling-works",
    icon: document,
    title: "FLOOR & WALL TILING WORKS",
    about:
      "Precision tile installation for bathrooms, kitchens, and commercial spaces using premium materials, with waterproofing and pattern design services available.",
  },
  {
    id: "electromechanical-equipment-installation-maintenance",
    icon: paint,
    title: "ELECTROMECHANICAL EQUIPMENT INSTALLATION & MAINTENANCE",
    about:
      "Certified installation and servicing of electromechanical systems including elevators, conveyor systems, and automated building controls with 24/7 emergency support.",
  },
  {
    id: "plumbing-sanitary-installation",
    icon: support,
    title: "PLUMBING & SANITARY INSTALLATION",
    about:
      "Comprehensive plumbing solutions from pipe fitting to sanitaryware installation, leak detection, and drainage system maintenance by licensed professionals.",
  },
];

//this is for planning section
export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: MdOutlineDesignServices,
    title: "implementation",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaRegBuilding,
    title: "maintanence",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
];

//testomonials section
export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Their plumbing work saved us from a potential flood disaster - quick, professional, and reasonably priced!",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "The electrical team delivered beyond expectations, completing our complex office rewiring two days ahead of schedule.",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Perfect plaster finish on our luxury villa - attention to detail that transformed our living spaces beautifully.",
    post: "Builder",
  },
];