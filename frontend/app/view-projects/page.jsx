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
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="uppercase tracking-widest text-xs text-neutral-400">
              opportunities
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              Apply to Work on{" "}
              <span className="text-[#00FFFF]">Industry Projects</span>
            </h1>
            <p className="mt-4 text-neutral-300">
              Students can apply to collaborate on real projects, gain hands-on
              experience, and contribute to industry-led solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-3 py-1 text-sm text-cyan-300">
                Real-world experience
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-3 py-1 text-sm text-cyan-300">
                Mentorship
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-3 py-1 text-sm text-cyan-300">
                Portfolio-ready work
              </span>
            </div>
          </div>

          <div className="flex-1 w-full">
            {/* Simple highlight card */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="text-xl font-semibold">How it works</h3>
              <ol className="mt-4 space-y-3 text-neutral-300">
                <li className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-md bg-[#00FFFF] text-black font-bold">
                    1
                  </span>
                  <span>
                    Browse open projects and pick the ones that match your
                    skills.
                  </span>
                </li>
                <li className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-md bg-[#00FFFF] text-black font-bold">
                    2
                  </span>
                  <span>
                    Submit your application with your interests and
                    availability.
                  </span>
                </li>
                <li className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-md bg-[#00FFFF] text-black font-bold">
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
          Listed <span className="text-[#00FFFF]">Projects</span>
        </h1>
        <p className="mt-3 text-neutral-300">
          Browse projects and pick one that matches your skills & interests.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-cyan-400/40 transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Contribute to an industry partner project. Work in agile teams
                and ship features.
              </p>
              <div className="mt-3">
                <span className="text-xs rounded-md bg-cyan-400/10 text-cyan-300 px-2 py-1 border border-cyan-400/30">
                  {p.tag}
                </span>
              </div>
              <a
                href="/apply-project"
                className="mt-4 block text-center rounded-xl bg-[#00FFFF]/10 text-cyan-200 border border-[#00FFFF]/40 px-4 py-2 hover:bg-[#00FFFF]/20 transition"
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
