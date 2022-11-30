// Feature('고객은 원하는 상품을 친구에게 선물하기 위해 상품과 개수를 선택 하고 주문할 수 있다.');

// Before(({ I }) => {
//   I.setupDatabase();
// });

// Scenario('로그인을 하지 않고 상품 상세 페이지에 접속한 경우', ({ I }) => {
//   // given
//   I.amOnPage('/products/1');

//   // When
//   I.click('선물하기');

//   // then
//   I.amOnPage('/login');
// });

// Scenario('로그인 후 상품 상세 페이지에 접속한 경우', ({ I }) => {
//   // given
//   I.login('Test1');

//   // When
//   I.amOnPage('/products/1');
//   I.click('선물하기');

//   // then
//   I.amOnPage('/order');
//   I.see('받는 분 성함');
//   I.see('받는 분 주소');
//   I.see('받는 분께 보내는 메세지');
// });

// Scenario('상품 상세 페이지에서 상품을 두 개 구매하는 경우', ({ I }) => {
//   // given
//   I.see('10,000원');

//   // When
//   I.click('+ button');

//   // then

//   I.see('20,000원');
// });

// Scenario('상품 상세 페이지에서 상품을 한 개 구매하는 경우', ({ I }) => {
//   // given
//   I.see('10,000원');

//   // When
//   I.click('+ button');

//   // then

//   I.see('20,000원');

//   I.click('- button');

//   I.see('10,000원');
// });

// Scenario('잔액이 모자란 채 선물하기를 진행할 경우', ({ I }) => {
//   // given
//   I.see('잔액: 500원');
//   I.see('10,000원');

//   // When
//   I.click('선물하기');

//   // then
//   I.see('잔액이 부족하여 선물하기가 부족합니다.');
// });

// Scenario('잔액이 충분한 상태로 선물하기를 진행할 경우', ({ I }) => {
//   // given
//   I.see('잔액: 50,000원');
//   I.see('10,000원');

//   // When
//   I.click('선물하기');

//   // then
//   I.amOnPage('/order');
// });
