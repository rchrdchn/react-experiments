import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Application from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('root'));
registerServiceWorker();
