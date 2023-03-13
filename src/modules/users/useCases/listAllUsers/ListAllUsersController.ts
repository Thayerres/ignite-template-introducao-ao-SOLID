import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    try {
      const user = this.listAllUsersUseCase.execute(user_id);
      return response.send(200).json(user);
    } catch (error) {
      return response.send(400).send();
    }
  }
}

export { ListAllUsersController };
