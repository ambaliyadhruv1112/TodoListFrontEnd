import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './component/Product/AddProduct.js';
import ListOfProduct from './component/ListOfProduct';
import EditProductContainer from './component/Product/EditProduct.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<ListOfProduct />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProductContainer />} />
      </Routes>
    </div>
  );
}

export default App;
