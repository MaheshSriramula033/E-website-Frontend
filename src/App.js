
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Images/banner_mens.png'
import women_banner from './Components/Images/banner_women.png'
import kids_banner from './Components/Images/banner_kids.png'
import ShopContextProvider from './Context/ShopContext.jsx';

function App() {
  return (
    <div >
      <BrowserRouter>
      <ShopContextProvider>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategory banner={men_banner}category="men"/>}/>
    <Route path='/women' element={<ShopCategory banner={women_banner}category="women"/>}/>
    <Route path='/kids' element={<ShopCategory banner={kids_banner}category="kid"/>}/>
    <Route path='/Product' element={<Product/>}>
    <Route path=':ProductId' element={<Product/>}/>
    </Route>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>
   <Footer/>
   </ShopContextProvider>
   </BrowserRouter>
    </div>
  );
}

export default App;
