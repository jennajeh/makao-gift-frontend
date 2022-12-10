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

    if (username === 'test1' && password === 'Test123!') {
      return res(
        ctx.json({
          accessToken: 'ACCESS.TOKEN',
          name: '전제나',
          amount: 5_000_000,
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.post(`${baseUrl}/users`, async (req, res, ctx) => {
    const {
      name, username, password, passwordCheck,
    } = await req.json();

    if (name === '전제나'
    && username === 'test1'
    && password === 'Test123!'
    && passwordCheck === 'Test123!') {
      return res(
        ctx.json({
          id: 1,
          name: '전제나',
          username: 'test1',
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.get(`${baseUrl}/users/me`, async (req, res, ctx) => res(
    ctx.json({
      accessToken: 'ACCESS.TOKEN',
      name: '전제나',
      amount: 5_000_000,
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

      pages: {
        totalPages: 1,
      },
    }),
  )),

  rest.get(`${baseUrl}/products/1`, async (req, res, ctx) => res(
    ctx.json({
      id: 1,
      name: '테스트용 게시물 1',
      price: 10_000,
      maker: '테스트 1 메이커',
      description: '테스트용 게시물 1 입니다.',
      imageUrl: 'imageUrl',
    }),
  )),

  rest.post(`${baseUrl}/orders`, async (req, res, ctx) => {
    const {
      productId, quantity, receiver, address, message,
    } = await req.json();

    if (productId && quantity > 0 && receiver && address) {
      return res(
        ctx.json({
          id: 1,
          productId: 1,
          quantity: 1,
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.get(`${baseUrl}/orders`, async (req, res, ctx) => res(
    ctx.json({
      orders: [
        {
          id: 1,
          quantity: 1,
          totalPrice: 10_000,
          receiver: '강보니',
          address: '서울시 성동구 성수동',
          message: '생일 축하해!',
          product: {
            id: 1,
            name: '테스트용 게시물 1',
            price: 10_000,
            maker: '테스트 1 메이커',
            description: '테스트용 게시물 1 입니다.',
            imageUrl: 'imageUrl',
          },
          createdAt: '2022-01-01T17:57:23.929359',
          updatedAt: '2022-02-01T17:57:23.929359',
        },
        {
          id: 2,
          quantity: 1,
          totalPrice: 10_000,
          receiver: '최재니',
          address: '서울시 성동구 성수동',
          message: '생일 축하해!',
          product: {
            id: 1,
            name: '테스트용 게시물 1',
            price: 10_000,
            maker: '테스트 1 메이커',
            description: '테스트용 게시물 1 입니다.',
            imageUrl: 'imageUrl',
          },
          createdAt: '2022-01-01T17:57:23.929359',
          updatedAt: '2022-02-01T17:57:23.929359',
        },
      ],
      pages: {
        totalPages: 1,
      },
    }),
  )),

  rest.get(`${baseUrl}/orders/1`, async (req, res, ctx) => res(
    ctx.json({
      id: 1,
      quantity: 1,
      totalPrice: 10_000,
      receiver: '강보니',
      address: '서울시 성동구 성수동',
      message: '생일 축하해!',
      product: {
        id: 1,
        name: '테스트용 게시물 1',
        price: 10_000,
        maker: '테스트 1 메이커',
        description: '테스트용 게시물 1 입니다.',
        imageUrl: 'imageUrl',
      },
      createdAt: '2022-01-01T17:57:23.929359',
      updatedAt: '2022-02-01T17:57:23.929359',
    }),
  )),
);

export default server;
