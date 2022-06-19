import React from 'react';
import './App.css';
import { MyButton } from './MyButton';

export interface IAppProps {};
class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
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
