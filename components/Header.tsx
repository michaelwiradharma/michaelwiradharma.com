import DarkModeToggle from "../islands/DarkModeToggle.tsx";
import JumpButton from "../islands/JumpButton.tsx";
import Logo from "../islands/Logo.tsx";

export default function Header() {
  return (
    <header className="sticky bg-white dark:bg-neutral-900 top-0 mb-8 py-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <Logo />
          <div className="flex flex-row gap-4 items-center">
            <JumpButton destination="work-experience">
              <h1 className="text-xl my-4 dark:text-white">Work</h1>
            </JumpButton>
            {/* <h1 className="text-xl my-4">About</h1> */}
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
