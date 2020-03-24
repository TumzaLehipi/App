import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
        {/* this.clickHandler = this.clickHandler.bind(this)*/ } //this is much better``
    }
    clickHandler() {
        this.setState({
            message: 'GoodBye'
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click bind</button>*/}
                <button onClick={() => this.clickHandler()} >Click bind</button>
            </div>
        )
    }
}

export default EventBind
