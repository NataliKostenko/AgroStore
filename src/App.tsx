import { Outlet } from "react-router-dom";
import Header from './header/header';
import './index.css'
import Footer from './footer/footer.js';
import Breadcrumbs from './breadcrumbs/breadcrumbs.js';

export default function App() {
  return <><div className='backgroundMain'>
    <Header />
    <Breadcrumbs />
    <Outlet />
    <Footer />
  </div>
  </>
}