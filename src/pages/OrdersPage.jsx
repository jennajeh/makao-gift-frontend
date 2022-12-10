import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import OrderList from '../components/OrderList';
import useOrderStore from '../hooks/useOrderStore';

export default function OrdersPage() {
  const orderStore = useOrderStore();

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    orderStore.fetchOrders({ page, size: 8 });
  }, [page]);

  return (
    <OrderList />
  );
}
