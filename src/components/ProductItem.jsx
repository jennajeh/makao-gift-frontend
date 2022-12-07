/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import numberFormat from '../utils/numberFormat';

export default function ProductItem({ product }) {
  const {
    id, name, imageUrl, maker, price,
  } = product;

  return (
    <Container>
      <Wrapper>
        <Link to={`/products/${id}`}>
          <Image>
            <img src={imageUrl} alt={name} />
          </Image>
          <Text>
            <p>{maker}</p>
            <p className="name">{name}</p>
            <p>
              <strong>{numberFormat(price)}</strong>
              원
            </p>
          </Text>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Wrapper = styled.div`
  max-width: 1680px;
  height: 600px;
  padding-inline: calc((100% - 1200px) / 2);
`;

const Image = styled.div`
  position: relative;
  width: 250px;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const Text = styled.div`
  width: 250px;
  height: 100px;
  margin-top: 1em;

  p {
    margin-bottom: .7em;
    word-break: keep-all;
  }

  p:first-child {
    color: #999999;
  }

  p.name {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  strong {
    font-size: 1.1em;
    font-weight: bold;
  }
`;
