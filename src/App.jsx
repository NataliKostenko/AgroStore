import { Outlet } from "react-router-dom";
import Header from './Components/Header.jsx';
import './index.css';
import Footer from './Components/Footer/Footer.jsx';
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs.jsx';
import { FavouritContextProvider } from './Contexts/favouritesContext.jsx';
import { CompareContextProvider } from './Contexts/compareContext.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import { CartContextProvider } from './Contexts/shoppingCartContext.jsx';
import { SearchProvider } from './Contexts/searchContext.jsx';
export default function App() {

  return <div className='backgroundMain'>
    <SearchProvider>
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
    </SearchProvider>
  </div>
}