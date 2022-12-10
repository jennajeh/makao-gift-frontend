/* eslint-disable react/prop-types */
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useProductStore from '../hooks/useProductStore';
import Pagination from './Pagination';
import ProductItem from './ProductItem';

export default function ProductsList() {
  const productStore = useProductStore();

  const { products } = productStore;

  const location = useLocation();

  const [searchParams] = useSearchParams();

  return (
    <Container>
      {products.length ? (
        <>
          <Title>인기선물을 한 자리에 모았어요</Title>
          <List>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))}
          </List>
          <Pagination
            url={location.pathname}
            total={productStore.totalPages}
            current={searchParams.get('page') ?? 1}
          />
        </>
      ) : (
        <Error>상품이 존재하지 않습니다</Error>
      )}
    </Container>
  );
}

const Container = styled.article`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Title = styled.h2`
  font-size: ${((props) => props.theme.size.h4)};
  font-weight: bold;
  margin-top: 3em;
  margin-bottom: 1.5em;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  margin: 0 auto;
  width: 1180px;
`;

const Error = styled.p`
  margin-top: 80px;
  font-weight: 700;
  font-size: ${((props) => props.theme.size.h4)};
  text-align: center;
`;
