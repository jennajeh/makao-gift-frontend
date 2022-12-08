import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.product = {};
  }

  async fetchProducts() {
    this.products = await apiService.fetchProducts();

    this.publish();
  }

  async fetchProduct(id) {
    this.product = await apiService.fetchProduct(id);

    this.publish();
  }
}

export const productStore = new ProductStore();
