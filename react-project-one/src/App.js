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

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 15 },
        { name: "Chioyan", age: 16 }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Rich", age: 15},
        { name: event.target.value, age: 16}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, new app here</h1>
        <button onClick={this.switchNameHandler.bind(this, "Maximilian")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Max!")} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}>My hobby: running</Person>
      </div>
    );
  }
}

export default App;
