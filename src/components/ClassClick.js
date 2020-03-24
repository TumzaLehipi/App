import React, { Component } from 'react'

class ClassClick extends Component {
    clickHander() {
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHander}>ClickMe</button>
            </div>
        )
    }
}

export default ClassClick
