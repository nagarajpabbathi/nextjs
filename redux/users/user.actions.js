import axios from 'axios'
import { base_url } from '../../Config/constants';
import { SET_USER_INFO } from './user.actionTypes';


export const LoginUserAction = (payload, cb = () => { }) => {
    return (dispatch, getState) => {
        axios
            .post(`${base_url}/api/authaccount/login`, payload)
            .then((res) => {
                if (res?.data?.success) {
                    cb(true)
                    dispatch({
                        type: SET_USER_INFO,
                        payload: res?.data?.data
                    })
                }
                else {
                    cb(false)
                }
            })
            .catch((e) => {
                console.log(e);
                cb(false)
            });
    }
}
export const signupUserAction = (payload, cb = () => { }) => {
    return (dispatch, getState) => {
        axios
            .post(`${base_url}/api/authaccount/signup`, payload)
            .then((res) => {
                if (res?.data?.success) {
                    cb(true)
                    dispatch({
                        type: SET_USER_INFO,
                        payload: res?.data?.data
                    })
                }
                else {
                    cb(false)
                }
            })
            .catch((e) => {
                console.log(e);
                cb(false)
            });
    }
}
export const forgotPasswordAction = (payload, cb = () => { }) => {
    return (dispatch, getState) => {
        axios
            .post(`${base_url}/api/authaccount/forgot`, payload)
            .then((res) => {
                if (res?.data?.success) {
                    cb(true)
                    dispatch({
                        type: SET_USER_INFO,
                        payload: res?.data?.data
                    })
                }
                else {
                    cb(false)
                }
            })
            .catch((e) => {
                console.log(e);
                cb(false)
            });
    }
}

