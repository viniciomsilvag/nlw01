import { Router } from 'express';

import Item from './models/Item';
import Point from './models/Point';
import PointItem from './models/PointItem';

const routes = Router();

routes.post('/items/registerall', async (req, res) => {
  try {
    const { list } = req.body;

    /**
     * Mapea todos os itens da lista.
     * Cada item é um novo elemento para ser salvo no banco.
     * O método Item.create retorna uma promise.
     * O método map retorna cada promise de cada Item.create em um array de
     * promises.
     * O array de promises vai direto para o método Promise.all que tratará
     * todas como uma só promise que resolverá quando todas forem resolvidas.
     *
     * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
     */
    const items = await Promise.all(list.map((item: any) => Item.create(item)));

    if (items) {
      return res.json(items);
    }

    throw new Error('Empty');
  } catch (e) {
    // console.error(e);
    return res.status(500).json(e);
  }
});

routes.get('/items', async (req, res) => {
  try {
    const items = await Item.find();

    const serializedItems = items.map((item: any) => ({
      _id: item._id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }));

    return res.json(serializedItems);
  } catch (e) {
    return res.status(404).json(e);
  }
});

routes.post('/points', async (req, res) => {
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
});

export default routes;
