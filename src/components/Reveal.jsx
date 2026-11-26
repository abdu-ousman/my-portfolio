import { createElement } from "react";
import { useReveal } from "@/hooks/useReveal";

export const Reveal = ({ as = "div", delay = 0, className = "", children, ...props }) => {
  const [ref, visible] = useReveal();
  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "reveal--in" : ""} ${className}`,
      style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
      ...props,
    },
    children,
  );
};
