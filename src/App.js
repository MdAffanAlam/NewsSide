import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <Router>
          <Navbar title="NewsSide" />
          
          {/* Define Routes here */}
          
            <Routes>
              <Route exact path="/" element={<News pagesize={20} category="general" />} />
              <Route path="/sports" element={<News pagesize={20} category="sports" />} />
              <Route path="/politics" element={<News pagesize={20} category="politics" />} />
              <Route path="/entertainment" element={<News pagesize={20} category="entertainment" />} />
              <Route path="/serials" element={<News pagesize={20} category="serials" />} />
            </Routes>
      

          {/* Footer stays at the bottom */}
          <Footer />
        </Router>
    
    );
  }
}
