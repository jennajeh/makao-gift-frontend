/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.post(`${baseUrl}/session`, async (req, res, ctx) => {
    const {
      username, password,
    } = await req.json();

    if (username === 'Test1'
    && password === 'Test123!') {
      return res(
        ctx.json({
          accessToken: 'ACCESS.TOKEN',
          name: '전제나',
          amount: 50_000,
        }),
      );
    }

    return res(
      ctx.status(400),
    );
  }),

  rest.get(`${baseUrl}/users/me`, async (req, res, ctx) => res(
    ctx.json({
      accessToken: 'ACCESS.TOKEN',
      name: '전제나',
      amount: 50_000,
    }),
  )),

  rest.get(`${baseUrl}/products`, async (req, res, ctx) => res(
    ctx.json({
      products: [
        {
          id: 1,
          name: '테스트용 게시물 1',
          price: 10_000,
          maker: '테스트 1 메이커',
          description: '테스트용 게시물 1 입니다.',
          imageUrl: 'imageUrl',
        },
        {
          id: 2,
          name: '테스트용 게시물 2',
          price: 10_000,
          maker: '테스트 2 메이커',
          description: '테스트용 게시물 2 입니다.',
          imageUrl: 'imageUrl',
        },
      ],
    }),
  )),

  rest.get(`${baseUrl}/products/1`, async (req, res, ctx) => res(
    ctx.json({
      products: [
        {
          id: 1,
          name: '테스트용 게시물 1',
          price: 10_000,
          maker: '테스트 1 메이커',
          description: '테스트용 게시물 1 입니다.',
          imageUrl: 'imageUrl',
        },
      ],
    }),
  )),
);

export default server;
