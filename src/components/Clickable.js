import React, {Component} from 'react';
import * as styles from './Clickable.module.css'

class Clickable extends Component {
  render() {
    const value = this.props.value;
    return (
       <button className={styles.button} onClick = {this.props.input.bind(this, value)}>
         {this.props.value}
       </button>
    );
  }

}

// const buttonStyle = {
//     display: 'inline-block',
//     width: '20%',
//     height: '30px',
//     textAlign: 'center',
//     background: '#666',
//     border: '2px solid black',
//     margin: '5px 5px 0px 5px'
// }

export default Clickable;
