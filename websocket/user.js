import UserService from "../service/userService.js";
import RoomService from "../service/roomService.js";

export const getUserName = async (userId) => {
  const user = await UserService.getUser(userId);
  const { name } = user;
  return name;
};

export const deletUserFromRoom = async (userId, roomId) => {
  const room = await RoomService.getRoom(roomId);
  const { users } = room;
  const updatedUsers = users.filter((user) => user._id !== userId);
  const updatedRoom = await RoomService.updateRoom(roomId, {
    users: updatedUsers,
  });
};
