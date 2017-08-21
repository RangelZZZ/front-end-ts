export interface PayloadAction<P> {   /*package.json 里面好像没有这个东西的安装包，为什么可以用*/
    payload: P
    type: string
}

export default {
    CHANGE_SIGN_IN_FROM: 'CHANGE_SIGN_IN_FROM',
    SAVE_USERINFORMATION: 'SAVE_USERINFORMATION'
}
