import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Menu } from './pages/Menu'
import { Register } from './pages/Register'

import { cartProducts } from './stores/cart/cartSlice'

const App = () => {
  const productsInCart = useSelector(cartProducts)

  return (
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
