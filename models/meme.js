import mongoose from 'mongoose';

const Meme = new mongoose.Schema({
  link: {type: String, required: true},
})

export default mongoose.model('Memes', Meme, 'Memes')
