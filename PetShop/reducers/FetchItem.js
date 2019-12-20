import {
  FETCH_CARTS_SUCCESS,
  FETCH_CARTS_FAILURE,
  FETCHING_CARTS,
} from '../actions';

const initialState = {
  carts: [],
  isFetching: false,
  error: false,
};
export default function cartsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_CARTS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CARTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        carts: action.data, //
      };
    case FETCH_CARTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'ADD_TO_CART':
      //console.log(action);
      return {
        carts: state.carts.map(item => {
          if (item.id === action.id)
            return {
              ...item,
              icon: 'shopping-basket-add',
            };
          else return item;
        }),
      };
    case 'REMOVE_FROM_CART':
      //console.log(action);
      return {
        carts: state.carts.map(item => {
          if (item.id === action.id)
            return {
              ...item,
              icon: 'shopping-basket-remove',
            };
          else return item;
        }),
      };
    default:
      return state;
  }
}
