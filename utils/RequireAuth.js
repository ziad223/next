import { Navigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const RequireAuth = ({children}) => {
    const {userName} = useAuth()
    if (!userName) {
        return <Navigate to= '/'/>
    }
    return children
}

export default RequireAuth