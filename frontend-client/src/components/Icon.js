import React from 'react'

function Icon({style, title, textStyle=''}) {

    return (
        <div className="icon">
            <i className={style}></i>
            <span className={textStyle}>{title}</span>
        </div>
    )
}

export default Icon
