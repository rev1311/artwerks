import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
      <Nav />
    </Router>
  );
}

export default App;
