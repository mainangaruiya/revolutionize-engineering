import mongoose from 'mongoose';

const emailSignupSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const EmailSignup = mongoose.model('EmailSignup', emailSignupSchema);
export default EmailSignup;