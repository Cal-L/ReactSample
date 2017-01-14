import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props.firstName, props.lastName);

    this.state = {
      buttonPressed: false,
    };
  }

  // clickButton(event) {
  //   console.log("PRESSED BUTTON");
  // }

  onClickDown(event) {
    console.log("CLICK DOWN");
    this.setState({
      buttonPressed: true
    });
  }

  onClickUp(event) {
    console.log("CLICK UP");
    this.setState({
      buttonPressed: false
    });
  }

  render() {
    const buttonColor = this.state.buttonPressed ? "#3a6b94" : "#569cd6";
    const card = this.state.buttonPressed ? <Card /> : null;

    return (
      <div style={styles.container}>
        { card }
        <div 
          onMouseLeave={(event) => this.onClickUp(event)}
          onMouseDown={(event) => this.onClickDown(event)}
          onMouseUp={(event) => this.onClickUp(event)}
          // onClick={(event) => this.clickButton(event)} 
          style={{
            display: 'flex',
            height: 50,
            width: 100,
            borderRadius: 25,
            backgroundColor: buttonColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div 
            style={styles.text}>
            { 'HELLO' }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  button: {
    display: 'flex',
    height: 50,
    width: 100,
    borderRadius: 25,
    backgroundColor: '#569cd6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    userSelect: 'none',
    cursor: 'default',
  }
}

// var text = styles.text;
// var button = styles.button;

// var { text, button } = styles;

// console.log(text, button);

// function hello() {
//   return "hello";
// }

// console.log(hello());
