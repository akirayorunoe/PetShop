import firebase from '../fb';
const DATA = [
  {
    id: '1',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info:
      'is a dog \n bark \n a \n lotttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt' +
      '\n' +
      '\n' +
      'dfdsfsdfsdfsdfhudhfuihuahfuihasuihfuahfhuahsufhiashfuahfhaushfuashfhsafashfiashfiohsifhiohfoiahsdjosjdsajdsojdopsjospajopdjopjasdojasdjsaodjopsajdpjoasjdojsadjopsajdojdpojsaodjopsajdosajdpsajdpojsaojdosajdosajdopjsadojspjdopsjdojaspodjasjnoinwininafianfoinwoinfwafinion',
    price: 'Free',
    type: 'Dog',
  },
  {
    id: '2',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Cat',
  },
  {
    id: '3',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Bird',
  },
  {
    id: '4',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Hamster',
  },
  {
    id: '5',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Fish',
  },
];

// const DATA = [];
// firebase
//   .firestore()
//   .collection('pets')
//   .get()
//   .then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       //console.log(doc.id, " => ", doc.data());
//       console.log(doc.data());
//       DATA.push(doc.data());
//       console.log('DATA:', DATA);
//     });
//   });

module.exports = DATA;
