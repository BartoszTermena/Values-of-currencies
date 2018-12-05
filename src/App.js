import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Values from './components/dashboard/Values';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="App">
      
       <Values />
      </div>
      </div>
    );
  }
}

export default App;
