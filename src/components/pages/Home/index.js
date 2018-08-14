
import React, { Component } from 'react'
import './index.scss'
import AppNav from '../../commons/AppNav'
import HomeBanner from './HomeBanner'







const A = (props) => {
    const change_color = () => {
        Component.prototype.bus.emit('B:change-color')
    }
    return (
        <div>
            <button onClick = { change_color }>change</button>
        </div>
    )
}
class B extends Component {
    state = { color: 'red' }
    componentWillMount () {
        this.bus.on('B:change-color', () => {
            this.setState({ color: this.state.color === 'red' ? 'blue' : 'red' })
        })
    }
    render () {
        return (
            <div style = {{ width: 100, height: 100, background: this.state.color }}>
                
            </div>
        )
    }
}



class Home extends Component {
    componentWillUnmount () {
        this.unmount = true//这个开关用于判断组件是否销毁
        console.log('当路由出去')
    }

    componentWillMount () {
        console.log('当路由进入')
    }
    
    render () {
        return (
            <div className = "app-home">
                <HomeBanner unmount = {this.unmount} name = {'123'}/>
                <A/>
                <B/>
                <AppNav/>
            </div>
        )
    }

}

export default Home