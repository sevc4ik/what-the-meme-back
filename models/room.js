import mongoose from 'mongoose';
import { Meme } from './meme.js';

const User = new mongoose.Schema({
  _id: {type: String},
  name: {type: String},
  image: {type: String},
  score: {type: Number},
  memes: {type: Meme},
})
const Room = new mongoose.Schema({
  users: {type: [ User ]},
  members: {type: Number},
  name: {type: String},
  pass: {type: String},
  image: {type: String},
})
export default mongoose.model('Rooms', Room, 'Rooms')