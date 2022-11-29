import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();
  // const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  let accessToken = '';

  const handleLogout = () => {
    accessToken = '';
    navigate('/');
  };

  return (
    <Container>
      <Menus>
        <List>
          <li>
            <Title>선물하기</Title>
          </li>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/">스토어</Link>
          </li>
          {accessToken ? (
            <li>
              <Link to="/orders">주문조회</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">주문조회</Link>
            </li>
          )}
        </List>
      </Menus>
      {accessToken ? (
        <SideMenu>
          <List>
            <li>
              내 잔액:
              {' '}
              50,000원
            </li>
            <li>
              <LogoutButton type="button" onClick={handleLogout}>로그아웃</LogoutButton>
            </li>
          </List>
        </SideMenu>
      ) : (
        <SideMenu>
          <List>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </List>
        </SideMenu>
      )}
    </Container>
  );
}

const Container = styled.header`

`;

const Menus = styled.div`
  
`;

const List = styled.ul`
  
`;

const Title = styled.h1`
  
`;

const SideMenu = styled.nav`

`;

const LogoutButton = styled.button`

`;
