import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
