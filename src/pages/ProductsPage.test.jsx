import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import ProductsPage from './ProductsPage';

test('ProductsPage', async () => async (act) => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        <ProductsPage />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByText(/마카오톡 선물하기 아이템/);
  });
});
