import Room from "../models/room.js";

class RoomService {
  async getRoom(id) {
    try {
      const room = await Room.findById(id).exec();
      return room;
    } catch {
      throw new Error("ID doesn't exist");
    }
  }
  async createRoom(room) {
    const createdRoom = await Room.create({ ...room });
    return createdRoom;
  }

  async updateRoom(id, reqBody) {
    try {
      const room = await Room.findById(id).exec();
      Object.assign(room, reqBody);
      room.save();
      return room;
    } catch {
      throw new Error("ID doesn't exist");
    }
  }

  async deleteRoom(id) {
    try {
      const room = await Room.findById(id).exec();
      await room.delete();
      return "room deleted";
    } catch {
      throw new Error("ID doesn't exist");
    }
  }

  async getRooms() {
    const rooms = await Room.find();
    return rooms;
  }

  async getEmptyRooms() {
    const rooms = await Room.find();
    const filteredRoom = rooms.filter((room) => {
      return room.users.length < room.members && room.roomState === "IsOpen";
    });
    return filteredRoom;
  }
}

export default new RoomService();
