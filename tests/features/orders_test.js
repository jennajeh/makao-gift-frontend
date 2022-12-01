// Feature('주문 목록 확인 - 고객은 자신이 선물한 이력을 확인하기 위해 주문 목록을 확인할 수 있다.');

// Before(({ I }) => {
//   I.setupDatabase();
// });

// Scenario('로그인 후 주문 내역이 없는 상태로 주문 조회 페이지에 접속한 경우', ({ I }) => {
//   // given
//   I.amOnPage('/');
//   // Todo: 주문 내역이 없는 상태를 어떻게 표현???
//   I.resetOrders();

//   // When
//   I.click('주문조회');

//   // then
//   I.see('내가 주문한 내역이 없습니다');
// });

// Scenario('로그인 후 주문 내역이 있는 상태로 주문 조회 페이지에 접속한 경우', ({ I }) => {
//   // given
//   I.amOnPage('/');
//   // Todo: 주문 내역이 있는 상태를 어떻게 표현???

//   // When
//   I.click('주문조회');

//   // then
//   // Todo: 상품을 어떻게 확인할까
//   I.see('제조사');
//   I.see('To.');
// });

// Scenario('로그인 하지 않고 주문조회 페이지에 접속한 경우', ({ I }) => {
//   // given
//   I.amOnPage('/');

//   // When
//   I.click('주문조회');

//   // then
//   I.amOnPage('/login');
//   I.see('USER LOGIN');
// });
