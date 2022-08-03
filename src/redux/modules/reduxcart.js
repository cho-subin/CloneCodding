import axios from "axios";

//Actions
const LOAD = "reduxcart/LOAD";
const CREATE = "reduxcart/CREATE";
const LOAD_CART = "reduxcart/LOAD_CART";

const initialState ={ 
    cart_list:{
        username : "",
        posts:[
          // {
          //    id:"",
          //    title: "",
          //    price:"",
          //    imageUrl:"",
          //    post:""
          // },
          // {
          //    id:"",
          //    title: "",
          //    price:"",
          //    imageUrl:"",
          //    post:""
          // }
        ],
    
         totalPrice:"",
         deliveryFee:""

      }
    
    };


//Action Creators
export function loadList(cart_list) {
  console.log(cart_list);
  return { type: LOAD, cart_list };
}
export function createList(list) {
    console.log(list);
    return { type: CREATE, list };
  }

  export function viewCard(view_list){
    console.log(view_list)
    return { type: LOAD_CART, view_list};
  }


//middlewares
export const viewCartDB =()=>{
  return async function (dispatch) {
    const Token= sessionStorage.getItem("token");

  const res = await axios.get("http://13.209.65.84/api/cart",
  {headers :{
    "Authorization":Token
  }
  }
  )
  console.log(res);
  dispatch(loadList(res.data))
  }
}



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "reduxcart/LOAD": {
      console.log(action)
      state.cart_list = action.cart_list
      return {...state};
    }
    case "reduxcart/CREATE": {
        const new_list = [...state, action];
        console.log(new_list);
        return { };
      }

    default:
      return state;
  }
}
