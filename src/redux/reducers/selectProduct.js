const getCurrentProduct = () => {
    if (localStorage.getItem('currentProduct')) {
        const { name, price, desc, image } = JSON.parse(
            localStorage.getItem('currentProduct'),
        )
        return {
            name,
            price,
            desc,
            image,
        }
    }
    return {}
}

const initialState = {
    product: getCurrentProduct(),
}

const selectProduct = (state = initialState, action) => {
    if (action.type === 'SELECT_PRODUCT') {
        localStorage.setItem('currentProduct', JSON.stringify(action.payload))
        return {
            ...state,
            product: action.payload,
        }
    } else return state
}

export default selectProduct
