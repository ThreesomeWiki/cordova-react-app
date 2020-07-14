import * as types from '../utils/types';

export function getUser() {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: types.GET_USER, data: [1, 2, 3, 4] });
        }, 0);
    };
}
