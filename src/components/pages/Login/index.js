
import React, { Component } from 'react'
import './index.scss'
import actionCreator from '../../../store/actionCreator'
class Login extends Component {
    constructor (props) {
        super(props)
        this.toHome = this.toHome.bind(this)
        this.login = this.login.bind(this)
    }
    toHome () {
        this.props.history.push('/')
    }
    login () {
        let action = actionCreator.login('二狗子')
        this.store.dispatch(action)
    }

    componentWillMount () {
        //store.subscribe方法中传入的函数会等到store中状态改变的时候执行
        this.store.subscribe(() => {
            if ( this.store.getState().user_info ) {
                this.props.history.go(-1)
            }
        })
    }

    render () {
        return (
            <div className = "app-login">
                <header className="bar bar-nav">
                    <a onClick = {this.toHome} className="icon icon-left pull-left"></a>
                    <h1 className="title">登录</h1>
                </header>

                <div className="content">
                
                    <button onClick = {this.login}>登录</button>
                </div>
            </div>
        )
    }

}

export default Login