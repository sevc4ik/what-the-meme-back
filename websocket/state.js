import { updateGameState } from "./room.js";
import { broadcastConnection } from "../index.js";

const createObjGameState = (roomId, state) => {
  const gameState = {
    id: roomId,
    method: "gameState",
    content: state,
  };
  return gameState;
};

export const handleGameState = async (roomId, state, ws) => {
  if (roomId && state) {
    broadcastConnection(ws, createObjGameState(roomId, state));
    await updateGameState(roomId, state);
  }
};
