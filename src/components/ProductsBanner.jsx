import styled from 'styled-components';
import { backgroundImages } from '../assets/index';

export default function ProductsBanner() {
  return (
    <Container image={backgroundImages.images.login}>
      <Wrapper>
        <p>평범한 선물은 주기도 민망하다구요?</p>
        <h2>
          <strong>작정하고 준비한</strong>
          마카오톡 선물하기 아이템
        </h2>
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
  background: url(${({ image }) => image}) no-repeat 100% 100%; 
  background-size: cover;
  background-color: #EEE;
`;

const Wrapper = styled.div`
  width: 100%;
  padding-inline: calc((100% - 1000px) / 2);

  p:first-child {
    font-weight: bold;
    margin-bottom: 2em;
    color: #005936
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  strong {
    display: block;
    margin-bottom: .3em;
  }
  
  p:last-child {
    margin-top: 2em;
  }
`;
