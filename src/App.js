import React, {Component} from 'react';
import Jumbotron from "./components/Jumbotron";
import MainContainer from "./components/MainContainer";
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
          <Jumbotron/>
          <MainContainer/>
    </div>

  );
}}

export default App;
