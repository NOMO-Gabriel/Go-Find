import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home/Home'));
const CartPage = lazy(() => import('./pages/cart/Cart'));
const CheckOutPage = lazy(() => import('./pages/checkout/Checkout'));
const LoginPage = lazy(() => import('./pages/Login/Login'));
const ProductPage = lazy(() => import('./pages/Product/Product'));
const SearchPage = lazy(() => import('./pages/searchPage/SearchPage'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const SignUpPage = lazy(() => import('./pages/signUp/SignUp'));
const TravelPage = lazy(() => import('./pages/travelling/Travelling'));

const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/contact/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/travelling" element={<TravelPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
