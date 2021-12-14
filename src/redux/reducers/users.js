const getUsers = () => {
    if (localStorage.getItem('users')) {
        return [...JSON.parse(localStorage.getItem('users'))]
    }
    return []
}

const getLoggedUser = () => {
    if (getUsers().length) {
        return getUsers().find((obj) => obj.logged === true)?.email
    }
    return null
}

const initialState = {
    users: getUsers(),
    loggedUser: getLoggedUser(),
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUsers = [...state.users, action.payload]
            localStorage.setItem('users', JSON.stringify(newUsers))
            return {
                ...state,
                users: newUsers,
                loggedUser: getLoggedUser(),
            }
        case 'LOGIN': {
            const newUsers = [
                ...state.users.map((obj) => {
                    if (
                        obj.email === action.payload.email &&
                        obj.password === action.payload.password
                    ) {
                        obj.logged = !obj.logged
                    }
                    return obj
                }),
            ]

            localStorage.setItem('users', JSON.stringify(newUsers))
            return {
                ...state,
                users: newUsers,
                loggedUser: getLoggedUser(),
            }
        }
        case 'LOGOUT': {
            const newUsers = [
                ...state.users.map((obj) => {
                    if (obj.logged) {
                        obj.logged = !obj.logged
                    }
                    return obj
                }),
            ]

            localStorage.setItem('users', JSON.stringify(newUsers))
            return {
                ...state,
                users: newUsers,
                loggedUser: getLoggedUser(),
            }
        }
        default:
            return state
    }
}

export default users
