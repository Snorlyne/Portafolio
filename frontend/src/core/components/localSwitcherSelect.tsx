"use client";
import { setUserLocale } from "@/core/services/locale.service";
import { Locale } from "@/i18n/config";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiLanguage } from "react-icons/hi2";
type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
};

const LocalSwitcherSelect = ({ defaultValue, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  function onChange(value: string) {
    const locale = value as Locale;
    setUserLocale(locale);
  }

  // Helper para íconos de bander

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex items-center gap-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 p-2 rounded-full cursor-pointer"
    >
      <HiLanguage className="size-6 text-foreground text-lg" aria-label="Language" />
      <AnimatePresence>
        {isOpen && (
          <div className="top-12 right-0 z-50 absolute">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 0.25,
              }}
              className="flex flex-col gap-1 bg-white dark:bg-gray-800 shadow-xl py-2 rounded-md"
            >
              {items.map((item) => (
                <div
                  className="flex flex-row justify-end items-center gap-2 hover:bg-black/5 hover:bg-muted p-2 min-w-26 text-gray-500 hover:text-foreground text-right"
                  key={item.value}
                  onClick={() => {
                    onChange(item.value);
                    setIsOpen(false);
                  }}
                >
                  {item.value === defaultValue && <FaCheck className="text-foreground" />}
                  <p className="text-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocalSwitcherSelect;
