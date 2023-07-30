import * as express from 'express';
import { Request, Response } from 'express';
import { OrphanageService } from './orphanage.service';
import { validationResult, checkSchema } from 'express-validator';
import { orphanageValidationSchema } from '../../validationSchema/orphanageValidationSchema';
import { checkAuth } from '../middleware/auth.middleware';

export const orphanageRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

orphanageRouter.get('/', async (_, res: Response) => {
  try {
    const orphanage = await OrphanageService.getFirstOrphanage();
    res.status(200).send({ success: true, orphanage: orphanage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

orphanageRouter.get('/', async (_, res: Response) => {
  try {
    const orphanage = await OrphanageService.getAllOrphanages();
    res.status(200).send({ success: true, orphanage: orphanage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

orphanageRouter.get(
  '/id/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params;
      const orphanage = await OrphanageService.getOrphanageById(id);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.get(
  '/slug/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params;
      const orphanage = await OrphanageService.getOrphanageBySlug(slug);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.post(
  '/create',
  // checkAuth,
  // checkSchema(orphanageValidationSchema.createOrphanageSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const orphangeInfo = req.body;
      const orphanage = await OrphanageService.createOrphanage(orphangeInfo);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.post(
  '/update/:id',
  checkAuth,
  checkSchema(orphanageValidationSchema.createOrphanageSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { orphanageInfo } = req.body;
      const { id } = req.params;
      const orphanage = await OrphanageService.updateOrphanage(
        id,
        orphanageInfo,
      );
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

orphanageRouter.post(
  '/delete',
  checkAuth,
  checkSchema(orphanageValidationSchema.deleteSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;
      const orphanage = await OrphanageService.deleteOrphanage(id);
      res.status(200).send({ success: true, orphanage: orphanage });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);
