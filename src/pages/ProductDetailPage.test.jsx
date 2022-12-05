import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';

jest.mock('../assets', () => ({
  iconImages: {
    icons: {
      minusBlack: 'MinusBlack.png',
      minusGray: 'MinusGray.png',
      plusBlack: 'PlusBlack.png',
    },
  },
}));

describe('ProductDetailPage', () => {
  it('상품 상세 페이지', async () => {
    render(
      <MemoryRouter>
        <ProductDetailPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      screen.getAllByText(/선물하기/);
    });
  });
});
