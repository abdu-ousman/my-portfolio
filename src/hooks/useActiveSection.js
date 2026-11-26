import { useEffect, useState } from "react";

// Highlights the nav link of the section currently in view.
export const useActiveSection = (ids) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);
  return active;
};
