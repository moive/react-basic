import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RickAndMorty from './Components/RickMorty/RickAndMorty';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './Components/Home';
import Contact from './Components/Contact';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}>
					<Route index element={<Home />} />
					<Route path="RickAndMorty" element={<RickAndMorty />} />
					<Route path="Contact" element={<Contact />} />
					
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
