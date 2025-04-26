import { Router } from 'express';
import { Request, Response } from 'express';

import Payload from './payload.interface';
import { UsersController } from './users.controller';

const router = Router();

router.get('/', UsersController.getUsers);

export default router;
