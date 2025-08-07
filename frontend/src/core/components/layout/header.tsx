"use client";

import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  Avatar,
} from "@heroui/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const t = useTranslations("header");
  const [linkActive, setLinkActive] = useState<string>("about");

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "skills"];
    const sectionElements = sections.map((id) => document.getElementById(id));
    function onScroll() {
      const scrollPos = window.scrollY + 100;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setLinkActive(sections[i]);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        className="top-0 z-50 sticky sm:py-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar disableAnimation>
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Link className="flex flex-row items-center gap-3" href="/">
                <Avatar
                  size="sm"
                  isBordered
                  color="success"
                  src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              <Link className="flex flex-row items-center gap-3" href="/">
                <Avatar
                  isBordered
                  color="success"
                  src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
              <Link
                href="#about"
                className={`relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                  linkActive === "about" ? "after:scale-x-100" : ""
                }`}
                onClick={() => setLinkActive("about")}
                scroll={false}
              >
                {t("about")}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#experience"
                className={`relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                  linkActive === "experience" ? "after:scale-x-100" : ""
                }`}
                onClick={() => setLinkActive("experience")}
                scroll={false}
              >
                {t("experience")}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#projects"
                className={`relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                  linkActive === "projects" ? "after:scale-x-100" : ""
                }`}
                onClick={() => setLinkActive("projects")}
                scroll={false}
              >
                {t("projects")}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#skills"
                className={`relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                  linkActive === "skills" ? "after:scale-x-100" : ""
                }`}
                onClick={() => setLinkActive("skills")}
                scroll={false}
              >
                {t("skills")}
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>
          <NavbarMenu>
            <NavbarItem>
              <Link href="#about" onClick={() => setLinkActive("about")} scroll={false}>
                {t("about")}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#experience">{t("experience")}</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#projects">{t("projects")}</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#skills">{t("skills")}</Link>
            </NavbarItem>
          </NavbarMenu>
        </Navbar>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
