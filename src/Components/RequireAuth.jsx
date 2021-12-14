import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const RequireAuth = ({children}) => {

    const {user} = useContext(UserContext)

    if (!user) {
        return <Navigate to="/" />
    }

    return children
}

export default RequireAuth
