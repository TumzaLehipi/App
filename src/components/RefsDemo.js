import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }

    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        //  this.inputRef.current.focus()
        //   console.log(this.inputRef)
    }

    clickHander = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref={this.inputRef} />
                </div>
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHander}>click</button>
            </div>
        )
    }
}

export default RefsDemo


{/*Common use case which is focusing on text field. suppose we have login form we wha
the user*/}