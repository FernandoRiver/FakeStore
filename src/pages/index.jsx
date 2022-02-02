import Container from '../components/productos/container';
import NavBar from '../components/nav/container';

function App() {
    return (
      <div className="App">
        <NavBar/>
        <Container categoria="" limit={25} rated={1}/>
      </div>
    );
  }
  
  export default App;
  