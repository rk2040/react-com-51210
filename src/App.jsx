import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import PaginaHome from './components/PaginaHome/PaginaHome';
import PaginaEnConstruccion from './components/PaginaEnConstruccion/PaginaEnConstruccion';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CarritoProvider } from './context/CarritoContext';

import Productos from './components/Productos/Productos';



function App() {
  return (
    <>

    <BrowserRouter>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <PaginaHome/> }/>
          
          {/* <Route path='/' element={ <Productos/> }/> */}
          
          <Route path='/tienda' element={ <ItemListContainer/> }/>
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>  {/* cambiar por path=/'Checkout' */}
          <Route path='/*' element={ <PaginaEnConstruccion/> }/> 
        </Routes>
      </CarritoProvider>  
    </BrowserRouter>
    </>
  );
}

export default App;
