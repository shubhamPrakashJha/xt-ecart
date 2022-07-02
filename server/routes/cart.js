const express = require('express');
const router = express.Router();
const { products } = require('../mock/products');
let cart = [];

// GET all item from cart
router.get('/', (req, res) => {
  response = {
    _metadata: {
      totalCount: cart.length,
    },
    records: cart,
  };
  res.json(response);
});

// POST a new item in cart
router.post('/:id', (req, res) => {
  const itemToAdd = products.filter(
    (product) => product.id === Number(req.params.id)
  );
  if (cart.every((item) => item.id !== Number(req.params.id))) {
    cart = [...cart, ...itemToAdd];
  }

  response = {
    _metadata: {
      totalCount: cart.length,
    },
    records: cart,
  };
  res.json(response);
});

// DELETE item from a cart
router.delete('/:id', (req, res) => {
  const updatedCart = cart.filter(
    (product) => product.id !== Number(req.params.id)
  );

  cart = updatedCart;
  response = {
    _metadata: {
      totalCount: cart.length,
    },
    records: cart,
  };
  res.json(response);
});

// UPDATE item in a cart
router.patch('/:id', (req, res) => {
  res.json({ data: 'UPDATE a cart' });
});

module.exports = router;
