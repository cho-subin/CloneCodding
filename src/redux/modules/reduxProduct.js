
let initialState = {
    productList: [
        {
            postId: 1,
            title: '대추방울토마토 150g',
            imageUrl: '',
            price:'1,900',
            deliveryFee: '2000',
            salesUnit: '1통',
            weight: '250g',
        },
        {
            postId: 2,
            title: '국산콩 두부 150g',
            imageUrl: '',
            price:'1,900',
            deliveryFee: '2000',
            salesUnit: '1통',
            weight: '250g',
        },
        {
            postId: 3,
            title: '국산콩 두부 150g',
            imageUrl: '',
            price:'1,900',
            deliveryFee: '2000',
            salesUnit: '1통',
            weight: '250g',
        },
    ]
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "PRODUCT_LIST":
            console.log(action)
            // state.productList.push(action.payload)
            action.payload.map(
                (item)=>{
                    state.productList.push(item)
                }
            )
            return {
                // ...state, productList: [
                //     ...state.productList,
                //     {
                //         postId: action.payload.postId,
                //         title: action.payload.title,
                //         imageUrl: action.payload.imageUrl,
                //         deliveryFee: action.payload.deliveryFee,
                //         salesUnit: action.payload.salesUnit,
                //         weight: action.payload.weight,
                //     }
                // ]
                ...state
            };
        default:
            return state;
    }
}

export default reducer