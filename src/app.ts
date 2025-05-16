import { Request, Response } from 'express';
const express = require('express');

import UserRouter from './modules/users/users.routes';
import ProductsRouter from './modules/products/products.routes';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

app.use('/users', UserRouter);
app.use('/products', ProductsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
