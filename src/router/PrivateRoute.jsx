import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../context'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)

    const { pathname, search } = useLocation()
    const lasthPath = pathname + search

    localStorage.setItem('lastPathA', lasthPath)


    return (
        logged
            ? children
            : <Navigate to={`/login`} />
    )
}


PrivateRoute.propTypes = {
    children: PropTypes.any
}
