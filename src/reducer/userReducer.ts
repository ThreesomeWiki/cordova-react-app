import * as types from '../utils/types';

const initState = [];

export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_USER:
            return [...state, ...action.data];
        default:
            return state;
    }
}
