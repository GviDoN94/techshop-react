import React from 'react'

// import './passwordField.scss'
import '../forms.scss'

const PasswordField = ({
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
                type="password"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <strong className="error-message">{errorMessage}</strong>
        </label>
    )
}

export default PasswordField
