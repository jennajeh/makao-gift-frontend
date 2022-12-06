import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import useProductStore from '../hooks/useProductStore';

export default function ProductDetailPage() {
  const productStore = useProductStore();

  const { product } = productStore;

  const { id } = useParams();

  useEffect(() => {
    productStore.resetProductState();

    if (id) {
      productStore.fetchProduct(id);
    }
  }, [id]);

  if (!product) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <ProductDetail />
  );
}
