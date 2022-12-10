Feature('로그인 - 고객은 자신임을 증명하기 위해 로그인 할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();
});

Scenario('로그인 페이지에 접속한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');

  // Then
  I.see('USER LOGIN');
  I.see('로그인하기');
  I.see('회원가입');
});

Scenario('로그인시 모든 정보를 올바르게 입력한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');

  I.fillField('아이디', 'test1');
  I.fillField('비밀번호', 'Test123!');

  I.click('로그인하기');

  // then
  I.see('내 잔액: 5,000,000원');
  I.see('로그아웃');
  I.dontSee('회원가입');
  I.dontSee('로그인');
});

Scenario('로그인시 존재하지 않는 아이디를 입력한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');

  // then
  I.fillField('아이디', 'xxx');
  I.fillField('비밀번호', 'Test123!');

  I.click('로그인하기');

  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});

Scenario('로그인시 올바르지 않은 비밀번호를 입력한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');

  // then
  I.fillField('아이디', 'test1');
  I.fillField('비밀번호', '1234');

  I.click('로그인하기');

  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});

Scenario('로그인시 아이디를 입력하지 않은 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');

  // then
  I.fillField('아이디', '');
  I.fillField('비밀번호', 'Test123!');

  I.click('로그인하기');

  I.see('아이디를 입력해 주세요');
});

Scenario('로그인시 비밀번호를 입력하지 않은 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');

  // then
  I.fillField('아이디', 'test1');
  I.fillField('비밀번호', '');

  I.click('로그인하기');

  I.see('비밀번호를 입력해 주세요');
});

Scenario('로그인 페이지에서 회원가입 버튼을 클릭한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');
  I.click('회원가입');

  // then
  I.amOnPage('/signup');
});

Scenario('로그인에 성공한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('로그인');

  I.fillField('아이디', 'test1');
  I.fillField('비밀번호', 'Test123!');

  I.click('로그인하기');

  // Then
  I.amOnPage('/');

  I.see('내 잔액: 5,000,000원');
  I.see('로그아웃');
});
