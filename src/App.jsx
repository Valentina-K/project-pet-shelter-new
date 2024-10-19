import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const AnimalsPage = lazy(() => import('./pages/AnimalsPage/AnimalsPage.jsx'));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
