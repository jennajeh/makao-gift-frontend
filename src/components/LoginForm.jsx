/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { useForm } from 'react-hook-form';
import useUserStore from '../hooks/useUserStore';
import Button from './common/Button';
import Input from './common/Input';

export default function LoginForm({ location }) {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const onSubmit = async (data) => {
    const { username, password } = data;

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>USER LOGIN</Title>
        <Inputs>
          <Input
            id="input-username"
            type="text"
            name="username"
            placeholder="아이디"
            {...register('username')}
          />
          <Input
            id="input-password"
            type="password"
            name="password"
            placeholder="비밀번호"
            {...register('password')}
          />
        </Inputs>
        <Button type="submit">로그인하기</Button>
        <Link to="/signup">회원가입</Link>
      </form>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  a {
    display: block;
    margin-top: 60px;
    text-align: center;
  }
`;

const Title = styled.h2`
  padding-block: 4px;
  border-bottom: 1px solid ${((props) => props.theme.colors.primary)};
  font-size: ${((props) => props.theme.size.h1)};
  font-weight: 700;
  text-align: center;
`;

const Inputs = styled.div`
  margin-block: 60px;
`;
