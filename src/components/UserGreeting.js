import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Tumza</div>
        }
        else {
            message = <div>Welcome guest</div>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default UserGreeting
