import { useEffect } from 'react';
import OrderForm from '../components/OrderForm';
import useOrderStore from '../hooks/useOrderStore';

export default function OrderPage() {
  const orderStore = useOrderStore();

  useEffect(() => () => {
    orderStore.resetOrderStatus();
  }, []);

  return (
    <OrderForm />
  );
}
