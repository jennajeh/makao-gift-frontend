import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from './ProductsPage';

describe('ProductsPage', () => {
  it('상품 목록 반환', async () => {
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      screen.getAllByText(/마카오톡 선물하기 아이템/);
      screen.getAllByText(/테스트용 게시물/);
    });
  });
});
