import { Request, Response } from 'express';

import Point from '../models/Point';
import PointItem from '../models/PointItem';

async function store(req: Request, res: Response) {
  try {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;

    const point = await Point.create({
      name,
      image: 'fake',
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    });

    if (point) {
      const pointId = point._id;

      await Promise.all(
        items.map((item: any) =>
          PointItem.create({
            _point_id: pointId,
            _item_id: item,
          })
        )
      );

      return res.json({ success: true });
    }

    throw new Error();
  } catch (e) {
    return res.status(500).json(e);
  }
}

export default {
  store,
};
