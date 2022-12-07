/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../hooks/useUserStore';
import Button from './common/Button';
import Input from './common/Input';

export default function SignupForm() {
  const userStore = useUserStore();

  const {
    register, handleSubmit, formState: { errors }, getValues,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name, username, password, passwordCheck,
    } = data;

    await userStore.signup({
      name, username, password, passwordCheck,
    });
  };

  if (userStore.signupSuccessful) {
    return (
      <SignupCompleted>
        <div>
          <h2>회원가입 완료</h2>
          <p>
            마카오 선물하기 회원가입이 완료되었습니다.
            <br />
            정상적인 서비스 이용을 위해 로그인을 진행해주세요.
          </p>
          <Link to="/login">
            <Button type="button">
              로그인하기
            </Button>
          </Link>
        </div>
      </SignupCompleted>
    );
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>SIGN UP</Title>
        <Inputs>
          <InputWrapper>
            <Label htmlFor="input-name">이름:</Label>
            <Input
              id="input-name"
              type="text"
              name="name"
              {...register('name', { required: true, pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,7}$/ })}
            />
            {errors.name && errors.name.type === 'required'
            && (<Message>이름을 입력해 주세요.</Message>)}
            {errors.name && errors.name.type === 'pattern'
            && (<Message>이름을 다시 확인해 주세요.</Message>)}
            {!errors.name
            && (<Message>3~7까지 한글만 사용 가능</Message>)}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="input-username">아이디:</Label>
            <Input
              id="input-username"
              type="text"
              name="username"
              {...register('username', { required: true, pattern: /^[a-z0-9]{4,16}$/ })}
            />
            {errors.username && errors.username.type === 'required'
              && !userStore.errorStatus
              && (<Message>아이디를 입력해 주세요.</Message>)}
            {errors.username && errors.username.type === 'pattern'
              && (<Message>아이디를 다시 확인해 주세요.</Message>)}
            {!errors.username
              && (<Message>영문소문자/숫자, 4~16자만 사용 가능</Message>)}
            {userStore.errorStatus === 'signupError'
            && (<Message>해당 아이디는 사용할 수 없습니다.</Message>)}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="input-password">비밀번호:</Label>
            <Input
              id="input-password"
              type="password"
              name="password"
              {...register('password', {
                required: true,
                pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
              })}
            />
            {errors.password && errors.password.type === 'required'
              && !userStore.errorStatus
              && (<Message>비밀번호를 입력해 주세요.</Message>)}
            {errors.password && errors.password.type === 'pattern'
              && (<Message>비밀번호를 다시 확인해 주세요.</Message>)}
            {!errors.password
              && (<Message>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 합니다.</Message>)}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="input-passwordCheck">비밀번호 확인:</Label>
            <Input
              id="input-passwordCheck"
              type="password"
              name="passwordCheck"
              {...register('passwordCheck', {
                required: true,
                validate: (value) => value === getValues('password'),
              })}
            />
            {errors.passwordCheck && errors.passwordCheck.type === 'required'
              && !userStore.errorStatus
              && (<Message>비밀번호를 입력해 주세요.</Message>)}
            {errors.passwordCheck && errors.passwordCheck.type === 'pattern'
              && (<Message>비밀번호가 일치하지 않습니다.</Message>)}
          </InputWrapper>
        </Inputs>
        <Button type="submit">회원가입</Button>
      </form>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  color: ${((props) => props.theme.text.gray)};
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 24px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
`;

const Message = styled.p`
  margin-top: 8px;
`;

const SignupCompleted = styled(Container)`
  h2 {
    margin-bottom: 16px;
    font-size: ${((props) => props.theme.size.h1)};
    font-weight: 700;
    text-align: center;
  }
  p {
    margin-bottom: 40px;
    font-size: ${((props) => props.theme.size.h5)};
    text-align: center;
  }
`;

const Error = styled.p`
  font-size: .9em;
  color: #ff0000;
  margin: 1em 0;
  height: 1em;
`;
