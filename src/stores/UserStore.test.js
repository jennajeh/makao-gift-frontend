import UserStore from './UserStore';

const context = describe;

describe('UserStore', () => {
  let userStore;

  beforeEach(() => {
    userStore = new UserStore();
  });

  describe('login', () => {
    context('올바른 아이디와 비밀번호 입력시', () => {
      it('로그인 성공', async () => {
        await userStore.login({ username: 'Test1', password: 'Test123!' });

        expect(userStore.amount).toBe(50000);
      });
    });

    context('아이디가 틀렸을 때', () => {
      it('로그인 실패', async () => {
        await userStore.login({ username: 'xxx', password: 'Test123!' });

        expect(userStore.name).toBeFalsy();
        expect(userStore.amount).toBeFalsy();
      });
    });

    context('비밀번호가 틀렸을 때', () => {
      it('로그인 실패', async () => {
        await userStore.login({ username: 'Test1', password: 'xxx' });

        expect(userStore.name).toBeFalsy();
        expect(userStore.amount).toBeFalsy();
      });
    });
  });
});
