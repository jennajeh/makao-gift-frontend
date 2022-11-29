import { render, screen, waitFor } from '@testing-library/react';
import SignupPage from './SignupPage';

test('SignupPage', async () => {
  render(<SignupPage />);

  await waitFor(() => {
    screen.getByText(/SIGN/);
    screen.getByText(/회원가입/);
  });
});
