import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/> }/>
        <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
        <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
        <Route path='*' element={ <div className='contenedorConstruccion'> 
          <h2 className='sitioEnContruccion'>Sitio en Construcción</h2> 
          <img className='imgEnConstruccion' src="https://static.vecteezy.com/system/resources/previews/000/192/096/original/vector-website-under-construction.png" alt="Sitio en Construccion" />
          </div>}/>

      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
