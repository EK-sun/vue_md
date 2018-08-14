
import React, { Component } from 'react'
import './index.scss'

const FriendItem = ({data, history}) => {

    let info = { name: data.name, tel: data.tel }

    const go = () => {
        history.push('/detail/' + data.id + Component.prototype.query.stringify(info))
    }
    return (
        <li onClick = {go} className="item-content">
            <div className="item-inner">
                <div className="item-title">{data.name}</div>
                <div className="item-after">{data.tel}</div>
            </div>
        </li>
    )
}

class PhoneConcat extends Component {
    state = {
        friends: [
            { id: 1, name: '二狗子', tel: 123},
            { id: 2, name: '翠花', tel: 456},
            { id: 3, name: '铁柱', tel: 789}
        ]
    }
    render () {
        let { friends } = this.state
        return (
            <div className = "phone-concat">
                <div className="list-block">
                    <ul>
                        { friends.map(item => (<FriendItem history = { this.props.history } data = { item } key = { item.id } />)) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default PhoneConcat