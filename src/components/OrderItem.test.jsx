import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { orderStore } from '../stores/OrderStore';
import defaultTheme from '../styles/defaultTheme';
import OrderItem from './OrderItem';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: '1',
  }),
}));

test('OrderItem', async () => {
  await orderStore.fetchOrders();

  render(
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        <OrderItem
          order={orderStore.orders[0]}
        />
      </ThemeProvider>
    </MemoryRouter>,
  );

  await waitFor(() => {
    screen.getByRole('heading', { level: 4, name: '제조사1' });
    screen.getByRole('heading', { level: 3, name: '상품1' });
    screen.getByText(/To./);
    screen.getByText(/전제나/);
  });
});
