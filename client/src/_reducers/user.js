import { userTypes } from '../_constants';

const initialState = {
    list: [],
    loading: true
}

export const user = (state = initialState, action ) => {
    switch (action.type) {
        case userTypes.FETCH_ALL_USERS:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}