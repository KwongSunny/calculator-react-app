import React, {Component} from 'react';

class DisplayBlock extends Component {
  
  ShowDisplay = (first, second, op) => {
    if(first === '')
      return '0';
    if(first !== '' && op === '')
      return first;
    if(first !== '' && op !== '' && second === '')
      return first + ' ' + op;
    if(first !== '' && op !== '' && second !== '')
      return first + ' ' + op + ' ' + second;  
  }
  
  render() {
    let firstNum = this.props.firstNum;
    let secondNum = this.props.secondNum;
    let operation = this.props.operation;

    let value = this.ShowDisplay(firstNum, secondNum, operation)

    return (
      <div>
          <h1 className = 'display' style = {displayStyle}>{value}</h1>
      </div>
    );
  }

}

const displayStyle = {
  textAlign: 'right',
  background: '#333',
  marginTop: '10px',
  paddingRight: '5px',
  paddingLeft: '5px',
  color: 'white'
}

export default DisplayBlock;
