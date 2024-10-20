import React, { Component, createContext } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

export class ThemeProvider extends Component {
  state = {
    isDarkMode: false,  
  };

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ 
          isDarkMode: this.state.isDarkMode, 
          toggleTheme: this.toggleTheme 
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
