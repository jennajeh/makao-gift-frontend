import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useProductStore from '../hooks/useProductStore';
import numberFormat from '../utils/numberFormat';
import { iconImages } from '../assets/index';

export default function ProductDetail() {
  const navigate = useNavigate();

  const productStore = useProductStore();

  const { product } = productStore;

  const handleClickOrder = () => {
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
        <img src={product.imageUrl} alt={product.name} />
      </ImageBox>
      <ContentBox>
        <ProductName>{product.name}</ProductName>
        <Price>
          {numberFormat(product.price)}
          원
        </Price>
        <Table>
          <Label>제조사</Label>
          <Maker>{product.maker}</Maker>
        </Table>
        <Table>
          <Label>구매수량</Label>
          <Quantity>
            {productStore.quantity === 1 ? (
              <DisabledMinus
                type="button"
                name="minus-gray"
                disabled={productStore.quantity === 1}
              >
                -
                <img src={iconImages.icons.minusGray} alt="minus-gray" />
              </DisabledMinus>
            ) : (
              <EnabledMinus
                type="button"
                name="minus-black"
                onClick={() => productStore.quantityDown}
              >
                -
                <img src={iconImages.icons.minusBlack} alt="minus-black" />
              </EnabledMinus>
            )}
            <p>{productStore.quantity}</p>
            <Plus
              type="button"
              name="plus-black"
              onClick={() => productStore.quantityUp}
            >
              +
              <img src={iconImages.icons.plusBlack} alt="plus-black" />
            </Plus>
          </Quantity>
        </Table>
        <LastRow>
          <Label>상품설명</Label>
          <Description>{product.description}</Description>
        </LastRow>
        <TotalPriceSection>
          <p>총 상품금액:</p>
          <TotalPrice>
            {numberFormat(productStore.totalPrice)}
            원
          </TotalPrice>
        </TotalPriceSection>
        <Button type="button" onClick={handleClickOrder}>
          선물하기
        </Button>
        {/* 잔액이 모자란 경우 추가해주기 */}
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-top: 10em;
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin-right: 5em;
  img {
    position: absolute;
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

const ProductName = styled.h2`
  font-size: 1.5em;
`;

const Price = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin-block: 1em; 
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

const Button = styled.button`
  color: ${(props) => props.theme.primaryButton.text};
  background: ${(props) => props.theme.primaryButton.background};
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 1.2em 2.8em;
  margin-top: 1em;
`;

const Error = styled.p`
  font-weight: bold;
  color: #ff0000;
  text-align: center;
  margin-top: 2em;
`;
