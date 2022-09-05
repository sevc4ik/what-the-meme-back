import { broadcastConnection } from "../index.js";
import { getRandomArraylement } from "../utils/random.js";
import { situations } from "../utils/consts.js";
import RoomService from "../service/roomService.js";

export const updateSituation = async (ws, roomId) => {
  const randomSituation = getRandomArraylement(situations);
  const situation = {
    id: roomId,
    method: "situation",
    content: randomSituation,
  };

  const room = await RoomService.getRoom(roomId);
  const { gameProgress } = room;

  gameProgress.situation = randomSituation;

  await RoomService.updateRoom(roomId, { gameProgress });
  broadcastConnection(ws, situation);
};
