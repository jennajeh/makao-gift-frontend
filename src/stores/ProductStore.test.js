import ProductStore from './ProductStore';

const context = describe;

describe('ProductStore', () => {
  let productStore;

  beforeEach(() => {
    productStore = new ProductStore();
  });

  context('상품 목록 조회(총 2개)', () => {
    it('2개의 상품 확인 가능', async () => {
      await productStore.fetchProducts();

      expect(productStore.products.length).toBe(2);
      expect(productStore.products[0].name).toBe('테스트용 게시물 1');
      expect(productStore.products[1].maker).toBe('테스트 2 메이커');
    });
  });
});
