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
const ResetPasswordPage = lazy(
  () => import('./pages/ResetPasswordPage/ResetPasswordPage.jsx')
);
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage.jsx'));
const RegisterPage = lazy(
  () => import('./pages/RegisterPage/RegisterPage.jsx')
);

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
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
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
