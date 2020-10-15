import React from 'react'

function Icon({classes, title, textStyle=''}) {

    return (
        <div className="icon">
            <i className={classes}></i>
            <span className={textStyle}>{title}</span>
        </div>
    )
}

export default Icon
