import {
  render, screen, waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ProductsList from './ProductsList';
import defaultTheme from '../styles/defaultTheme';
import { productStore } from '../stores/ProductStore';

let products;
const context = describe;

describe('ProductList', () => {
  productStore.fetchProducts({ page: 1, size: 8 });

  function renderProductList() {
    render(
      <MemoryRouter>
        <ThemeProvider theme={defaultTheme}>
          <ProductsList products={products} />
        </ThemeProvider>
      </MemoryRouter>,
    );
  }

  context('상품이 존재하지 않을 때', () => {
    beforeEach(() => {
      products = [];
    });

    it('상품이 존재하지 않습니다 메세지 반환', async () => {
      renderProductList();

      await waitFor(() => {
        screen.getByText('상품이 존재하지 않습니다');
      });
    });
  });

  context('상품이 존재할 때', () => {
    beforeEach(() => {
      products = [
        {
          id: 1,
          name: '로엔 LED모션베드 SS(천연라텍스폼)',
          price: 669_750,
          maker: '파로마',
          description: '로엔 LED모션베드 SS(천연라텍스폼)',
          imageUrl: 'https://img.danawa.com/prod_img/500000/569/482/img/6482569_1.jpg??shrink=360:360&_v=20221130213722',
        },
        {
          id: 2,
          name: '라클라우드 이지 모션베드 Q(20cm천연라텍스)',
          price: 2_690_200,
          maker: '바디프랜드',
          description: '라클라우드 이지 모션베드 Q(20cm천연라텍스)',
          imageUrl: 'https://img.danawa.com/prod_img/500000/771/641/img/10641771_1.jpg??shrink=360:360&_v=20221130213722',
        },
      ];
    });

    it('상품 목록 반환', async () => {
      renderProductList();

      await waitFor(() => {
        screen.getByText('인기선물을 한 자리에 모았어요');
        screen.getByText('로엔 LED모션베드 SS(천연라텍스폼)');
        screen.getByText('라클라우드 이지 모션베드 Q(20cm천연라텍스)');
      });
    });
  });
});
