import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Aux from '../hoc/Aux/Aux';
import './App.css';
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import Home from '../components/Home/Home';
import About from '../components/About/About'


const App = () => {
    return (
      <Aux>
        <div className="App">
          <Header />
          <Navigation />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </Aux>
    );
}

export default App;
