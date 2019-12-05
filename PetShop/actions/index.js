import firebase from '../fb';

export function getCarts() {
  return dispatch => {
    firebase
      .database()
      .ref('/carts')
      .on('value', snapshot => {
        dispatch({
          type: 'CARTS_FETCH',
          payload: snapshot.val(),
        });
      });
  };
}

export function postCarts(img, name, info, price, addToCart) {
  return dispatch => {
    firebase
      .database()
      .ref('/carts')
      .push({img, name, info, price, addToCart});
  };
}
