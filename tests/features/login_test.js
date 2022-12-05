Feature('로그인 - 고객은 자신임을 증명하기 위해 로그인 할 수 있다.');

Before(({ I }) => {
  I.setUpUser();

  I.amOnPage('/');
});

Scenario('로그인시 모든 정보를 올바르게 입력한 경우', ({ I }) => {
  // When
  I.click('로그인');

  I.fillField('username', 'Test1');
  I.fillField('password', 'Test123!');

  I.click('로그인하기');

  // then
  I.see('내 잔액: 50,000원');
  I.see('로그아웃');
  I.dontSee('회원가입');
  I.dontSee('로그인');
});

// Scenario('로그인시 존재하지 않는 아이디를 입력한 경우', ({ I }) => {
//   // When
//   I.click('로그인');

//   // then
//   I.fillField('username', 'xxx');
//   I.fillField('password', 'Test123!');

//   I.click('로그인하기');

//   I.see('아이디 혹은 비밀번호가 일치하지 않습니다');
// });

// Scenario('로그인시 올바르지 않은 비밀번호를 입력한 경우', ({ I }) => {
//   // When
//   I.click('로그인');

//   // then
//   I.fillField('username', 'Test1');
//   I.fillField('password', '1234');

//   I.click('로그인하기');

//   I.see('아이디 혹은 비밀번호가 일치하지 않습니다');
// });

// Scenario('로그인시 아이디를 입력하지 않은 경우', ({ I }) => {
//   // When
//   I.click('로그인');

//   // then
//   I.fillField('username', '');
//   I.fillField('password', 'Test123!');

//   I.click('로그인하기');

//   I.see('아이디를 입력해 주세요');
// });

// Scenario('로그인시 비밀번호를 입력하지 않은 경우', ({ I }) => {
//   // When
//   I.click('로그인');

//   // then
//   I.fillField('username', 'Test1');
//   I.fillField('password', '');

//   I.click('로그인하기');

//   I.see('비밀번호를 입력해 주세요');
// });
