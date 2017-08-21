export interface SignInFrom {
    username: string
    password: string
}

export interface UserInformation {
    username: string
    email: string
    mobilePhone: string
}

export interface StoreState {
    signInFrom: SignInFrom,
    userInformation: UserInformation
}
