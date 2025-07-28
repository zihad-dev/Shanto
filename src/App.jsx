
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './layout/Layout'
import Home from './page/Home'

function App() {

  return (
    <>
 <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
