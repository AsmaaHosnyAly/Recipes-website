import './App.css'
import Home from './pages/site/home/home'
import Nav from './components/site/nav/Nav'
import Footer from './components/site/footer/Footer'
import Filter from './pages/site/filter/filter'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecipeDetails from './pages/site/recipeDetails/recipeDetails'

import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { setUser } from './redux/actions/authAction'
import UserRout from './components/site/UserRout/UserRout'
import Login from './pages/site/login/login'
import Signup from './pages/site/signup/signup'
import Profile from './pages/site/profile/profile'
import React, { useEffect } from 'react'
import { store } from './redux/store'

function App() {
  const dispatch = useDispatch()
  // I made to sure if their user set hem not rediracte to login page
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Signup} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/filter' component={Filter} />
          <Route exact path='/:id' component={RecipeDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
