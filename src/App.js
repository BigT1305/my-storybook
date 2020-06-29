import React from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>My App</Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Button>Hello Storybook!</Button>
        </p>
      </div>
  );
}

export default App;
