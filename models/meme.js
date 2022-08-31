import mongoose from 'mongoose';

export const Meme = new mongoose.Schema({
  _id: {type: String},
  link: {type: String, required: true},
})

export default mongoose.model('Memes', Meme, 'Memes')
