const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const auth = require('../middleware/auth');

// Helper: Check if user is owner or admin
const isOwnerOrAdmin = (userId, ownerId, role) =>
  userId === ownerId.toString() || role === 'admin';

// POST /api/applications - Create new application
router.post('/', auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const application = await Application.create({
      user: req.user.id,
      title: title.trim(),
      description: description.trim()
    });

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET /api/applications - Get all applications (admin or user)
router.get('/', auth, async (req, res) => {
  try {
    const filter = req.user.role === 'admin' ? {} : { user: req.user.id };
    const applications = await Application.find(filter).sort({ submittedAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET /api/applications/:id - Get single application
router.get('/:id', auth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (!isOwnerOrAdmin(req.user.id, application.user, req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(application);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// PUT /api/applications/:id - Update application
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (!isOwnerOrAdmin(req.user.id, application.user, req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    if (title) application.title = title.trim();
    if (description) application.description = description.trim();

    if (status && req.user.role === 'admin') {
      const allowed = ['pending', 'approved', 'rejected'];
      if (!allowed.includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
      }
      application.status = status;
    }

    await application.save();
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE /api/applications/:id - Delete application
router.delete('/:id', auth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (!isOwnerOrAdmin(req.user.id, application.user, req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await application.remove();
    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
