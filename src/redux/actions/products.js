export const fetchProducts = () => {
    return async (dispatch) => {
        fetch('./db.json')
            .then((response) => response.json())
            .then((data) => dispatch(setProducts(data)))
            .catch((err) => console.log(err))
    }
}

export const setProducts = (items) => {
    return {
        type: 'SET_PRODUCTS',
        payload: items,
    }
}
