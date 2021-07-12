import { authInitialState, AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'signIn' } |
    { type: 'logout' } |
    { type: 'changeFavoriteIcon', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
            break;
        case 'changeFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
            break;
        case 'logout':
            return authInitialState
            break;        
    }
    return state
}