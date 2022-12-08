/* eslint-disable class-methods-use-this */

import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.accessToken = '';

    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;

    if (accessToken) {
      this.instance = axios.create({
        baseURL: baseUrl,
        headers: { Authorization: `Bearer ${this.accessToken}` },
      });
    }
  }

  async createUser({
    name, username, password, passwordCheck,
  }) {
    const { data } = await this.instance.post('/users', {
      name, username, password, passwordCheck,
    });

    return {
      id: data.id,
    };
  }

  async countUser(username) {
    const { data } = await this.instance.get(`/users?countOnly=true&username=${username}`);

    return data.count;
  }

  async postSession({ username, password }) {
    const { data } = await this.instance.post('/session', { username, password });

    return {
      accessToken: data.accessToken,
      name: data.name,
      amount: data.amount,
    };
  }

  async postOrder({
    productId, quantity, receiver, address, message,
  }) {
    const { data } = await this.instance.get('/orders', {
      productId, quantity, receiver, address, message,
    });

    return {
      id: data.id,
    };
  }

  async fetchUser() {
    const { data } = await this.instance.get('/users/me');

    return {
      accessToken: data.accessToken,
      name: data.name,
      amount: data.amount,
    };
  }

  async fetchProducts() {
    const { data } = await this.instance.get('/products');

    const { products } = data;

    return products;
  }

  async fetchProduct(id) {
    const { data } = await this.instance.get(`/products/${id}`);

    return data;
  }

  async fetchOrders() {
    const { data } = await this.instance.get('/orders');

    const { orders } = data;

    return orders;
  }

  async fetchOrder(id) {
    const { data } = await this.instance.get(`/orders/${id}`);

    return data;
  }
}

export const apiService = new ApiService();
