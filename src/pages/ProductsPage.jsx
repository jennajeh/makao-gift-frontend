import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsBanner from '../components/ProductsBanner';
import ProductsList from '../components/ProductsList';
import useProductStore from '../hooks/useProductStore';

export default function ProductsPage() {
  const productStore = useProductStore();

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    productStore.fetchProducts({ page, size: 8 });
  }, [page]);

  return (
    <div>
      <ProductsBanner />
      <ProductsList />
    </div>
  );
}
