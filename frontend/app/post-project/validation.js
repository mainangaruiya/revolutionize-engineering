// app/post-project/validation.js

export const projectValidation = {
  validateTitle: (title) => {
    if (!title || title.trim().length === 0) return "Project title is required";
    if (title.trim().length < 3)
      return "Project title must be at least 3 characters long";
    if (title.trim().length > 100)
      return "Project title must be less than 100 characters";
    return null;
  },

  validateDescription: (description) => {
    if (!description || description.trim().length === 0)
      return "Project description is required";
    if (description.trim().length < 10)
      return "Project description must be at least 10 characters long";
    if (description.trim().length > 1000)
      return "Project description must be less than 1000 characters";
    return null;
  },

  // Match the <option value="..."> entries in your form
  validateCategory: (category) => {
    const validCategories = [
      "Software-ai",
      "renew-sustain",
      "civil",
      "literature",
      "media",
      "sports",
      "other",
    ];
    if (!category) return "Project category is required";
    if (!validCategories.includes(category))
      return "Please select a valid project category";
    return null;
  },

  validateProjectUrl: (url) => {
    if (!url || url.trim().length === 0) return "Project URL is required";
    try {
      // Will throw if invalid
      new URL(url.trim());
      return null;
    } catch {
      return "Please enter a valid URL (include http/https)";
    }
  },

  validateRepositoryUrl: (url) => {
    if (!url || url.trim().length === 0) return null; // optional
    try {
      new URL(url.trim());
      return null;
    } catch {
      return "Please enter a valid repository URL (include http/https)";
    }
  },

  validateTeamSize: (size) => {
    if (size === undefined || size === null || size === "")
      return "Team size is required";
    const n = parseInt(size, 10);
    if (Number.isNaN(n) || n < 1 || n > 50)
      return "Team size must be between 1 and 50 members";
    return null;
  },

  validateForm: (formData) => {
    const errors = {};

    const titleError = projectValidation.validateTitle(formData.title);
    if (titleError) errors.title = titleError;

    const descriptionError = projectValidation.validateDescription(
      formData.description
    );
    if (descriptionError) errors.description = descriptionError;

    const categoryError = projectValidation.validateCategory(
      formData.category
    );
    if (categoryError) errors.category = categoryError;

    const urlError = projectValidation.validateProjectUrl(
      formData.projectUrl
    );
    if (urlError) errors.projectUrl = urlError;

    const repoError = projectValidation.validateRepositoryUrl(
      formData.repositoryUrl
    );
    if (repoError) errors.repositoryUrl = repoError;

    const teamSizeError = projectValidation.validateTeamSize(
      formData.teamSize
    );
    if (teamSizeError) errors.teamSize = teamSizeError;

    return { isValid: Object.keys(errors).length === 0, errors };
  },
};
