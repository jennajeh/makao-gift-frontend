import {
  render, screen, waitFor,
} from '@testing-library/react';
import ProductDetailPage from './ProductDetailPage';

const navigate = jest.fn();

jest.mock('../assets', () => ({
  iconImages: {
    icons: {
      minusBlack: 'MinusBlack.png',
      minusGray: 'MinusGray.png',
      plusBlack: 'PlusBlack.png',
    },
  },
}));

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
  useParams: () => ({
    id: '1',
  }),
}));

jest.mock('../hooks/useProductStore', () => () => ({
  product: {
    id: 1,
    price: 1000,
    name: 'sofa',
    maker: 'brand',
    description: 'this is sofa',
    imageUrl: '...',
  },
  resetProductState: jest.fn(),
  fetchProduct: jest.fn(),
  totalPrice: jest.fn(),
}));

describe('ProductDetailPage', () => {
  it('상품 상세 페이지', async () => {
    render(
      <ProductDetailPage />,
    );

    await waitFor(() => {
      screen.getByText(/선물하기/);
    });
  });
});
