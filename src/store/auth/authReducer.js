import * as types from './authTypes';
import {
    loginError,
    loginStart,
    loginSuccess,
    logoutError,
    logoutStart,
    logoutSuccess,
    registerError,
    registerStart,
    registerSuccess
} from "./authActions";
import {auth} from "../../services/firebase";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_LOADING:
        case types.LOGIN_LOADING:
        case types.LOGOUT_LOADING:
            return {
                ...state,
                loading: true,
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: state.currentUser = null
            }
        default:
            return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerError(error.toString())))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((error) => dispatch(loginError(error.toString())))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => {
                dispatch(logoutSuccess())
            })
            .catch((error) => dispatch(logoutError(error.toString())))
    }
}




