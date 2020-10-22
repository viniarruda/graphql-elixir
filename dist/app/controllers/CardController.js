"use strict";Object.defineProperty(exports, "__esModule", {value: true});class CardController {
  createVirtualCard(req, res) {
    try {
      const { wallet_id } = req.body;

      if (!wallet_id) {
        return res.status(400).json({ message: 'should pass valid wallet_id' });
      }

      const virtualCardCreated = {
        id: 'urjxqkt1pog6p4d',
        virtual: true,
        status: 'blocked',
        holder_name: 'VITOR T RANGEL',
        number: '5502 1267 7856 2233',
        security_code: '356',
        expiration_date: '2019-12-27T18:12:42.553Z',
        updated_at: '2019-12-27T18:12:42.553Z',
        created_at: '2019-12-27T18:12:42.553Z',
      };

      return res.status(201).json(virtualCardCreated);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

exports. default = new CardController();
