import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/style.scss';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;