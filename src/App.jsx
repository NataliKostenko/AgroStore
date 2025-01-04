import { Outlet } from "react-router-dom";
import Header from './header/header.jsx';
import './index.css';
import Footer from './footer/footer.jsx';
import Breadcrumbs from './breadcrumbs/breadcrumbs.jsx';
import { CartContextProvider } from './shoppingCartContext.jsx';
import { FavouritContextProvider } from './favouritesContext.jsx';
import { CompareContextProvider } from './compareContext.jsx';
import ScrollToTop from './ScrollToTop.jsx';

export default function App() {

  return <div className='backgroundMain'>
    <CartContextProvider>
      <FavouritContextProvider>
        <CompareContextProvider>
          <Header />
          <Breadcrumbs />
          <Outlet />
          <Footer />
          <ScrollToTop />
        </CompareContextProvider>
      </FavouritContextProvider>
    </CartContextProvider>
  </div>
}