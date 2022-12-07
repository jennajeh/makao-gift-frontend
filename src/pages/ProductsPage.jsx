import { useEffect } from 'react';
import ProductsBanner from '../components/ProductsBanner';
import ProductsList from '../components/ProductsList';
import useProductStore from '../hooks/useProductStore';

export default function ProductsPage() {
  const productStore = useProductStore();
  const { products } = productStore;

  useEffect(() => {
    productStore.fetchProducts();
  }, []);

  return (
    <div>
      <ProductsBanner />
      <ProductsList
        products={products}
      />
    </div>
  );
}
