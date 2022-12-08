import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { productStore } from '../stores/ProductStore';
import defaultTheme from '../styles/defaultTheme';
import OrderPage from './OrderPage';

describe('OrderPage', () => {
  it('주문 폼이 보인다', async () => {
    localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));

    await productStore.fetchProduct(1);

    render(
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>
          <OrderPage />
        </MemoryRouter>
      </ThemeProvider>,
    );

    await waitFor(() => {
      screen.getByText(/구매수량:/);
      screen.getByText(/상품금액:/);
      screen.getByText(/선물하기/);
    });
  });
});
