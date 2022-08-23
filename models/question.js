import mongoose from 'mongoose';

const Question = new mongoose.Schema({
  content: {type: String},
})

export default mongoose.model('Questions', Question, 'Questions')
