import { ChevronDown } from "lucide-preact";
import JumpButton from "../islands/JumpButton.tsx";
import Socials from "./Socials.tsx";

export default function Landing() {
  return (
    <div className="container flex flex-col items-center">
      <div className="grid md:grid-cols-3 my-40">
        <div className="col-span-2 px-4">
          <div className="flex gap-4">
            <h1 className="text-5xl my-4">
              Greetings, I'm<br />Michael Wiradharma.
            </h1>
          </div>
          <p className="text-xl pr-20">
            I'm a software developer who recently graduated from the University
            of California, Berkeley with a Bachelor's in Electrical Engineering
            and Computer Science{" "}
            <strong>(EECS)</strong>. My passion is solving technical challenges
            and creating impactful solutions through software development.
          </p>
          <p className="text-lg pr-20 my-4">
            Skills:
            <span className="ml-2">React, Node.js, Python, SQL</span>
          </p>
          <div className="my-12">
            <Socials />
          </div>
        </div>
        <div className="col-span-1 hidden md:block md:h-[615px]">
          <img
            src="/michael.jpg"
            alt="Michael Wiradharma"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
      <div className="mb-20">
        <JumpButton destination="work-experience">
          <ChevronDown strokeWidth={2} size={32} color="gray" />
        </JumpButton>
      </div>
    </div>
  );
}
