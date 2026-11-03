import domeHouseImg from "../assets/earthbag-domehouse.webp";

// Real projects only, at most 3 (REVAMP.md §3). Order is the order shown.
//
// story: the "What I did / The hard part / What I learned" text shown when a
// row is expanded (Phase 4/5). 2–3 sentences each, in Deep's words.
// tools: at most 4.

export const projects = [
  {
    slug: "earthbag-dome-house",
    title: "Earthbag Domehouse Workshop",
    summary:
      "An eco-friendly shelter built using earthbag architecture and local resources. Involved 3 weeks of intensive teamwork, sustainable resource planning, and alternative building methods.",
    tools: ["Volunteering", "Sustainable Building", "Teamwork"],
    image: {
      src: domeHouseImg,
      width: 1200,
      height: 900,
      alt: "Finished earthbag dome house with arched wooden windows, forested hills behind",
    },
    links: [
      {
        kind: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/farm_the_transformer/",
      },
    ],
    // TODO(deep): what was your role? Any numbers (bags filled, people, days)?
    // What was hardest, and what did you take away from it?
    story: { did: null, hard: null, learned: null },
  },
  {
    slug: "histopathology-classification",
    title: "Histopathological Images Classification",
    summary:
      "Using the dataset MIaMIA-Open-Data-Cervical-AIS-Histopathology-Image: CASIHI, developed a deep learning model to classify cervical histopathological images into various categories using PyTorch and Grad-CAM for interpretability.",
    tools: ["PyTorch", "Grad-CAM", "CNNs", "Transfer Learning"],
    // TODO(deep): an image for this project (e.g. a Grad-CAM heatmap you made).
    image: null,
    links: [
      {
        kind: "github",
        label: "Code",
        href: "https://github.com/deepgeek101/Histopathological-Classification-Project",
      },
    ],
    // TODO(deep): what did you build, what was hard (data? overfitting? GPU?),
    // what did you learn? Any result worth stating (accuracy, F1)?
    story: { did: null, hard: null, learned: null },
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary:
      "A responsive portfolio website built with React and Tailwind CSS, with dark mode support.",
    tools: ["React", "Tailwind CSS", "Vite"],
    image: null,
    links: [
      { kind: "live", label: "Live", href: "https://deepchaulagain.com.np" },
      {
        kind: "github",
        label: "Code",
        href: "https://github.com/deepgeek101/my-personal-portfolio",
      },
    ],
    // TODO(deep): keep this project once the revamp ships? If so, what did you
    // learn rebuilding it?
    story: { did: null, hard: null, learned: null },
  },
];
