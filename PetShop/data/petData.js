import firebase from '../fb';
import 'firebase/firestore';
export const getData = () => {
  //trả về cần thời gian nên bỏ tất cả trong Promise
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
          //console.log(doc.id, " => ", doc.data());
          //console.log('data11:', doc.data());
          //đang trả về object
          //console.log(doc.data());
          //resolve(doc.data());

          DATA.push(doc.data());
        });
        //console.log('DATA:', DATA);
        resolve(DATA);
      })
      .catch(err => reject(err));
  });
};
