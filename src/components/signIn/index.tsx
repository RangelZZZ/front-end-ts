import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { History } from 'history'      /* 是什么东西，react history里面没有这个东西啊*/
import { Paper, RaisedButton, TextField } from 'material-ui'  /*为什么要用这个东西啊而不用bootstrap*/
import { changeSignInFrom, ChangeSignInFromAction } from '../../actions/signIn'
import { StoreState, SignInFrom } from '../../reducers/types'

const styles = require('./index.scss')

interface Props {
    history: History,
    signInFrom: SignInFrom
    changeSignInFrom: ChangeSignInFromAction,
}

@CSSModules(styles)
class Signin extends React.Component<Props, {}> {
    public render() {   /*为什么这里会有public，而另两个组件没有*/
        return (
            <Paper styleName="sign-box" zDepth={2}>
                <TextField
                    hintText="Type your user name"
                    floatingLabelText="User Name"
                    fullWidth={true}
                    onChange={this.changeInputFrom.bind(this, 'username')}
                />
                <TextField
                    hintText="Type your password"
                    floatingLabelText="Password"
                    fullWidth={true}
                    type="password"
                    onChange={this.changeInputFrom.bind(this, 'password')}
                />
                <RaisedButton
                    label="Sign In"
                    primary={true}
                    fullWidth={true}
                    style={{marginTop: 10}}
                    onTouchTap={this.signIn}
                />
            </Paper>
        )
    }

    private changeInputFrom = (field: string,
                               event: React.ChangeEvent<HTMLInputElement>) => {
        let fields = {}
        fields[field] = event.target.value
        this.props.changeSignInFrom(fields)
    }

    private signIn = () => {
        this.props.history.push('/userInformation')
    }
}

const mapStateToProps = (state: StoreState) => ({
    signInFrom: state.signInFrom,
})

const mapDispatchToProps = {
    changeSignInFrom
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
