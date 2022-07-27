import { SET_LOADING_STATE, SET_SNACKBAR_STATE } from "./settings.actionTypes";

const INITIAL_STATE = {
    loading: false,
    snackbar: {
        show: false,
        message: null,
        severity: "success"
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING_STATE:
            return ({
                ...state,
                loading: action.payload
            })
        case SET_SNACKBAR_STATE:
            return ({
                ...state,
                snackbar: action.payload
            })
        default: return state;
    }
};

export default reducer;