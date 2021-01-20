import './App.css';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Pages from './components/Pages'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="main-container">
          <Pages />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
