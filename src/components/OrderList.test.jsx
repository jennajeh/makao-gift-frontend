import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { orderStore } from '../stores/OrderStore';
import defaultTheme from '../styles/defaultTheme';
import OrderList from './OrderList';

describe('OrderList', () => {
  beforeEach(() => {
    orderStore.fetchOrders({ page: 1, size: 8 });
  });

  it('주문한 내역을 조회할 수 있다', async () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={defaultTheme}>
          <OrderList />
        </ThemeProvider>
      </MemoryRouter>,
    );

    screen.getByText(/내가 주문한 내역이 없습니다/);

    await waitFor(() => {
      screen.getByText(/내가 주문한 내역입니다/);
    });
  });
});
