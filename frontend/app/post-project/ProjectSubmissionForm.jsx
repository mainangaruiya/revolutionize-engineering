"use client";

import { useState, useEffect } from "react";
import { projectService } from "./ProjectService";
import { projectValidation } from "./validation";

const baseField =
  "w-full px-3 py-2 rounded-md border bg-neutral-800 border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 disabled:opacity-60";
const errorField = "border-red-500 focus:ring-red-500 focus:border-red-500";

export default function ProjectSubmissionForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    projectUrl: "",
    repositoryUrl: "",
    teamSize: "",
    startDate: "",
    endDate: "",
    challenges: "",
    achievements: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const validation = projectValidation.validateForm(formData);
      if (!validation.isValid) {
        setErrors(validation.errors);
        setLoading(false);
        return;
      }

      const result = await projectService.submitProject(formData);

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message || "Project submitted successfully!");
        setFormData({
          title: "",
          description: "",
          category: "",
          projectUrl: "",
          repositoryUrl: "",
          teamSize: "",
          startDate: "",
          endDate: "",
          challenges: "",
          achievements: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "Failed to submit project. Please try again."
        );
        if (result.details) setErrors(result.details);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitStatus("error");
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (submitStatus === "success") {
      const t = setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [submitStatus]);

  useEffect(() => {
    document.title = "Submit Project";
  }, []);

  return (
    <div className="min-w-6xl mx-auto mt-10 mb-6 p-6 rounded-xl border border-white/10 bg-neutral-900">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold" style={{ color: "#00ffff" }}>
          Submit Your Project
        </h2>
      </div>

      {submitStatus && (
        <div
          className={`mb-6 rounded-lg p-4 flex items-center gap-3 ${
            submitStatus === "success"
              ? "bg-emerald-500/10 border border-emerald-700 text-emerald-300"
              : "bg-red-500/10 border border-red-700 text-red-300"
          }`}
        >
          <span className="text-xl">
            {submitStatus === "success" ? "✓" : "⚠"}
          </span>
          <span className="flex-1">{submitMessage}</span>
          {submitStatus === "success" && (
            <button
              onClick={() => {
                setSubmitStatus(null);
                setSubmitMessage("");
              }}
              className="text-white/80 hover:text-white"
              aria-label="Dismiss"
            >
              ×
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-white">
        {/* Project Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="font-semibold mb-2 text-gray-300">
            Project Title <span className="text-red-400">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className={`${baseField} ${errors.title ? errorField : ""}`}
            placeholder="Enter your project title"
            disabled={loading}
          />
          {errors.title && (
            <span className="text-red-400 text-sm mt-1">{errors.title}</span>
          )}
        </div>

        {/* Project Description */}
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="font-semibold mb-2 text-gray-300"
          >
            Project Description <span className="text-red-400">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className={`${baseField} ${errors.description ? errorField : ""}`}
            placeholder="Describe your project, its purpose, and key features"
            disabled={loading}
          />
          <div className="text-right text-sm text-gray-400 mt-1">
            {formData.description.length}/1000 characters
          </div>
          {errors.description && (
            <span className="text-red-400 text-sm mt-1">
              {errors.description}
            </span>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label
            htmlFor="category"
            className="font-semibold mb-2 text-gray-300"
          >
            Project Category <span className="text-red-400">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`${baseField} ${errors.category ? errorField : ""}`}
            disabled={loading}
          >
            <option value="">Select a category</option>
            <option value="Software-ai">Software and AI for Engineering</option>
            <option value="renew-sustain">
              Renewable & Sustainable Energy
            </option>
            <option value="civil">
              Smart Infrastructure & Civil Engineering
            </option>
            <option value="literature">Agriculture & Food Engineering</option>
            <option value="media">Healthcare & Biomedical Engineering</option>
            <option value="sports">Robotics & Automation</option>
            <option value="other">Transport & Mobility</option>
          </select>
          {errors.category && (
            <span className="text-red-400 text-sm mt-1">{errors.category}</span>
          )}
        </div>

        {/* URLs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="projectUrl"
              className="font-semibold mb-2 text-gray-300"
            >
              Project URL <span className="text-red-400">*</span>
            </label>
            <input
              id="projectUrl"
              name="projectUrl"
              type="url"
              value={formData.projectUrl}
              onChange={handleChange}
              className={`${baseField} ${errors.projectUrl ? errorField : ""}`}
              placeholder="https://your-project.com"
              disabled={loading}
            />
            {errors.projectUrl && (
              <span className="text-red-400 text-sm mt-1">
                {errors.projectUrl}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="repositoryUrl"
              className="font-semibold mb-2 text-gray-300"
            >
              Repository URL
            </label>
            <input
              id="repositoryUrl"
              name="repositoryUrl"
              type="url"
              value={formData.repositoryUrl}
              onChange={handleChange}
              className={`${baseField} ${
                errors.repositoryUrl ? errorField : ""
              }`}
              placeholder="https://github.com/username/repo"
              disabled={loading}
            />
            {errors.repositoryUrl && (
              <span className="text-red-400 text-sm mt-1">
                {errors.repositoryUrl}
              </span>
            )}
          </div>
        </div>

        {/* Team Size & Dates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="teamSize"
              className="font-semibold mb-2 text-gray-300"
            >
              Team Size <span className="text-red-400">*</span>
            </label>
            <input
              id="teamSize"
              name="teamSize"
              type="number"
              min={1}
              max={50}
              value={formData.teamSize}
              onChange={handleChange}
              className={`${baseField} ${errors.teamSize ? errorField : ""}`}
              placeholder="1"
              disabled={loading}
            />
            {errors.teamSize && (
              <span className="text-red-400 text-sm mt-1">
                {errors.teamSize}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="startDate"
              className="font-semibold mb-2 text-gray-300"
            >
              Start Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className={baseField}
              disabled={loading}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="endDate"
              className="font-semibold mb-2 text-gray-300"
            >
              End Date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              className={baseField}
              disabled={loading}
            />
          </div>
        </div>

        {/* Optional Fields */}
        <div className="flex flex-col">
          <label
            htmlFor="challenges"
            className="font-semibold mb-2 text-gray-300"
          >
            Challenges Faced
          </label>
          <textarea
            id="challenges"
            name="challenges"
            rows={3}
            value={formData.challenges}
            onChange={handleChange}
            className={baseField}
            placeholder="What challenges did you encounter and how did you overcome them?"
            disabled={loading}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="achievements"
            className="font-semibold mb-2 text-gray-300"
          >
            Key Achievements
          </label>
          <textarea
            id="achievements"
            name="achievements"
            rows={3}
            value={formData.achievements}
            onChange={handleChange}
            className={baseField}
            placeholder="What are you most proud of in this project?"
            disabled={loading}
          />
        </div>

        {/* Submit */}
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="w-[95%] flex items-center justify-center gap-2 rounded-[20px] bg-[#00ffff] text-neutral-900 font-bold px-6 py-3 transition hover:opacity-80 disabled:opacity-60"
          >
            {loading && (
              <span className="h-5 w-5 inline-block border-2 border-black/30 border-t-black rounded-full animate-spin" />
            )}
            {loading ? "Submitting Project..." : "Submit Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
