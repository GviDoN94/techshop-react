const getCartItems = () => {
    if (localStorage.getItem('cart')) {
        return [...JSON.parse(localStorage.getItem('cart'))]
    }
    return []
}

const getTotalSum = (arr) => {
    return arr.reduce((sum, item) => (sum += item.price), 0)
}

const setCartToLocalStorage = (arr) => {
    localStorage.setItem('cart', JSON.stringify(arr))
}

const initialState = {
    items: getCartItems(),
    total: localStorage.getItem('total') ? localStorage.getItem('total') : null,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newItems = [
                ...state.items,
                { id: Date.now(), ...action.payload },
            ]

            setCartToLocalStorage(newItems)

            localStorage.setItem('total', getTotalSum(newItems))

            return {
                ...state,
                items: newItems,
                total: getTotalSum(newItems),
            }
        }
        case 'REMOVE_ITEM_CART': {
            const newItems = [
                ...state.items.filter((item) => item.id !== action.payload),
            ]

            setCartToLocalStorage(newItems)
            localStorage.setItem('total', getTotalSum(newItems))

            return {
                ...state,
                items: newItems,
                total: getTotalSum(newItems),
            }
        }

        case 'CLEAR_CART': {
            localStorage.removeItem('cart')
            localStorage.removeItem('total')
            return {
                items: [],
                total: 0,
            }
        }
        default:
            return state
    }
}

export default cart
