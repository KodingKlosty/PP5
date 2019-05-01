import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import PageSelect from './components/nav/nav';

class App extends Component {
  render() {
    return (
      <div className="App">

        <PageSelect />
        <Footer />
      </div>
    );
  }
}

export default App;
