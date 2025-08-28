require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('./db');
const applicationRoutes = require('./routes/application');
const commentRoutes = require('./routes/comment');
const authRoutes = require('./middleware/auth');
const authMiddleware = require('./middleware/auth');
const applyRoutes = require('./routes/apply');

const app = express();

// Connect to MongoDB
connectDB().catch(err => {
  console.error('MongoDB connection failed:', err.message);
  process.exit(1);
});

// Global Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/applications', applicationRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/apply', applyRoutes);

// Protected Test Route
app.get('/api/secure', authMiddleware, (req, res) => {
  res.json({
    message: `Authenticated as ${req.user.email}`,
    role: req.user.role
  });
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
