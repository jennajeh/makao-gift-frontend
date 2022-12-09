import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import ProductsBanner from './ProductsBanner';

test('ProductsBanner', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <ProductsBanner />
    </ThemeProvider>,
  );

  screen.getByText(/평범한 선물은 주기도 민망하다구요?/);
  screen.getByText(/마카오톡 선물하기 아이템/);
  screen.getByText(/마카오톡 선물하기에서만 볼 수 있는 특별템 기획전/);
});
