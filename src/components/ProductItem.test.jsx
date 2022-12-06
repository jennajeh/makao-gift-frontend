/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import numberFormat from '../utils/numberFormat';

export default function ProductItem({ product }) {
  const {
    id, name, imageUrl, maker, price,
  } = product;

  return (
    <Link to={`/products/${id}`}>
      <Container>
        <ImageWrapper>
          <img src={imageUrl} alt={name} />
        </ImageWrapper>
        <h4>{maker}</h4>
        <h3>{name}</h3>
        <strong>
          {numberFormat(price)}
          원
        </strong>
      </Container>
    </Link>
  );
}

const Container = styled.li`
  width: 280px;
  height: 100%;
  h4 {
    font-size: ${((props) => props.theme.size.h6)};
    color: ${((props) => props.theme.text.tertiary)};
  }
  h3 {
    display: -webkit-box;
    overflow: hidden;
    margin-block: 8px;
    
    text-overflow: ellipsis;
    font-size:  ${((props) => props.theme.size.default)};
    line-height: 1.1;
    color: ${((props) => props.theme.text.secondary)};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  strong {
    font-size:  ${((props) => props.theme.size.h5)};
    font-weight: 500;
    color: ${((props) => props.theme.text.secondary)};
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 14px;
  border-radius: 0.6em;
  img {
    width: 100%;
    height: 100%;
  }
`;
