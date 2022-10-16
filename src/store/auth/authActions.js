import * as types from './authTypes';

export const registerStart = () => ({
    type: types.REGISTER_LOADING,
})

export const registerError = (error) => ({
    type: types.REGISTER_ERROR,
    payload: error.toString(),
})

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
})

export const loginStart = () => ({
    type: types.LOGIN_LOADING,
})

export const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    payload: error.toString(),
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
})

export const logoutStart = () => ({
    type: types.LOGOUT_LOADING,
})

export const logoutError = (error) => ({
    type: types.LOGOUT_ERROR,
    payload: error.toString(),
})

export const logoutSuccess = (user) => ({
    type: types.LOGOUT_SUCCESS,
    payload: user,
})