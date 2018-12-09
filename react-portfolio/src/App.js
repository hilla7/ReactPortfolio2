import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Header className="header" />
    <Router>
      <React.Fragment>
        <Main className="main" />
        <Sidebar className="sidebar" />
      </React.Fragment>
    </Router>
  </div>
);

export default App;