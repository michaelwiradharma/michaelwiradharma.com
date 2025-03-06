export default function WorkExperience() {
  return (
    <div className="grid md:grid-cols-3">
      <div className="col-span-2 px-4">
        <h1 className="text-3xl my-4">Work Experience</h1>
        <div className="flex gap-4">
          <div>
            <h1 className="text-2xl my-4">MulaiCoding - Software Engineer</h1>
            <p className="text-lg pr-20 my-4">
              San Francisco Bay Area, January 2024 - January 2025
            </p>
            <ol className="list-disc list-inside gap-2">
              <li>
                Achieved integration of HLS broadcasting using Google Cloud
                Storage and Big Query, resulting in the delivery of high-quality
                video live-streaming with a latency of under two seconds with
                minimal buffering.
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
                Decreased load times by 80% through asynchronous JavaScript and
                optimistic updates, leveraging Next.JS for efficient server-side
                rendering (SSR) and client-side component compartmentalization.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
