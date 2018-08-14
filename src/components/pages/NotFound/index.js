
import React, { Component } from 'react'
import './index.scss'



class Button extends Component {
   
    render () {
        return (
            <div>
                <button onClick = {this.props.handleClick}>button</button>
            </div>
        )
    }

}

class DoubleButton extends Component {
    
    render () {
        return (
            <div>
                <button onDoubleClick = {this.props.handleClick}>button</button>
            </div>
        )
    }

}
//高阶组件， 接受一个组件，返回一个 新的组件，新组件可以给原组件传入一个复用的属性
const HOC = (PComponent) => {
    return class extends Component {
        handleClick () {
            alert(2)
        }
        render () {
            return (
                <PComponent handleClick = {this.handleClick} />
            )
        }

    }
}

const HOCButton = HOC(Button)
const HOCDoubleButton = HOC(DoubleButton)


class NotFound extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className = "not-found">
                NotFound <HOCButton/> <HOCDoubleButton/>
            </div>
        )
    }

}

export default NotFound