import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import OrderForm from './OrderForm';
import defaultTheme from '../styles/defaultTheme';
import { productStore } from '../stores/ProductStore';

const navigate = jest.fn();

const context = describe;

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('OrderForm', () => {
  function renderOrderForm() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <OrderForm />
      </ThemeProvider>,
    );
  }

  it('주문 폼을 볼 수 있다', async () => {
    await productStore.fetchProduct(1);

    renderOrderForm();

    await waitFor(() => {
      screen.getByText(/구매수량/);
      screen.getByText(/상품금액/);
      screen.getByText(/선물하기/);
    });
  });

  context('주문에 성공했을 때', () => {
    it('주문 목록 페이지로 이동한다', async () => {
      await productStore.fetchProduct(1);

      renderOrderForm();

      fireEvent.change(screen.getByLabelText(/받는 분 성함/), {
        target: { value: '강보니' },
      });

      fireEvent.change(screen.getByLabelText(/받는 분 주소/), {
        target: { value: '서울시 성동구 성수동' },
      });

      fireEvent.click(screen.getByRole('button', { name: '선물하기' }));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/orders');
      });
    });
  });

  context('필수 입력란에 공백이 있어서 주문에 실패했을 때', () => {
    it('에러 메세지를 반환한다', async () => {
      renderOrderForm();

      fireEvent.change(screen.getByLabelText(/받는 분 성함/), {
        target: { value: '' },
      });

      fireEvent.change(screen.getByLabelText(/받는 분 주소/), {
        target: { value: '' },
      });

      fireEvent.click(screen.getByRole('button', { name: '선물하기' }));

      await waitFor(() => {
        screen.getByText('주소를 입력해 주세요.');
        screen.getByText('성함을 입력해 주세요.');
      });
    });
  });
});
