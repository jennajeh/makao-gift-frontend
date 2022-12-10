Feature('로그아웃');

Before(({ I }) => {
  I.setupDatabase();
});

Scenario('로그아웃할 경우', ({ I }) => {
  // Given
  I.login();

  // When
  I.amOnPage('/');

  I.click('로그아웃');

  // Then
  I.see('회원가입');
  I.see('로그인');
  I.dontSee('내 잔액: 5,000,000원');
  I.dontSee('로그아웃');
});
