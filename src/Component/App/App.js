import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import CurrentUserContext from '../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Main from "../Main/Main.js"
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import Page404 from '../Page404/Page404.js';
import mainApi from '../../utils/MainApi';
import { useEffect, useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isReady, setIsReady] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsReady(false);
    mainApi.getUserInfo()
      .then(user => {
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
        }
      })
      .catch(console.log)
      .finally(() => setIsReady(true));
  }, [loggedIn]);

  function handleRegister({ name, email, password }) {
    mainApi.signup({ name, email, password })
      .then(data => {
        console.log(data);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        console.log(err)
      });
  }

  function handleLogin({ email, password }) {
    mainApi.signin({ email, password })
      .then(data => {
        console.log(data);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        console.log(err)
      });
  }

  function handleSignout() {
    mainApi.signout()
      .then(data => {
        console.log(data);
        setLoggedIn(false);
        history.push('/');
      })
      .catch(err => {
        console.log(err)
      });
  }


  return (
    <div className="App">
      <div className="page">
      <div className="root">
      {isReady
       ? <CurrentUserContext.Provider value={currentUser} >
        <Switch>
        <Route exact path="/">
        <Main loggedIn={loggedIn} />
        </Route>

        <ProtectedRoute
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
            />
        
        <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onSignout={handleSignout}
          />

        <Route path="/signup">
        <Register onRegister={handleRegister} />
        </Route>

        <Route path="/signin">
        <Login onLogin={handleLogin} />
        </Route>

        <Route path="*">
          <Page404/>
        </Route>
        </Switch>
      </CurrentUserContext.Provider>
              : ''
      }
      </div>
      </div>
    </div>
  );
}

export default App;
