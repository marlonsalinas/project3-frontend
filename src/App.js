import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import Nasa from "./pages/Nasa";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/astrocollection'>
          <Main />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/nasacollection'>
          <Nasa />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
