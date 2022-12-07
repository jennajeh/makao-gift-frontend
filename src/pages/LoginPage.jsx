import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import useUserStore from '../hooks/useUserStore';

export default function LoginPage() {
  const location = useLocation();
  const userStore = useUserStore();

  useEffect(() => () => {
    userStore.resetUserStatus();
  }, []);

  return (
    <LoginForm location={location} />
  );
}
