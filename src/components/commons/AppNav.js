
import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavItem = ({data, pathname}) => {
    if (pathname === data.path) {
        return (
            <a style = { {background : '#f5f5f5'} } className="tab-item external active"  >
                <span className={"icon icon-" + data.icon}></span>
                <span className="tab-label">{data.title}</span>
            </a>
        )
        
    }
    return (
        <NavLink activeStyle = { {background : '#f5f5f5'} } activeClassName='active' exact = { data.exact } className="tab-item external" to={data.path}>
            <span className={"icon icon-" + data.icon}></span>
            <span className="tab-label">{data.title}</span>
        </NavLink>
    )
}

class AppNav extends Component {

    state = {
        navs: [
            { id: 1, path: '/', title: '首页', icon: 'home', exact: true},
            { id: 2, path: '/concat', title: '联系人', icon: 'star'},
            { id: 3, path: '/mine', title: '我的', icon: 'me'}
        ]
    }

    render () {
        let { navs } = this.state
        return (
            <nav className="bar bar-tab app-nav">
                { navs.map(item => ( <NavItem pathname = {this.props.location.pathname} key = {item.id} data = {item} /> )) }
            </nav>
        )
    }

}

export default withRouter(AppNav)