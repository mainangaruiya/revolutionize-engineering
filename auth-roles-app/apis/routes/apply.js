// routes/apply.js
const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const Project = require('../models/Project');
const User = require('../models/User');
const auth = require('../middleware/auth');

// POST /api/apply - Submit application to a project
router.post('/', auth, async (req, res) => {
  try {
    const { projectId, name, contact, motivation, cvLink, github } = req.body;

    if (!projectId || !name || !contact || !motivation) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const application = await Application.create({
      user: req.user.id,
      project: projectId,
      name: name.trim(),
      contact: contact.trim(),
      motivation: motivation.trim(),
      cvLink: cvLink?.trim(),
      github: github?.trim()
    });

    const creator = await User.findById(project.creator);
    console.log(`📬 Notify ${creator.email}: New application for "${project.title}"`);

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
