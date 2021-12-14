import React from 'react'

import '../forms.scss'

const SubmitButton = ({ className, children, onClick }) => {
    return (
        <button
            className={`button ${className}`}
            type="sumbit"
            onClick={onClick}
            formNoValidate
        >
            {children}
        </button>
    )
}

export default SubmitButton
