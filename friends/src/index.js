import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithRouter from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);
