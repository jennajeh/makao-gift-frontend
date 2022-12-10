/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';
import useProductStore from '../hooks/useProductStore';
import useUserStore from '../hooks/useUserStore';
import useOrderStore from '../hooks/useOrderStore';
import numberFormat from '../utils/numberFormat';
import { icons } from '../assets';
import Button from './common/Button';

export default function ProductDetail() {
  const [accessToken] = useLocalStorage('accessToken', '');

  const navigate = useNavigate();

  const userStore = useUserStore();
  const productStore = useProductStore();
  const orderStore = useOrderStore();

  const { product } = productStore;
  const {
    name, price, maker, description, imageUrl,
  } = product;

  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = price * quantity;

  const handleClickMinus = () => {
    if (quantity < 2) {
      return;
    }

    setQuantity(quantity - 1);
  };

  const handleClickPlus = () => {
    setQuantity(quantity + 1);
  };

  const handleClickOrder = () => {
    if (!accessToken) {
      navigate('/login', { state: { previousPage: 'productDetail' } });

      return;
    }

    if (!userStore.hasEnoughAmount(totalPrice)) {
      setIsClicked(true);
      return;
    }

    orderStore.setQuantityAndTotalPrice({ quantity, totalPrice });
    navigate('/order');
  };

  if (!product) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <Container>
      <ImageBox>
        <img src={imageUrl} alt={name} />
      </ImageBox>
      <ContentBox>
        <ProductName>{name}</ProductName>
        <Price>
          {numberFormat(price)}
          원
        </Price>
        <Table>
          <Label>제조사</Label>
          <Maker>{maker}</Maker>
        </Table>
        <Table>
          <Label>구매수량</Label>
          <Quantity>
            {quantity === 1 ? (
              <DisabledMinus
                type="button"
                name="minus-gray"
                disabled={quantity === 1}
              >
                -
                <img src={icons.minusGray} alt="minus-gray" />
              </DisabledMinus>
            ) : (
              <EnabledMinus
                type="button"
                name="minus-black"
                onClick={handleClickMinus}
              >
                -
                <img src={icons.minusBlack} alt="minus-black" />
              </EnabledMinus>
            )}
            <p>{quantity}</p>
            <Plus
              type="button"
              name="plus-black"
              onClick={handleClickPlus}
            >
              +
              <img src={icons.plusBlack} alt="plus-black" />
            </Plus>
          </Quantity>
        </Table>
        <LastRow>
          <Label>상품설명</Label>
          <Description>{description}</Description>
        </LastRow>
        <TotalPriceSection>
          <p>총 상품금액:</p>
          <TotalPrice>
            {numberFormat(totalPrice)}
            원
          </TotalPrice>
        </TotalPriceSection>
        <Button type="button" onClick={handleClickOrder}>
          선물하기
        </Button>
        {isClicked && !userStore.hasEnoughAmount(totalPrice)
        && (
          <Warning>
            ❌
            {' '}
            잔액이 부족하여 선물하기가 불가합니다
            {' '}
            ❌
          </Warning>
        )}
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 10em;
  padding-top: 80px;
  color: ${((props) => props.theme.text.secondary)};
`;

const ImageBox = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  width: 30%;
`;

const Table = styled.div`
  display: flex;
  align-items: center;
  padding-block: 1.3em;
  border-top: 1px solid #D9D9D9;
`;

const LastRow = styled.div`
  display: flex;
  align-items: center;
  padding-block: 1.3em;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
`;

const ProductName = styled.h3`
  margin-bottom: 24px;
  font-size: ${((props) => props.theme.size.h3)};
  font-weight: 500;
`;

const Price = styled.p`
  margin-bottom: 40px;
  font-size: ${((props) => props.theme.size.h1)};
  font-weight: 700;
`;

const Label = styled.p`
  display: inline-block;
  width: 25%;
  color: #444444;
`;

const Maker = styled.p`
  display: inline-block;
  font-size: 1.1em;
  color: #666666;
`;

const Quantity = styled.div`
  width: 23%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2em .2em;
  border: 1px solid #DDDDDD;
  border-radius: 6px;
`;

const DisabledMinus = styled.button`
  color: transparent;
  position: relative;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 25px;
  }
`;

const EnabledMinus = styled.button`
  color: transparent;
  position: relative;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 25px;
  }
`;

const Plus = styled.button`
  color: transparent;
  position: relative;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 25px;
  }
`;

const Description = styled.p`
  display: inline-block;
  font-size: 1.1em;
  color: #666666;
`;

const TotalPriceSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-block: 2em;
  p:first-child {
    color: #444444;
    margin-right: .5em;
  }
`;

const TotalPrice = styled.p`
  display: inline-block;
  font-size: 2em;
  font-weight: bold;
`;

const Warning = styled.p`
  margin-top: 20px;
  color: ${((props) => props.theme.text.red)};
  text-align: center;
`;
