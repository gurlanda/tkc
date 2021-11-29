import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Survey from './components/pages/Survey';
import Demo from './components/dexie-demo/DexieDemo';
import NotFound from './components/pages/NotFound';

import SurveyState from './context/survey/SurveyState';

function App() {
  return (
    <SurveyState>
    <Router>
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/survey' component={Survey} />
            <Route exact path='/demo' component={Demo} />
            <Route component={NotFound} />
          </Switch>
      </div>
    </Router>
    </SurveyState>
  );
}

export default App;
