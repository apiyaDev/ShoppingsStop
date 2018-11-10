import React, { Component } from 'react';
import Grocery from './componets/Grocery';
import ShoppingBag from './componets/ShoppingBag';
import Stats from './componets/Stats';
import PacketMoney from './componets/PacketMoney';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron text-center">
            <h1>Shoppers Stop</h1>
            <p>Welcome To The Best Online Shopping Website</p>
          </div>        
          <div className="row">
            <PacketMoney />
            <Grocery /> 
            <ShoppingBag /> 
            <Stats /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
