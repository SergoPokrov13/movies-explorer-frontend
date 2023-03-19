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

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [myMovies, setMyMovies] = useState([]);
  const [updateUserMessage, setUpdateUserMessage] = useState('');

  const history = useHistory();

  console.log(loggedIn, currentUser)

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
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies()
        .then(data => {
          setMyMovies(data)
        })
        .catch(console.log);
    }
  }, [loggedIn]);

  function handleRegister({ name, email, password }) {
    mainApi.signup({ name, email, password })
      .then(data => {
        setCurrentUser(data);
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
        setLoggedIn(true);
        setCurrentUser(data);
        console.log(data);
        history.push('/movies');
        mainApi.getUserInfo()
        .then(user => {
          if (user) {
            setCurrentUser(user);
            setLoggedIn(true);
          }
        })
      })
      .catch(err => {
        console.log(err)
      });
  }

  function handleSignout() {
    mainApi.signout()
      .then(data => {
        setLoggedIn(false);
        history.push('/');
      })
      .catch(err => {
        console.log(err)
      });
  }

  function handleSaveMovie(movieData) {
    mainApi.saveMovie(movieData)
      .then(data => setMyMovies([...myMovies, data]))
      .catch(console.log);
    console.log('SAVE', movieData);
  }

  function handleRemoveMovie(movieData) {
    let id;
    if (movieData['_id']) {
      id = movieData['_id'];
    } else {
      id = myMovies.find(item => item.movieId === movieData.id)['_id'];
    }
    console.log('REMOVE', id);
    mainApi.removeMovie(id)
      .then(res => {
        setMyMovies(myMovies.filter(item => item['_id'] !== res['_id']))
      })
      .catch(console.log);
  }

  function handleUpdateUser(data) {
    mainApi.updateUser(data)
      .then(res => {
        setCurrentUser(res);
        setUpdateUserMessage('Данные успешно обновлены!')
      })
      .catch(err => {
        console.log(err);
        setUpdateUserMessage('Ошибка обновления данных!')
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
        <Main login={loggedIn} />
        </Route>

        <ProtectedRoute
             path="/movies"
             component={Movies}
             loggedIn={loggedIn}
             onSaveMovie={handleSaveMovie}
             onRemoveMovie={handleRemoveMovie}
             myMovies={myMovies}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              myMovies={myMovies}
              onRemoveMovie={handleRemoveMovie}
            />
        
        <ProtectedRoute
              exact
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              onSignout={handleSignout}
              onUpdate={handleUpdateUser}
              message={updateUserMessage}
          />

           <Route exact path="/">
              <Main loggedIn={loggedIn} />
            </Route>

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
