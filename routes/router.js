import Router from 'express'
import QuestionController from '../controller/questionController.js'
import UserController from '../controller/userContoller.js'
import MemeController from '../controller/memeController.js'
import AvatarController from '../controller/avatarController.js'
import RoomController from '../controller/roomController.js'

const router = new Router()

router.get('/question', QuestionController.getQuestions)
router.get('/question/:id', QuestionController.getQuestion)
router.post('/question', QuestionController.createQuestion)

router.get('/user/:id', UserController.getUser)
router.post('/user', UserController.createUser)
router.patch('/user/:id', UserController.updateUser)

router.get('/meme', MemeController.getMemes);

router.get('/avatar', AvatarController.getAvatars);

router.get('/room/:id', RoomController.getRoom);
router.post('/room', RoomController.createRoom);
router.patch('/room/:id', RoomController.updateRoom);
router.delete('/room/:id', RoomController.deleteRoom);
router.get('/room', RoomController.getRooms);

export default router;