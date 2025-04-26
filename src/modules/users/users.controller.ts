import { Request, Response } from 'express';
import Payload from './payload.interface';

export class UsersController {
  constructor() {}

  static async getUsers(req: Request, res: Response): Promise<any> {
    const payload: Payload = {
      payload: req.query.payload as string,
      time: new Date().toISOString() as string
    };

    console.log(payload.time, new Date().getDate() as number);
    console.log(payload);

    return res.send(payload);
  }
}
