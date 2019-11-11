import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
export default class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };
  render() {
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search here..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
          }}
          leftIconContainerStyle={{
            backgroundColor: 'transparent',
          }}
          rightIconContainerStyle={{
            backgroundColor: 'transparent',
          }}
          inputContainerStyle={{
            backgroundColor: 'white',
            borderRadius: 20,
            marginTop: 10,
            marginHorizontal: 15,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
