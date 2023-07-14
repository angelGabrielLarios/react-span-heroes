import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context"


export const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const onLogin = () => {

        const lasthPath = localStorage.getItem('lastPathA') || '/'
        login('Gabriel')

        navigate(lasthPath, {
            replace: true
        })
    }
    return (

        <>
            <div className="md:container mx-auto py-10">
                <h1 className="text-5xl font-bold mb-8">LoginPage</h1>
                <button
                    onClick={onLogin}
                    className="bg-blue-800 rounded-md font-bold px-8 py-2 text-white hover:bg-blue-600"
                >
                    Login
                </button>
            </div>
        </>
    )
}
