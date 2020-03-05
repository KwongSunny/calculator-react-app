import React, {Component} from 'react';
import Styles from './App.module.css'
import DisplayBlock from './components/DisplayBlock'
import Clickable from './components/Clickable';

class App extends Component {

  state = {
    firstNum : '',
    secondNum : '',
    operation : '',
    secondOperation: '',
    

  }

  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '.'];

  input = (value) => {
      if(value === '=' && this.state.secondNum === '')
      {
        this.setState({firstNum: this.state.firstNum})
        this.setState({secondNum: ''})
        this.setState({operation: ''})
        this.setState({secondOperation: ''})
      }
      else if(value === 'Clear')
      {
        this.setState({firstNum: ''})
        this.setState({secondNum: ''})
        this.setState({operation: ''})
        this.setState({secondOperation: ''})
      }
      else if(value === 'del')
      {
        if(this.state.firstNum !== '' && this.state.operation === '' && this.state.secondNum === '')
        {
          this.setState({firstNum: this.state.firstNum.substring(0, this.state.firstNum.length-1)})
        }
      }
      else
      {
        if(this.numbers.includes(value) && this.state.operation === '')
        {
          this.setState({firstNum: this.state.firstNum + value})
        }
        if(!this.numbers.includes(value) && this.state.firstNum !== '')
        {
          this.setState({operation: value})
        }
        if(this.numbers.includes(value) && this.state.operation !== '')
        {
          this.setState({secondNum: this.state.secondNum + value})
        }
        if(!this.numbers.includes(value) && this.state.firstNum !== '' && this.state.secondNum !== '' && this.state.operation !== '' && this.state.secondOperation === '')
        {
          let secondOperation = value
          if(this.state.operation === '+')
          {
            this.setState({firstNum:  parseFloat(this.state.firstNum) + parseFloat(this.state.secondNum)})
          }
          if(this.state.operation === '-')
          {
            this.setState({firstNum: parseFloat(this.state.firstNum) - parseFloat(this.state.secondNum)})
          }
          if(this.state.operation === 'x')
          {
            this.setState({firstNum:  parseFloat(this.state.firstNum) * parseFloat(this.state.secondNum)})
          }
          if(this.state.operation === '/')
          {
            this.setState({firstNum:  parseFloat(this.state.firstNum) / parseFloat(this.state.secondNum)})
          }
          if(this.state.operation === '%')
          {
            this.setState({firstNum:  parseFloat(this.state.firstNum) % parseFloat(this.state.secondNum)})
          }

          this.setState({secondNum: ''})
          if(secondOperation === '=')
            this.setState({operation: ''})
          else
            this.setState({operation: secondOperation})
          this.setState({secondOperation: ''})
        }
      }


  }

  render() {
    return (
      <div className = {Styles.div}>
        <DisplayBlock 
            firstNum = {this.state.firstNum} 
            secondNum = {this.state.secondNum} 
            operation = {this.state.operation} 
        >0</DisplayBlock>
        <h1 className = {Styles.buttonRow}>
          <Clickable value = 'Clear'  input = {this.input}></Clickable>
          <Clickable value = '/'      input = {this.input}></Clickable>
          <Clickable value = '%'      input = {this.input}></Clickable>
          <Clickable value = 'del'    input = {this.input}></Clickable>
        </h1>
        <h1 className = {Styles.buttonRow}>
          <Clickable value = '1'      input = {this.input}></Clickable>
          <Clickable value = '2'      input = {this.input}></Clickable>
          <Clickable value = '3'      input = {this.input}></Clickable>
          <Clickable value = '+'      input = {this.input}></Clickable>
        </h1>
        <h1 className = {Styles.buttonRow}>
          <Clickable value = '4'      input = {this.input}></Clickable>
          <Clickable value = '5'      input = {this.input}></Clickable>
          <Clickable value = '6'      input = {this.input}></Clickable>
          <Clickable value = '-'      input = {this.input}></Clickable>
        </h1>
        <h1 className = {Styles.buttonRow}>
          <Clickable value = '7'      input = {this.input}></Clickable>
          <Clickable value = '8'      input = {this.input}></Clickable>
          <Clickable value = '9'      input = {this.input}></Clickable>
          <Clickable value = 'x'      input = {this.input}></Clickable>
        </h1>
        <h1 className = {Styles.buttonRow}>
          <Clickable value = '00'     input = {this.input}></Clickable>
          <Clickable value = '0'      input = {this.input}></Clickable>
          <Clickable value = '.'      input = {this.input}></Clickable>
          <Clickable value = '='      input = {this.input}></Clickable>
        </h1>

      </div>
    );
  }
}

export default App;
