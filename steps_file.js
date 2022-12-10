// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  resetDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/reset-database`);
  },

  setupDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/setup-database`);
  },

  changeAmount({ id, amount }) {
    this.amOnPage([
      `${backdoorBaseUrl}/change-amount`,
      `?id=${id}&amount=${amount}`,
    ].join(''));
  },

  submit() {
    this.click('[type=submit]');
  },

  signup() {
    this.resetDatabase();
    this.amOnPage('/signup');

    this.fillField('이름', '전제나');
    this.fillField('아이디', 'test1');
    this.fillField('비밀번호', 'Test123!');
    this.fillField('비밀번호 확인', 'Test123!');
    this.submit();

    this.waitForText('회원가입 완료');
  },

  login() {
    this.amOnPage('/login');

    this.fillField('아이디', 'test1');
    this.fillField('비밀번호', 'Test123!');
    this.submit();

    this.waitForText('로그아웃');
  },

  makeOrder() {
    this.setupDatabase();
    this.amOnPage('/');
    this.login();

    this.click('스토어');
    this.click('669,750원');
    this.click('선물하기');

    this.fillField('받는 분 성함', '강보니');
    this.fillField('받는 분 주소', '서울시 성동구 성수동');
    this.fillField('받는 분께 보내는 메세지', '생일 축하해!');
    this.submit();

    this.see('내가 주문한 내역입니다');
    this.see('To. 강보니');
  },
});
