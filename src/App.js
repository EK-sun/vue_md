import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import AppHome from './components/pages/Home'
import AppConcat from './components/pages/Concat'
import AppMine from './components/pages/Mine'
import AppNotFound from './components/pages/NotFound'
import AppDetail from './components/pages/Detail'
import AppLogin from './components/pages/Login'

class App extends Component {

  componentWillReceiveProps (props) {
    console.log('全局路由监听：pathname:'+ props.location.pathname)
    //全局判断登录状态, 如果确实是路由变化了
    if ( props.location.pathname !== this.props.location.pathname  ) {
        this.checkLogin(props)
    }
  }
  componentWillMount () { //当刚刚进入到项目的时候，判断当前是不是需要判断登录的页面
    this.checkLogin(this.props)
  }


  checkLogin (props) {//判断是否登录
    //如果 要调整的路由确实需要做登录判断
    let target = props.location.pathname;
    
    let { checkLogin } = this.props
    let isCheck = checkLogin.some(item => {
      if (target.startsWith(item)) return true;
      return false
    })
    
    if ( isCheck ) {
      if ( !this.store.getState().user_info ) { //如果登录状态不存在的话
          setTimeout(() => { 
           this.props.history.push('/login') 
          }, 0)      
      }
    }
  }
  render() {
    let { routes } = this.props
    return (
      <div className="App">
        <Switch>
          { routes.map(({ id, path, component, render, exact }) => (
            <Route key = {id} exact = {exact} path = {path} component = {component} render = {render} />
          )) }
          <Redirect from = "*"  to = "/not-found"/>
        </Switch>

      </div>
    );
  }
}

App.defaultProps = {
  routes: [
    { id: 1, path: '/', component: AppHome, exact: true },
    { id: 2, path: '/concat', component: AppConcat },
    { id: 3, path: '/mine/a', render:  () =>  ( <div>mine-a</div> ) },
    { id: 4, path: '/mine', component: AppMine },
    { id: 5, path: '/detail/:id', component: AppDetail },
    { id: 6, path: '/login', component: AppLogin },
    { id: 7, path: '/not-found', component: AppNotFound }
  ],
  checkLogin: ['/mine', '/concat']
}

export default withRouter(App);
