import React from 'react'

export default function NameList() {
    const names = ['tumza', 'rtgw', 'werfe']
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}
