import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] ?? "",
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}