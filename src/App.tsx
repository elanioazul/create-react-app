import React from 'react';
import './App.css';
import { MyButton } from './MyButton';
class App extends React.Component {
  render() {
    return (
      <MyButton
        buttonName='Click here'
        handleButtonClick={this.handleClick}
      ></MyButton>
    )
  }
  handleClick() {
    console.log(`App handling the click , youh!`)
  }
}

export default App;
