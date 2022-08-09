import express, { NextFunction, Request, Response } from 'express';
var router = express.Router();

router.get(
  '/test',
  (req: Request, res: Response, next: NextFunction) => {
    res.send('hi');
  }
);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ text: 'Hello, World', something: 'Hehe' });
});

export { router as testRouter };
