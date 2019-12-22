export default function(state = [], action) {
  //
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      //console.log(action);
      action.item.value = 1;
      //console.log(action.item);
      return [...state, action.item];

    case 'REMOVE_ITEM_FROM_CART':
      return state.filter(i => i.id !== action.item.id);

    case 'UPDATE_ITEM_TO_CART':
      for (let i of state) {
        if (i.id === action.item.id) {
          i.value = action.item.value;
          //console.log('a', action, state);
          return [...state];
        }
      }
  }
  return state;
}
