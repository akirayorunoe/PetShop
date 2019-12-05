import {combineReducers} from 'redux';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  cartsList: CartReducer,
});

export default rootReducer;
