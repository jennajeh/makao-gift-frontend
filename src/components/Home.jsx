import styled from 'styled-components';
import { images } from '../assets';

export default function Home() {
  return (
    <Container>
      <Description>
        <em>무얼 선물할 지 고민이라면</em>
        <strong>
          특별한
          <br />
          아이템을 전하세요
        </strong>
        <p>마카오 선물하기에서만 볼 수 있는 특별한 아이템</p>
      </Description>
      <ImageWrapper>
        <Image image={images.home} />
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-inline: calc((100% - 700px) / 2);
  padding-top: 12em;
`;

const Description = styled.article`
  font-weight: 700;
  em {
    font-size: ${((props) => props.theme.size.h4)};
    color: ${((props) => props.theme.colors.secondary)};
  }
  strong {
    display: block;
    margin-block: 24px;
    font-size: ${((props) => props.theme.size.h2)};
    color: ${((props) => props.theme.text.primary)};
  }
`;

const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image}) no-repeat 50% 100%;
  background-size: contain;
`;
