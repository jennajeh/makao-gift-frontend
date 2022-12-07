// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  resetProducts() {
    this.amOnPage(`${backdoorBaseUrl}/reset-products`);
  },

  setUpProducts() {
    this.amOnPage(`${backdoorBaseUrl}/setup-products`);
  },

  setUpUser() {
    this.amOnPage(`${backdoorBaseUrl}/setup-user`);
  },

  login(username) {
    this.amOnPage('/login');

    this.fillField('username', username);
    this.fillField('password', 'Test123!');
    this.click('로그인하기');

    this.waitForText('로그아웃');
  },
});
