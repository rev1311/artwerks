import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import Routes from './components/Routes';
import Nav from './components/Nav';

function App() {
  return (
      <div className="App">
        <LoginPage />
        <Nav />
      </div>
  );
}

export default App;
