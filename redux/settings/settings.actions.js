import { SET_LOADING_STATE, SET_SNACKBAR_STATE } from "./settings.actionTypes"

export const startLoader = () => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_LOADING_STATE,
            payload: true
        })
    }
}
export const stopLoader = () => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_LOADING_STATE,
            payload: false
        })
    }
}
export const snackbarMessage = ({ severity, message }) => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_SNACKBAR_STATE,
            payload: {
                severity,
                message,
                show: true
            }
        })
    }
}

