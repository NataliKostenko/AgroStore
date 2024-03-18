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
import MoreAboutCompany from "./Pages/moreAboutCompanyPage/moreAboutCompany.js";
import RegistrationPage from "./Pages/registratioPage/registrationPage.js";
import PaymentAndDeliveryPage from "./Pages/paymentAndDeliveryPage/paymentAndDeliveryPage.js";
import NewsPage from "./Pages/newsPage/newsPage.js";
import ContactsPage from "./Pages/contactsPage/contactsPage.js";
import PersonalAccountPage from "./Pages/personalAccountPage/personalAccountPage.js";
import Orders from "./Pages/orders/orders.js";
import DataAccount from "./Pages/dataAccount/dataAccount.js";
import HistoryAccount from "./Pages/historyAccount/historyAccount.js";
import PasswordAccont from "./Pages/passwordAccount/passwordAccount.js";

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
const moreAboutCompanyRoute = {
  path: "moreAboutCompany", element: <MoreAboutCompany />, handle: <Link to='moreAboutCompany'>MoreAboutCompany</Link>
}
const aboutMoreAboutCompanyRoute = {
  path: "about/moreAboutCompany", element: <MoreAboutCompany />, handle: <Link to='moreAboutCompany'>MoreAboutCompany</Link>
}
const registrationRoute = {
  path: "registration", element: <RegistrationPage />, handle: <Link to='registration'>Registration</Link>
}
const payRoute = {
  path: "pay", element: <PaymentAndDeliveryPage />, handle: <Link to='pay'>Payment</Link>
}
const newsRoute = {
  path: "news", element: <NewsPage />, handle: <Link to='news'>News</Link>
}
const contactsRoute = {
  path: "contacts", element: <ContactsPage />, handle: <Link to='contacts'>Contacts</Link>
}
const accountRoute = {
  path: "account", element: <PersonalAccountPage />, handle: <Link to='account'>Account</Link>
}
const ordersRoute = {
  path: "account/orders", element: <Orders />, handle: <Link to='orders'>Orders</Link>
}

const dataRoute = {
  path: "account/data", element: <DataAccount />, handle: <Link to='data'>Data</Link>
}

const historyRoute = {
  path: "account/history", element: <HistoryAccount />, handle: <Link to='history'>Data</Link>
}
const passwordRoute = {
  path: "account/password", element: <PasswordAccont />, handle: <Link to='password'>Data</Link>
}
/* const protectingRoute = <Routes>
  <Route path="/protection" element={<PlantsProtectingTools />} handle={<Link to='/protection'>Protection</Link>} >
    <Route path="/protection/herbicides" element={<Herbicides />} handle={<Link to='herbicides'>Herbicides</Link>} />
    <Route path="/protection/fungicides" element={<Fungicides />} handle={<Link to='fungicides'>Herbicides</Link>} />
  </Route>
</Routes> */

const routes = [homeRoute, aboutRoute, partnersRoute, protectingRoute, herbicidesRoute,
  fungicidesRoute, catalogRoute, moreAboutCompanyRoute, aboutMoreAboutCompanyRoute, registrationRoute,
  payRoute, newsRoute, contactsRoute, accountRoute, ordersRoute, dataRoute, historyRoute, passwordRoute];

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