import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
/* 加快页面点击事件的响应速度？*/
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
/*redux开发调试工具，需要自己安装*/
import {Provider} from 'react-redux'
import {Router, Route, Switch} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/* Material-UI 组件需要提供一个主题，在全局直接全部引入*/

// Components
import App from './components/app'
import Signin from './components/signIn'
import Sider from './components/sider'
import Home from './components/home'
import Profile from './components/profile'
import InformationForm from './components/UserInformation'


import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

import './scss/index.scss'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleware),
))

// Needed for onTouchTap be sure the plugin at the start of app
injectTapEventPlugin()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider>
                <App>
                    <Switch>
                        <Route exact={true} path="/signin" component={Signin}/>
                        <Route path="/" component={Sider}/>
                    </Switch>
                    <div style={{marginLeft: 120}}>
                        <Route path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/userInformation" component={InformationForm}/>
                    </div>

                </App>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
