import './App.css'
import Navbar from './components/Navbar/Navbar'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import  Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSinup from './Pages/LoginSignup'
function App() {
  
  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
    
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/product'element={<Product/>}>
        <Route path=':productId' element={<Cart/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSinup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
