// External professional profiles. `socials` is the flat list (footer icon row);
// `profileGroups` drives the grouped Connect section; `navbarSocials` picks the
// two shown as compact icon buttons in the navbar. All open in a new tab;
// icons render via <Icon name="..." />.
const PROFILES = {
  github: {
    name: "GitHub",
    url: "https://github.com/fahim06",
    icon: "github",
    description: "Code, projects, and open-source work.",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fahim06/",
    icon: "linkedin",
    description: "Professional profile and career network.",
  },
  behance: {
    name: "Behance",
    url: "https://www.behance.net/fahimyusufstudio",
    icon: "behance",
    description: "Design portfolio and case studies.",
  },
  dribbble: {
    name: "Dribbble",
    url: "https://dribbble.com/fahim-yusuf",
    icon: "dribbble",
    description: "UI/UX shots and visual exploration.",
  },
  upwork: {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01f658a35fde39968a?mp_source=share",
    icon: "upwork",
    description: "Freelance profile and client services.",
  },
  x: {
    name: "X (Twitter)",
    url: "https://x.com/fahim1206",
    icon: "x",
    description: "Social profile and updates.",
  },
};

export const socials = [
  PROFILES.github,
  PROFILES.linkedin,
  PROFILES.behance,
  PROFILES.dribbble,
  PROFILES.upwork,
  PROFILES.x,
];

export const profileGroups = [
  { label: "Professional Network", items: [PROFILES.linkedin] },
  { label: "Code & Open Source", items: [PROFILES.github] },
  { label: "Design & Creative Work", items: [PROFILES.behance, PROFILES.dribbble] },
  { label: "Freelance & Client Work", items: [PROFILES.upwork] },
  { label: "Social", items: [PROFILES.x] },
];

// Navbar stays minimal — code + network only.
export const navbarSocials = [PROFILES.github, PROFILES.linkedin];
