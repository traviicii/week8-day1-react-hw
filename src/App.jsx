import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ToDoList from './views/ToDoList';
import Signin from './views/Signin';
import Cart from './views/Cart';
import Signup from './views/Signup';
import SingleProduct from './views/SingleProduct';


const getUserFromLocalStorage = () => {
  const found = localStorage.getItem('user')
  if ( found ) {
    return JSON.parse(found)
  }
  return {}
}

export default function App() {

  const [user, setUser] = useState(getUserFromLocalStorage)
  const [cart, setCart] = useState([])

  const getCartSize = (cart) => {
    let size = 0
    for (let item of cart){
      size += 1
    }
    return size
  }

  const getTotal = (cart) => {
    let total = 0
    for (let item of cart) {
      total += parseFloat(item.price)
    }
    return total.toFixed(2)
  }

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  useEffect(() => { getCart() }, [user])

  const getCart = async () => {
    if (user.apitoken) {
      const res = await fetch('http://127.0.0.1:8000/api/cart', {
        headers: { Authorization: `Bearer ${user.apitoken}` }
      });
      const data = await res.json();
      if (data.status === 'ok') {
        setCart(data.cart)
      }
    }
    else {
      setCart([])
    }
  }

  const removeFromCart = (item) => {
    const copy = [...cart]
    for (let i = cart.length - 1; i >= 0; i--) {
      if (item.id === cart[i].id) {
        copy.splice(i, 1)
        break
      }
    }
    setCart(copy)
  }

  const logMeIn = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const logMeOut = () => {
    setUser({})
    localStorage.removeItem('user')
  }

  return (
    <div>
      <Navbar user={user} logMeOut={logMeOut} routecart={cart} getTotal={getTotal} getCartSize={getCartSize} />
      <Routes>
        <Route path='/' element={<Home user={user} cart={cart} addToCart={addToCart} />} />
        <Route path='/todolist' element={<ToDoList user={user} />} />
        <Route path='/signin' element={<Signin logMeIn={logMeIn} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart user={user} removeFromCart={removeFromCart} cart={cart} />} />
        <Route path='/singleproduct/:productid' element={<SingleProduct addToCart={addToCart} user={user}/>} />
      </Routes>
      App is always here because it encompasses everything. This could be a footer.
    </div>
  )
}

