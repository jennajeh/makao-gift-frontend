import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.product = {};

    this.quantity = 1;
  }

  resetProductState() {
    this.quantity = 1;
    this.product = {};

    this.publish();
  }

  quantityUp() {
    this.quantity += 1;

    this.publish();
  }

  quantityDown() {
    if (this.quantity < 2) {
      return;
    }

    this.quantity -= 1;

    this.publish();
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
