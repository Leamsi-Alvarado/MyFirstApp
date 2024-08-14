import { useState } from "react"
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {

    const authState = useAuthStore(state => state.status)
    const login = useAuthStore(state => state.login)
    const logout = useAuthStore(state => state.logout)
    const user = useAuthStore(state => state.user)

    useState(() => {
        setTimeout(() => {
            logout();
        }, 1500)
    })

    if (authState === 'checking') return <h3>Loading...</h3>
    return (
        <>
            <h3>Login Page</h3>
            {
                (authState === 'authorized') ? <div>Autorizado como {JSON.stringify(user, null, 2)}</div> :
                    <div>No auth</div>
            }

            {
                (authState === 'authorized') ? <button onClick={logout}>Logout</button>:
                <button onClick={() => login('fernando@hotmail.com', '1234')}>Login</button>
            }
        </>
    )
}
