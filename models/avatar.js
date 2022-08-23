import mongoose from 'mongoose';

const Avatar = new mongoose.Schema({
  link: {type: String, required: true},
})

export default mongoose.model('Avatars', Avatar, 'Avatars')
