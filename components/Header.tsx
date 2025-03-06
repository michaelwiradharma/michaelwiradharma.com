import DarkModeToggle from "../islands/DarkModeToggle.tsx";
import Logo from "../islands/Logo.tsx";

export default function Header() {
  return (
    <header className="mb-8 py-4">
      <div className="flex flex-row justify-between">
        <Logo />
        <div className="flex flex-row gap-4">
          {
            /* <h1 className="text-xl my-4">Work</h1>
          <h1 className="text-xl my-4">About</h1> */
          }
          <div className="grid items-center">
            <DarkModeToggle />
          </div>  
        </div>
      </div>
    </header>
  );
}
