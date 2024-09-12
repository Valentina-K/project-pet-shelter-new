import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
