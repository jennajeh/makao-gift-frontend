import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.product = {};

    this.totalPages = 0;
  }

  async fetchProducts({ page, size }) {
    const { products, pages } = await apiService.fetchProducts({ page, size });

    this.products = products;
    this.totalPages = pages.totalPages;

    this.publish();
  }

  async fetchProduct(id) {
    this.product = await apiService.fetchProduct(id);

    this.publish();
  }
}

export const productStore = new ProductStore();
