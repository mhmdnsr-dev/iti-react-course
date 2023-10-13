import NavBar from '../NavBar/NavBar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';

const Layout = () => {
  return (
    <main className="relative min-h-screen bg-gray-900">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
