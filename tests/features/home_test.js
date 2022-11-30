Feature('홈 화면 - 고객은 서비스를 이용하기 위해 홈 화면에서 로그인 할 수 있다.');

Scenario('로그인 하지 않고 홈 화면에 접속한 경우', ({ I }) => {
  // When
  I.amOnPage('/');

  // then
  I.see('선물하기');
  I.see('스토어');
  I.see('주문조회');
  I.see('회원가입');
  I.see('로그인');
});

// Scenario('로그인 후 홈 화면에 접속한 경우', ({ I }) => {
//   I.setupDatabase();

//   // When
//   I.amOnPage('/');

//   I.click('로그인');

//   // then
//   I.fillField('아이디', 'hello');
//   I.fillField('비밀번호', 'Testing1!');
//   I.click('[type=submit]');

//   I.see('내 잔액: 50,000원');
//   I.see('로그아웃');
// });
