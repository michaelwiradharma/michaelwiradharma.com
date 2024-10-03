import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const works = [
    {
      company: "Kevala",
      position: "Software Engineer",
      date: "July 2024 - Present",
      location: "San Francisco, CA",
      description: `Rebuilt admin dashboard using Svelte, enhancing security with Auth0 to ensure robust client data access.
        Performed UX research to optimize user flow and minimize friction in managing 1,000s of client entitlements.
        Improved frontend component load times by 30% through efficient lazy rendering.
        Conducted stress tests using Vitest, developing and executing over 100 custom unit tests.`,
    },
    {
      company: "MulaiCoding",
      position: "Software Engineer",
      date: "Jan 2024 - Present",
      location: "San Francisco, CA",
      description: `Leveraged Next.JS and Express.JS with Tailwind to build a powerful livestreaming platform for education.
        Built an interactive Discord bot on Python and bullmq queues on JS to create an engaging user experience.
        Deployed HLS livestreaming of 2-second maximum latency with Google BigQuery and CloudStorage.
        Developed docker containers distribute and parallelize workload across each user stream.`,
    },
    {
      company: "Feedloop",
      position: "Software Engineer",
      date: "May 2023 - Aug 2023",
      location: "Jakarta, Indonesia",
      description: `Created LLM-powered chatbot through prompt engineering, with up to 85% accuracy in bot responses.
        Redesigned backend queries using Zapatos in Express.JS, Hasura, and PostgreSQL, increasing efficiency.
        Designed UI using Figma and Next.js to create application which maintains 10 active B2B clients, valued at $5M.`,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center md:gap-4">
        <div className="header">
          <Link to="/" className="text-5xl">
            <h1>Michael Wiradharma</h1>
          </Link>
          <h2 className="text-3xl">Work</h2>
        </div>
        <div className="content">
          {works.map((work, index) => (
            <div key={index} className="p-4">
              <div className="header flex items-center justify-between">
                <h1 className="text-3xl font-bold">{work.company}</h1>
                <h2 className="text-xl">{work.position}</h2>
              </div>
              <div className="content">
                <div className="flex flex-row justify-between mb-4">
                  <p className="text-lg">{work.date}</p>
                  <p className="text-lg">{work.location}</p>
                </div>
                <ul className="list-disc pl-8">
                  {work.description.split("\n").map((line, index) => (
                    <li key={index} className="text-lg">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
