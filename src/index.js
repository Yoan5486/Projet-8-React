// Importation des Composants Reacts

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./App";
import "./styles/style.css"

// Container
 
const container = document.getElementById('root');
const root = createRoot(container);

// Root Render

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);