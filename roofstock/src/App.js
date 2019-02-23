import React, { Component } from 'react';
import RoofContainer from './components/container';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
	    <div className="App">
	    	<Navbar />
			<RoofContainer />
	    	<Footer />
	    </div>
    );
  }
}

export default App;
