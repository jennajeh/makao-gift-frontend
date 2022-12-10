import OrderStore from './OrderStore';

const context = describe;

describe('OrderStore', () => {
  let orderStore;

  beforeEach(() => {
    orderStore = new OrderStore();
  });
  context('상품 주문시', () => {
    it('상품 주문에 성공한다', async () => {
      const productId = 1;
      const quantity = 1;
      const receiver = '강보니';
      const address = '서울시 성동구 성수동';
      const message = '생일 축하해!';

      await orderStore.orderItem({
        productId, quantity, receiver, address, message,
      });

      expect(orderStore.orderSuccessful).toBeTruthy();
    });
  });
});
