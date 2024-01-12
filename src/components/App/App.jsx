import ShopPage from 'pages/ShopPage.js';
import Layout from '../../Layout.js';
import AboutPage from '../../pages/AboutPage.js';
import HomePage from '../../pages/HomePage.js';
import { Routes, Route } from 'react-router-dom';
import { PagesDiv } from './App.styled.js';

export const App = () => {
  return (
    <PagesDiv>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/play" element={<ShopPage />} />
        </Route>
      </Routes>
    </PagesDiv>
  );
};
