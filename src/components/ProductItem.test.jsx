import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { productStore } from '../stores/ProductStore';
import defaultTheme from '../styles/defaultTheme';
import ProductItem from './ProductItem';

describe('ProductItem', () => {
  it('상품을 반환한다', async () => {
    await productStore.fetchProducts();

    render(
      <MemoryRouter>
        <ThemeProvider theme={defaultTheme}>
          <ProductItem
            product={productStore.products[0]}
          />
        </ThemeProvider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      screen.getByRole('heading', { name: '테스트용 게시물 1' });
    });
  });
});
