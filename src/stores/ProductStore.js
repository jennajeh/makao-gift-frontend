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
  }

  async fetchProducts() {
    this.resetProductState();

    this.products = await apiService.fetchProducts();

    this.publish();
  }

  async fetchProduct(id) {
    const productInformation = await apiService.fetchProduct(id);

    this.product = productInformation;
    this.totalPrice = this.quantity * productInformation.price;
    this.publish();
  }
}

export const productStore = new ProductStore();
