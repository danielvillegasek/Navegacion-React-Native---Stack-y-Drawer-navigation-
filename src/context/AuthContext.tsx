// Definir como luce, que informacion tendre aqui

import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean
    username?: string
    favoriteIcon?: string
}

// Definir estado inicial

export const authInitialState: AuthState = {
    isLoggedIn: false
}


// lo usaremos ara decirle a react como luce y que expone
export interface AuthContextProps {
    authState: AuthState
    signIn: () => void
    logout: () => void
    changeFavoriteIcon: (iconName:string) => void
}

//Crear el contecto
export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavoriteIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout'})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn, //signIn: signIn
            logout,
            changeFavoriteIcon
        }}>
            {children}
        </AuthContext.Provider>
    )
}