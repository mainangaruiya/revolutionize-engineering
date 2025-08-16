import express from 'express';
import {
  createProject,
  getApprovedProjects,
  approveProject,
  rejectProject,
  updateProject,
  joinProject
} from '../controllers/projectController.js';
import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Innovator or Admin creates project
router.post('/', authenticateUser, authorizeRoles('innovator', 'admin'), createProject);

// Public/Collaborators view approved projects
router.get('/approved', getApprovedProjects);

// Admin approves/rejects project
router.put('/:id/approve', authenticateUser, authorizeRoles('admin'), approveProject);
router.put('/:id/reject', authenticateUser, authorizeRoles('admin'), rejectProject);

// Innovator updates before approval
router.put('/:id', authenticateUser, authorizeRoles('innovator'), updateProject);

// Collaborator/Student joins approved project
router.post('/:id/join', authenticateUser, authorizeRoles('collaborator', 'student'), joinProject);

export default router;
