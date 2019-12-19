import {combineReducers} from 'redux';
import CartReducer from './CartReducer';
import FetchItem from './FetchItem';
const rootReducer = combineReducers({
  // cartsModify: CartReducer,
  cartsData: FetchItem,
});

export default rootReducer;
