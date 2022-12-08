import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import OrdersPage from './OrdersPage';

const context = describe;

describe('OrdersPage', () => {
  context('주문한 상품이 있을 경우', () => {
    it('내역이 보인다', async () => {
      render(
        <ThemeProvider theme={defaultTheme}>
          <MemoryRouter>
            <OrdersPage />
          </MemoryRouter>
        </ThemeProvider>,
      );

      screen.getByText(/내가 주문한 내역이 없습니다/);

      await waitFor(() => {
        screen.getByText(/내가 주문한 내역입니다/);
      });
    });
  });
});
