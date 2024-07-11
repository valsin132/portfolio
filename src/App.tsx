import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const location = useLocation();

  const pathsWithNavbarAndFooter = ['/', '/projects', '/about'];
  const renderNavbarAndFooter = pathsWithNavbarAndFooter.includes(location.pathname);

  return (
    <>
      {renderNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {renderNavbarAndFooter && <Footer />}
    </>
  );
}
