import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  goals: String,
  stage: { type: String, default: 'Idea' },
  status: { type: String, default: 'Pending' }, // Pending, Approved, Rejected
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  approvedAt: Date,
  rejectedAt: Date,
  editingLocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);
export default Project;