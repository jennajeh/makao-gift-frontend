import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.product = {};

    this.quantity = 1;
    this.totalPrice = 0;
  }

  resetProductState() {
    this.quantity = 1;
    this.totalPrice = 0;

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
    this.resetProductState();

    this.products = await apiService.fetchProducts();

    this.publish();
  }

  async fetchProduct(id) {
    this.product = await apiService.fetchProduct(id);

    this.totalPrice = this.quantity * this.product.price;

    this.publish();
  }
}

export const productStore = new ProductStore();
