import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import About from './about/about.js'
import Novelties from './novelties/novelties.js'
import './index.css'
import Section1 from './Section1/section1.js'
import Promotions from './promotions/promotions.js'
import Partners from './partners/partners.js'
import Info from './info/info.js'
import Footer from './footer/footer.js'
//import Test from './test.jsx'
/* import SimpleCarousel from './slicSlider/SlicSlider.jsx' */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Section1 />
    <div className='backgroundMain'>
      <About />
      <Novelties />
      <Promotions />
      <Partners />
      <Info />
      <Footer />
    </div>
  </React.StrictMode>);