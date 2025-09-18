const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Application = require('../models/Application');
const auth = require('../middleware/auth');

// Helper: Check if user is owner or admin
const isOwnerOrAdmin = (userId, ownerId, role) =>
  userId === ownerId.toString() || role === 'admin';

// POST /api/comments - Create comment
router.post('/', auth, async (req, res) => {
  try {
    const { applicationId, content } = req.body;
    if (!applicationId || !content) {
      return res.status(400).json({ message: 'Application ID and content are required' });
    }

     // Check if the application exists
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    //comments creation
    const comment = await Comment.create({
      application: applicationId,
      user: req.user.id,
      content: content.trim()
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST /api/comments/ :id/request-update post approval .
router.post('/:id/request-update', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('application');
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Only owner or admin can request update
    if (!isOwnerOrAdmin(req.user.id, comment.user, req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Only allow if application is approved
    if (comment.application.status !== 'approved') {
      return res.status(400).json({ message: 'Update request only allowed for approved applications' });
    }

    // Logic to handle update request (notify admin)
    // For simplicity, we'll just return a success message here
    res.json({ message: 'Update request submitted. An admin will review your request.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET /api/comments/application/:applicationId - Get comments for application
router.get('/application/:applicationId', auth, async (req, res) => {
  try {
    const comments = await Comment.find({ application: req.params.applicationId })
      .populate('user', 'email')
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// PUT /api/comments/:id - Update comment
router.put('/:id', auth, async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const comment = await Comment.findById(req.params.id).populate('application');
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Block editing if application is approved
    if (comment.application.status === 'approved') {
      return res.status(403).json({ message: 'Cannot edit comment after application approval' });
    }

    if (!isOwnerOrAdmin(req.user.id, comment.user, req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    comment.content = content.trim();
    await comment.save();
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE /api/comments/:id - Delete comment //
router.delete('/:id', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (!isOwnerOrAdmin(req.user.id, comment.user, req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await comment.remove();
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
