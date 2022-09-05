import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
import cors from "cors";
import WSS from "express-ws";

import RoomService from "./service/roomService.js";
import { handlerDisconnectChat } from "./websocket/chat.js";
import { updateRoomState, getRoomMembers } from "./websocket/room.js";
import { handleGameState } from "./websocket/state.js";
import { updateSituation } from "./websocket/situation.js";

const PORT = process.env.PORT || 5000;
const DB_URL =
  process.env.URL ||
  `mongodb+srv://whatMeme:MEstb2VWB7Zm8Gt5@cluster0.39nekth.mongodb.net/MemeBase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

const clientsMemeData = [];
const clientsScoreData = [];

const WSServer = WSS(app);
const aWss = WSServer.getWss();

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
app.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    msg = JSON.parse(msg);
    if (msg.id) {
      switch (msg.method) {
        case "connection":
          connectionHandler(ws, msg);
          break;
        case "message":
          broadcastConnection(ws, msg);
          break;
      }
    }
  });
  ws.on("close", async (msg, reason) => {
    if (reason) {
      const [userId, roomId] = reason.split(" ");
      if (userId && roomId) {
        handlerDisconnectChat(userId, roomId, ws);
      }
    }
  });
});

const connectionHandler = (ws, msg) => {
  ws.id = msg.id;
  broadcastConnection(ws, msg);
};

const broadcastConnection = (ws, msg) => {
  aWss.clients.forEach((client) => {
    if (client.id === msg.id) {
      client.send(JSON.stringify(msg));
    }
  });
};

startApp();
