import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { productStore } from '../stores/ProductStore';
import { userStore } from '../stores/UserStore';
import ProductDetail from './ProductDetail';

const context = describe;

const navigate = jest.fn();

jest.mock('../assets', () => ({
  icons: {
    minusBlack: 'MinusBlack.png',
    minusGray: 'MinusGray.png',
    plusBlack: 'PlusBlack.png',
  },
}));

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('ProductDetail', () => {
  function renderProductDetail() {
    render(
      <ProductDetail />,
    );
  }

  it('상품 상세 페이지를 보여준다', async () => {
    const id = 1;

    await productStore.fetchProduct(id);

    renderProductDetail();

    screen.getByText(1);
    screen.getByText('제조사');
    screen.getByText('구매수량');
    screen.getByText('상품설명');
  });

  context('선물하기 버튼이 클릭되었을 때', () => {
    context('로그아웃 상태인 경우', () => {
      it('로그인 페이지로 이동한다', async () => {
        const id = 1;

        await productStore.fetchProduct(id);

        renderProductDetail();

        fireEvent.click(screen.getByText('선물하기'));

        expect(navigate).toBeCalledWith('/login', { state: { previousPage: 'productDetailPage' } });

        expect(navigate).not.toBeCalledWith('/order');
      });
    });

    context('로그인 상태인 경우', () => {
      it('주문 페이지로 이동한다', async () => {
        localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));
        userStore.setAmount(50000);

        const id = 1;

        await productStore.fetchProduct(id);

        renderProductDetail();

        fireEvent.click(screen.getByText('선물하기'));

        expect(navigate).toBeCalledWith('/order');
      });
    });
  });
});
