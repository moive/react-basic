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
import Post from './Routes/Post';
import UserProvider from './context/UserProvider';
import Dashboard from './Routes/Dashboard';
import RequireAuth from './Components/RequireAuth';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={<App/>}>
						<Route index element={<Home />} />
						<Route path="Blog" element={<Blog />} />
						<Route path="Blog" element={<Blog />} />
						<Route path="Blog/:id" element={<Post />} />
						<Route path="RickAndMorty" element={<RickAndMorty />} />
						<Route path="Contact" element={<Contact />} />
						<Route path="Dashboard" element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						} />
						<Route path="*" element={<NotFound />} />
						
					</Route>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
