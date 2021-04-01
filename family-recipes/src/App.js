import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import PrivateRoute from './Pages/PrivateRoute'
import Dashboard from './Pages/Dashboard/Dashboard'
import LoginPage from './Pages/Login_Register/LoginPage'
import RecipeEntry from './Pages/recipeForm/RecipeEntry'

function App() {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <Router>
      <Switch>
        {/* if signed in render dashboard else render login page */}
        <Route path="/login">
          {signedIn ? (
            <PrivateRoute path="/dashboard">
              <Dashboard signedIn={signedIn} signIn={setSignedIn} />
            </PrivateRoute>
          ) : (
            <LoginPage signedIn={signedIn} signIn={setSignedIn} />
          )}
        </Route>

        {/* dashboard */}
        <PrivateRoute path="/dashboard">
          <Dashboard signedIn={signedIn} signIn={setSignedIn} />
        </PrivateRoute>

        {/* new recipe */}
        <Route path="/newrecipe">
          <RecipeEntry />
        </Route>

        {/* marketing page */}
        <Route path="/">
          <Link to="/login">Test</Link>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
