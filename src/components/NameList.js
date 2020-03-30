import React from 'react'

export default function NameList() {
    const names = ['tumza', 'rtgw', 'werfe']
    const person = [
        {
            id: 1,
            name: 'tumza',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'rtgw',
            age: 30,
            skill: 'react'
        },
        {
            id: 3,
            name: 'werfe',
            age: 30,
            skill: 'react'
        },
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <div>
            {
                nameList
            }
        </div>

    )
}
