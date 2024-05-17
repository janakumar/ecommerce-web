import './App.css';
import Nav from './component/Nav/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { Shopcategory } from './pages/Shopcategory';
import { Cart } from './pages/Cart';
import { Loginsignup } from './pages/Loginsignup.';
import { Product } from './pages/Product';
import mens_banner from './component/Assets/banner_mens.png'
import women_banner from './component/Assets/banner_women.png'
import kid_banner from './component/Assets/banner_kids.png'
import { Footer } from './component/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/MENS' element={<Shopcategory banner={mens_banner} category="men"/>}/>
        <Route path='/WOMENS' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/KIDS' element={<Shopcategory  banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/CART' element={<Cart/>}/>
        <Route path='/LOGIN' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
