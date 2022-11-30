// Feature('상품 주문 - 고객은 상품을 친구에게 보내기 위해 주문을 완료 할 수 있다. ');

// Before(({ I }) => {
//   I.setupDatabase();
// });

// Scenario('선물하기 (주문) 페이지에서 모든 정보를 올바르게 입력한 경우', ({ I }) => {
//   // given
//   I.amOnPage('/order');
//   I.see('내 잔액: 50,000원');

//   // When
//   // Todo: 모든 정보를 올바르게 입력했다는 걸 어떻게 표현하지?
//   I.fillField('input[name=friend-name]', '강보니');
//   I.fillField('input[name=friend-address]', '서울시 성동구 성수동');
//   I.fillField('input[name=message]', '취업 축하해');

//   I.click('선물하기');

//   // then
//   I.amOnPage('/orders');
//   I.see('내가 주문한 내역입니다.');
//   I.see('내 잔액: 40,000원');
// });

// Scenario('선물하기 (주문) 페이지에서 받는 분 성함을 입력하지 않은 경우', ({ I }) => {
//   // given
//   I.amOnPage('/order');

//   // When
//   I.fillField('input[name=friend-name]', '');
//   I.fillField('input[name=friend-address]', '서울시 성동구 성수동');
//   I.fillField('input[name=message]', '취업 축하해');
//   I.click('선물하기');

//   // then
//   I.see('성함을 입력해 주세요');
// });

// Scenario('선물하기 (주문) 페이지에서 받는 분 주소를 입력하지 않은 경우', ({ I }) => {
//   // given
//   I.amOnPage('/order');

//   // When
//   I.fillField('input[name=friend-name]', '강보니');
//   I.fillField('input[name=friend-address]', '');
//   I.fillField('input[name=message]', '취업 축하해');
//   I.click('선물하기');

//   // then
//   I.see('주소를 입력해 주세요');
// });

// Scenario('선물하기 (주문) 페이지에서 메세지를 입력하지 않은 경우', ({ I }) => {
//   // given
//   I.amOnPage('/order');

//   // When
//   I.fillField('input[name=friend-name]', '강보니');
//   I.fillField('input[name=friend-address]', '서울 성동구 성수동');
//   I.fillField('input[name=message]', '');
//   I.click('선물하기');

//   // then
//   I.see('메세지를 입력해 주세요');
// });
