import React from 'react'

function Person({name, style}) {
    return (
        <div className="person">
            <span>{name}</span>
            <i className={style}></i>
        </div>
    )
}

export default Person;
