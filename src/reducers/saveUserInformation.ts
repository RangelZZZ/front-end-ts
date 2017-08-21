import ActionTypes, {PayloadAction} from '../actions/types'
import {UserInformation} from './types'

const initialState: UserInformation = {
    username: '',
    email: '',
    mobilePhone: ''
}

export default (state: UserInformation = initialState,
                action: PayloadAction<UserInformation>, ): UserInformation => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.SAVE_USERINFORMATION :
            return {
                ...state,
                ...action.payload
            }
        default:
            break
    }
    return state
}
