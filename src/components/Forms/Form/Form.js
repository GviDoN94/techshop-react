import React from 'react'

import '../forms.scss'

const Form = ({ children, onSubmit }) => {
    return (
        <form className="form" action="" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form
