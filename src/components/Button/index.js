import React from 'react'

import './button.scss'

const index = ({ children, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default index
