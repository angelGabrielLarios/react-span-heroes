import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context"


export const Navbar = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {
        logout()
        navigate('/login', {
            replace: true
        })

    }

    return (

        <nav className="bg-blue-950  border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to={'/marvel'} className={({ isActive }) => `block py-2 pl-3 pr-4 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'active' : ''}`}>Marvel</NavLink>
                        </li>

                        <li>
                            <NavLink to={`/dc`} className={({ isActive }) => `block py-2 pl-3 pr-4 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'active' : ''}`}>DC</NavLink>
                        </li>

                        <li>
                            <NavLink to={`/search`} className={({ isActive }) => `block py-2 pl-3 pr-4 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'active' : ''}`}>Search</NavLink>
                        </li>


                    </ul>
                </div>


                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <span href="#" className="block py-2 pl-3 pr-4  rounded md:border-0  md:p-0 text-cyan-500">
                                {
                                    user?.name
                                }
                            </span>
                        </li>

                        {/* <li>
                            <Link to={`/login`} className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log Out</Link>
                        </li> */}

                        <button
                            className='block py-2 pl-3 pr-4 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                            onClick={onLogout}
                        >
                            Logut
                        </button>


                    </ul>
                </div>
            </div>
        </nav>

    )
}
