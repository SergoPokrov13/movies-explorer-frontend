import React from 'react';
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute"
import Main from "./Component/Main/Main.js"
import Movies from "./Component/Movies/Movies.js";
import SavedMovies from "./Component/SavedMovies/SavedMovies.js";
import Register from "./Component/Register/Register.js";
import Login from "./Component/Login/Login.js";
import Profile from "./Component/Profile/Profile.js";

function App() {
  return (
    <div className="App">
      <div className="page">
      <div className="root">
        <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies/>
        </Route>

        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>
        
        <Route path="/profile">
          <Profile/>
        </Route>

        <Route path="/signup">
          <Register/>
        </Route>

        <Route path="/signin">
          <Login/>
        </Route>
        </Switch>
      </div>
      </div>
    </div>
  );
}

export default App;
