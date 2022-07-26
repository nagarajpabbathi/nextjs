import { CLEAR_USER_INFO, SET_USER_INFO } from "./user.actionTypes";

const INITIAL_STATE = null

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return action.payload
        case CLEAR_USER_INFO:
            return null
        default: return state;
    }
};

export default reducer;