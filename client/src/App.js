import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './Componentes/Inicio';

//ACÁ ABAJO LO QUE HAGO ES RENDERIZAR LOS COMPONENTES SEGUN SU RUTA
//hago el ruteo

// envuelvo todo en browserRouter
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      {/* Con el Routes envuelvo cada ruta, para moverme entre esas rutas */}
    <Routes>
      <Route exact path="/" element={<Inicio/>} />
      
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
