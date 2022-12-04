import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const location = useLocation();

  return (
    <LoginForm location={location} />
  );
}
