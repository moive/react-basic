import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const Home = () => {
	const {user, signIn, signOut} = useContext( UserContext )

    return (
        <>
            <h1>Home</h1>
			<h2>{ user ? 'online' : 'offline'}</h2>
			{
				user ? (
					<button className="btn btn-primary" onClick={signOut}>Disconnect</button>
				) : (
					<button className="btn btn-primary" onClick={signIn}>Connect</button>
				)
			}
        </>
    )
}

export default Home
