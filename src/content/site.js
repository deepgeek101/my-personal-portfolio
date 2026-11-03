// Everything about Deep that the site says lives here.
// Fields set to null are waiting on Deep (see the TODO(deep) notes) and are
// skipped by components until filled in. See REVAMP.md §5.

export const site = {
  name: "Deep Chaulagain",

  // TODO(deep): confirm दीप means "lamp" and you're happy to show it on hover.
  nameMeaning: null, // e.g. { script: "दीप", meaning: "lamp" }

  // Small line under the name in the current hero.
  role: "Data Enthusiast",

  // TODO(deep): replace with ONE sentence in your own words about what you do
  // or want to do. The current text is placeholder-ish ("data-driven solutions")
  // and is on REVAMP.md's anti-slop list.
  intro:
    "I build data-driven solutions that are efficient, scalable, and insightful. My passion lies in transforming raw information into actionable intelligence that drives better decisions.",

  about: [
    "I began my tech journey with Java, C, and C++, which gave me a solid programming foundation. Over time, my passion shifted toward the data domain, where I’m exploring Python, practicing SQL, and deepening my understanding of mathematics — a subject I’ve always enjoyed.",
    "I’m particularly intrigued by how AI, Data Science, and Machine Learning solutions work behind the scenes, and I’m constantly expanding my knowledge in these areas. My learning path has also led me into tools like the Salesforce CRM platform, reinforcing my belief that every skill adds value to the bigger picture.",
    "Beyond tech, I’m passionate about swimming, music, fitness, motorcycling, and adventure. I approach both my hobbies and my work with the same curiosity — eager to explore, learn, and grow.",
  ],

  location: {
    city: "Kathmandu",
    country: "Nepal",
    lat: 27.7172,
    lon: 85.324,
    timeZone: "Asia/Kathmandu",
  },

  // TODO(deep): the city you build from, for the footer ("Built by hand in …").
  buildCity: null,

  email: "deep.chaulagain52@gmail.com",

  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/deepgeek101" },
    {
      id: "monkeytype",
      label: "Monkeytype",
      href: "https://monkeytype.com/profile/Deep__",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/deep-chaulagain-b507aa1b8/",
    },
  ],

  // TODO(deep): your best Monkeytype WPM, for the typing easter egg.
  monkeytypeBest: null,

  // TODO(deep): footer phrases by Kathmandu time of day, in your voice.
  // e.g. { night: "I'm probably asleep", morning: "…", afternoon: "…", evening: "…" }
  timeOfDayPhrases: null,

  // Order is the order shown. The first group is what you use now.
  tools: {
    current: [
      "Python",
      "Pandas",
      "NumPy",
      "Power BI",
      "SQL (MySQL)",
      "Git",
      "Docker",
      "Linux",
      "Salesforce",
      "AWS",
      "Django",
    ],
    startedOn: ["C++", "C", "Java"],
  },

  // Section copy that the current layout still shows. Phase 4 rewrites the
  // layout; TODO(deep): rewrite these in your own words when that lands.
  copy: {
    skillsIntro:
      "I've worked and continue working with a variety of technologies. Here's a snapshot of my technical skills and expertise.",
    projectsIntro:
      "Here are some of my recent real-world projects that showcase my technical skills and the causes I am personally aligned with",
    contactIntro:
      "Have a project in mind or want to collaborate? I'd love to hear from you. Send me an email and let's discuss your ideas!",
    contactDetail:
      "I'm always open to discussing new opportunities, creative ideas, or partnerships. Feel free to reach out through any of the following channels:",
  },
};
