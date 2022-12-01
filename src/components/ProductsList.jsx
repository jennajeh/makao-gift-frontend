/* eslint-disable react/prop-types */
import styled from 'styled-components';
import ProductItem from './ProductItem';

export default function ProductsList({ products }) {
  return (
    <Container>
      {products.length ? (
        <>
          <Title>인기선물을 한 자리에 모았어요</Title>
          <List>
            {products.slice(0, 8).map((product) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))}
          </List>
        </>
      ) : (
        <h3>상품이 존재하지 않습니다.</h3>
      )}
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

const List = styled.ul`
  /* width: 70%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3em;
  flex-wrap: wrap;
`;
