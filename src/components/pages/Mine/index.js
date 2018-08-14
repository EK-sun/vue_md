
import React, { Component } from 'react'
import './index.scss'
import AppNav from '../../commons/AppNav'


const ThemeContext = React.createContext('theme')

const B = (props) => {
    return (
        <div>
            <ThemeContext.Consumer>
                { theme => (<h4>这里是B组件 -- {theme}</h4>) }
            </ThemeContext.Consumer>
        </div>
    )
}
const A = (props) => {
    return (
        <div>
            <h2>这里是A组件</h2>
            <hr/>
            <B/>
        </div>
    )
}
class Mine extends Component {

    state = {
        theme: 'primary'
    }

    // componentWillMount () {
    //     //在即将渲染Mine的时候去判断是否登录
    //     if ( !this.store.getState().user_info ) {
    //         this.props.history.push('/login')
    //     }
    // }

    render () {
        let { theme } = this.state
        return (
            <div className = "app-mine">
                <ThemeContext.Provider value = {theme}>
                    Mine
                    <A theme = {theme}/>
                </ThemeContext.Provider>


                <AppNav/>
            </div>
        )
    }

}

export default Mine