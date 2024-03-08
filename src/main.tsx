import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  // BrowserRouter,
  createBrowserRouter,
  Link,
  // Route,
  RouterProvider,
  // Routes
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/homePage.js";
import About from "./Pages/aboutPage/aboutPage.js";
import PartnersPage from "./Pages/partnersPage/partnersPage.js";
import PlantsProtectingTools from "./Pages/plantsProtectingTools/plantsProtectingTools.js";
import Herbicides from './Pages/herbicides.js';
import Fungicides from './Pages/fungicides.js';
import CatalogPage from './Pages/catalogPage/catalogPage.js';
import App from './App.jsx';

const homeRoute = { path: "/", element: <Home /> };
const aboutRoute = { path: "about", element: <About />, handle: <Link to='about'>About</Link> };
const partnersRoute = { path: "partners", element: < PartnersPage url={"../../partnersPage.json"} />, handle: <Link to='partners'>Partners</Link> };
const catalogRoute = { path: "catalog", element: <CatalogPage />, handle: <Link to='catalog'>Catalog</Link> }
const protectingRoute = {
  path: "protection", element: <PlantsProtectingTools />, handle: <Link to='protection'>Protection</Link>,
  /*  children: [
     {
       path: "herbicides", element: <Herbicides />, handle: <Link to='herbicides'>Herbicides</Link>
     },
     {
       path: "fungicides", element: <Fungicides />, handle: <Link to='fungicides'>Fungicides</Link>
     },
 
   ], */
};
const herbicidesRoute = { path: "protection/herbicides", element: <Herbicides />, handle: <Link to='herbicides'>Herbicides</Link> }
const fungicidesRoute = { path: "protection/fungicides", element: <Fungicides />, handle: <Link to='fungicides'>Fungicides</Link> }

/* const protectingRoute = <Routes>
  <Route path="/protection" element={<PlantsProtectingTools />} handle={<Link to='/protection'>Protection</Link>} >
    <Route path="/protection/herbicides" element={<Herbicides />} handle={<Link to='herbicides'>Herbicides</Link>} />
    <Route path="/protection/fungicides" element={<Fungicides />} handle={<Link to='fungicides'>Herbicides</Link>} />
  </Route>
</Routes> */

const routes = [homeRoute, aboutRoute, partnersRoute, protectingRoute, herbicidesRoute, fungicidesRoute, catalogRoute];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: routes,
      handle: <Link to='/'>Home</Link>
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={< PartnersPage url={"../../partnersPage.json"} />} />
          <Route path="/protection" element={<PlantsProtectingTools />} />
          <Route path="/protection/herbicides" element={<Herbicides />} />
          <Route path="/protection/fungicides" element={<Fungicides />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>);