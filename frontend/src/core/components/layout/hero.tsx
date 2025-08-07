"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProfileHero from "@/core/assets/images/profile-hero.webp";
import SplitText from "@/core/animations/SplitText";
import RotatingText from "@/core/animations/RotatingText";
import GradientText from "@/core/animations/GradientText";
export default function Hero() {
  const t = useTranslations("hero");

  return (
    <AnimatePresence>
      <section id="about">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
          <div className="md:items-center gap-4 md:gap-16 grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="space-y-4 md:max-w-none max-w-lg">
                <div className="flex items-center gap-2">
                  <SplitText
                    text={t("title")}
                    className="font-semibold text-foreground text-2xl sm:text-4xl"
                    delay={50}
                    duration={0.3}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="!m-0 text-foreground text-2xl sm:text-4xl"
                    children={"Lian Aguirre"}
                  />
                </div>
                <RotatingText
                  texts={[
                    t("subtitle1"),
                    t("subtitle2"),
                    t("subtitle3"),
                    t("subtitle4"),
                    t("subtitle5"),
                    t("subtitle1"),
                  ]}
                  className="text-green-800 dark:text-green-200 text-xl sm:text-2xl"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2800}
                  loop={false}
                />
                <SplitText
                  text={t("description")}
                  className="text-foreground text-justify"
                  delay={60}
                  duration={0.1}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                />
              </div>
            </div>
            <div>
              <Image
                width={600}
                height={750}
                src={ProfileHero}
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
