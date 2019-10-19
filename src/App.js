import React from 'react';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Home from './pages/homePage.js';
import ColorPage from './pages/colorPage.js';
import FontsPage from './pages/fontsPage.js';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

let HomePage = () => <Home page="home"/>;
let MainPage = () => <ColorPage page="Main"/>;
let ExtraPage = () => <FontsPage page="extra"/>;

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/fonts" component={ExtraPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/extra" component={ExtraPage} />
          <Route path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
