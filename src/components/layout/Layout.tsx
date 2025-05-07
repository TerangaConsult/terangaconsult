import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from '@/components/ui/BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <BackToTop />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
