import {
  cleanup,
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { userStore } from '../stores/UserStore';
import defaultTheme from '../styles/defaultTheme';
import LoginForm from './LoginForm';

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
}));

const context = describe;

describe('LoginForm', () => {
  function renderLoginForm(location) {
    render(
      <ThemeProvider theme={defaultTheme}>
        <LoginForm location={location} />
      </ThemeProvider>,
    );
  }

  context('로그인 성공시', () => {
    it('홈페이지로 이동한다', async () => async (act) => {
      renderLoginForm({ state: {} });

      screen.getByRole('heading', { name: 'USER LOGIN' });

      fireEvent.change(screen.getByPlaceholderText('아이디'), {
        target: { value: 'test1' },
      });

      fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
        target: { value: 'Test123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/');
      });
    });

    it('주문 페이지로 이동한다', async () => async (act) => {
      renderLoginForm({ state: { previousPage: 'productDetail' } });

      screen.getByRole('heading', { name: 'USER LOGIN' });

      fireEvent.change(screen.getByPlaceholderText('아이디'), {
        target: { value: 'test1' },
      });

      fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
        target: { value: 'Test123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        expect(navigate).toBeCalledWith(-1);
      });
    });
  });

  context('아이디 혹은 비밀번호를 잘못 입력했을 시', () => {
    it('로그인이 실패한다', async () => async (act) => {
      renderLoginForm({ state: {} });

      fireEvent.change(screen.getByPlaceholderText('아이디'), {
        target: { value: 'xxx' },
      });

      fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
        target: { value: 'Test123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        expect(userStore.loginFailed).toBeTruthy();
        screen.getByText('아이디 혹은 비밀번호가 맞지 않습니다');
      });
    });
  });

  it('아이디와 비밀번호를 입력하지 않은 경우', async () => async (act) => {
    renderLoginForm({ state: {} });

    fireEvent.change(screen.getByPlaceholderText('아이디'), {
      target: { value: '' },
    });

    fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
      target: { value: '' },
    });

    fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

    await waitFor(() => {
      expect(userStore.loginFailed).toBeTruthy();
      screen.getByText('아이디와 비밀번호를 입력해주세요');
    });
  });

  it('아이디를 입력하지 않은 경우', async () => async (act) => {
    renderLoginForm({ state: {} });

    fireEvent.change(screen.getByPlaceholderText('아이디'), {
      target: { value: '' },
    });

    fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
      target: { value: 'Test1234!' },
    });

    fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

    await waitFor(() => {
      expect(userStore.loginFailed).toBeTruthy();
      screen.getByText('아이디를 입력해주세요');
    });
  });

  it('비밀번호를 입력하지 않은 경우', async () => async (act) => {
    renderLoginForm({ state: {} });

    fireEvent.change(screen.getByPlaceholderText('아이디'), {
      target: { value: 'test1' },
    });

    fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
      target: { value: '' },
    });

    fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

    await waitFor(() => {
      expect(userStore.loginFailed).toBeTruthy();
      screen.getByText('비밀번호를 입력해주세요');
    });
  });
});
