import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import HomePage from './HomePage';
import defaultTheme from '../styles/defaultTheme';

test('HomePage', async () => {
  render((
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
    </ThemeProvider>
  ));

  await waitFor(() => {
    screen.getAllByText(/무얼 선물할 지 고민이라면/);
    screen.getAllByText(/특별한/);
    screen.getAllByText(/아이템을 전하세요/);
  });
});
