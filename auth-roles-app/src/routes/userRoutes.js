import express from 'express';
import { getUserById, updateUser } from '../controllers/userController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';

const router = express.Router();

// Route to get user details
router.get('/me', authenticateUser, getUserById);

// Route to update user information
router.put('/me', authenticateUser, updateUser);

// Example of a route restricted to Admin role
router.delete('/:id', authenticateUser, roleMiddleware('Admin'), (req, res) => {
  // Logic to delete a user by ID
});

export default router;
