
let initialState = {
    productList: []
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "PRODUCT_LIST":
            console.log(action)
            state.productList=action.payload
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default reducer;