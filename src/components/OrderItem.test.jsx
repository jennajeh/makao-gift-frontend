import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { orderStore } from '../stores/OrderStore';
import defaultTheme from '../styles/defaultTheme';
import OrderItem from './OrderItem';

test('OrderItem', async () => {
  await orderStore.fetchOrders({ page: 1, size: 8 });

  render(
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter>
        <OrderItem order={orderStore.orders[0]} />
      </MemoryRouter>
    </ThemeProvider>,
  );

  await waitFor(() => {
    screen.getByRole('heading', { level: 4, name: '테스트 1 메이커' });
    screen.getByRole('heading', { level: 3, name: '테스트용 게시물 1' });
    screen.getByText(/To./);
    screen.getByText(/강보니/);
  });
});
