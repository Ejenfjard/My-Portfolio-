/** @format */

import Pokemon from "../assets/projects/Project-pokemon.png";
import Lightbulbs from "../assets/projects/Project-lightbulbs.png";
import FigmaVideo from "../assets/projects/Figma.mp4";
import EWalletVideo from "../assets/projects/E-wallet.mp4";

export const HERO_CONTENT = `Hej! Jag är en frontend-utvecklare med ett starkt intresse för att skapa responsiva och användarvänliga webbapplikationer. Med en solid grund i HTML, CSS och JavaScript och erfarenhet av ramverk som React, älskar jag att ta mig an nya tekniska utmaningar. Min nyfikenhet driver mig att ständigt utvecklas och lära mig nya teknologier för att kunna skapa ännu bättre lösningar.`;

export const ABOUT_TEXT = `Jag studerar till frontend-utvecklare på Nackademin yrkeshögskola, där jag har byggt en stark grund inom moderna frontend-teknologier och fått insyn i backend-utveckling. Mitt intresse för UI-design har växt över tid, och jag ser fram emot att kombinera det med mina kodningsfärdigheter för att skapa användarvänliga och innovativa digitala lösningar. Innan jag inledde min tekniska resa arbetade jag som förskollärare, där jag utvecklade värdefulla färdigheter i att möta och förstå människor från olika bakgrunder. Jag har lärt mig att arbeta nära i team och hantera många olika perspektiv. Dessa erfarenheter har gett mig en stark grund i att kommunicera effektivt och anpassa mig till olika behov och idéer, vilket jag anser är avgörande för att skapa en positiv och inkluderande miljö inom ett utvecklingsteam.`;

export const EXPERIENCES = [
  {
    year: "2023 - Nuvarande",
    role: "Frontend Developer Student",
    company: "Nackademin",
    description: `Teknikutbildning där visuell design möter kodning, webb- och UX-design. Utbildningen fokuserar på att ge kunskaper inom moderna frontend-metodik`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Typescript",
      "Next.js",
      "Figma",
      "Responsiv design",
      "WCAG, Tillgänglighet",
      "Agilt projektmetodik",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: Lightbulbs,
    description:
      "Ett skolprojekt som utfördes i grupp. Gruppuppgiften var att bygga en företagssida från kravspecifikation till färdig produkt. Projektet genomsyrades av agilt arbetssätt med dagliga stand-ups, och tydliga sprintar. Planeringen gjordes i Trello för att tydligt visualisera processen. ",
    technologies: ["HTML", "CSS", "Responsiv Design", "SEO", "Figma"],
  },
  {
    title: "PokéGame",
    image: Pokemon,
    description:
      "En applikation som bearbetar och visualiserar data från API. Projektet fokuserar på att hantera API-anrop och visa resultat på ett intuitivt sätt.",
    technologies: ["HTML", "CSS", "REST API"],
  },

  {
    title: "Figma-prototype",
    description:
      "I min Figma-prototyp av webshoppen har jag skapat interaktiva flöden som simulerar verkliga användarupplevelser. Jag har integrerat ett designsystem för enhetliga komponenter och stilar, vilket möjliggör effektiv återanvändning i framtida projekt. Dessutom har jag lagt till animationer och övergångar för att göra prototypen mer levande och ge en känsla för hur applikationen kommer att fungera i praktiken.",
    technologies: ["Figma"],
    video: FigmaVideo,
  },
  {
    title: "E-wallet applikation",
    description:
      "E-Wallet är en applikation som låter användare hantera sina betalkort på ett enkelt och intuitivt sätt. Med hjälp av moderna webbutvecklingstekniker, inklusive React, React Router och Redux, erbjuder applikationen en smidig användarupplevelse för att lägga till, visa och hantera betalkort. Användarna kan även anpassa appens utseende genom att välja olika teman. ",
    technologies: ["React", "Redux", "Tailwind"],
    video: EWalletVideo,
  },
];

export const CONTACT = {
  address: "Stockholm",
  phoneNo: "0736506503",
  email: "madeleine.ejenfjard@gmail.com",
};
