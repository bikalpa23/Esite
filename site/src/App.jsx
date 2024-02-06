import './App.css'
import Shop from './Pages/Shop'
import Navbar from './components/Navbar/Navbar'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
