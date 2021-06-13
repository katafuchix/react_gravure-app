import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './App.scss';
import DankMemes from "./Components/DankMemes";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import MoreDeets from "./Components/MoreDeets";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route //, Link
} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import PersonList from './Components/PersonList'
import GravureList from './Components/GravureList'
import AppDataStore from './stores/AppDataStore';

function App() {
  return (
    <AppDataStore.Container>
    <div className="App">
        <Router>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
              <Features />
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/deets" component={MoreDeets}>
            <MoreDeets />
          </Route>
          <Route path="/dankmemes" component={DankMemes}>
            <DankMemes />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/home">
              <Home />
          </Route>
          <Route path="/about-us">
              <About />
          </Route>
          <Route path="/contact-us">
              <Home />
          </Route>
          <Route path="/person">
              <PersonList />
          </Route>
          <Route path="/gravure">
              <GravureList />
          </Route>
        </Switch>
    </Router>
    </div>
    </AppDataStore.Container>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
