import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import useProductStore from '../hooks/useProductStore';

export default function ProductDetailPage() {
  const productStore = useProductStore();

  const { id } = useParams();

  const { product } = productStore;

  useEffect(() => {
    productStore.resetProductState();

    productStore.fetchProduct(id);
  }, []);

  const handleChangeQuantityDown = () => {
    productStore.quantityDown();
  };

  if (!product) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <ProductDetail
      handleChangeQuantityDown={handleChangeQuantityDown}
    />
  );
}
