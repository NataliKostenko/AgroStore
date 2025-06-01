import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/homePage.jsx"
import About from "./Pages/aboutPage/aboutPage.jsx";
import PartnersPage from "./Pages/partnersPage/partnersPage.jsx";
import PlantsProtectingTools from "./Pages/plantsProtectingTools/plantsProtectingTools.jsx";
import Herbicides from './Pages/herbicides.jsx';
import Fungicides from './Pages/fungicides.jsx';
import CatalogPage from './Pages/catalogPage/catalogPage.jsx';
import App from './App.jsx';
import MoreAboutCompany from "./Pages/moreAboutCompanyPage/moreAboutCompany.jsx";
import RegistrationPage from "./Pages/registratioPage/registrationPage.jsx";
import PaymentAndDeliveryPage from "./Pages/paymentAndDeliveryPage/paymentAndDeliveryPage.jsx";
import NewsPage from "./Pages/newsPage/newsPage.jsx";
import ContactsPage from "./Pages/contactsPage/contactsPage.jsx";
import PersonalAccountPage from "./Pages/personalAccountPage/personalAccountPage.jsx";
import Orders from "./Pages/orders/orders.jsx";
import DataAccount from "./Pages/dataAccount/dataAccount.jsx";
import HistoryAccount from "./Pages/historyAccount/historyAccount.jsx";
import PasswordAccont from "./Pages/passwordAccount/passwordAccount.jsx";
import TestWay from "./testway.jsx";
import AccountWay from "./accountWay.jsx";
import PersonalAccountPanel from "./personalAccountPanel/personalAccountPanel.jsx";
import Details from "./details/details.jsx";
import ShoppingCart from "./Pages/shoppingCart/shoppingCart.jsx";
import Order from "./Pages/order/order.jsx";
import OrderFinal from './Pages/order/orderFinal.jsx';
import CatalogSeeds from './Pages/catalogSeeds/catalogSeeds.jsx';
import CatalogFertilisers from './Pages/catalogFertilisers/catalogFertilisers.jsx';
import CatalogFeed from './Pages/catalogFeed/catalogFeed.jsx';
import CatalogHelp from './Pages/catalogHelp/catalogHelp.jsx';
import CatalogPromotions from './Pages/catalogPromotions/catalogPromotions.jsx';
import Favourites from './Pages/favourites/favourites.jsx';
import Compare from './Pages/compare/compare.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} handle={() => <Link to='/'>Головна</Link>} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} handle={() => <Link to='about'>Про нас</Link>} />
      <Route path="moreAboutCompany" element={<MoreAboutCompany />} handle={() => <Link to='moreAboutCompany'>Докладніше</Link>} />
      <Route path="partners" element={< PartnersPage url={"../../Data/partnersPage.json"} />} handle={() => <Link to='partners'>Партнери</Link>} />
      <Route path="contacts" element={<ContactsPage />} handle={() => <Link to='contacts'>Контакти</Link>} />
      <Route path="news" element={<NewsPage />} handle={() => <Link to='news'>Новини</Link>} />

      <Route path="catalog" element={<Outlet />} handle={() => <Link to='catalog'>Каталог</Link>} >
        <Route index element={<CatalogPage />} />
        <Route path="details/:id" loader={({ params }) => { return fetch(`/Data/productsId/${params.id}.json`) }} element={<Details />}
          handle={(data) => <Link to={'/catalog/details/' + data.id}>{data.name}</Link>} />
      </Route>
      <Route path="promotions" element={<CatalogPromotions />} handle={() => <Link to='promotions'>Акції</Link>} />
      <Route path="seeds" element={<CatalogSeeds />} handle={() => <Link to='seeds'>Насіння</Link>} />
      <Route path="fertilisers" element={< CatalogFertilisers />} handle={() => <Link to='fertilisers'>Добрива</Link>} />
      <Route path="feed" element={<CatalogFeed />} handle={() => <Link to='feed'>Кормова група</Link>} />
      <Route path="help" element={<CatalogHelp />} handle={() => <Link to='help'>Агроному в поміч</Link>} />
      <Route path="pay" element={<PaymentAndDeliveryPage />} handle={() => <Link to='pay'>Оплата та доставка</Link>} />
      <Route path="registration" element={<RegistrationPage />} handle={() => <Link to='registration'>Реєстрація</Link>} />
      <Route path="shoppingCart" element={<ShoppingCart />} handle={() => <Link to='shoppingCart'>Кошик</Link>} />
      <Route path="order" element={<Order />} handle={() => <Link to='order'>Оформлення замовлення</Link>} />
      <Route path="orderFinal" element={<OrderFinal />} handle={() => <Link to='orderFinal'>OrderFinal</Link>} />
      <Route path="favourites" element={<Favourites />} handle={() => <Link to='favourites'>Favourites</Link>} />
      <Route path="compare" element={<Compare />} handle={() => <Link to='compare'>Compare</Link>} />

      <Route path='account' element={<AccountWay />} handle={() => <Link to='account'>Account</Link>}>
        <Route index element={<PersonalAccountPage />} />
        <Route path="orders" element={<Orders />} handle={() => <Link to='orders'>Orders</Link>} />
        <Route path="accountPanel" element={<PersonalAccountPanel />} />
        <Route path="data" element={<DataAccount />} handle={() => <Link to='data'>Data</Link>} />
        <Route path="history" element={<HistoryAccount />} handle={() => <Link to='history'>History</Link>} />
        <Route path="password" element={<PasswordAccont />} handle={() => <Link to='password'>Password</Link>} />
      </Route>

      < Route path='protection' element={< TestWay />} handle={() => <Link to='protection'>Protection</Link>}>
        <Route index element={<PlantsProtectingTools />} />
        <Route path="herbicides" element={<Herbicides />} handle={() => <Link to='herbicides'>Herbicides</Link>} />
        <Route path="fungicides" element={<Fungicides />} handle={() => <Link to='fungicides'>Fungicides</Link>} />
      </Route >
    </Route >
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);


