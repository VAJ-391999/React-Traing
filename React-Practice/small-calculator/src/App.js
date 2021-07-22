import React, {Component} from 'react';
import './App.css';
import Keypad from './CalculatorKeypad/CalulatorKeypad';
import Output from './CalculatorKeypad/Output';

class App extends Component {

  state = {
    result: '',
  }

  buttonPressedHandler = (event) => {
    let buttonName = event.target.name;

    if (buttonName === '=') {
      this.calculate();
    }
    else if(buttonName === 'C'){
        this.reset();
    }
    else if(buttonName === 'CE') {
        this.backspace();
    }
    else {
      console.log('clicked' + event.target.name);
      this.setState({ result: this.state.result + buttonName });
      //console.log('after' + this.state.result);
    }
    };
  
    reset = () => {
      this.setState({result: ''});
    };

    backspace = () => {
      this.setState({result: this.state.result.slice(0, -1)})
    }

  calculate = () => {
    try {this.setState({
      result: eval(this.state.result)
    });}catch(e) {
      this.setState({resuilt:"error"});
    }
  }

  render () {
    return (
      <div className="App">
        <h1>hi</h1>
        <div  className="calus-body">
        <Output results ={this.state.result} />
        <Keypad buttonPressed={this.buttonPressedHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
