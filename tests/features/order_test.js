Feature('상품 주문 - 고객은 상품을 친구에게 보내기 위해 주문을 완료 할 수 있다. ');

Before(({ I }) => {
  I.setupDatabase();
});

Scenario('선물하기 주문 페이지로 이동한 경우', ({ I }) => {
  // given
  I.amOnPage('/order');

  I.see('구매수량');
  I.see('총 상품금액');
  I.see('받는 분 성함');
  I.see('받는 분 주소');
  I.see('받는 분께 보내는 메세지');
  I.see('선물하기');
});

Scenario('선물하기 (주문) 페이지에서 받는 분 성함을 입력하지 않은 경우', ({ I }) => {
  // given
  I.amOnPage('/order');

  // When
  I.fillField('받는 분 성함', '');
  I.fillField('받는 분 주소', '서울시 성동구 성수동');

  I.click('선물하기');

  // then
  I.see('성함을 입력해 주세요');
});

Scenario('선물하기 (주문) 페이지에서 받는 분 주소를 입력하지 않은 경우', ({ I }) => {
  // given
  I.amOnPage('/order');

  // When
  I.fillField('받는 분 성함', '강보니');
  I.fillField('받는 분 주소', '');

  I.click('선물하기');

  // then
  I.see('주소를 입력해 주세요');
});

Scenario('주문에 성공한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');

  I.login();

  I.click('스토어');

  I.click('669,750원');

  I.amOnPage('/products/1');
  I.click('선물하기');

  // When
  I.fillField('받는 분 성함', '강보니');
  I.fillField('받는 분 주소', '서울시 성동구 성수동');
  I.fillField('받는 분께 보내는 메세지', '생일 축하해!');

  I.submit();

  // Then
  I.see('내가 주문한 내역입니다');
  I.see('To. 강보니');
});
