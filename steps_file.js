// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  resetDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/reset-database`);

    this.amOnPage('/');
  },

  resetProducts() {
    this.amOnPage(`${backdoorBaseUrl}/reset-products`);

    this.amOnPage('/');
  },

  setUpProducts() {
    this.amOnPage(`${backdoorBaseUrl}/setup-products`);

    this.amOnPage('/');
  },

  setUpUser() {
    this.amOnPage(`${backdoorBaseUrl}/setup-user`);

    this.amOnPage('/');
  },

  signup() {
    this.setUpUser();
    this.amOnPage('/signup');

    this.fillField('이름', '전제나');
    this.fillField('아이디', 'test3');
    this.fillField('비밀번호', 'Test123!');
    this.fillField('비밀번호 확인', 'Test123!');
    this.submit();

    this.waitForText('회원가입 완료');
  },

  login() {
    this.amOnPage('/login');

    this.fillField('username', 'test1');
    this.fillField('password', 'Test123!');
    this.click('로그인하기');

    this.waitForText('로그아웃');
  },

  submit() {
    this.click('[type=submit]');
  },

  makeOrder() {
    this.setUpUser();
    this.setUpProducts();
    this.amOnPage('/');
    this.login();
    this.click('스토어');
    this.click('2,690,200원');
    this.click('선물하기');

    this.fillField('받는 분 성함', '강보니');
    this.fillField('받는 분 주소', '서울시 성동구 성수동');
    this.fillField('받는 분께 보내는 메세지', '생일 축하해!');
    this.submit();

    this.see('내가 주문한 내역입니다');
    this.see('To. 강보니');
  },
});
