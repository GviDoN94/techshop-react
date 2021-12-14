import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
    Form,
    EmailField,
    PasswordField,
    Checkbox,
    SubmitButton,
} from '../components/Forms'

import Button from '../components/Button/'

const SignUp = ({ onRegister }) => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [checkbox, setCheckbox] = useState(false)
    const [checkboxError, setCheckboxError] = useState('')

    const navigate = useNavigate()

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
        const res =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (email === '') {
            setEmailError('Поле обязательно для заполнения')
        } else if (!res.test(String(email).toLowerCase())) {
            setEmailError('Email невалидный')
        } else setEmailError('')

        return emailError
    }

    const passwordValidation = () => {
        if (password === '') {
            setPasswordError('Поле обязательно для заполнения')
        } else if (password.length > 0 && password.length < 8) {
            setPasswordError('Пароль должен содержать как минимум 8 символов')
        } else setPasswordError('')
    }

    const checkboxValidation = () => {
        if (checkbox === false) {
            setCheckboxError('Поле обязательно для заполнения')
        } else setCheckboxError('')
    }

    const handleSubmitButtonClick = () => {
        emailValidation()
        passwordValidation()
        checkboxValidation()
    }

    // on submit form
    const handleSubmitForm = (e) => {
        e.preventDefault()

        if (!emailError && !passwordError && !checkboxError) {
            onRegister(email, password)
            alert('Поздравляем с успешной регистрацией, приятного пользования!')
            navigate('/login')
        }
    }

    return (
        <div className="content">
            <section className="section section--sign-in">
                <h2 className="section__title">Регистрация</h2>
                <Form onSubmit={handleSubmitForm}>
                    <EmailField
                        id="email-sign-up"
                        className={emailError ? 'error' : ''}
                        placeholder="Email"
                        onChange={handleChangeEmail}
                        errorMessage={emailError}
                    />
                    <PasswordField
                        id="password-sign-up"
                        className={passwordError ? 'error' : ''}
                        placeholder="Пароль"
                        onChange={handleChangePassword}
                        errorMessage={passwordError}
                    />
                    <Checkbox
                        id="checkbox-sign-up"
                        className={checkboxError ? 'error' : ''}
                        label="Я согласен с"
                        url="Публичной офертой"
                        errorMessage={checkboxError}
                        onChange={handleChangeCheckbox}
                    />
                    <SubmitButton onClick={handleSubmitButtonClick}>
                        Зарегистрироваться
                    </SubmitButton>

                    <div className="form__footer">
                        <p className="form__divider">или</p>
                        <Link to="/login">
                            <Button className="btn btn--outline btn--form">
                                Войти
                            </Button>
                        </Link>
                    </div>
                </Form>
            </section>
        </div>
    )
}

export default SignUp
