const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

// Dummy user for demonstration
const dummyUser = {
  id: '123',
  email: 'alexi@gmail.com',
  passwordHash: bcrypt.hashSync('securePassword123', 10), // hashed password
  role: 'admin'
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Basic email check
  if (email !== dummyUser.email) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Password verification
  const isMatch = await bcrypt.compare(password, dummyUser.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate JWT
  const token = jwt.sign(
    {
      id: dummyUser.id,
      email: dummyUser.email,
      role: dummyUser.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
