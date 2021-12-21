import AppError from "@shared/errors/AppError";
import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import UpdateUserAvatarService from "../../services/UpdateUserAvatarService";

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService()

    if (!request.file?.filename){
      throw new AppError('Select an image!')
    }

    const user = await updateAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename
    })

    return response.json(instanceToInstance(user))
  }
}