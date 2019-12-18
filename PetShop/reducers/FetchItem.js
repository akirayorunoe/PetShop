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
        carts: action.data,
      };
    case FETCH_CARTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
