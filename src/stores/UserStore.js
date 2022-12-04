import { apiService } from '../services/ApiService';
import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.name = '';
    this.username = '';
    this.password = '';
    this.amount = 0;
    this.loginStatus = '';
  }

  async login({ username, password }) {
    this.changeLoginStatus('processing');

    try {
      const { accessToken, amount } = await apiService.postSession({ username, password });

      this.amount = amount;

      this.changeLoginStatus('successful');

      return accessToken;
    } catch {
      this.changeLoginStatus('failed');

      return '';
    }
  }

  changeUsername(username) {
    this.username = username;

    this.publish();
  }

  changePassword(password) {
    this.password = password;

    this.publish();
  }

  resetUserStatus() {
    this.name = '';
    this.username = '';
    this.password = '';
    this.amount = 0;

    this.publish();
  }

  changeLoginStatus(status) {
    this.loginStatus = status;

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
