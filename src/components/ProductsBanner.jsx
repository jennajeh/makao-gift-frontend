import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { images } from '../assets';

export default function ProductsBanner() {
  const [accessToken] = useLocalStorage('accessToken', '');

  return (
    <Container isLogin={accessToken}>
      <Wrapper>
        <em>평범한 선물은 주기도 민망하다구요?</em>
        <strong>
          작정하고 준비한
          <br />
          마카오톡 선물하기 아이템
        </strong>
        <p>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</p>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18em;
  padding-left: 12em;
  background: url(${({ isLogin }) => (isLogin ? images.login : images.notLogin)}) no-repeat 100% 100%; 
  background-size: cover;
`;

const Wrapper = styled.article`
  padding-inline: calc((100% - 1000px) / 2);

  font-weight: 700;
  em {
    font-size: ${((props) => props.theme.size.default)};
    color: ${((props) => props.theme.colors.tertiary)};
  }
  strong {
    display: block;
    margin-block: 24px;
    font-size: ${((props) => props.theme.size.h4)};
    color: ${((props) => props.theme.text.primary)};
  }
  p {
    font-weight: 400;
    font-size: ${((props) => props.theme.size.default)};
  }
`;
