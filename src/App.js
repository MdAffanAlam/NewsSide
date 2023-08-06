
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';



import React, { Component } from 'react'
import Footer from './components/Footer';


export default class App extends Component {
  render() {
    return (
      <div>   <>
      <Navbar title="NewsSide"/>
       <News pagesize={8}/>
       <Footer/>
     </></div>
    )
  }
}


