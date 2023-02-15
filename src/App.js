
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Sobre from './pages/sobre';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

    <Routes>
      <Route path='/sobre' element={<Sobre />}/>
    </Routes>

    </BrowserRouter> 
  )
}

export default App;
