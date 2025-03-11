import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx';
import BlogPage from './pages/BlogPage/BlogPage.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const AnimalsPage = lazy(() => import('./pages/AnimalsPage/AnimalsPage.jsx'));
const SheltersPage = lazy(
  () => import('./pages/SheltersPage/SheltersPage.jsx')
);
const ShelterPage = lazy(() => import('./pages/ShelterPage/ShelterPage.jsx'));
const ForumPage = lazy(() => import('./pages/ForumPage/ForumPage.jsx'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage.jsx'));
const DashboardPage = lazy(() => import('./pages/Dashboard/Dashboard.jsx'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage/AboutUs.jsx'));
function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/shelters" element={<SheltersPage />} />
          <Route path="/shelter/:id" element={<ShelterPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
