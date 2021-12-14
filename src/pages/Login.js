import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    Form,
    EmailField,
    PasswordField,
    SubmitButton,
    Checkbox,
} from '../components/Forms'

import Button from '../components/Button'

const Login = ({ user, onLogin }) => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [checkbox, setCheckbox] = useState(false)

    // onChange
    const handleChangeEmail = (e) => {
        setEmail(e.target.value.trim())
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value.trim())
    }
    const handleChangeCheckbox = () => {
        setCheckbox(!checkbox)
    }

    // validation
    const emailValidation = () => {
        if (email === '') {
            setEmailError('Поле обязательно для заполнения')
        } else setEmailError('')
    }

    const passwordValidation = () => {
        if (password === '') {
            setPasswordError('Поле обязательно для заполнения')
        } else setPasswordError('')
    }

    const handleSubmitButtonClick = () => {
        emailValidation()
        passwordValidation()
    }

    const resetForm = () => {
        setEmail('')
        setPassword('')
        setCheckbox(false)
    }

    // on submit form
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (!emailError && !passwordError) {
            onLogin(email, password)
            resetForm()
        }
    }

    return (
        <div className="content">
            <section className="section section--sign-in">
                <h2 className="section__title">Вход</h2>
                <Form onSubmit={handleSubmitForm}>
                    <EmailField
                        id="email-login"
                        className={emailError ? 'error' : ''}
                        placeholder="Email"
                        onChange={handleChangeEmail}
                        errorMessage={emailError}
                        value={email}
                    />
                    <PasswordField
                        id="password-login"
                        className={passwordError ? 'error' : ''}
                        placeholder="Пароль"
                        onChange={handleChangePassword}
                        errorMessage={passwordError}
                        value={password}
                    />
                    <Checkbox
                        id="checkbox-login"
                        label="Запомнить меня"
                        onChange={handleChangeCheckbox}
                        value={checkbox}
                    />
                    <SubmitButton onClick={handleSubmitButtonClick}>
                        Войти
                    </SubmitButton>

                    <div className="form__footer">
                        <p className="form__divider">или</p>
                        <Link to="/signUp">
                            <Button className="btn btn--outline btn--form">
                                Зарегистрироваться
                            </Button>
                        </Link>
                    </div>
                </Form>
            </section>
        </div>
    )
}

export default Login
