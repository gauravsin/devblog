import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import blogData from './blogData';

class App extends Component {
  render() {
    return (
      <div id="main">
        <div id="header">
          <Header blogData={blogData}></Header>
        </div>
        <div id="content">
          <Content></Content>
        </div>
        <div id="footer">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
