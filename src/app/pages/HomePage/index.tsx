import React from 'react';
import { Navbar } from '@themesberg/react-bootstrap';

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'app/slice/selectors';

export function HomePage() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return !isAuthenticated ? (
    <Navigate to="/auth" replace />
  ) : (
    <>
      <main className="content">
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer toggleSettings={toggleSettings} showSettings={showSettings} /> */}
      </main>
    </>
  );
}
