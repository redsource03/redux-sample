import React, { Component } from 'react';
import './App.css';
import ParentComponent from './component/ParentComponent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
const store = createStore(rootReducer, {
  profile:{firstName: "Paul", lastName:"Cabunilas",age: "28"},
  booking:{bookingId:"002",bookingType:"air"}
}, window.devToolsExtension && window.devToolsExtension()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ParentComponent/>
      </Provider>
    );
  }
}

export default App;
