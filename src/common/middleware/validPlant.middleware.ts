import { HttpException } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import plantsDb from '../../db.json';

const validPlantMiddleware = (req: Request, _, next: NextFunction) => {
  const { plantId } = req.params;
  const plantExists = plantsDb.some(({ id }) => id === plantId);
  if (!plantExists) {
    throw new HttpException('A plant with this id was not found 😞', 400);
  }

  next();
};

export default validPlantMiddleware;
