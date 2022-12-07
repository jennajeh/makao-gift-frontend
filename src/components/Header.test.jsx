import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

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

describe('Header', () => {
  function renderHeader() {
    render(<Header />);
  }

  it('헤더 메뉴 렌더링', () => {
    renderHeader();

    screen.getByText('선물하기');
    screen.getByText('홈');
    screen.getByText('스토어');
    screen.getByText('주문조회');
  });

  context('로그인 했을 때', () => {
    beforeEach(() => {
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));
    });

    it('로그아웃 버튼과 잔액이 보인다', () => {
      renderHeader();

      screen.getByText('로그아웃');
      screen.getByText(/내 잔액/);
    });

    context('로그아웃 버튼을 클릭하면', () => {
      it('홈 화면으로 이동한다', () => {
        renderHeader();

        fireEvent.click(screen.getByText('로그아웃'));

        expect(navigate).toBeCalledWith('/');
      });

      it('로그인 버튼과 회원가입 버튼이 보인다', () => {
        renderHeader();

        fireEvent.click(screen.getByText('로그아웃'));

        screen.getByText('로그인');
        screen.getByText('회원가입');
      });
    });
  });
});
