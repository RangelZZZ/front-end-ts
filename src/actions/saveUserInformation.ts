import ActionTypes, {PayloadAction} from './types'

export interface SaveUserInformationPayload {
    email: string,
    mobilePhone: string
    username: string
}

export type userInformation = PayloadAction<SaveUserInformationPayload>
export type saveUserInformationAction = (payload: SaveUserInformationPayload) => userInformation
export const saveUserInformation = (payload: SaveUserInformationPayload): userInformation => ({
    payload,
    type: ActionTypes.SAVE_USERINFORMATION
})

