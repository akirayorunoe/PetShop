import {
  FETCH_CARTS_SUCCESS, //
} from '../actions';

const initialState = {
  //
  carts: [],
  icon: 'shopping-basket-add',
};

export default function(state = initialState, action) {
  //
  switch (action.type) {
    case FETCH_CARTS_SUCCESS: //
      state = {
        ...state,
        carts: action.data,
      }; //
      break; //
    case 'ADD_TO_CART':
      console.log(action, 'add');
      return {
        ...state,
        icon: 'shopping-basket-add',
        id: action.id,
      };

    case 'REMOVE_FROM_CART':
      console.log(action.id, 'remove');
      return {
        ...state,
        icon: 'shopping-basket-remove',
        id: action.id,
      };
  }
  return state;
}
