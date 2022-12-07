import { apiService } from '../services/ApiService';
import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.name = '';
    this.amount = 0;

    this.loginStatus = '';

    this.errorMessage = '';
    this.errorStatus = '';
  }

  async login({ username, password }) {
    this.errorMessage = '';
    this.changeLoginStatus('processing');
    this.publish();

    try {
      const { accessToken, name, amount } = await apiService.postSession({ username, password });

      this.accessToken = accessToken;
      this.amount = amount;
      this.name = name;

      this.changeLoginStatus('successful');
      this.publish();

      return accessToken;
    } catch (e) {
      const message = e.response.data;
      this.changeLoginErrorStatus({ errorMessage: message });

      this.changeLoginStatus('failed');

      this.publish();

      return '';
    }
  }

  async fetchUser() {
    const { name, amount } = await apiService.fetchUser();

    this.name = name;
    this.amount = amount;

    this.publish();
  }

  changeUsername(username) {
    this.username = username;

    this.publish();
  }

  changePassword(password) {
    this.password = password;

    this.publish();
  }

  resetLoginStatus() {
    this.loginStatus = '';

    this.publish();
  }

  changeLoginStatus(status) {
    this.loginStatus = status;

    this.publish();
  }

  changeLoginErrorStatus({ errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.errorStatus = 'loginError';

    this.publish();
  }

  hasEnoughAmount(amount) {
    return this.amount >= amount;
  }

  setAmount(amount) {
    this.amount = amount;
    this.publish();
  }

  get loginSuccessful() {
    return this.loginStatus === 'successful';
  }

  get loginFailed() {
    return this.loginStatus === 'failed';
  }
}

export const userStore = new UserStore();
