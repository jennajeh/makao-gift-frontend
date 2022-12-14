import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useOrderStore from '../hooks/useOrderStore';
import OrderItem from './OrderItem';
import Pagination from './Pagination';

export default function OrderList() {
  const orderStore = useOrderStore();

  const { orders } = orderStore;

  const location = useLocation();

  const [searchParams] = useSearchParams();

  return (
    <Container>
      {orders.length ? (
        <>
          <Title>내가 주문한 내역입니다</Title>
          <Items>
            {orders.map((order) => (
              <OrderItem
                key={order.id}
                order={order}
              />
            ))}
          </Items>
          <Pagination
            url={location.pathname}
            total={orderStore.totalPages}
            current={searchParams.get('page') ?? 1}
          />
        </>
      ) : (
        <Error>내가 주문한 내역이 없습니다</Error>
      )}
    </Container>
  );
}

const Container = styled.article`
  padding-inline: 10em;
`;

const Title = styled.h2`
  padding-block: 80px 40px;
  font-weight: 700;
  font-size: ${((props) => props.theme.size.h4)};
`;

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 80px;
`;

const Error = styled.p`
  margin-top: 80px;
  font-weight: 700;
  font-size: ${((props) => props.theme.size.h4)};
  text-align: center;
`;
