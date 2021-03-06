import { userTypes } from '../_constants';
import userServices from '../_services/user'

export const fetchAllUsers = () => dispatch =>{
    userServices.user().fetchAll()
        .then(res => {
            dispatch({ type: userTypes.FETCH_ALL_USERS, payload: res.data})
        })
        .catch(err => console.log(err))
}

export const createUser = () => dispatch =>{
    userServices.user().create()
        .then(res => {
            dispatch({ type: userTypes.CREATE_USER, payload: res.data})
        })
        .catch(err => console.log(err))
}