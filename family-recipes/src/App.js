import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './Pages/Login_Register/LoginPage'
import Dashboard from './Pages/Dashboard/Dashboard'
import { useState } from 'react'


import React from 'react'
import RecipeEntry from './recipeForm/RecipeEntry'
import PrivateRoute from './Pages/PrivateRoute'

function App() {
  const [signedIn, setSignedIn] = useState(false)


  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/">
          <LoginPage signedIn={signedIn} signIn={setSignedIn} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
