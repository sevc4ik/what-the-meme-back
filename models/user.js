import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
})

export default mongoose.model('Users', User, 'Users')
