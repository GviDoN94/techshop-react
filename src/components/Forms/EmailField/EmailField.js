import React from 'react'

// import './emailField.scss'
import '../forms.scss'

const EmailField = ({
    id,
    className,
    placeholder,
    errorMessage,
    onChange,
    value,
}) => {
    return (
        <label className="input__label" htmlFor={id}>
            <input
                id={id}
                className={`input ${className}`}
                type="email"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <strong className="error-message">{errorMessage}</strong>
        </label>
    )
}

export default EmailField
