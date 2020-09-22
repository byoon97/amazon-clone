export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_USER":
        return {
          ...state,
          user: action.user
        }
        
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };

    case "REMOVE_FROM_BASKET":
      // cloned basket here
      let newBasket = [...state.basket];

      //check to see if the item exists in basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant Remove product (id : ${action.id})`);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
