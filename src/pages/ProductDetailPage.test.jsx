import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';

jest.mock('../assets/index', () => ({
  icons: {
    minusBlack: 'MinusBlack.png',
    minusGray: 'MinusGray.png',
    plusBlack: 'PlusBlack.png',
  },
}));

describe('ProductDetailPage', () => {
  it('선물하기 버튼이 보인다', async () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      screen.getByText('선물하기');
    });
  });
});
