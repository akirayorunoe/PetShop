import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import firebase from '../fb';
import Header from '../components/Home/Header';
import Button from '../components/Form/Button';
import EditBox from '../components/User/EditBox';
import Finish from '../components/User/Finish';
import {validateAll} from 'indicative/validator';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import IconUser from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
const options = {
  title: 'Choose your picture from ...',
  takePhotoButtonTitle: 'Your camera',
  chooseFromLibraryButtonTitle: 'Your gallery',
};
export default class User extends Component {
  state = {
    temp: '',
    uName: '',
    uAddress: '',
    uEmail: '',
    uPhotoUrl: null,
    onEdit: false,
    Password: '',
    error: {},
    loading: false,
  };
  //convert to blob
  uriToBlob = uri => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };
      // this helps us get a blob
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);

      xhr.send(null);
    });
  };
  uploadToFirebase = blob => {
    return new Promise((resolve, reject) => {
      var storageRef = firebase
        .storage()
        .ref()
        .child(`${firebase.auth().currentUser.uid}.png`);
      storageRef
        .put(blob, {
          contentType: 'image/jpeg',
        })
        .then(snapshot => {
          blob.close();
          resolve(snapshot);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  imgChoose = () => {
    ImagePicker.showImagePicker(options, response => {
      this.setState({loading: true});
      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        //uploadToFirebase().then(snapshot)
        const user = firebase.auth().currentUser;
        const source = response;
        this.setState({
          uPhotoUrl: source.uri, //
        });
        this.uriToBlob(response.uri)
          .then(blob => {
            return this.uploadToFirebase(blob);
          })
          .then(snapshot => {
            const link = firebase
              .storage()
              .ref()
              .child(`${user.uid}.png`)
              .getDownloadURL()
              .then(url => {
                user.updateProfile({photoURL: url}),
                  this.setState({loading: false});
              });
          })
          .catch(error => {
            throw error;
          });
      }
    });
  };
  componentDidMount() {
    //console.log('123');
    let user = firebase.auth().currentUser;
    // let id = user.uid; //user ID
    firebase
      .database()
      .ref('address/' + user.uid)
      .on('value', snapshot => {
        if (snapshot.val() != null) {
          let address = snapshot.val().Address;
          this.setState({uAddress: address});
        }
      });
    //Để name, profile load cùng lúc
    user.reload().then(() => {
      const refreshUser = firebase.auth().currentUser;
      if (user != null) {
        this.setState({
          uName: refreshUser.displayName,
          uEmail: refreshUser.email,
          uPhotoUrl: refreshUser.photoURL,
        });
      }
    });
  }

  editProfile = () => {
    this.setState({onEdit: true});
  };
  submitOne() {
    //console.log(this.state);
    var userf = firebase.auth().currentUser;
    if (this.state.temp.length != 0) {
      console.log('a');
      userf.updateProfile({displayName: this.state.temp});
      this.setState({uName: this.state.temp});
    }
    if (this.state.uAddress.length != 0) {
      console.log('b');
      firebase
        .database()
        .ref('address/' + userf.uid)
        .update({Address: this.state.uAddress})//update
        .then(data => {
          console.log('data ', userf.uid, data);
        })
        .catch(error => {
          //error callback
          console.log('error ', error);
        });
    }
    this.setState({onEdit: false});
  }
  onSubmit = async data => {
    const rules = {
      Password: 'required|string|min:6',
    };
    const message = {
      required: field => `${field} is required`,
      min: 'Password is too short',
    };
    try {
      await validateAll(data, rules, message);
      var userf = firebase.auth().currentUser;
      if (this.state.temp.length != 0) {
        userf.updateProfile({displayName: this.state.temp});
        this.setState({uName: this.state.temp});
      }
      if (this.state.uAddress.length != 0) {
        firebase
          .database()
          .ref('address/' + userf.uid)
          .set({Address: this.state.uAddress})
          .then(data => {
            //this.setState({uAddress: this.state.uAddress});
            //success callback
            console.log('data ', data);
          })
          .catch(error => {
            //error callback
            console.log('error ', error);
          });
      }
      userf.updatePassword(this.state.Password).catch(err => console.log(err));
      this.setState({onEdit: false});
      Alert.alert('Password changed!', 'Please sign in again');
      firebase.auth().signOut();
    } catch (errors) {
      const formatedErrors = {};
      errors.forEach(error => (formatedErrors[error.field] = error.message));
      this.setState({
        error: formatedErrors,
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Spinner
            //visibility of Overlay Loading Spinner
            visible={this.state.loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
          <View style={{alignItems: 'center'}}>
            <Header setText="PROFILE" />
            <TouchableOpacity
              style={styles.setting}
              onPress={() => this.editProfile()}>
              <Icon name="setting" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.imgChoose()}
              style={{marginTop: -30, marginBottom: 40}}>
              {this.state.uPhotoUrl === null ? (
                <IconUser name="user-circle-o" size={100} />
              ) : (
                <Image
                  source={{uri: this.state.uPhotoUrl}}
                  style={styles.img}
                />
              )}
            </TouchableOpacity>
            {/* *****************content change here*************** */}
            {this.state.onEdit === true ? (
              <View>
                <EditBox
                  header="PASSWORD"
                  value={
                    <TextInput
                      onChangeText={Password => this.setState({Password})}
                      placeholder="Change your password here"
                      textContentType="password"
                      value={this.state.Password}></TextInput>
                  }
                />
                {//neu ve trai co thi thuc hien ve phai true & true
                this.state.error['Password'] && (
                  <Text style={{color: 'red', alignSelf: 'flex-start'}}>
                    * {this.state.error['Password']}
                  </Text>
                )}
                <EditBox
                  header="NICKNAME"
                  value={
                    <TextInput
                      placeholder="Change your name here"
                      value={this.state.temp}
                      onChangeText={text =>
                        this.setState({temp: text})
                      }></TextInput>
                  }
                />
                <EditBox
                  header="SHIPPING ADDRESS"
                  value={
                    <TextInput
                      placeholder="Please add your address here"
                      value={this.state.uAddress}
                      onChangeText={text =>
                        this.setState({uAddress: text})
                      }></TextInput>
                  }
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 50,
                  }}>
                  <Finish
                    name="check"
                    onPress={() =>
                      this.state.Password.length !== 0
                        ? this.onSubmit(this.state)
                        : this.submitOne()
                    }
                  />
                  <Finish
                    name="close-o"
                    onPress={() => this.setState({onEdit: false})}
                  />
                </View>
              </View>
            ) : (
              <View>
                <EditBox header="MY ORDER" value={<Text>x pending</Text>} />
                <EditBox
                  header="EMAIL"
                  value={<Text>{this.state.uEmail}</Text>}
                />
                <EditBox
                  header="NICKNAME"
                  value={<Text>{this.state.uName}</Text>}
                />
                <EditBox
                  header="SHIPPING ADDRESS"
                  value={<Text>{this.state.uAddress}</Text>}
                />
                {/* <Text >{this.state.uAddress}</Text> */}
                <View
                  style={{
                    alignSelf: 'center',
                    marginTop: 30,
                  }}>
                  <Button
                    setText="Sign out"
                    onPress={() => firebase.auth().signOut()}
                  />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  setting: {marginRight: 20, top: -55, alignSelf: 'flex-end'},
  img: {width: 100, height: 100, borderRadius: 50},
  spinnerTextStyle: {
    color: '#FFF',
  },
});
