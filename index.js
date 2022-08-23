import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const DB_URL = `mongodb+srv://whatMeme:MEstb2VWB7Zm8Gt5@cluster0.39nekth.mongodb.net/MemeBase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
