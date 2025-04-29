import { Request, Response } from 'express';
import Payload from './payload.interface';
import UsersService from './users.service';

export class UsersController {
  constructor() {}

  static async getUsers(req: Request, res: Response): Promise<any> {
    const payload: Payload = {
      clientPayload: req.query.payload as string,
      responsePayload: await UsersService.getAllUsers(),
      time: new Date().toISOString() as string
    };
    return res.json(payload);
  }

  static async getUserById(req: Request, res: Response): Promise<any> {
    const payload: Payload = {
      clientPayload: req.body.payload as string,
      responsePayload: await UsersService.getUserById(Number(req.body.userID)),
      time: new Date().toISOString() as string
    };
    return res.json(payload);
  }
}
