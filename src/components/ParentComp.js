import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent'
import PureComp from './PureComp'


class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tumi'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Tumi'
            })
        }, 2000)
    }

    render() {
        console.log('######################## parent comp render')
        return (
            <div>
                ParentComp
                <RegComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
