import React from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/index'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';
import './App.css';

function App() {
  return (
    <CssBaseline> 
      <Route exact path='/' component={Home} />
      <Route exact path='/experiences' component={Experiences} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/resume' component={Resume} />
    </CssBaseline>
  );
}

export default App;
