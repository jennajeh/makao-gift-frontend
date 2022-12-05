import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import useUserStore from '../hooks/useUserStore';

export default function LoginForm({ location }) {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const { username, password } = userStore;

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = await userStore.login({ username, password });

    if (userStore.loginSuccessful) {
      setAccessToken(accessToken);

      if (location.state?.previousPage === 'productDetailPage') {
        navigate(-1);
      }
    }

    navigate('/');
  };

  return (
    <Container>
      <Title>USER LOGIN</Title>
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="username"
          placeholder="아이디"
          value={userStore.username}
          onChange={(e) => userStore.changeUsername(e.target.value)}
        />
        <Field
          type="password"
          name="password"
          placeholder="비밀번호"
          value={userStore.password}
          onChange={(e) => userStore.changePassword(e.target.value)}
        />
        <Login type="submit">로그인하기</Login>
      </Form>
      <Signup>
        <Link to="/signup">회원가입</Link>
      </Signup>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-inline: calc((100% - 400px) / 2);
  margin-top: 10em;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  border-bottom: 1px solid #83e8ca;
  margin-bottom: 1.5em;
  padding-bottom: .3em;
`;

const Form = styled.form`
  margin-top: 3em;
`;

const Field = styled.input`
    display: block;
    width: 100%;
    padding-block: 1em;
    padding-inline: 1em;
    margin-bottom: .7em;
    ::placeholder {
      color: #CBCBCB;
    }
    :focus {
    outline: 1px solid #42deb6;
    }
`;

const Login = styled.button`
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 1.2em 2.8em;
  margin-top: 1em;
`;

const Signup = styled.div`
  font-size: .9em;
  margin-top: 3em;
  background: none;
  border: none;
`;
