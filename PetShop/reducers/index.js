import {combineReducers} from 'redux';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  cartsModify: CartReducer,
});

export default rootReducer;
