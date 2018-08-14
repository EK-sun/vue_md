
import React, { Component } from 'react'
import './index.scss'
import AppNav from '../../commons/AppNav'
import PhoneConcat from './PhoneConcat'
import SIMConcat from './SIMConcat'
import { Route, NavLink, Redirect } from 'react-router-dom'

class Concat extends Component {
    constructor (props) {
        super(props)
    }
    componentWillReceiveProps (props) {
        console.log('组件已经切换了',props.location.pathname)
    }
    componentWillMount () {
        //在进入到concat的时候，再跳转到子路由phone
        this.props.history.replace(`${this.props.match.path}/phone`)
    }
    render () {
        let { match } = this.props
        return (
            <div className = "app-concat">
                <header className="bar bar-nav">
                    <h1 className='title'>联系人</h1>
                </header>
                <div className="content">
                    <div className="buttons-tab">
                        <NavLink activeClassName="active" to={`${match.path}/phone`} className="tab-link button">手机</NavLink>
                        <NavLink activeClassName="active" to={`${match.path}/sim`} className="tab-link button">SIM卡</NavLink>
                    </div>
                    <div className="content-block">                    
                        <Route  path = {`${match.path}/phone`} component = { PhoneConcat }/>
                        <Route  path = {`${match.path}/sim`} component = { SIMConcat }/>
                    </div>
                </div>
                <AppNav/>
            </div>
        )
    }

}

export default Concat