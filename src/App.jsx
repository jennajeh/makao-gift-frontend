import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
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
          {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
          {/* <Route path="/order" element={<OrderPage />} /> */}
          {/* <Route path="/orders" element={<OrderListPage />} /> */}
          {/* <Route path="/orders/:id" element={<OrderListDetailPage />} /> */}
          {/* <Route path="/welcome" element={<WelcomePage />} /> */}
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  padding: 1em;
`;
