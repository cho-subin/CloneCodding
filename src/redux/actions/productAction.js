import axios from "axios";

// 미들웨어는 함수를 리턴한다.
function getProducts() {
    return async (dispatch, getState) => { //(리덕스로 디스패치, 현재의 스테이트를 정보로 받아봄)
        await axios.get("http://13.209.65.84/api/main").then(response => {
            let cardList = [...response.data]
            console.log(cardList)
            dispatch({type:"PRODUCT_LIST", payload:cardList})
        })
        .catch(function(error){
            console.log(error);
        })
    };
}

function getProductDetail(params) {
    return async (dispatch, getState) => {
        console.log(params)
        await axios.get(`http://13.209.65.84/api/post/${params.id}`).then(response => {
            let list = {...response.data}
            console.log(list)
            dispatch({type:"PRODUCT_DETAIL", payload:list})
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

export const productAction = { getProducts, getProductDetail }