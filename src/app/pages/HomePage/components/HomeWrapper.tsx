import { Navbar } from '@themesberg/react-bootstrap';
import Footer from 'app/components/Footer';
import SideBar from 'app/components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function HomeWrapper() {
  var showSettings: boolean = false;

  const toggleSettings = () => {
    showSettings = true;
  };

  return (
    <>
      <SideBar />
      <main className="content">
        <Navbar />
        <Outlet />
        <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
      </main>
    </>
  );
}
