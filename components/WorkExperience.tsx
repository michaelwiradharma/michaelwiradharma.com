export default function WorkExperience() {
  return (
    <div>
      <h1 className="text-3xl my-4" id="work-experience">
        Work Experience
      </h1>
      <div className="grid md:grid-cols-4 gap-y-8">
        {/* MulaiCoding */}
        <div className="col-span-2 px-4">
          <div className="flex gap-4">
            <div>
              <h1 className="text-2xl my-4">MulaiCoding - Software Engineer</h1>
              <p className="text-lg pr-20 my-4">
                San Francisco Bay Area,{" "}
                <span className="italic text-gray-700">
                  January 2024 - January 2025
                </span>
              </p>
              <ol className="list-disc list-outside ml-6 gap-2 text-lg">
                <li>
                  Achieved integration of HLS broadcasting using Google Cloud
                  Storage and Big Query, resulting in the delivery of
                  high-quality video live-streaming with a latency of under two
                  seconds with minimal buffering.
                </li>
                <li>
                  Built an interactive Discord bot and BullMQ queues, improving
                  user engagement metrics by 35%.
                </li>
                <li>
                  Devised innovative education platform by employing Next.JS
                  alongside Express.js, Tailwind and Docker containers for
                  parallel computing; optimized performance led to zero downtime
                  for 200+ simultaneous users.
                </li>
                <li>
                  Decreased load times by 80% through asynchronous JavaScript
                  and optimistic updates, leveraging Next.JS for efficient
                  server-side rendering (SSR) and client-side component
                  compartmentalization.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <img
          className="col-span-1"
          alt="MulaiCoding"
          src="/mulaicoding.png"
          height={400}
        />

        {/* Kevala */}
        <div className="col-span-2 px-4">
          <h1 className="text-2xl mt-4">Kevala - Software Engineer Intern</h1>
          <p className="text-lg pr-20 mb-2">
            San Francisco, California,{" "}
            <span className="italic text-gray-700">
              July 2024 - December 2024
            </span>
          </p>
          <ol className="list-disc list-outside ml-6 gap-2 text-lg">
            <li>
              Performed UX research to streamline user workflows for managing
              1,000s of client permissions. Designed prototypes and developed a
              new Svelte-based dashboard, integrating secure authentication with
              Auth0.
            </li>
            <li>
              Improved frontend component load times by 30% through efficient
              lazy rendering.
            </li>
            <li>
              Conducted stress tests using Vitest, developing and executing over
              100 custom unit tests.
            </li>
          </ol>
        </div>
        <div className="col-span-1"></div>
        <img
          className="col-span-1"
          alt="Kevala"
          src="/kevala.png"
          height={400}
        />

        {/* FeedLoop AI */}
        {/* Kevala */}
        <div className="col-span-2 px-4">
          <h1 className="text-2xl mt-4">
            Feedloop AI - Software Engineer Intern
          </h1>
          <p className="text-lg pr-20 mb-2">
            Jakarta, Indonesia,{" "}
            <span className="italic text-gray-700">
              May 2023 - August 2023
            </span>
          </p>
          <ol className="list-disc list-outside ml-6 gap-2 text-lg">
            <li>
              Engineered LLM-powered chatbot through prompt engineering, with up
              to 85% accuracy in responses.
            </li>
            <li>
              Revamped backend queries leveraging a JS PostgreSQL ORM, resulting
              in a 30% boost to data retrieval speed.
            </li>
            <li>
              Designed UI using Figma and Next.js to create application which
              maintains 10 active B2B clients, valued at $5M.
            </li>
          </ol>
        </div>
        <div className="col-span-1"></div>
        <img
          className="col-span-1"
          alt="Feedloop AI"
          src="/feedloopai.png"
          height={400}
        />
      </div>
    </div>
  );
}
