import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (

            <div>
                <h1>welcome {this.props.name}   {this.props.lastName}</h1>
            </div>
        )
    }
}

export default Welcome
