"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ApplyProjectPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // autofilled user data
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    // Load from localStorage (mock user from Auth)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser({ name: "", email: "" });
      }
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Hook up to your API endpoint
    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white text-center font-sans">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% of section is visible
        className="max-w-6xl mx-auto px-4 pt-28 pb-12"
      >
        <section className="max-w-6xl mx-auto px-4 pt-28 pb-12">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-[#00FFFF]">Apply to Work</span>
          </h1>
          <p className="text-lg text-neutral-400">
            Apply for hands-on experience and collaborate on industry-led
            solutions. <br />
            Tell us about your skills, interests, and availability. We’ll match
            you with a project.
          </p>
        </section>
      </motion.section>
      {/* Application Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 py-10 text-left"
      >
        <section className="max-w-6xl mx-auto px-4 py-10 text-left">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
            {submitted && (
              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-4 py-3">
                Application submitted! We’ll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              {/* Grid row */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm text-neutral-300">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={user.name}
                    readOnly
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/30 px-4 py-3 outline-none text-neutral-600 cursor-not-allowed"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm text-neutral-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/30 px-4 py-3 outline-none text-neutral-600 cursor-not-allowed"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="grid gap-2">
                  <label htmlFor="role" className="text-sm text-neutral-300">
                    Preferred role
                  </label>
                  <select
                    id="role"
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/30 px-4 py-3 outline-none"
                    defaultValue="student"
                  >
                    <option value="student">Student</option>
                    <option value="collaborator">Collaborator</option>
                    <option value="innovator">Innovator</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="availability"
                    className="text-sm text-neutral-300"
                  >
                    Weekly availability
                  </label>
                  <select
                    id="availability"
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/30 px-4 py-3 outline-none"
                    defaultValue="10-15"
                  >
                    <option value="5-10">5–10 hrs</option>
                    <option value="10-15">10–15 hrs</option>
                    <option value="15-20">15–20 hrs</option>
                    <option value="20+">20+ hrs</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="skills" className="text-sm text-neutral-300">
                  Skills / tech stack
                </label>
                <input
                  id="skills"
                  type="text"
                  value={user.skills}
                  readOnly
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/30 px-4 py-3 outline-none text-neutral-600 cursor-not-allowed"
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="motivation"
                  className="text-sm text-neutral-300"
                >
                  Why do you want this?
                </label>
                <textarea
                  id="motivation"
                  rows={4}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/30 px-4 py-3 outline-none resize-y"
                  placeholder="Briefly share your motivation and relevant experience."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="grid gap-2">
                  <label htmlFor="resume" className="text-sm text-neutral-300">
                    Resume (PDF)
                  </label>
                  <input
                    id="resume"
                    type="file"
                    accept="application/pdf"
                    className="file:mr-4 file:rounded-lg file:border-0 file:bg-[#00FFFF] file:text-black file:font-semibold file:px-4 file:py-2 file:hover:opacity-80 file:transition
                             w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2 text-neutral-300"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="project" className="text-sm text-neutral-300">
                    Project of interest (optional)
                  </label>
                  <input
                    id="project"
                    type="text"
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/30 px-4 py-3 outline-none"
                    placeholder="e.g., Smart Energy Dashboard"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-[20px] bg-[#00FFFF] text-neutral-900 font-bold px-6 py-3 transition
                           hover:opacity-80 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </motion.section>
      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-4 pb-16"
      >
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-300">
              Have a question about the process?
            </p>
            <a
              href="/contact"
              className="inline-flex justify-center rounded-xl border border-[#00FFFF]/40 bg-[#00FFFF]/10 px-5 py-2 text-cyan-200 hover:bg-[#00FFFF]/20 transition"
            >
              Contact Support
            </a>
          </div>
        </section>
      </motion.section>
    </main>
  );
}
