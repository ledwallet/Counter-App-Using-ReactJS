import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  incrementCount = () =>{
    this.setState({
       count: this.state.count + 1
    })
  }

  resetCount = () => {
    this.setState({
      count: this.state.count = 0
  })
}

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
  })
  }



  render() {
    let { count } = this.state;
    return(
      <div>
      <h1 className = "Heading">Counter App Using ReactJS</h1>
      <div className = "Box">
        <h2>{count}</h2>
        <div className = "btn">
        <Button title = "+"    task = { () =>  this.incrementCount()}  />
        <Button title = ">>"    task = { () =>  this.resetCount()} />
        <Button title = "-"   task = { () =>  this.decrementCount()} />
        </div>
      </div>
      </div>
    )
  }
}

export default App;
