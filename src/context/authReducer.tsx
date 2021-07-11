import { authInitialState, AuthState } from "./AuthContext";

type AuthAction = {
    type: 'signIn'
}

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
            break;
    
        default:
            break;
    }
        return state
}