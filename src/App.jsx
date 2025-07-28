import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './page/Home';
import About from './page/About';

function App() {
  return (
    <>
      
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      
    </>
  );
}

export default App;
