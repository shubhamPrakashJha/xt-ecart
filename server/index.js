require('dotenv').config();

const express = require('express');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(process.env.PORT, () => {
  console.log('listening for requests on port', process.env.PORT);
});
