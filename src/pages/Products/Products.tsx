import React, { useState, useEffect } from 'react';

import { Hero, Pagination } from 'components/atoms';
import { CartView } from 'components/molecules';
import { Header, ProductsCatalogue } from 'components/organisms';

import { ProductDataType } from 'types';

import './Products.scss';

type User = {
  name: string;
};

export function Products() {
  const first = React.useRef(true);
  const [user, setUser] = React.useState<User>();
  const [cart, setCart] = useState<ProductDataType[]>(
    JSON.parse(window.localStorage.getItem('cart') || '[]')
  );
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [products, setProducts] = useState<ProductDataType[]>([]);
  const [filter, setFilter] = useState(products);
  const [pageData, setPageData] = useState({
    page: 1,
    pageCount: 1,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/products?page=${pageData.page}&&limit=100`
      );
      const productsData = await response.json();

      setProducts(productsData.records);
      setFilter(productsData.records);
      setPageData({
        page: productsData._metadata.page,
        pageCount: productsData._metadata.pageCount,
      });
      setLoading(false);
    };

    if (!first.current) {
      getProducts();
    } else {
      first.current = false;
    }
  }, [pageData.page]);

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

  const onPageSelect = (index: number) => {
    setPageData({
      page: index,
      pageCount: pageData.pageCount,
    });
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
      <Pagination
        pageCount={pageData.pageCount}
        current={pageData.page}
        onClickHandler={onPageSelect}
      />
    </div>
  );
}
