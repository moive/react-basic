import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './Routes/App';
import Home from './Components/Home';
import Contact from './Routes/Contact';
import Blog from './Routes/Blog';
import RickAndMorty from './Routes/RickAndMorty';
import NotFound from './Routes/NotFound';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}>
					<Route index element={<Home />} />
					<Route path="/Blog" element={<Blog />} />
					<Route path="/RickAndMorty" element={<RickAndMorty />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
					
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
