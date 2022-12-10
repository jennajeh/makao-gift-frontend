import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useLocalStorage } from 'usehooks-ts';
import Header from './components/Header';
import useUserStore from './hooks/useUserStore';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OrderDetailPage from './pages/OrderDetailPage';
import OrdersPage from './pages/OrdersPage';
import OrderPage from './pages/OrderPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';
import { apiService } from './services/ApiService';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  const userStore = useUserStore();

  const [accessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);

    if (accessToken) {
      userStore.fetchUser();
    }
  }, [accessToken]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:id" element={<OrderDetailPage />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  height: calc(100vh - 64px);
`;
