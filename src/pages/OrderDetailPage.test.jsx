import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import OrderDetailPage from './OrderDetailPage';

describe('OrderDetailPage', () => {
  it('주문 상세 페이지가 보인다', async () => {
    render(
      <MemoryRouter initialEntries={['/orders/1']}>
        <ThemeProvider theme={defaultTheme}>
          <Routes>
            <Route path="/orders/:id" element={<OrderDetailPage />} />
          </Routes>
        </ThemeProvider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      screen.getAllByText(/구매수량/);
      screen.getAllByText(/총 상품금액/);
      screen.getAllByText(/구매일/);
      screen.getAllByText(/받는 분/);
      screen.getAllByText(/받는 분 주소/);
      screen.getAllByText(/받는 분께 보내는 메세지/);
    });
  });
});
