import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index'
import Login from './pages/login'
import Productos from './pages/productos';
import ShowItem from './pages/item';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/producto" element={<ShowItem/>}/>
        <Route path="*" element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
