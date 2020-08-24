import React, { Component } from 'react';
import FirstComponent from './learning-examples/FirstComponent'
import OtherComponent from './learning-examples/OtherComponent'
import FunctionComponent from './learning-examples/FunctionComponent'
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
      
    );
  }
}

 class LearningComponent extends Component{
  render(){
    return(
       <div>  
      <FirstComponent></FirstComponent>
      <OtherComponent></OtherComponent>
      <FunctionComponent></FunctionComponent>
      </div>


    );

  }

}



export default App;
