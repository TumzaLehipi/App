import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tumza'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }
    changeState =() =>{
        this.setState({
            name: 'Codeevolution'
        })
    }
    render() {
        console.log('lifeCycleA render')
        return (

            <div>
                LifecycleA
                <div>
                    <button onClick = {this.changeState}>Change State</button>
                    <LifecycleB />
                </div>
            </div>
        )
    }
}

export default LifecycleA
