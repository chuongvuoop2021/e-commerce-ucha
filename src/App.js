import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home-page/HomePage'
import ShopPage from './pages/shop-page/ShopPage'
import SignInUp from './pages/sign-in-up/SignInUp'
import Header from './components/header/Header'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
  )
}

export default App