import domeHouseImg from "../assets/earthbag-domehouse.webp";
import profileImg from "../assets/profile.webp";

// Polaroids for the "Off-screen" section (REVAMP.md §3, § 03), shown from Phase 4.
// rotate: degrees between -4 and 4, so each one sits a little differently.

// TODO(deep): add 2–4 more originals (swimming, motorcycle, …) to src/assets/
// and write a one-line caption for each, in your own words.
export const photos = [
  {
    src: domeHouseImg,
    width: 1200,
    height: 900,
    alt: "Finished earthbag dome house with arched wooden windows, forested hills behind",
    caption: null, // TODO(deep): caption for the dome-house photo
    rotate: -2,
  },
  {
    src: profileImg,
    width: 800,
    height: 800,
    alt: "Deep, outdoors, in a grey sweatshirt",
    caption: null, // TODO(deep): caption for this photo, or swap in a less formal one
    rotate: 3,
  },
];
