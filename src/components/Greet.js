import React from 'react'

export default function Greet(props) {
    console.log(props)
    return (

        <div>
            <h1>Hellow {props.name} ' '{props.lastName}</h1>
        </div>
    )
}
