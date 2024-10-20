import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeContext, { ThemeProvider } from './context/ThemeContext';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ isDarkMode }) => (
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
              <Router>
                <Navbar title="NewsSide" />
                
                {/* Define Routes here */}
                <Routes>
                  <Route exact path="/" element={<News pagesize={20} category="india" />} />
                  <Route path="/sports" element={<News pagesize={20} category="sports" />} />
                  <Route path="/politics" element={<News pagesize={20} category="politics" />} />
                  <Route path="/entertainment" element={<News pagesize={20} category="entertainment" />} />
                  <Route path="/serials" element={<News pagesize={20} category="serials" />} />
                </Routes>

                {/* Footer stays at the bottom */}
                <Footer />
              </Router>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}
