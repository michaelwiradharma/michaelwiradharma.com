import { useEffect, useState } from "preact/hooks";

export default function Logo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributeFilter: ["class"],
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={`/tandatangan-${isDark ? "white" : "black"}.png`}
      alt="MW"
      className="w-40"
    />
  );
}
