import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import {History} from 'history'
import {Paper, TextField, FlatButton} from 'material-ui'
import {StoreState, SignInFrom} from '../../reducers/types'
import {saveUserInformation, saveUserInformationAction} from '../../actions/saveUserInformation'
import {connect} from 'react-redux'

const styles = require('./index.scss')

interface Props {
    history: History,
    signInFrom: SignInFrom
    saveUserInformation: saveUserInformationAction

}

@CSSModules(styles)
class InformationForm extends React.Component<Props, {}> {

    private email: any
    private mobilePhone: any

    render() {
        return (
            <Paper styleName="information-box" zDepth={2}>
                <TextField
                    hintText="Type your user name"
                    fullWidth={true}
                    defaultValue={this.props.signInFrom.username}
                />
                <TextField
                    hintText="Type your user email"
                    fullWidth={true}
                    ref={(email) => {
                        this.email = email
                    }}
                />
                <TextField
                    hintText="Type your mobilePhone"
                    fullWidth={true}
                    ref={(mobilePhone) => {
                        this.mobilePhone = mobilePhone
                    }}
                />
                <div styleName="submit-button">
                    <FlatButton
                        label="Submit"
                        primary={true}
                        onClick={this.saveUserInformation.bind(this, 'button')}
                    />
                </div>
            </Paper>
        )
    }

    private saveUserInformation() {
        let email: any = this.email.getValue()
        let mobilePhone: any = this.mobilePhone.getValue()
        let username: any = this.props.signInFrom.username
        this.props.saveUserInformation({email, mobilePhone, username})
    }
}

const mapStateToProps = (state: StoreState) => ({
    signInFrom: state.signInFrom,
})

const mapDisPatchToProps = {
    saveUserInformation
}

export default connect(mapStateToProps, mapDisPatchToProps)(InformationForm)
