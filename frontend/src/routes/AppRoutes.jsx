import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Certifications from "../pages/Certifications.jsx";
import Contact from "../pages/Contact.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />

      <Route
        path="/services"
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        }
      />

      <Route
        path="/certifications"
        element={
          <MainLayout>
            <Certifications />
          </MainLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;