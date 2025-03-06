import { Moon } from "lucide-preact";

export default function Header() {
  return (
    <header className="mb-8 py-4">
      <div className="flex flex-row justify-between">
        <img src="/tandatangan.jpg" alt="fresh logo" class="w-40 color-gray -translate-y-10" />
        <div className="flex flex-row gap-4">
          {/* <h1 className="text-xl my-4">Work</h1>
          <h1 className="text-xl my-4">About</h1> */}
          {/* <div className="grid items-center">
            <Moon />
          </div> */}
        </div>
      </div>
    </header>
  );
}
