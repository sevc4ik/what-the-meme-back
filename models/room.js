import mongoose from 'mongoose';

const Room = new mongoose.Schema({
  users: {type: [ String ], required: true},
  members: {type: Number, required: true},
  name: {type: String, required: true},
  pass: {type: String, required: true},
  image: {type: String, required: true},
})

export default mongoose.model('Rooms', Room, 'Rooms')