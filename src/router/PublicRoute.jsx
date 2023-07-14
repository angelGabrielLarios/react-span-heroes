import { useContext } from "react"
import { AuthContext } from "../context"
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)
    return (
        !logged
            ? children
            : <Navigate to={`/marvel`} />
    )
}

PublicRoute.propTypes = {
    children: PropTypes.any
}