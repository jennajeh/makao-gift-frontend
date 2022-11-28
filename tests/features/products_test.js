// Feature('상품 목록 확인 - 고객은 마음에 드는 상품을 고르기 위해 상품 목록을 볼 수 있다.');

// Before(({ I }) => {
//   I.setupDatabase();
// });

// Scenario('로그인 하지 않고 스토어 화면에 접속한 경우', ({ I }) => {
//   // When
//   I.amOnPage('/');

//   I.click('스토어');

//   // then
//   I.see('회원가입');
//   I.see('로그인');
//   I.see('인기선물을 한 자리에 모았어요');
//   I.see('10,000원');
//   I.see('1');
// });

// Scenario('로그인 후 스토어 화면에 접속한 경우', ({ I }) => {
//   // When
//   I.login('Test1');

//   // then
//   I.amOnPage('/');

//   I.click('스토어');

//   I.see('내 잔액: 50,000원');
//   I.see('로그아웃');
//   I.see('인기선물을 한 자리에 모았어요');
//   I.see('10,000원');
//   I.see('1');
// });

// Scenario('상품이 존재하지 않는 경우', ({ I }) => {
//   // When
//   I.amOnPage('/products');

//   // then

//   I.see('상품이 존재하지 않습니다.');
// });
