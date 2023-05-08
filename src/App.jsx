import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ToDoList from './views/ToDoList';
import Signin from './views/Signin';
import Signup from './views/Signup';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  logMeIn = (user) => {
    this.setState({user: user})
  }

  logMeOut = () => {
    this.setState({user: {}})
  }

  isLoggedIn = () => {}


  render() {
    return (
      <div>
        <Navbar  user={this.state.user} logMeOut={this.logMeOut} isLoggedIn={this.isLoggedIn}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/signin' element={<Signin logMeIn = {this.logMeIn}/>} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
        App is always here because it encompasses everything. This could be a footer.
        </div>
    )
  }
}
