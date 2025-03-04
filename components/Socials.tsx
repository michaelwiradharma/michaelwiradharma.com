import { Github, Linkedin, Mail } from "lucide-preact";
import { asset } from "$fresh/runtime.ts";

export default function Socials() {
  const ICONSIZE = 32;
  return (
    <div className="flex flex-row gap-12 items-center">
      <a
        href={asset("/michael-wiradharma-resume.pdf")}
        className="text-2xl bg-cyan-800 px-4 py-2 rounded-lg text-white"
      >
        Resume
      </a>
      <a href="https://github.com/michaelwiradharma">
        <Github size={ICONSIZE} />
      </a>
      <a href="https://linkedin.com/in/michaelwiradharma">
        <Linkedin size={ICONSIZE} />
      </a>
      <a href="mailto:michael.wiradharma@gmail.com">
        <Mail size={ICONSIZE} />
      </a>
    </div>
  );
}
