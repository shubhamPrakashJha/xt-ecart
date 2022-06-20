import React, { useState, useEffect } from 'react';

import { Card, Hero } from 'components/atoms';
import { CartView } from 'components/molecules';
import { Header, ProductsCatalogue } from 'components/organisms';

import { ProductDataType } from 'types';

import './Products.scss';

type User = {
  name: string;
};

export function Products() {
  const [user, setUser] = React.useState<User>();
  const [cart, setCart] = useState<ProductDataType[]>(
    JSON.parse(window.localStorage.getItem('cart') || '[]')
  );
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [products, setProducts] = useState<ProductDataType[]>([]);
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
    if (cart.every((c) => c.id !== product.id)) {
      setCart([...cart, product]);
    }
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
        <CartView productList={cart} removeFromCart={onRemoveFromCart} />
      )}
      <Hero />
      {loading ? (
        <Loading />
      ) : (
        <ProductsCatalogue
          catalogueName="Latest Products"
          buttonSize="small"
          categoryList={[
            "men's clothing",
            "women's clothing",
            'jewelery',
            'electronics',
          ]}
          onCategorySelect={filterProduct}
          onCategoryReset={() => setFilter(products)}
          productList={filter}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
}
