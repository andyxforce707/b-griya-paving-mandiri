import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// import css
import './index.css';

// import components
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import ProductDetailPage from './components/ProductDetailPage';
import PortfolioPage from './components/PortfolioPage';
//
import TestPage from './components/TestPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/portfolios" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          //
          <Route path="/product/:id" element={<ProductDetailPage />} />
          //
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
