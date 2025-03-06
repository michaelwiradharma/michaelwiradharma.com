import { useEffect, useState } from "preact/hooks";
import { Moon, Sun } from "lucide-preact";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      type="button"
      class="text-2xl"
      onClick={toggleDarkMode}
    >
      {isDark ? <Sun color="white" /> : <Moon />}
    </button>
  );
}
