import styled from 'styled-components';

export default function LoginForm() {
  return (
    <Container>
      <Title>USER LOGIN</Title>
      <Form>
        <Field
          id="input-userId"
          name="userId"
          placeholder="아이디"
        />
        <Field
          id="input-password"
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <Login type="submit">로그인하기</Login>
      </Form>
      <Signup type="button">회원가입</Signup>
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
    border: ${(props) => (props.error ? '1px solid #F00' : '1px solid #EEEEEE')};
    ::placeholder {
      color: #CBCBCB;
    }
    :focus {
    outline: 1px solid #42deb6;
    }
`;

const Login = styled.button`
  color: ${(props) => props.theme.primaryButton.text};
  background: ${(props) => props.theme.primaryButton.background};
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 1.2em 2.8em;
  margin-top: 1em;
`;

const Signup = styled.button`
  margin-top: 3em;
  background: none;
  border: none;
`;
