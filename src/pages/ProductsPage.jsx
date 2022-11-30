import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsBanner from '../components/ProductsBanner';
import ProductsList from '../components/ProductsList';
import useProductStore from '../hooks/useProductStore';

export default function ProductsPage() {
  const navigate = useNavigate();
  const productStore = useProductStore();
  const { products } = productStore;

  useEffect(() => {
    productStore.fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`, { state: { id } });
  };

  return (
    <div>
      <ProductsBanner />
      <ProductsList
        products={products}
        handleProductClick={handleProductClick}
      />
    </div>
  );
}
