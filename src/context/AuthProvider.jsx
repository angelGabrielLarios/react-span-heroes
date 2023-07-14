import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'
import { useReducer } from 'react'
import { authReducer } from './authReducer'
import { types } from '../types'

const init = () => {
    const user = JSON.parse(
        localStorage.getItem('currentUser')
    )

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = "") => {
        const user = {
            id: 'ABC',
            name: name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('currentUser', JSON.stringify(user))

        dispatch(action)
    }


    const logout = () => {
        localStorage.removeItem('currentUser')
        const action = {
            type: types.logout
        }

        dispatch(action)
    }


    return (
        <AuthContext.Provider
            value={{
                ...authState,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


AuthProvider.propTypes = {
    children: PropTypes.element
}
