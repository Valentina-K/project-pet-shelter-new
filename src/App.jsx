import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx';
import BlogPage from './pages/BlogPage/BlogPage.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import './styles/variables.css';
import './styles/globals.css';

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
const ResetPasswordPage = lazy(
  () => import('./pages/ResetPasswordPage/ResetPasswordPage.jsx')
);
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage.jsx'));
const RegisterPage = lazy(
  () => import('./pages/RegisterPage/RegisterPage.jsx')
);
const VerifyEmailPage = lazy(
  () => import('./pages/VerifyEmailPage/VerifyEmailPage.jsx')
);
const AnimalPage = lazy(() => import('./pages/AnimalPage/AnimalPage.jsx'));
const MainPage = lazy(() => import('./pages/profile/MainPage.jsx'));
const MessagesPage = lazy(() => import('./pages/profile/MessagesPage.jsx'));
const AnnouncementPage = lazy(
  () => import('./pages/profile/AnnouncementPage.jsx')
);
const AddAd = lazy(() => import('./pages/profile/announcementParts/AddAd.jsx'));
const ViewAds = lazy(
  () => import('./pages/profile/announcementParts/ViewAds.jsx')
);
const EditAd = lazy(
  () => import('./pages/profile/announcementParts/EditAd.jsx')
);
const HotAds = lazy(
  () => import('./pages/profile/announcementParts/HotAds.jsx')
);
const FavoriteAds = lazy(
  () => import('./pages/profile/announcementParts/FavoriteAds.jsx')
);
const SettingsPage = lazy(() => import('./pages/profile/SettingsPage.jsx'));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/animal/:id" element={<AnimalPage />} />
          <Route path="/shelters" element={<SheltersPage />} />
          <Route path="/shelter/:id" element={<ShelterPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route index element={<Navigate to="main" />} />
              <Route path="main" element={<MainPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="announcement" element={<AnnouncementPage />}>
                <Route path="add" element={<AddAd />} />
                <Route path="view" element={<ViewAds />} />
                <Route path="edit" element={<EditAd />} />
                <Route path="hot" element={<HotAds />} />
                <Route path="favorite" element={<FavoriteAds />} />
              </Route>
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
