//import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import About from './about/about.jsx'
import Novelties from './novelties/novelties.jsx'
import './index.css'
import Section1 from './Section1/section1.jsx'
import Promotions from './promotions/promotions.jsx'
import Partners from './partners/partners.jsx'
import Info from './info/info.jsx'
import Footer from './footer/footer.jsx'
//import Test from './test.jsx'
/* import SimpleCarousel from './slicSlider/SlicSlider.jsx' */

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    // <React.StrictMode>
    <>
      <Section1 />
      <div className='backgroundMain'>
        <About />
        <Novelties />
        <Promotions />
        <Partners />
        <Info />
        <Footer />
      </div>
    </>);
//</React.StrictMode>);