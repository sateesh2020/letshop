import React, { Component } from 'react';
import './App.css';
import Header from './core/Header';
import Shell from './core/Shell';
import Footer from './core/Footer';


class App extends Component {
  render() {
    return (
      <section className="container-fluid">
        <Header></Header>
        <Shell></Shell>
        <Footer></Footer>
      </section>
    );
  }
}

export default App;
