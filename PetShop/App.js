import React, {Component} from 'react';
import TNav from './navigator/TabNav';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; //
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
//Add nav as component here
//Hello World
class App extends Component {
  render() {
    const state = createStore(reducer, applyMiddleware(ReduxThunk)); //
    return (
      <Provider store={state}>
        <TNav />
      </Provider>
    );
  }
}

export default App;
