/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/products`, async (req, res, ctx) => res(
    ctx.json({
      products: [
        {
          id: 1,
          name: '테스트용 게시물 1',
          price: 10000,
          maker: '테스트 1 메이커',
          description: '테스트용 게시물 1 입니다.',
          imageUrl: 'imageUrl',
        },
        {
          id: 2,
          name: '테스트용 게시물 2',
          price: 10000,
          maker: '테스트 2 메이커',
          description: '테스트용 게시물 2 입니다.',
          imageUrl: 'imageUrl',
        },
      ],
    }),
  )),
);

export default server;
