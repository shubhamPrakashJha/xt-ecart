import React, { useState, useEffect } from 'react';

import { Hero, Pagination } from 'components/atoms';
import { CartView } from 'components/molecules';
import { Header, ProductsCatalogue } from 'components/organisms';
import { useDataApi } from 'services';

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
  const [{ data: productsData, isLoading, isError }, doFetch] = useDataApi(
    'http://localhost:4000/api/products',
    []
  );
  const [filter, setFilter] = useState(productsData.records || []);
  const [pageData, setPageData] = useState({
    page: 1,
    pageCount: 1,
  });

  console.log(productsData, filter);

  useEffect(() => {
    setFilter(productsData.records);
    if (productsData?._metadata) {
      setPageData({
        page: productsData._metadata.page,
        pageCount: productsData._metadata.pageCount,
      });
    }
  }, [productsData]);

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
    doFetch(`http://localhost:4000/api/products?page=${index}&&limit=100`);
    setPageData({
      page: index,
      pageCount: pageData.pageCount,
    });
  };

  const filterProduct = (category: string) => {
    const updatedList = productsData.records.filter(
      (product: ProductDataType) => product.category === category
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
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
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
          onCategoryReset={() => setFilter(productsData.records)}
          productList={filter || []}
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
