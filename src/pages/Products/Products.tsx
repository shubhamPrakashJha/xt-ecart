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
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [
    {
      data: productsData,
      isLoading: isProductsLoading,
      isError: isProductsError,
    },
    fetchProducts,
  ] = useDataApi('http://localhost:4000/api/products', []);
  const [cart, setCart] = useState<ProductDataType[]>([]);
  const [filter, setFilter] = useState<ProductDataType[]>(productsData.records);
  const [pageData, setPageData] = useState({
    page: 1,
    pageCount: 1,
  });

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(`http://localhost:4000/api/cart/`);
      const result = await response.json();
      setCart(result.records);
    };
    fetchCart();
  }, []);

  useEffect(() => {
    setFilter(productsData.records);
    if (productsData?._metadata) {
      setPageData({
        page: productsData._metadata.page,
        pageCount: productsData._metadata.pageCount,
      });
    }
  }, [productsData]);

  const onAddToCart = async (product: any) => {
    const addToCart = async () => {
      const response = await fetch(
        `http://localhost:4000/api/cart/${product.id}`,
        {
          method: 'POST',
        }
      );
      const result = await response.json();
      setCart(result.records);
    };
    addToCart();
  };

  const onRemoveFromCart = (id: number) => {
    const addToCart = async () => {
      const response = await fetch(`http://localhost:4000/api/cart/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      setCart(result.records);
    };
    addToCart();
  };

  const Loading = () => {
    return <>Loading...</>;
  };

  const onPageSelect = (index: number) => {
    fetchProducts(
      `http://localhost:4000/api/products?page=${index}&&limit=100`
    );
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
        cartCount={cart.length || 0}
        onCartClick={() => setIsCartVisible(!isCartVisible)}
      />
      {isCartVisible && (
        <CartView productList={cart} removeFromCart={onRemoveFromCart} />
      )}
      <Hero />
      {isProductsError && <div>Something went wrong ...</div>}
      {isProductsLoading ? (
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
