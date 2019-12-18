import firebase from '../fb';
import 'firebase/firestore';
import {
  FETCH_CARTS_SUCCESS,
  FETCH_CARTS_FAILURE,
  FETCHING_CARTS,
} from '../actions';

export const getData = () => {
  //trả về cần thời gian nên bỏ tất cả trong Promise
  return dispatch => {
    dispatch(getCarts());
    return new Promise((resolve, reject) => {
      let DATA = [];
      firebase
        .firestore()
        .collection('pets')
        .get()
        .then(function(querySnapshot) {
          DATA = [];
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            DATA.push(doc.data());
            // resolve(doc.data())
          });
          //console.log('DATA:', DATA);
          dispatch(getCartsSuccess(DATA));
          resolve(DATA);
        })
        .catch(err => {
          dispatch(getCartsFailure(error));
          reject(err);
        });
    });
  };
};

function getCarts() {
  return {
    type: FETCHING_CARTS,
  };
}

function getCartsSuccess(data) {
  return {
    type: FETCH_CARTS_SUCCESS,
    data,
  };
}
function getCartsFailure() {
  return {
    type: FETCH_CARTS_FAILURE,
  };
}
