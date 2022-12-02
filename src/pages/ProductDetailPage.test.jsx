import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';

describe('ProductDetailPage', () => {
  it('상품 상세 페이지', async () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      screen.getAllByText(/구매수량/);
      screen.getAllByText(/선물하기/);
    });
  });
});
