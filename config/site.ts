import { Link } from "@heroui/link";
import { chipTab } from "@/app/components/primitives";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Grow with Sahaib",
  description: "A step-by-step guide for no/low-code creators using AI tools",
  navItems: [
    {
      label: "Guide",
      href: "/guide",
      className: ({ isActive }: { isActive: boolean }) => chipTab({ selected: isActive })
    },
    {
      label: "Resources",
      href: "/resources",
      className: ({ isActive }: { isActive: boolean }) => chipTab({ selected: isActive })
    },
    {
      label: "Waitlist",
      href: "/waitlist",
      className: ({ isActive }: { isActive: boolean }) => chipTab({ selected: isActive })
    },
  ],
  navMenuItems: [
    {
      label: "Guide",
      href: "/guide",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Waitlist",
      href: "/waitlist",
    },
  ],
  links: {
    github: "https://github.com/sahaib",
    twitter: "https://x.com/imsahaib",
    docs: "https://www.heroui.com/docs/guide/installation",
    discord: "https://ko-fi.com/sahaib",
  },
};
