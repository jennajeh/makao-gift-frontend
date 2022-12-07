import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },

  useNavigate() {
    return navigate;
  },

  useLocation: jest.fn(),
}));

describe('LoginPage', () => {
  it('로그인 버튼 렌더링', () => {
    render(<LoginPage />);

    screen.getByText('로그인하기');
  });
});
