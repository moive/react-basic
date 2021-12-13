import NavBar from '../Components/NavBar';
import Home from "../Components/Home";
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<>
			<NavBar/>
			<div className="container">
				<Outlet/>
			</div>
		</>
	)
}

export default App
