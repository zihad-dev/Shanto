import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './page/Home';
import About from './page/About';
import Process from './page/Process';
import Portfolio from './page/Portfolio';
import Blog from './page/Blog';
import WorldPress from './page/navberPage/WorldPress';
import WIxSeo from './page/navberPage/WIxSeo';
import Squarespase from './page/navberPage/Squarespase';
import Joomla from './page/navberPage/Joomla';
import Magneto from './page/navberPage/Magneto';
import MoonFruit from './page/navberPage/MoonFruit';
import Weebly from './page/navberPage/Weebly';
import Webnode from './page/navberPage/Webnode.JSX';
import Shopify from './page/navberPage/Shopify';
import Walmart from './page/navberPage/Walmart';
import BigEcommerce from './page/navberPage/BigEcommerce';
import LinkBuilding from './page/navberPage/LinkBuilding';
import OnPage from './page/navberPage/OnPage';
import International from './page/navberPage/International';
import Technical from './page/navberPage/Technical';
import Generative from './page/navberPage/Generative';
import Aeo from './page/navberPage/Aeo';
import Geo from './page/navberPage/Geo';
import Sxo from './page/navberPage/Sxo';


function App() {
  return (
    <>
      
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Process" element={<Process/>} />
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/WordPress' element={<WorldPress/>} />
            <Route path='/WIxSeo' element={<WIxSeo/>} />
            <Route path='/Squarespase' element={<Squarespase/>} />
            <Route path='/joomla' element={<Joomla/>} />
            <Route path='/magneto' element={<Magneto/>} />
            <Route path='/moonfruit' element={<MoonFruit/>} />
            <Route path='/weebly' element={<Weebly/>} />
            <Route path='/webnode' element={<Webnode/>} />
            <Route path='/shopify' element={<Shopify/>} />
            <Route path='/walmart' element={<Walmart/>} />
            <Route path='/bigecommerce' element={<BigEcommerce/>} />
            <Route path='/linkbuilding' element={<LinkBuilding/>} />
            <Route path='/onpage' element={<OnPage/>} />
            <Route path='/international' element={<International/>} />
            <Route path='/technical' element={<Technical/>} />
            <Route path='/generative' element={<Generative/>} />
            <Route path='/aeo' element={<Aeo/>} />
            <Route path='/geo' element={<Geo/>} />
            <Route path='/sxo' element={<Sxo/>} />
          </Route>
        </Routes>
      
    </>
  );
}

export default App;
