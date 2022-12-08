import { useEffect } from 'react';
import OrderList from '../components/OrderList';
import useOrderStore from '../hooks/useOrderStore';

export default function OrdersPage() {
  const orderStore = useOrderStore();

  useEffect(() => {
    console.log(1);
    orderStore.fetchOrders();
    console.log(orderStore.orders);
  }, []);

  return (
    <OrderList />
  );
}
