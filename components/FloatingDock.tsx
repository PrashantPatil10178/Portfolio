import { FloatingDockClient } from "./FloatingDockClient";

// Static navigation items
const navItems = [
  { title: "Home", href: "#hero", icon: "IconHome", isExternal: false },
  { title: "About", href: "#about", icon: "IconUser", isExternal: false },
  { title: "Skills", href: "#skills", icon: "IconBrain", isExternal: false },
  { title: "Projects", href: "#projects", icon: "IconCode", isExternal: false },
  {
    title: "Experience",
    href: "#experience",
    icon: "IconBriefcase",
    isExternal: false,
  },
  {
    title: "Education",
    href: "#education",
    icon: "IconSchool",
    isExternal: false,
  },
  {
    title: "Certifications",
    href: "#certifications",
    icon: "IconCertificate",
    isExternal: false,
  },
  {
    title: "Achievements",
    href: "#achievements",
    icon: "IconTrophy",
    isExternal: false,
  },
  {
    title: "Testimonials",
    href: "#testimonials",
    icon: "IconQuote",
    isExternal: false,
  },
  { title: "Blog", href: "#blog", icon: "IconArticle", isExternal: false },
  { title: "Contact", href: "#contact", icon: "IconMail", isExternal: false },
  {
    title: "GitHub",
    href: "https://github.com/PrashantPatil10178",
    icon: "IconBrandGithub",
    isExternal: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/prashantpatil178",
    icon: "IconBrandLinkedin",
    isExternal: true,
  },
];

export async function FloatingDock() {
  return <FloatingDockClient navItems={navItems} />;
}
