import { apiService } from '../services/ApiService';
import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.name = '';
    this.username = '';
    this.amount = 0;

    this.loginStatus = '';
    this.signupStatus = '';

    this.errorMessage = '';
    this.errorStatus = '';
  }

  async signup({
    name, username, password, passwordCheck,
  }) {
    this.errorMessage = '';

    this.changeSignupStatus('processing');
    this.publish();

    try {
      const { id } = await apiService.createUser({
        name, username, password, passwordCheck,
      });

      this.changeSignupStatus('successful');
      this.publish();

      return id;
    } catch (e) {
      this.changeSignupStatus('failed');
      this.publish();

      const message = e.response.data;

      this.changeSignupErrorStatus({ errorMessage: message });
      this.publish();

      return '';
    }
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
      this.changeLoginStatus('failed');
      this.publish();

      const message = e.response.data;

      this.changeLoginErrorStatus({ errorMessage: message });
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

  resetLoginStatus() {
    this.loginStatus = '';

    this.publish();
  }

  changeLoginStatus(status) {
    this.loginStatus = status;

    this.publish();
  }

  resetSignupStatus() {
    this.signupStatus = '';

    this.publish();
  }

  changeSignupStatus(status) {
    this.signupStatus = status;

    this.publish();
  }

  changeLoginErrorStatus({ errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.errorStatus = 'loginError';

    this.publish();
  }

  changeSignupErrorStatus({ errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.errorStatus = 'signupError';

    this.publish();
  }

  hasEnoughAmount(amount) {
    return this.amount >= amount;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  reduceAmount(amount) {
    this.amount -= amount;
  }

  get signupSuccessful() {
    return this.signupStatus === 'successful';
  }

  get signupFailed() {
    return this.signupStatus === 'failed';
  }

  get loginSuccessful() {
    return this.loginStatus === 'successful';
  }

  get loginFailed() {
    return this.loginStatus === 'failed';
  }
}

export const userStore = new UserStore();
