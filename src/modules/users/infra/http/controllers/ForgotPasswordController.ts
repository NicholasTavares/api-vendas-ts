import { Request, Response } from "express";
import SendForGotPasswordEmailService from "../../services/SendForGotPasswordEmailService";

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    const sendForgotPasswordEmail = new SendForGotPasswordEmailService()

    await sendForgotPasswordEmail.execute({
      email
    })

    return response.status(204).json()
  }
}

