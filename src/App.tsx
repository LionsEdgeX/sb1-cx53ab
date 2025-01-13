import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import FloatingMenu from './components/floating-menu/FloatingMenu';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const SecondaryHero = lazy(() => import('./components/SecondaryHero'));
const TestimonialsSection = lazy(() => import('./components/testimonials/TestimonialsSection'));
const LoginContainer = lazy(() => import('./components/login/LoginContainer'));
const FeaturedCourses = lazy(() => import('./components/FeaturedCourses'));
const FloatingCTA = lazy(() => import('./components/FloatingCTA'));
const Footer = lazy(() => import('./components/Footer'));

// Lazy load pages
const CoachingLogin = lazy(() => import('./pages/CoachingLogin'));
const CoursesDirectory = lazy(() => import('./pages/CoursesDirectory'));
const FivePillarCoaching = lazy(() => import('./pages/FivePillarCoaching'));
const BalancerBlueprint = lazy(() => import('./pages/BalancerBlueprint'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const MarketSamurai = lazy(() => import('./pages/MarketSamurai'));
const MarketSamuraiPlatform = lazy(() => import('./pages/MarketSamuraiPlatform'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const Community = lazy(() => import('./pages/Community'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <FloatingMenu />
        <Routes>
          <Route path="/coaching" element={<CoachingLogin />} />
          <Route path="/courses" element={<CoursesDirectory />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/five-pillar-coaching" element={<FivePillarCoaching />} />
          <Route path="/market-samurai" element={<MarketSamurai />} />
          <Route path="/market-samurai-platform" element={<MarketSamuraiPlatform />} />
          <Route path="/balancer-blueprint" element={<BalancerBlueprint />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/" element={
            <div className="min-h-screen bg-royal-dark">
              <Navbar />
              <Hero />
              <SecondaryHero />
              <TestimonialsSection />
              <section id="login-section">
                <LoginContainer />
              </section>
              <section id="courses">
                <FeaturedCourses />
              </section>
              <FloatingCTA />
              <Footer />
            </div>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;