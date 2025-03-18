'use client';

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  HeartHandshakeIcon,
} from "@/components/icons";
import { GraduationCapIcon } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Update scroll state
  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', updateScrollState);
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  // Navbar background opacity based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
  );

  return (
    <>
      <div className="h-28 w-full" /> {/* Increased spacer height */}
      <motion.div
        className="fixed top-6 left-0 right-0 z-40 mx-auto w-[90%] max-w-4xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <HeroUINavbar
          maxWidth="xl"
          className={`transition-all duration-500 rounded-full px-6 mx-auto ${
            isScrolled 
              ? "bg-background/70 backdrop-blur-md shadow-md py-2 border border-transparent hover:border-[#0070F3] hover:shadow-[0_0_20px_4px_rgba(0,112,243,0.3)]" 
              : "bg-background/30 backdrop-blur-sm py-2.5"
          }`}
        >
          <NavbarContent className="basis-1/5 sm:basis-auto gap-2" justify="start">
            <NavbarBrand as="li" className="gap-2 max-w-fit">
              <NextLink className="flex justify-start items-center gap-2" href="/">
                <GraduationCapIcon className="text-primary w-5 h-5" />
                <p className={`font-bold ${isScrolled ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600" : "text-inherit"}`}>
                  AI with Devs
                </p>
              </NextLink>
            </NavbarBrand>
            <ul className="hidden lg:flex gap-4 justify-start ml-4">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavbarItem key={item.href}>
                    <NextLink
                      href={item.href}
                      className={item.className?.({ isActive }) || ""}
                    >
                      {item.label}
                    </NextLink>
                  </NavbarItem>
                );
              })}
            </ul>
          </NavbarContent>

          <NavbarContent
            className="hidden sm:flex basis-1/5 sm:basis-full"
            justify="end"
          >
            <NavbarItem className="hidden sm:flex gap-2">
              <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                <span className="text-default-500 text-lg font-bold">𝕏</span>
              </Link>
              <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                <GithubIcon className="text-default-500" />
              </Link>
              <ThemeSwitch />
            </NavbarItem>
            <NavbarItem className="hidden md:flex">
              <Button
                isExternal
                as={Link}
                className="text-sm font-medium bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md border border-pink-500/10 hover:border-pink-500/20"
                href={siteConfig.links.discord}
                startContent={<HeartHandshakeIcon className="text-danger" />}
                variant="flat"
              >
                Support
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
            <NavbarMenuToggle />
          </NavbarContent>

          <NavbarMenu className="mt-2 rounded-2xl backdrop-blur-md bg-background/70">
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={
                      index === 2
                        ? "primary"
                        : index === siteConfig.navMenuItems.length - 1
                          ? "danger"
                          : "foreground"
                    }
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>
        </HeroUINavbar>
      </motion.div>
    </>
  );
};

