import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import Home from './Home';

test('Home', async () => {
  render((
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  ));

  await waitFor(() => {
    screen.getAllByText(/무얼 선물할 지 고민이라면/);
    screen.getAllByText(/특별한/);
    screen.getAllByText(/아이템을 전하세요/);
  });
});
