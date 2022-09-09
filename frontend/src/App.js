// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Beaches from "./components/Beaches";
import BeachId from "./components/Beach";
import Home from "./components/Home";
import Footer from './components/Footer';
import ProfilePage from "./components/ProfilePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/signup" exact={true}>
            <SignupFormPage />
          </Route>
          <Route path="/beaches" exact={true}>
            <Beaches />
          </Route>
          <Route path='/beaches/:beachId' exact={true}>
            <BeachId />
          </Route>
          <Route path="/:username" exact={true}>
            <ProfilePage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
