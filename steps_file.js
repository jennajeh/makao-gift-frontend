// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  resetProducts() {
    this.amOnPage(`${backdoorBaseUrl}/reset-products`);
  },

  setUpProducts() {
    this.amOnPage(`${backdoorBaseUrl}/setup-products`);
  },
});
