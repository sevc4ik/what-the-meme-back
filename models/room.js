import mongoose from "mongoose";
import { Meme } from "./meme.js";

const roundUserScore = new mongoose.Schema({
  id: { type: String },
  score: { type: Number },
});

const roundMemePick = new mongoose.Schema({
  id: { type: String },
  meme: { type: String },
});

const Round = new mongoose.Schema({
  situation: { type: String, default: "" },
  userMemePick: { type: [roundMemePick], default: [] },
  userScore: { type: [roundUserScore], default: [] },
});

const User = new mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  image: { type: String },
  score: { type: Number },
  memes: { type: [Meme] },
  admin: { type: Boolean, default: false },
});
const Room = new mongoose.Schema({
  users: { type: [User] },
  members: { type: Number },
  name: { type: String },
  pass: { type: String },
  image: { type: String },
  admin: { type: String },
  roomState: {
    type: String,
    enum: ["IsOpen", "IsGoing", "IsEnd"],
    default: "IsOpen",
  },
  gameState: {
    type: String,
    enum: [
      "Ожидание игроков",
      "Собираем мемы",
      "Следующий раунд стартует через",
      "Считаем баллы",
      "Выберите мем",
      "Голосование",
      "Результаты",
    ],
    default: "Ожидание игроков",
  },
  gameProgress: {
    type: Round,
    default: {
      situation: "",
      userMemePick: [],
      userScore: [],
    },
  },
});
export default mongoose.model("Rooms", Room, "Rooms");
