export const addUser = (email, password) => ({
    type: 'ADD_USER',
    payload: {
        email,
        password,
        logged: false,
    },
})

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        const users = localStorage.getItem('users')
            ? [...JSON.parse(localStorage.getItem('users'))]
            : []

        return new Promise((resovle, reject) => {
            users.forEach((obj) => {
                if (email === obj.email && password === obj.password) {
                    dispatch(login(obj))
                    resovle('success')
                }
            })
            reject('Email и(или) пароль неверны. Попробуйте еще раз')
        })
    }
}

export const login = (obj) => ({
    type: 'LOGIN',
    payload: obj,
})

export const logout = () => ({
    type: 'LOGOUT',
})
