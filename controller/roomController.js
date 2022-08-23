import RoomService from "../service/roomService.js";

class RoomController {
  async getRoom(req, res) {
    try {
      const room = await RoomService.getRoom(req.params.id);
      return res.json(room);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createRoom(req, res) {
    try {
      const room = await RoomService.createRoom(req.body);
      res.json(room);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateRoom(req, res) {
    try {
      const room = await RoomService.updateRoom(req.params.id, req.body);
      res.json(room);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteRoom(req, res) {
    try {
      const room = await RoomService.deleteRoom(req.params.id);
      res.json(room);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getRooms(req, res) {
    try {
      let rooms = [];

      if (req.query.empty === 'true') {
        rooms = await RoomService.getEmptyRooms();
      } else {
        rooms = await RoomService.getRooms()
      }
      return res.json(rooms);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new RoomController();
