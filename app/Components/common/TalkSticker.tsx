"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SpinSticker from "./SpinSticker";

/** Floating "let's talk" sticker: shows once the hero has scrolled away, hides near the end of the page. */
export default function TalkSticker() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    // Hidden while the contact section or footer is on screen.
    const ends = [document.getElementById("contact"), document.querySelector("footer")].filter(Boolean) as Element[];
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) =>
      entries.forEach((e) => {
        if (e.target === hero) setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0);
        else {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
          setAtContact(visible.size > 0);
        }
      }),
    );
    if (hero) io.observe(hero);
    ends.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {pastHero && !atContact && (
        <motion.a
          href="#contact"
          aria-label="Jump to contact"
          className="fixed bottom-4 right-4 z-40 transition-transform sm:bottom-6 sm:right-6 hover:scale-105 active:scale-95"
          initial={{ scale: 0, rotate: -120 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 120 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <SpinSticker text="LET'S TALK · LET'S TALK · " glyph="✉" className="h-[72px] w-[72px] sm:h-24 sm:w-24" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
