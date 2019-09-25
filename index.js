import React from 'react';
import {AppRegistry} from 'react-native';
import Index from './src/index';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {getGmailListReducer} from './src/store/reduce/gmailReducer';
import promiseMiddleware from 'redux-promise';
const rootReducer = combineReducers({getGmailListReducer});

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
// AppRegistry.registerComponent(appName, () => (
//   <Provider store={store}>
//     <Index></Index>
//   </Provider>
// ));
// AppRegistry.registerComponent(
//   appName,
//   <Provider store={store}>
//     <Index></Index>
//   </Provider>,
// );

const RNRedux = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
