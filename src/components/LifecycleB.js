import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tumza'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null 
    }
    componentDidUpdate() {
        console.log('lifecycleB componentDidUpdate')
    }

    render() {
        console.log('lifeCycleB render')
        return (

            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
