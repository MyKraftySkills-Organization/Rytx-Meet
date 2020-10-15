import React from 'react'

function Person({name, classes}) {
    return (
        <div className="person">
            <span>{name}</span>
            <i className={{classes}}></i>
        </div>
    )
}

export default Person;
