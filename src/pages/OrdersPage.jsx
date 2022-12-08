import { useEffect } from 'react';
import OrderList from '../components/OrderList';
import useOrderStore from '../hooks/useOrderStore';

export default function OrdersPage() {
  const orderStore = useOrderStore();

  useEffect(() => {
    orderStore.fetchOrders();
  }, []);

  return (
    <OrderList />
  );
}
