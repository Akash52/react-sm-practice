import {
    USER_LIST_FAILURE,
    USER_LIST_SUCCESS,
    USER_LIST_REQUEST,
} from '../Constant/userConstant';

export const userListReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {loading: true, users: []};
        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                page: action.payload.page,
            };
        case USER_LIST_FAILURE:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};
