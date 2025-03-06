import Landing from "../components/Landing.tsx";
import WorkExperience from "../components/WorkExperience.tsx";
import GoogleTag from "../islands/GoogleTag.tsx";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Landing />
      <WorkExperience />
      <GoogleTag />
    </div>
  );
}
