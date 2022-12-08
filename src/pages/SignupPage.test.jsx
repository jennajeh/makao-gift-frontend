import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import SignupPage from './SignupPage';

test('SignupPage', async () => {
  render(
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        <SignupPage />
      </ThemeProvider>
    </MemoryRouter>,
  );

  await waitFor(() => {
    screen.getByText(/SIGN UP/);
    screen.getByText(/회원가입/);
  });
});
