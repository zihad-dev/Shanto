import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './page/Home';
import About from './page/About';
import Process from './page/Process';
import Portfolio from './page/Portfolio';
import Blog from './page/Blog';

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
          </Route>
        </Routes>
      
    </>
  );
}

export default App;
