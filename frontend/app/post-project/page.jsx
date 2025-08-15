"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function PostProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [stage, setStage] = useState("Idea");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, goals, stage }),
    });
    const data = await res.json();
    setMessage(data.message || "Project submitted!");
  };

  if (!showForm) return null;

  return (
    <div className="relative max-w-xl mx-auto p-8 bg-white rounded-xl shadow text-gray-900">
      {/* X Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-[#00FFFF] text-2xl"
        onClick={() => {
          setShowForm(false);
          router.push("/");
        }}
        aria-label="Close"
      >
        <FaTimes />
      </button>
      <h2 className="text-3xl font-bold mb-4">Post a Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-lg">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border-2 border-gray-300 p-3 rounded-lg text-lg bg-gray-50 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF] outline-none"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-gray-300 p-3 rounded-lg text-lg bg-gray-50 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF] outline-none"

        />
        <input
          type="text"
          placeholder="Goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className="border-2 border-gray-300 p-3 rounded-lg text-lg bg-gray-50 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF] outline-none"

        />
        <button
          type="submit"
          className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-6 rounded-full text-lg hover:brightness-110 transition"
        >
          Submit Project
        </button>
      </form>
      {message && (
        <p className="mt-4 text-green-700 text-xl font-semibold">{message}</p>
      )}
    </div>
  );
}