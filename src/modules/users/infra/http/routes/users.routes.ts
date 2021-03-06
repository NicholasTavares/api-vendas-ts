import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import multer from 'multer'
import uploadConfig from "@config/upload";
import UserController from "../controllers/UsersControlles";
import isAuthenticated from "../../../../../shared/errors/middlewares/isAuthenticated";
import UserAvatarController from "../controllers/UserAvatarController";

const usersRouter = Router()
const usersController = new UserController()
const usersAvatarController = new UserAvatarController()

const upload = multer(uploadConfig.multer)

usersRouter.get('/', isAuthenticated, usersController.index)

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }),
  usersController.create
)

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update
)

export default usersRouter
