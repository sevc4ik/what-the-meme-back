import RoomService from "../service/roomService.js";

export const getRoomMembers = async (roomId) => {
  const room = await RoomService.getRoom(roomId);
  const { members } = room;
  return members;
};

export const updateRoomState = async (roomId, newState) => {
  const room = await RoomService.getRoom(roomId);
  const { roomState } = room;

  const updatedRoom = await RoomService.updateRoom(roomId, {
    roomState: newState,
  });
};

export const updateGameState = async (roomId, newState) => {
  const room = await RoomService.getRoom(roomId);
  if (room) {
    const { gameState } = room;
    const updatedRoom = await RoomService.updateRoom(roomId, {
      gameState: newState,
    });
  }
};
