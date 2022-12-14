Feature('회원가입 - 고객은 상품을 주문할 수 있는 자격을 얻기 위해 회원가입을 할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();
});

Scenario('회원가입을 위한 모든 정보를 올바르게 입력한 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillField('이름', '전제나');
  I.fillField('아이디', 'test5');
  I.fillField('비밀번호', 'Test123!');
  I.fillField('비밀번호 확인', 'Test123!');

  I.submit();

  // then
  I.see('회원가입 완료');
  I.see('로그인');
});

Scenario('회원가입 정보 입력시 아이디가 중복된 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillField('이름', '강보니');
  I.fillField('아이디', 'test1');
  I.fillField('비밀번호', 'Test123!');
  I.fillField('비밀번호 확인', 'Test123!');

  I.submit();

  // then
  I.see('해당 아이디는 사용할 수 없습니다');
});

Scenario('회원가입 정보 입력시 이름을 올바르게 입력하지 않은 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillField('이름', '정신차려이각박한세상속에서');
  I.fillField('아이디', 'test5');
  I.fillField('비밀번호', 'Test123!');
  I.fillField('비밀번호 확인', 'Test123!');

  I.submit();

  // then
  I.see('이름을 다시 확인해 주세요');
});

Scenario('회원가입 정보 입력시 아이디를 올바르게 입력하지 않은 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillField('이름', '전제나');
  I.fillField('아이디', '7777-7777-7777');
  I.fillField('비밀번호', 'Test123!');
  I.fillField('비밀번호 확인', 'Test123!');

  I.submit();

  // then
  I.see('아이디를 다시 확인해 주세요');
});

Scenario('회원가입 정보 입력시 비밀번호를 올바르게 입력하지 않은 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillField('이름', '전제나');
  I.fillField('아이디', 'test5');
  I.fillField('비밀번호', 'test');
  I.fillField('비밀번호 확인', 'test');

  I.submit();

  // then
  I.see('비밀번호를 다시 확인해 주세요');
});

Scenario('회원가입 정보 입력시 비밀번호와 비밀번호 확인이 다른 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillField('이름', '전제나');
  I.fillField('아이디', 'test5');
  I.fillField('비밀번호', 'Test123!!');
  I.fillField('비밀번호 확인', 'Testing1@@');

  I.submit();

  // then
  I.see('비밀번호가 일치하지 않습니다');
});

Scenario('회원가입 성공한 경우', ({ I }) => {
  // Given
  I.resetDatabase();
  I.amOnPage('/signup');

  // When
  I.fillField('이름', '최쩨쩨');
  I.fillField('아이디', 'zzezze1');
  I.fillField('비밀번호', 'Test123!');
  I.fillField('비밀번호 확인', 'Test123!');

  I.submit();

  // Then
  I.see('회원가입 완료');
  I.see('로그인하기');
});
