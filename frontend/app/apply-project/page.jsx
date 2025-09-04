"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ApplyProjectPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(""); // track this app’s status
  const [user, setUser] = useState({ name: "", email: "", skills: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser({ name: "", email: "", skills: "" });
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1000));

    // Build new application object
    const newApplication = {
      id: Date.now(),
      user: user,
      role: e.target.role.value,
      availability: e.target.availability.value,
      motivation: e.target.motivation.value,
      project: e.target.project.value,
      status: "pending", // default
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage
    const stored = JSON.parse(localStorage.getItem("applications")) || [];
    stored.push(newApplication);
    localStorage.setItem("applications", JSON.stringify(stored));

    // Update UI
    setSubmitted(true);
    setStatus(newApplication.status);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#EAEAEA] text-white text-center font-sans">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-4 pt-20 pb-8"
      >
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-[#00A3A3]">Apply to Work</span>
        </h1>
        <p className="text-lg text-neutral-700">
          Apply for hands-on experience and collaborate on industry-led
          solutions. We’ll match you with a project.
        </p>
      </motion.section>

      {/* Application Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 py-10 text-left"
      >
        <div className="rounded-2xl border border-neutral-300 bg-neutral-300/50 p-6 md:p-8">
          {submitted && (
            <div
              className={`mt-4 rounded-xl px-4 py-3 ${
                status === "pending"
                  ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-700"
                  : status === "under review"
                  ? "border border-blue-500/30 bg-blue-500/10 text-blue-700"
                  : "border border-green-500/30 bg-green-500/10 text-green-700"
              }`}
            >
              Application submitted! Current status:{" "}
              <span className="font-bold capitalize">{status}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
            {/* Grid row */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-neutral-700">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  value={user.name}
                  readOnly
                  className="w-full rounded-xl bg-neutral-400 border border-neutral-400 px-4 py-3 text-neutral-800 cursor-not-allowed"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-neutral-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full rounded-xl bg-neutral-400 border border-neutral-400 px-4 py-3 text-neutral-800 cursor-not-allowed"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="grid gap-2">
                <label htmlFor="role" className="text-sm text-neutral-700">
                  Preferred role
                </label>
                <select
                  id="role"
                  className="w-full rounded-xl bg-neutral-350 border border-neutral-400 px-4 py-3 text-neutral-800"
                  defaultValue="student"
                >
                  <option value="student">Student</option>
                  <option value="collaborator">Collaborator</option>
                  <option value="innovator">Innovator</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label htmlFor="availability" className="text-sm text-neutral-700">
                  Weekly availability
                </label>
                <select
                  id="availability"
                  className="w-full rounded-xl bg-neutral-350 border border-neutral-400 px-4 py-3 text-neutral-800"
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
              <label htmlFor="skills" className="text-sm text-neutral-700">
                Skills / tech stack
              </label>
              <input
                id="skills"
                type="text"
                value={user.skills ?? ""}
                readOnly
                className="w-full rounded-xl bg-neutral-400 border border-neutral-400 px-4 py-3 text-neutral-800 cursor-not-allowed"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="motivation" className="text-sm text-neutral-700">
                Why do you want this?
              </label>
              <textarea
                id="motivation"
                rows={4}
                className="w-full rounded-xl bg-neutral-350 border border-neutral-400 px-4 py-3 resize-y text-neutral-800"
                placeholder="Briefly share your motivation and relevant experience."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="grid gap-2">
                <label htmlFor="resume" className="text-sm text-neutral-700">
                  Resume (PDF)
                </label>
                <input
                  id="resume"
                  type="file"
                  accept="application/pdf"
                  className="file:mr-4 file:rounded-lg file:border-0 file:bg-[#00A3A3] file:text-white file:font-semibold file:px-4 file:py-2 file:hover:opacity-80 file:transition file:cursor-pointer
                           w-full rounded-xl bg-neutral-350 border border-neutral-400 px-3 py-2 text-neutral-800"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="project" className="text-sm text-neutral-700">
                  Project of interest (optional)
                </label>
                <input
                  id="project"
                  type="text"
                  className="w-full rounded-xl bg-neutral-350 border border-neutral-400 px-4 py-3 text-neutral-800"
                  placeholder="e.g., Smart Energy Dashboard"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-[20px] bg-[#00A3A3] text-neutral-100 font-bold px-6 py-3 transition hover:opacity-80 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </main>
  );
}
