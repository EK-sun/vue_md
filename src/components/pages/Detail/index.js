
import React, { Component } from 'react'
import './index.scss'

class Detail extends Component {
    constructor (props) {
        super(props)
        
        this.info = this.query.parse(this.props.location.search)
        console.log(this.info)
    }
    render () {
       
        return (
            <div className = "app-detail">
                <header className="bar bar-nav">
                    <a onClick = {this.props.history.go.bind(null, -1)} className="icon icon-left pull-left"></a>
                    <h1 className="title">联系人详情</h1>
                </header>
                <div className="content">
                    { this.props.match.params.id } -
                    { this.info.name } -
                    { this.info.tel }
                </div>
            </div>
        )
    }

}

export default Detail