import { darkMode } from "../utils/data.ts";

export default function Logo() {
  return (
    <div>
      <img
        src={`/tandatangan-${darkMode.value ? "white" : "black"}.png`}
        alt="MW"
        className="w-40"
      />
    </div>
  );
}
