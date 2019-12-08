export default function(state = {icon: 'shopping-basket-add'}, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        icon: 'shopping-basket-add',
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        icon: 'shopping-basket-remove',
      };
  }
  return state;
}
