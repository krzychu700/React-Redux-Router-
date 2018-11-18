import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import Router from './components/Router';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
