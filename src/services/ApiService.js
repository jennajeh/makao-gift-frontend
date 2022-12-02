/* eslint-disable class-methods-use-this */

import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async postSession({ username, password }) {
    const url = `${baseUrl}/session`;
    const { data } = await axios.post(url, { username, password });

    return data;
  }

  async fetchProducts() {
    const url = `${baseUrl}/products`;

    const { data } = await axios.get(url);
    const { products } = data;
    return products;
  }

  async fetchProduct(id) {
    const url = `${baseUrl}/products/${id}`;
    const { data } = await axios.get(url);

    return data;
  }
}

export const apiService = new ApiService();
