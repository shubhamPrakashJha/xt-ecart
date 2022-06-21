const express = require('express');

const router = express.Router();

const { products } = require('../mock/products');

// GET all products
router.get('/', (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;

  const productsSliced = products.slice(startIndex, startIndex + limit);
  res.json(productsSliced);
});

// GET a single product
router.get('/:id', (req, res) => {
  res.json({ data: 'GET a single product' });
});

// POST a new product
router.post('/', (req, res) => {
  res.json({ data: 'POST a new product' });
});

// DELETE a product
router.delete('/:id', (req, res) => {
  res.json({ data: 'DELETE a product' });
});

// UPDATE a product
router.patch('/:id', (req, res) => {
  res.json({ data: 'UPDATE a product' });
});

module.exports = router;
