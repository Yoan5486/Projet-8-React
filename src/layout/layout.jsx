// Importation des Composants Reacts

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Layout 

const MainLayout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

// Exportation du Layout 

export default MainLayout;