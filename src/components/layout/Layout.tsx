import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  name: string;
}

const Layout: React.FC<LayoutProps> = ({ children, name }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header name={name} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer name={name} />
    </div>
  );
};

export default Layout;