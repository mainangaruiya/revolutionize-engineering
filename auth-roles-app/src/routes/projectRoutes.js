import express from 'express';
import { createProject, getProjects, approveProject, rejectProject, updateProject } from '../controllers/projectController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/', authenticateUser, createProject);
router.get('/', getProjects);

router.post('/:id/approve', authenticateUser, adminMiddleware, approveProject);
router.post('/:id/reject', authenticateUser, adminMiddleware, rejectProject);

router.put('/:id', authenticateUser, updateProject);

export default router;