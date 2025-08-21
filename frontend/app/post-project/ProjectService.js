// app/post-project/ProjectService.js

export const projectService = {
  submitProject: async (projectData) => {
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        return {
          success: false,
          error: data?.error || "Failed to submit project. Please try again.",
          details: data?.errors || null,
        };
      }

      return {
        success: true,
        data,
        message: "Project submitted successfully!",
      };
    } catch (err) {
      return {
        success: false,
        error: "Network error. Please try again.",
        details: null,
      };
    }
  },

  getProjects: async () => {
    try {
      const res = await fetch("/api/projects", { method: "GET" });
      const data = await res.json().catch(() => ([]));

      if (!res.ok) {
        return {
          success: false,
          error: data?.error || "Failed to fetch projects.",
        };
      }

      return { success: true, data };
    } catch {
      return { success: false, error: "Network error. Please try again." };
    }
  },
};
