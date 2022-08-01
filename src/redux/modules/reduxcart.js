//Actions
const LOAD = "reduxcart/LOAD";
const CREATE = "reduxcart/CREATE";

const initialState = {
  Posts: [
    { 
        postId:"1",
        title: "제목입니다1",
        imageUrl:"/images/cancle.png",
        price:"3000",
        deliveryFee:"2000",
        salesUnit:"1통",
        weight:"250g"
    },
    { 
        postId:"2",
        title: "제목입니다2",
        imageUrl:"/images/cancle.png",
        price:"5500",
        deliveryFee:"2000",
        salesUnit:"1통",
        weight:"2L"
    },
    { 
        postId:"3",
        title: "제목입니다3",
        imageUrl:"/images/cancle.png",
        price:"25000",
        deliveryFee:"10000",
        salesUnit:"1박스",
        weight:"250Kg",
    },
  ],
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
