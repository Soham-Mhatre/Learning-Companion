import mongoose from 'mongoose';

const checklistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: {
    week: { type: Number, required: true },
    topic: { type: String, required: true },
    learningObjectives: [{ type: String }],
    resources: [{ type: String }],
    practiceExercises: [{ type: String }]
  },
  type: { type: String, enum: ['roadmap', 'chat'], required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Checklist', checklistSchema);