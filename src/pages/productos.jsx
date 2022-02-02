import Container from '../components/productos/container';
import NavBar from '../components/nav/container';
import Categorias from '../components/categorias/container'
import { useState } from 'react';
const Productos = () =>{
    const [categoria, setCategoria] = useState('electronics'),
        [rated, setRated] = useState(1);

    return (
        <div className="App">
          <NavBar/>
          <Categorias 
            setCategoria={setCategoria} 
            setRated={setRated}/>
          <Container categoria={categoria} rated={rated}/>
        </div>
    );
}

export default Productos;