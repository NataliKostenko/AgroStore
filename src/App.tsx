import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './about/about.js'
import PartnersPage from './partnersPage/partnersPage.js'
import Header from './header/header';
import Home from './homePage.js';
import './index.css'
import Footer from './footer/footer.js';
// import Breadcrumbs from './breadcrumbs.js';

export default function App() {
  return <><div className='backgroundMain'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} handle={<Link to='/'>Home</Link>} />
        <Route path="/about" element={<About />} /*handle={<Link to='/about'>About</Link>}*/ />
        <Route path="/partners" element={< PartnersPage url={"../../partnersPage.json"} />} /*handle={<Link to='/partners'>Partners</Link>}*/ />
      </Routes>
      {/* <Breadcrumbs /> */}
      <Footer />
    </BrowserRouter>
  </div>
  </>
}


