"use client";

import RotatingText from "@/core/animations/RotatingText";
import SplitText from "@/core/animations/SplitText";
import ProfileHero from "@/core/assets/images/profile-hero2.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
export default function Hero() {
  const t = useTranslations("hero");

  return (
    <AnimatePresence>
      <section id="about">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
          <div className="md:items-center gap-4 md:gap-16 grid grid-cols-1 md:grid-cols-2">
            <div>
              <div key={Date.now()} className="space-y-4 w-full md:max-w-none">
                <div className="flex max-md:justify-center items-center gap-2">
                  <SplitText
                    text={t("title") + " Lian Aguirre! "}
                    className="font-semibold text-[clamp(1rem,8vw,2.5rem)] text-foreground sm:text-4xl break-words"
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
                </div>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-md:flex max-md:justify-center max-md:items-center max-md:h-12"
                  >
                    <RotatingText
                      texts={[
                        t("subtitle1"),
                        t("subtitle2"),
                        t("subtitle3"),
                        t("subtitle4"),
                        t("subtitle5"),
                        t("subtitle1"),
                      ]}
                      className="text-green-800 dark:text-green-200 text-lg sm:text-2xl"
                      staggerFrom={"last"}
                      initial={{ y: "-100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      staggerDuration={0.1}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2200}
                      loop={false}
                      splitBy="lines"
                    />
                  </motion.div>
                </AnimatePresence>
                <SplitText
                  text={t("description")}
                  className="w-full text-foreground max-md:text-sm sm:text-justify"
                  delay={300}
                  duration={0.5}
                  ease="power3.out"
                  splitType="lines"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-100px"
                  textAlign="start"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="hidden md:flex justify-center items-center gap-6 mt-8 w-full h-full"
              >
                <Link target="_blank" href="https://github.com/Snorlyne">
                  <BsGithub
                    className="size-6 text-foreground hover:text-primary text-lg transition-colors"
                    aria-label="Github"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://mx.linkedin.com/in/lian-erick-aguirre-sierra-628bb3261"
                >
                  <BsLinkedin className="size-6 text-foreground hover:text-primary text-lg transition-colors" />
                </Link>
                <Link target="_blank" href="mailto:lianaguirre346gmail.com">
                  <BsEnvelopeFill className="size-6 text-foreground hover:text-primary text-lg transition-colors" />
                </Link>
              </motion.div>
            </div>

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center w-full h-full"
              >
                <Image
                  width={500}
                  height={418}
                  src={ProfileHero}
                  className="rounded"
                  alt=""
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
