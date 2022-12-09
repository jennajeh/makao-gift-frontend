import ProductStore from './ProductStore';

const context = describe;

describe('ProductStore', () => {
  context('fetchProducts', () => {
    it('상품 목록을 조회한다', async () => {
      const productStore = new ProductStore();

      await productStore.fetchProducts({ page: 1, size: 8 });

      expect(productStore.products[0].name).toBe('테스트용 게시물 1');
      expect(productStore.totalPages).toBe(1);
    });
  });

  context('fetchProduct', () => {
    it('상품 상세를 조회한다', async () => {
      const productStore = new ProductStore();

      await productStore.fetchProduct(1);

      expect(productStore.product.name).toBe('테스트용 게시물 1');
      expect(productStore.product.description).toBe('테스트용 게시물 1 입니다.');
    });
  });
});
