import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Beer from "../pages/Beer";
import Energy from "../pages/Energy";
import GoliSoda from "../pages/GoliSoda";
import Juice from "../pages/Juice";
import NataDeCoco from "../pages/NataDeCoco";
import Distributor from "../pages/Distributor";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />} />

          <Route path="products/beer" element={<Beer />} />

          <Route path="products/energy" element={<Energy />} />

          <Route
            path="products/goli-soda"
            element={<GoliSoda />}
          />

          <Route
            path="products/juice"
            element={<Juice />}
          />

          <Route
            path="products/nata-de-coco"
            element={<NataDeCoco />}
          />

          <Route
            path="distributor"
            element={<Distributor />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<h1>404 Page Not Found</h1>}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;