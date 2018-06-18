import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
      { name: "Rich", age: 10 },
      { name: "Chio", age: 11 }
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: "Richard", age: 15 },
        { name: "Chioyan", age: 16 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, new app here</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby: running</Person>
      </div>
    );
  }
}

export default App;
