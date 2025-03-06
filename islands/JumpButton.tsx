import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  destination: string;
}

export default function JumpButton({ children, destination }: Props) {
  const onClick = () => {
    const element = document.getElementById(destination);
    console.log(element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button type="button" onClick={onClick} className="pointer-cursos">
      {children}
    </button>
  );
}
