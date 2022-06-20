import { Button, Card, Hero } from 'components/atoms';
import { Header } from 'components/organisms';
import React, { useState, useEffect } from 'react';

import './Products.scss';

type User = {
  name: string;
};

type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export function Products() {
  const [user, setUser] = React.useState<User>();
  const [cart, setCart] = useState<ProductType[]>(
    JSON.parse(window.localStorage.getItem('cart') || '[]')
  );
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      setProducts(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };

    getProducts();
  }, []);

  const onAddToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const onRemoveFromCart = (id: number) => {
    setCart([...cart.filter((product) => product.id !== id)]);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (category: string) => {
    const updatedList = products.filter(
      (product) => product.category === category
    );
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <div>
        <div>
          <Button
            size="small"
            onClick={() => setFilter(products)}
            label="All"
          />
          <Button
            size="small"
            onClick={() => filterProduct("men's clothing")}
            label="men's Clothing"
          />
          <Button
            size="small"
            onClick={() => filterProduct("women's clothing")}
            label="women's Clothing"
          />
          <Button
            size="small"
            onClick={() => filterProduct('jewelery')}
            label="Jewelry"
          />
          <Button
            size="small"
            onClick={() => filterProduct('electronics')}
            label="Electronics"
          />
        </div>
        <div className="cardContainer">
          {filter.map((product: ProductType) => {
            const { id, image, title, price } = product;
            return (
              <Card
                key={`${title}-${id}`}
                imgUrl={image}
                title={title}
                price={price}
                addToCart={() => onAddToCart(product)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
        cartCount={cart.length}
        onCartClick={() => setIsCartVisible(!isCartVisible)}
      />
      {isCartVisible && (
        <div className="cart-popup">
          {cart.map((product: ProductType) => {
            const { id, image, title, price } = product;
            return (
              <Card
                key={`${title}-${id}`}
                isCart={true}
                imgUrl={image}
                title={title}
                price={price}
                addToCart={() => onAddToCart(product)}
                removeFromCart={() => onRemoveFromCart(product.id)}
              />
            );
          })}
        </div>
      )}
      <Hero />
      <h1>Latest Products</h1>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}
