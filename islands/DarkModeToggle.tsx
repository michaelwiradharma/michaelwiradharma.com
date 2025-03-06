import { useEffect } from "preact/hooks";
import { Moon, Sun } from "lucide-preact";
import { darkMode } from "../utils/data.ts";

export default function DarkModeToggle() {
  useEffect(() => {
    darkMode.value = document.documentElement.classList.contains("dark");
  });

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      darkMode.value = false;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      darkMode.value = true;
    }
  };

  return (
    <button
      type="button"
      class="text-2xl"
      onClick={toggleDarkMode}
    >
      <div className="w-16 h-16 relative flex items-center justify-center pointer-cursor">
        <Sun
          color="white"
          size={24}
          className={`absolute transition-all duration-[1s] ease-in-out ${
            darkMode.value ? "rotate-45 opacity-100" : "rotate-0 opacity-0"
          }`}
        />
        <Moon
          size={24}
          className={`absolute transition-all duration-[1s] ease-in-out ${
            darkMode.value ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
      </div>
    </button>
  );
}
