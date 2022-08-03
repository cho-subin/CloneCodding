
let initialState = {
    productList: [],
    productDetail: {}
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "PRODUCT_LIST":
            console.log(action)
            state.productList=action.payload
            return {
                ...state,
            };
        case "PRODUCT_DETAIL":
            console.log(action)
            state.productDetail=action.payload
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default reducer;