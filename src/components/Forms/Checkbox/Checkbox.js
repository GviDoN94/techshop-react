import React from 'react'
import { Link } from 'react-router-dom'

import './checkbox.scss'

const Checkbox = ({
    id,
    className,
    label,
    errorMessage,
    onChange,
    value,
    url,
}) => {
    return (
        <label className="checkbox__label" htmlFor={id}>
            <input
                id={id}
                className={`checkbox ${className}`}
                type="checkbox"
                onChange={onChange}
                value={value}
            />
            {label} <Link to="/rules">{url}</Link>
            <br />
            <strong className="error-message">{errorMessage}</strong>
        </label>
    )
}

export default Checkbox
