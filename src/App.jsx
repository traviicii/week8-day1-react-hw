import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ToDo from './views/ToDo';
import Signin from './views/Signin';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ToDo' element={<ToDo />} />
          <Route path='/SignIn' element={<Signin/>} />
        </Routes>
        App is always here because it encompasses everything
        </div>
    )
  }
}
