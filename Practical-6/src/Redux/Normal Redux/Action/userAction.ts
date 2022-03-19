import {
    USER_LIST_FAILURE,
    USER_LIST_SUCCESS,
    USER_LIST_REQUEST,
} from '../Constant/userConstant';

export const userListAction =
    (page: number) =>
    async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
        try {
            dispatch({type: USER_LIST_REQUEST});
            const response = await fetch(
                `https://reqres.in/api/users?page=${page}`,
            );
            const data = await response.json();

            console.log(data);
            dispatch({type: USER_LIST_SUCCESS, payload: data.data});
        } catch (error) {
            dispatch({type: USER_LIST_FAILURE, payload: error.message});
        }
    };
