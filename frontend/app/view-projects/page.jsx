"use client";

export default function ViewProjects() {
  const projects = [
    {
      title: "Smart Energy Dashboard",
      tag: "Renewable and Sustainable Energy",
    },
    {
      title: "Civil Digital Twin",
      tag: "Smart Infrastructure & Civil Engineering",
    },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
    { title: "Robotics Vision Module", tag: "Robotics & Automation" },
  ];

  return (
    <main className="min-h-screen bg-[#EAEAEA] text-[#000000] font-sans">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              Apply to Work on{" "}
              <span className="text-[#00A3A3]">Industry Projects</span>
            </h1>
            <p className="mt-4 text-neutral-600">
              Students can apply to collaborate on real projects, gain hands-on
              experience, and contribute to industry-led solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00A3A3] px-3 py-1 text-sm text-[#00A3A3]">
                Real-world experience
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00A3A3] px-3 py-1 text-sm text-[#00A3A3]">
                Mentorship
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00A3A3] px-3 py-1 text-sm text-[#00A3A3]">
                Portfolio-ready work
              </span>
            </div>
          </div>

          <div className="flex-1 w-full h-full">
            {/* Simple highlight card */}
            <div className="rounded-2xl border border-neutral-400 bg-neutral-400/50 p-6">
              <h3 className="text-xl font-semibold">How it works</h3>
              <ol className="mt-4 space-y-3 text-neutral-700">
                <li className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-md bg-[#00A3A3] text-white font-bold">
                    1
                  </span>
                  <span>
                    Browse open projects and pick the ones that match your
                    skills.
                  </span>
                </li>
                <li className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-md bg-[#00A3A3] text-white font-bold">
                    2
                  </span>
                  <span>
                    Submit your application with your interests and
                    availability.
                  </span>
                </li>
                <li className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-md bg-[#00A3A3] text-white font-bold">
                    3
                  </span>
                  <span>
                    Get matched and start contributing with a mentor’s guidance.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Listed <span className="text-[#00A3A3]">Projects</span>
        </h1>
        <p className="mt-3 text-neutral-700">
          Browse projects and pick one that matches your skills & interests.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-2xl border border-neutral-300 bg-neutral-300/50 p-5 hover:border-[#00A3A3] transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Contribute to an industry partner project. Work in agile teams
                and ship features.
              </p>
              <div className="mt-3">
                <span className="text-xs rounded-md bg-[#00A3A3]/10 text-[#00A3A3] px-2 py-1 border border-cyan-400/30">
                  {p.tag}
                </span>
              </div>
              <a
                href="/apply-project"
                className="mt-4 block text-center rounded-xl bg-[#00A3A3] text-white border border-[#00FFFF]/40 px-4 py-2 hover:bg-[#00A3A3]/60 transition"
              >
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
