/* eslint-disable react/prop-types */
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { userStore } from '../stores/UserStore';
import defaultTheme from '../styles/defaultTheme';
import SignupForm from './SignupForm';

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

const context = describe;

describe('SignupForm', () => {
  beforeEach(() => {
    userStore.resetSignupStatus();
  });

  function renderSignupForm() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <SignupForm />
      </ThemeProvider>,
    );
  }

  context('회원가입 성공했을 때', () => {
    it('회원가입 완료 페이지로 화면이 바뀐다', async () => {
      renderSignupForm();

      screen.getByRole('heading', { name: 'SIGN UP' });

      fireEvent.change(screen.getByLabelText('이름:'), {
        target: { value: '전제나' },
      });

      fireEvent.change(screen.getByLabelText('아이디:'), {
        target: { value: 'test1' },
      });

      fireEvent.change(screen.getByLabelText('비밀번호:'), {
        target: { value: 'Test123!' },
      });

      fireEvent.change(screen.getByLabelText('비밀번호 확인:'), {
        target: { value: 'Test123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '회원가입' }));

      await waitFor(() => {
        screen.getByText('회원가입 완료');
        screen.getByText('로그인하기');
      });
    });
  });

  context('회원가입 실패했을 때', () => {
    it('입력란이 공백인 경우 에러 메세지를 반환한다', async () => {
      renderSignupForm();

      fireEvent.change(screen.getByLabelText('이름:'), {
        target: { value: '' },
      });

      fireEvent.change(screen.getByLabelText('아이디:'), {
        target: { value: '' },
      });

      fireEvent.change(screen.getByLabelText('비밀번호:'), {
        target: { value: '' },
      });

      fireEvent.change(screen.getByLabelText('비밀번호 확인:'), {
        target: { value: '' },
      });

      fireEvent.click(screen.getByRole('button', { name: '회원가입' }));

      await waitFor(() => {
        screen.getByText('이름을 다시 확인해 주세요');
        screen.getByText('아이디를 다시 확인해 주세요');
        expect(screen.getAllByText('비밀번호를 다시 확인해 주세요')[0]).toBeInTheDocument();
        expect(screen.getAllByText('비밀번호를 다시 확인해 주세요')[1]).toBeInTheDocument();
      });
    });
  });
});
