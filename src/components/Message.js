import React, { Component } from 'react'

export class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'welcome dfghfdhf'
        }
    }
    changeMessage() {
        this.setState({
            message: 'thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>click</button>
            </div>
        )
    }
}

export default Message
