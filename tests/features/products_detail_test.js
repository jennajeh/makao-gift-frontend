Feature('상품 세부 정보 확인 - 고객은 상품을 구매하기 위해 상품의 세부 정보를 확인할 수 있다.');

Scenario('상품 상세 페이지에 접속한 경우', ({ I }) => {
  // When
  I.amOnPage('/products/1');

  // then
  I.see('제조사');
  I.see('구매수량');
  I.see('상품설명');
  I.see('선물하기');
});

Scenario('로그인하지 않고 선물하기를 클릭하는 경우', ({ I }) => {
  // When
  I.amOnPage('/products/1');
  I.click('선물하기');

  // Then
  I.amOnPage('/login');
});

Scenario('로그인하고 잔액이 충분한 상태로 선물하기를 진행할 경우', ({ I }) => {
  // Given
  I.login();
  I.click('스토어');
  I.click(/라클라우드 이지 모션베드/);

  // When
  I.amOnPage('/products/2');
  I.click('선물하기');

  // Then
  I.amOnPage('/order');
});

// Scenario('로그인하고 잔액이 부족한 상태로 선물하기를 진행할 경우', ({ I }) => {
//   // Given
//   I.login();
//   I.changeUserAmount({ userId: 1, amount: 0 });
//   I.amOnPage('/');
//   I.click('스토어');
//   I.click('테디베어 어드벤트 캘린더 250g (해외)(1개)');

//   // When
//   I.amOnPage('/products/1');
//   I.click('선물하기');

//   // Then
//   I.see('❌ 잔액이 부족하여 선물하기가 불가합니다 ❌');
// });
