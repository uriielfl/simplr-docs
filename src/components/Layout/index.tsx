import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DrawerSideNavigation } from '@/components/DrawerSideNavigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);
  useEffect(() => {
    if (Prism) {
      Prism.highlightAll();
    }
  }, [location]);
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <DrawerSideNavigation isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Header toggleDrawer={toggleDrawer} />
      <div className="overflow-auto flex-shrink md:p-10 p-4">{children}</div>
      <Footer />
    </div>
  );
};
