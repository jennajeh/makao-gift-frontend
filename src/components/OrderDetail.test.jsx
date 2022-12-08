import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { orderStore } from '../stores/OrderStore';
import defaultTheme from '../styles/defaultTheme';
import OrderDetail from './OrderDetail';

describe('OrderDetail', () => {
  function renderOrderDetail() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <OrderDetail />
      </ThemeProvider>,
    );
  }

  it('첫 번째 주문 내역 조회', async () => {
    await orderStore.fetchOrder(1);

    renderOrderDetail();

    screen.getByText(/테스트용/);
    screen.getByText('구매수량');
    screen.getByText(1);
    screen.getByText('총 상품금액');
    screen.getByText('구매일');
    screen.getByText('받는 분');
    screen.getByText('받는 분 주소');
    screen.getByText('받는 분께 보내는 메세지');
  });
});
