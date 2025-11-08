"use client";
import { useCallback } from "react";

export function useScroll() {
  const scrollTo = useCallback(
    (target: string | HTMLElement | null, offset = 0) => {
      let element: HTMLElement | null = null;

      if (typeof target === "string") {
        element = document.querySelector(target) as HTMLElement | null;
      } else {
        element = target;
      }

      if (!element) return;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    },
    []
  );

  return { scrollTo };
}
