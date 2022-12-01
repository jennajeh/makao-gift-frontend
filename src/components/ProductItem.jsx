/* eslint-disable react/prop-types */

import styled from 'styled-components';
import numberFormat from '../utils/numberFormat';

export default function ProductItem({ product }) {
  const {
    id, name, imageUrl, maker, price,
  } = product;
  return (
    <Container>
      <Wrapper>
        <List>
          <li key={id}>
            <Product
              type="button"
              className={name}
            >
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
            </Product>
          </li>
          ))
        </List>
      </Wrapper>
      ;

    </Container>
  );
}

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Title = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 3em;
  margin-bottom: 1.5em;
`;

const Wrapper = styled.div`
  max-width: 1680px;
  height: 600px;
  padding-inline: calc((100% - 1200px) / 2);
`;

const Product = styled.button`
  background-color: transparent;
  text-align: left;
  border: none;
`;

const List = styled.ul`
  /* width: 70%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3em;
  flex-wrap: wrap;
`;

const Image = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Text = styled.div`
  width: 250px;
  height: 100px;
  margin-top: 1em;

  p {
    margin-bottom: .3em;
    word-break: keep-all;
  }

  p:first-child {
    color: #999999;
  }

  p.name {
    width: 250px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  strong {
    font-size: 1.1em;
    font-weight: bold;
  }
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  ul {
    display: flex;
  }
  ul li {
    margin-inline: 1em;
  }
  ul li button {
    color: #9a9a9a;
    background: none;
    border: none;
    
    &:focus {
      color: #444444;
    }
  }
`;
