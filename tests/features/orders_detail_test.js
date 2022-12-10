Feature('주문 세부 정보 확인 - 고객은 자신이 선물한 상품과 메세지를 자세히 알기 위해 주문 세부 정보를 확인할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();
});

Scenario('주문 세부 정보를 확인하는 경우', ({ I }) => {
  // Given
  I.makeOrder();

  // When
  I.click('To. 강보니');

  // then
  I.see('구매수량');
  I.see('총 상품금액');
  I.see('구매일');
  I.see('받는 분');
  I.see('받는 분 주소');
  I.see('받는 분께 보내는 메세지');
});

Scenario('로그인하지 않은 경우', ({ I }) => {
  // When
  I.amOnPage('/order/1');

  // Then
  I.amOnPage('/login');
});
