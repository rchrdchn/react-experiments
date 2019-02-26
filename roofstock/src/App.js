import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import RoofContainer from './components/mainContainer';
import './App.css';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<Switch>
			    <div className="App">
					<RoofContainer />
			    </div>
		    </Switch>
	    </BrowserRouter>
    );
  }
}

export default App;
