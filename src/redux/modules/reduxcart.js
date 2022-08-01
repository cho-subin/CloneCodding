//Actions
const LOAD = "reduxcart/LOAD";
const CREATE = "reduxcart/CREATE";

const initialState ={ 
    carts:{
        username : "user",
        Posts:[
          {
             postId:"1",
             title: "제목입니다1",
             price:2000,
             imageUrl:"/images/cancle.png",
          },
          {
             postId:"2",
             title: "제목입니다2",
             price:2200,
             imageUrl:"/images/….png",
          }
        ],
    
         totalPrice:25000,
         deliveryTotal :15000
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

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "reduxcart/LOAD": {
      return state;
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
