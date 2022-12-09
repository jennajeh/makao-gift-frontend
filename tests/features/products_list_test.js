Feature('상품 목록 확인 - 고객은 마음에 드는 상품을 고르기 위해 상품 목록을 볼 수 있다.');

Scenario('로그인 하지 않고 스토어 화면에 접속한 경우', ({ I }) => {
  // When
  I.click('스토어');

  // then
  I.see('회원가입');
  I.see('로그인');
  I.see('인기선물을 한 자리에 모았어요');
  I.see('로엔 LED모션베드 SS(천연라텍스폼)');
  I.see('바디프랜드');
});

Scenario('로그인 후 스토어 화면에 접속한 경우', ({ I }) => {
  // Given
  I.resetDatabase();
  I.setUpUser();
  I.setUpProducts();

  // When
  I.login();

  I.click('스토어');

  // then
  I.see('내 잔액: 5,000,000원');
  I.see('로그아웃');
  I.see('인기선물을 한 자리에 모았어요');
  I.see('로엔 LED모션베드 SS(천연라텍스폼)');
  I.see('바디프랜드');
});

Scenario('상품이 존재하지 않는 경우', ({ I }) => {
  // Given
  I.resetDatabase();

  // When
  I.amOnPage('/products');

  // then
  I.see('상품이 존재하지 않습니다');
});
