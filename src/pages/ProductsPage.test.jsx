import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProductsPage from './ProductsPage';
import defaultTheme from '../styles/defaultTheme';

describe('ProductsPage', () => {
  it('상품 목록 반환', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter initialEntries={['/products']}>
          <ProductsPage />
        </MemoryRouter>
      </ThemeProvider>,
    );

    await waitFor(() => {
      screen.getAllByText(/작정하고 준비한/);
      screen.getAllByText(/마카오톡 선물하기 아이템/);
    });
  });
});
