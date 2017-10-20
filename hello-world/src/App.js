import React, { Component } from 'react';
import Hello from './hello';
import World from './world';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <Hello /> <World />
        </h1>
      </div>
    );
  }
}

export default App;
