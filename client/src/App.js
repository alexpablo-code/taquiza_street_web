import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import StoreManager from './components/StoreManager';
import {useState} from 'react';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  const [allProducts, setAllProducts] = useState([]);


  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store-manager'>
          <Route index element={<StoreManager allProducts ={allProducts} setAllProducts={setAllProducts}/>} />
          <Route path='addproduct' element={<AddProduct/>} />
          <Route path='editproduct/:id' element={<EditProduct/>} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
