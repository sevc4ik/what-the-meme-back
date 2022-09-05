import { broadcastConnection } from "../index.js";
import { getUserName } from "./user.js";
import { getAmountConnectedWSById } from "../index.js";
import RoomService from "../service/roomService.js";
import { deletUserFromRoom } from "./user.js";

const createChatObject = (name, roomId, content) => {
  const ChatObject = {
    user: name,
    id: roomId,
    content: content,
    method: "message",
  };
  return ChatObject;
};

export const handlerDisconnectChat = async (userId, roomId, ws) => {
  if (getAmountConnectedWSById(roomId) === 0) {
    await RoomService.deleteRoom(roomId);
  } else {
    const name = await getUserName(userId);
    broadcastConnection(ws, createChatObject(name, roomId, "Вышел из чата"));

    deletUserFromRoom(userId, roomId);
  }
};
